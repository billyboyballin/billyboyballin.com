---
title: Creating a Dynamic Contact Form for a Static Website Using AWS Lambda, API Gateway, and SES
date: 2018-11-26 08:53:18
cover_index: /assets/typewriter.jpg
cover_detail: /assets/miami-1.jpg
tags:
---

One drawback of having a static website is the lack of server-side functionality that would permit an interactive contact form. Lucky for us we can easily mediate this by building a microservice using AWS API Gateway, Lambda and SES. The diagram below represents the architecture flow. The user submits an inquiry through a “contact form", which is hosted in an Amazon S3 bucket as a static website. The information will post to AWS API which will then pass to an AWS lambda function. The lambda function will then generate an email and forward it using SES.

{% img /assets/third.jpg %}

## 1 Configure AWS SES

The first step is to verify an email address that will be used to send and receive email
1. Navigate to Simple Email Service in AWS console and click email addresses
2. Click **_Verify a New Email Address_** and enter the email address you would like to use
3. Click **_Verify This Email Address_**
4. You should then navigate to your inbox and click the link in the verification email to confirm your email address


## 2 Setup Lambda
1. Navigate to Lambda on AWS console
2.
3.

{% codeblock %}
'use strict';
console.log('Loading function');
const AWS = require('aws-sdk');
const sesClient = new AWS.SES();
const sesConfirmedAddress = "<your-verified-ses-email>";

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

## 3 Create the API gateway and contact form

1. 
2. 
3. 

{% codeblock %}
  <form id="serverless-contact-form">
    <input type="text" name="email" placeholder="Email Address" class="form-email">
    <input type="text" name="subject" placeholder="Subject" class="form-subject">
    <textarea rows="5" cols="40" name="message" placeholder="Your message here..." class="form-message"></textarea>
    <input type="submit" name="submit" value="Submit" class="form-submit">
  </form>

  <script type="text/javascript">
    // Adds an event listener to our form. When the form is submitted, it will send data to our Lambda function, which in turn, will send us an email.
    document.getElementById('serverless-contact-form').addEventListener('submit', sendDataToLambda);
    // Now for the good stuff. This is the function that will send our data to AWS.
    function sendDataToLambda(e) {
      e.preventDefault();
      // Gets the values of each field in our form. This is the data we'll send to our Lambda function.
      var formEmail = document.querySelector('.form-email').value;
      var formSubject = document.querySelector('.form-subject').value;
      var formMessage = document.querySelector('.form-message').value;
      // This is the endpoint we created in our API Gateway. This is where we make our POST request, which calls our Lambda function.
      var endpoint = 'https://your-api-gateway-endpoint.com/ContactFormLambda';
      // Remember those form values we just grabbed? We're going to put them into an object here.
      var body = {
        email: formEmail,
        subject: formSubject,
        message: formMessage
      }
      // Here, we instantiate our Request. This is a special object used by the Fetch API so it knows where to send data, what data to send, and how to send it.
      var lambdaRequest = new Request(endpoint, {
        method: 'POST',
        // Quick note: 'no-cors' mode is for development on localhost only!
       
        body: JSON.stringify(body)
      });
      // Call the Fetch API to make our request
      fetch(lambdaRequest)
        // This is where you can handle errors. This is just an example, so we won't cover that.
        .then(response => console.log(response))
        .catch(err => console.log(err));
    }
  </script>
{% endcodeblock %}