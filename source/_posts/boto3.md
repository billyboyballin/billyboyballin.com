---
title: Utilizing Boto3 to Retrieve List of EC2 Instances
date: 
cover_index: /assets/chip.png
cover_detail: /assets/city-2.jpg
tags:
---

In this post I share a handy script that allows you to get list of all ec2 instances by instance id, instance type, launch date and finally format that data into a neat dataframe using pandas.

{% codeblock lang:python line_number:false %}
#Import packages
import boto3
import pandas as pd

#Initiate empty list
empty_list = []

#Initiate ec2 client session
ec2_client = boto3.client('ec2')

#Use describe_instances method to get response, parse response, append to list
response = ec2client.describe_instances()
for reservation in response["Reservations"]:
    for instance in reservation["Instances"]:

		instance_id = instance['InstanceId']
		instance_type = instance['InstanceType']
		launch_date = str(instance['LaunchTime'])
		
	empty_list.append([instance_id, instance_type, launch_date])

#Create dataframe from list
instance_dataframe = pd.DataFrame(empty_list, columns = ['instance_id', 'instance_type', 'launch_date'])

{% endcodeblock %}

Thanks for checking out this post.