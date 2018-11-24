---
title: Utilizing Yahoo's Fantasy Sports API To Import Data for Fantasy Football League
cover_index: /assets/vince.jpg
cover_detail: /assets/miami-1.jpg
tags:
---

My friends and I are part of a fantasy football league that was started in 2002. With over a decade and a half worth of history, our league is pretty intense. Unfortunately, our league lacked a proper record-keeping system to keep track of all statistics. In order to go back and retrieve all the data, one would have to go and manually copy and paste everything, a time-consuming task. In this post, I will illustrate how to connect to Yahoo's Fantasy Sports API with oauth 2 authorization, make a request, receive response object, parse the XML response object to extract the data and then finally store the data into an excel workbook. 

## 1. Connecting to Yahoo's Fantasy Sports API

To start we first have to sign up at [Yahoo's Developer Network](https://developer.yahoo.com/apps/create) to receive a consumer key and consumer secret. Once you have the consumer key and consumer secret open up a text editor and type in the following:  

{% codeblock %}
{
    "consumer_key": "paste_consumer_key_here",
    "consumer_secret": "paste_my_consumer_secret_here"
}
{% endcodeblock %}
After pasting the consumer key and consumer secret, save the file as oauth2.json and place it in the working directory of your project.  

The [yahoo_oauth](https://pypi.org/project/yahoo_oauth/) is a great python library package that supports OAuth authentication mechanism needs to access many of Yahoo services. Once the yahoo_oauth package is downloaded via pip we can start the process of connecting to Yahoo's Fantasy Sports API.  

{% codeblock %}
from yahoo_oauth import OAuth2
oauth = OAuth2(None, None, from_file='oauth2.json')
if not oauth.token_is_valid():
    oauth.refresh_access_token()
{% endcodeblock %}

With that we're connected and have established an OAuth2 authentication necessary to send requests.

## 2. Sending Request and Receiving Response Object  

This [lengthy documentation](https://developer.yahoo.com/fantasysports/guide/) explains the parameters that needs to be provided when sending a request. Essentially the building blocks of the API are Collections and Resources. Resources are typically a reference to single entity such as a league, a team or a player. A Collection is simply a wrapper that contain multiple similar resources. A Resource is referred to by a **_Single Key_**, while collection will be referred to by **_Multiple Keys_**.  

After researching further and going through the documentation I was able to determine the league keys for our league for every year since 2002 summarized in the following table.

Year||League_Key  
---||---
|2002||49.l.338919 |
|2003||79.l.360438 |
|2004||101.l.382268|
|2005||124.l.356850|
|2006||153.l.320455|
|2007||175.l.183620|
|2008||199.l.509137|
|2009||222.l.301553|
|2010||242.l.731963|
|2011||257.l.748015|
|2012||273.l.656472|
|2013||314.l.854907|
|2014||331.l.232198|
|2015||348.l.865995|
|2016||359.l.678605|
|2017||371.l.193352|

{% codeblock lang:python line_number:false %}
url = "https://fantasysports.yahooapis.com/fantasy/v2/leagues;league_keys=
	79.l.360438, 101.l.382268, 124.l.356850, 153.l.320455, 
	175.l.183620, 199.l.509137, 222.l.301553, 242.l.731963, 
	257.l.748015, 273.l.656472, 314.l.854907, 331.l.232198, 
	348.l.865995, 359.l.678605, 371.l.193352/standings"
r = oauth.session.get(url)
r.status_code
{% endcodeblock %}

A status code of 2000 will indicate Success - The action was successfully received, understood, and accepted. 

## 3. Parsing the XML response object.

After a success status code of 2000 we receive a XML response object termed r. To parse and modify the XML response object, I use ElementTree and re. Finally to save into a excel worksheet I'll use the csv package. 

{% codeblock lang:python line_number:false %}
# Import packages
import xml.etree.ElementTree as ET 
import re
import csv

# Convert to string and remove namespace. Parse the string and return root element of Tree 
xmlstring = r.text
xmlstring = re.sub(' xmlns="[^"]+"', '', xmlstring, count=1)
root = ET.fromstring(xmlstring)

# Initiate list
list = []

# For loop statement that will loop through appropriate elemental tags and return associated text content. Save that text content into dictionary and add dictionary to list.
for team in root.findall('./leagues/league/standings/teams/team'):
    team_key = team.find('team_key')
    team_key = team_key.text
    name = team.find('name')
    name = name.text
    number_of_moves = team.find('number_of_moves')
    number_of_moves = number_of_moves.text
    number_of_trades = team.find('number_of_trades')
    number_of_trades = number_of_trades.text
    
    for nickname in team.iter('nickname'):
        nickname = nickname.text
    for season in team.iter('season'):
        season = season.text
    for points_for in team.iter('points_for'):
        points_for = points_for.text
    for points_against in team.iter('points_against'):
        points_against = points_against.text
    for rank in team.iter('rank'):
        rank = rank.text
    for wins in team.iter('wins'):
        wins = wins.text
    for losses in team.iter('losses'):
        losses = losses.text
    for ties in team.iter('ties'):
        ties = ties.text
    for playoff_seed in team.iter('playoff_seed'):
        playoff_seed = playoff_seed.text
    
    thisdict = dict(season=season, name=nickname, team_name=name, team_key=team_key, rank=rank, playoff_seed=playoff_seed, wins=wins, losses=losses, ties=ties, points_for=points_for, points_against=points_against, number_of_moves=number_of_moves, number_of_trades=number_of_trades)
    list.append(thisdict)
{% endcodeblock %}

{% codeblock lang:python line_number:false %}
# Generate headers for excel file.
fields = ['season', 'name', 'team_name', 'team_key', 'rank', 'playoff_seed', 'wins', 'losses', 'ties', 'points_for', 'points_against', 'number_of_moves', 'number_of_trades']

# Write contents of list into 'project.csv' saved in working directory. 
with open('project.csv', 'w') as csvfile:
    writer = csv.DictWriter(csvfile, fieldnames = fields)
    writer.writeheader()
    writer.writerows(list) 


{% endcodeblock %}