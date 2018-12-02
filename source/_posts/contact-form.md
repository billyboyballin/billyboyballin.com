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

The first step is to verify an email address that will be used to send and receive email. 

## 2 Define the Lambda function

## 3 Create the API gateway