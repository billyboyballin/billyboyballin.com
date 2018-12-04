---
title: Creating a Dynamic Contact Form for a Static Website Using AWS Lambda, API Gateway, and SES
date: 2018-11-26 08:53:18
cover_index: /assets/typewriter.jpg
cover_detail: /assets/miami-1.jpg
tags:
---

One drawback of having a static website is the lack of server-side functionality that would permit a contact form. Lucky for us we can easily mediate this by building a microservice using AWS API Gateway, Lambda and SES. The diagram below represents the architecture flow. The user submits information through the “contact form" which will post through an AWS API and be passed to an AWS lambda function. The lambda function will then generate an email and forward it using SES.

{% img /assets/third.jpg %}

--------------------------------------------

## 1. Configure AWS SES

The first step is to verify an email address that will be used to send and receive emails.
1. Navigate to Simple Email Service in AWS console and click email addresses
2. Click **Verify a New Email Address** and enter the email address you would like to use
3. Click **Verify This Email Address**
4. You should then navigate to your inbox and click the link in the verification email to confirm your email address

## 2. Create a Lambda Function

1. Navigate to Lambda on AWS console and click **Create function**
2. Choose author from scratch
3. Give your function a name, choose Node.js 6.10
4. For Role choose **Create a new role from one or more templates** and give the new role a name
5. Finally click Create function

{% img /assets/lambda.jpg %}

## 3. Configure the IAM Lambda Role to Send Email vs SES

Before we can use our Lambda function, we need to configure the newly created Lambda role and attach a policy that will allow it to send emails through SES. This can be done via IAM.

1. Navigate to IAM from the AWS Console
2. Click **Policies** and click **Create Policy**
3. Select **Create Your Own Policy** and name it contact-form-send-policy
4. Configure the policy document as follows and click **create policy**

{% codeblock %}

{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "Stmt1505675625000",
            "Effect": "Allow",
            "Action": [
                "ses:SendEmail"
            ],
            "Resource": [
                "*"
            ]
        }
    ]
}

{% endcodeblock %}

Once this policy is created, navigate to roles in IAM and attach this policy to your newly created Lambda role. 

## 4. Finalize the Lambda Function & Create the API Gateway Trigger

Navigate back to Lambda from the AWS Console and click on the lambda function. In the inline editor clear out the code that's there and paste in the code below. **_Make sure to replace your-verified-ses-email with your verified email in the code below_**

{% codeblock %}
'use strict';
console.log('Loading function');
const AWS = require('aws-sdk');
const sesClient = new AWS.SES();
const sesConfirmedAddress = "your-verified-ses-email";

/**
 * Lambda to process HTTP POST for contact form with the following body
 * {
      "email": <contact-email>,
      "subject": <contact-subject>,
      "message": <contact-message>
    }
 *
 */
exports.handler = (event, context, callback) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
    var emailObj = JSON.parse(event.body);
    var params = getEmailMessage(emailObj);
    var sendEmailPromise = sesClient.sendEmail(params).promise();
    
    var response = {
        statusCode: 200
    };
    
    sendEmailPromise.then(function(result) {
        console.log(result);
        callback(null, response);
    }).catch(function(err) {
        console.log(err);
        response.statusCode = 500;
        callback(null, response);
    });
};

function getEmailMessage (emailObj) {
    var emailRequestParams = {
        Destination: {
          ToAddresses: [ sesConfirmedAddress ]  
        },
        Message: {
            Body: {
                Text: {
                    Data: emailObj.message
                }
            },
            Subject: {
                Data: emailObj.subject
            }
        },
        Source: sesConfirmedAddress,
        ReplyToAddresses: [ emailObj.email ]
    };
    
    return emailRequestParams;
}
{% endcodeblock %}

{% img /assets/lambda2.jpg %}

After copying and pasting the code your window should look similar to the screenshot above. The last step is to create the API Gateway trigger that will activate lambda function. 

1. Click on API Gateway from the triggers list to add it to the lambda function. 
2. You should now see a **_Configure triggers_** section to fill out
3. Choose **Create a new API**, **Open** for security, name the API "_Contact_" and then click add
4. Finally click save to save changes to our lambda function

## 5. Testing our Microservice

To make sure our lambda function is accessible and our API Gateway works properly we can test it.

1. Navigate to API Gateway from the AWS Console and click on "_contact_" the newly created API
2. Click "_ANY_" under the resources column and then click TEST with the lightening bolt symbol
3. Choose _POST_ for Method and for the Request Body copy and paste in the following:
{% codeblock %}
{
  "email": "your-test-destination@email",
  "subject": "test from apigw",
  "message": "this is a test message"
}
{% endcodeblock %}
4. Click Test

On the right hand side, you'll see the request flow of API Gateway calling our Lambda function. If you get a **_Method completed with status: 200_** awesome it worked and you should check your email. But if you get a **_Method completed with status: 500_** oh no something is wrong, time to go back and double check everything.

{% img /assets/win.jpg %}||{% img /assets/lose.jpg %}
---||---
------------------------------------------------
At this point, we have created a functional serverless contact flow. Our microservice uses the API Gateway to call a Lambda function. The function then takes the request body and sends it via Simple Email Service. The next step is to integrate this back-end microservice with our front-end website. To integrate it, create a form with the same fields as the request body, add a quick AJAX request in JavaScript with the request body and we should have a fully functional dynamic contact form on a static web page.