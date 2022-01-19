<!-- Output copied to clipboard! -->

<!-----

Yay, no errors, warnings, or alerts!

Conversion time: 0.8 seconds.


Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β33
* Wed Jan 19 2022 05:18:36 GMT-0800 (PST)
* Source doc: Torture Tracker Project Documentation
----->



# Torture Tracker Project Documentation

13.12.2021


## Overview

This document is meant to serve as the technical summation of the Torture Tracker project managed by Muhammad Shoaib and coded by Michael Wolf. programmatic and configuration content in this repository is jointly copyright by Justice Project Pakistan and Michael Wolf. Images are the exclusive property of JPP except where noted.


## Functionality

Broadly speaking the functionality can be divided into two sections.  The “frontend” is composed of all the interactive HTML and Javascript that a user or administrator would interact with.  This is all stored and served by GitHub.  The “backend” by contrast is all infrastructure on Amazon AWS that provides services or data to the frontend.  The following sections clarify each in detail.

Currently, all Github services referenced herein are free, while the Amazon AWS services will be billed.


## Frontends


### Narrative

[https://justiceprojectpakistan.github.io/torture-tracker/frontend](https://justiceprojectpakistan.github.io/torture-tracker/frontend) 

This section contains the user-facing narrative content provided by JPP.  It contains a visualization based on the database aggregates (containing survey answers) , a tracker timeline, and a link to the survey.

The narrative URL accepts the parameter “lang” whose values can be either “ur” or “en” to set the text language.


### Timeline tracker

Content Document: [https://docs.google.com/spreadsheets/d/1RTAaPXhXk20dgXLVdxJdK_aSICMAi_LPeCytplb04Is](https://docs.google.com/spreadsheets/d/1RTAaPXhXk20dgXLVdxJdK_aSICMAi_LPeCytplb04Is) 

This tool, having already been used at JPP, is hopefully one that you are already familiar with.  Essentially, a Google sheet is formatted and made public to serve as the source feed for the timeline component contained in the narrative.  Functionally, it will provide a way for JPP administrators to highlight inflection points in the struggles of torture victims. See the document link above or the component website for more information. [https://timeline.knightlab.com/index.html#overview](https://timeline.knightlab.com/index.html#overview) 


### Survey

User: [https://justiceprojectpakistan.github.io/torture-tracker/frontend/html/survey.html](https://justiceprojectpakistan.github.io/torture-tracker/frontend/html/survey.html) 

Contributor: [https://justiceprojectpakistan.github.io/torture-tracker/frontend/html/survey.html?allQuestions](https://justiceprojectpakistan.github.io/torture-tracker/frontend/html/survey.html?allQuestions) 

Two different forms of the survey were requested.  Currently, there is a shorter user survey and a survey for collaborating organizations which contains all the survey questions.  Once submitted both user and collaboration surveys are entered into the (AWS DynamoDB) database and can be reviewed on the relevant Amazon console.  While many survey questions require free-form text responses, and are therefore readable in the database, all multiple choice questions are saved as their respective enumeration.  Eg: The value for gender can be one of Female, Male, or Other.  From the user’s perspective they would see the English or Urdu text, the database however would contain a 0,1,or 2 respectively.

**Note**: Both of these submission mechanism are unprivileged and unsecured (no account needed),  and regardless of the value chosen, have the submission status of “unreviewed”. 


### DB Administration

[https://justiceprojectpakistan.github.io/torture-tracker/frontend/html/admin.html](https://justiceprojectpakistan.github.io/torture-tracker/frontend/html/admin.html)

This interface allows you to create, read, update, and delete rows from the database.  When the page loads, an empty table is displayed.  From this point, rows can be created, or alternatively synced from the database to the table by clicking the appropriate button.  To, update or delete a row, sync the table, select the row and click the appropriate button. Once synced, the rows can be sorted, filtered, exported (JSON or CSV), and aggregated (_see Aggregate Viewer_). 

**Note**: All of the above functionality is restricted and requires an AWS IAM “access key id” and “secret access key” to function.  These can be entered by clicking the cog icon. 

**Note**: AWS IAM keys are privileged keys and have full control over your database.  The keys should be rotated often and never shared with untrusted individuals or individuals outside JPP.

**Note**: The “pk” database column serves as the “unique key” for each row.  It is not a user modifiable part of the survey.

**Note**: Dates start at 1.1.1970.  The value of any DB cell containing this value should be regarded as NA.  This functionality can be removed if requested.


### Aggregate Viewer 

(Click on icon in Administration page)

Since the database contains extremely sensitive information about victim’s experiences which could be used to further harm them, the data is not publicly accessible/searchable.  Instead, anonymized data is aggregated and made available by the narrative visualization.  An example of this process might be:

A victim or partner organization inputs survey data into the database.  The data status is  “_unreviewed_”  

Using the administration interface a JPP manager:



* reads the survey 
* Verifies data (if needed) by researching, contacting the victim, government orgs, etc.
* Modifies/augments the data
* Marks the data “_reviewed_” once satisfied

Once this process is finished, the manager may want to update the website aggregates with the newly reviewed data.  From the administration page, click on “View Aggregates”.  This will bring up the narrative visualization component.  Unlike in the narrative, visuals here can be modified and downloaded easily via the controls in the upper right of each visualization. Additionally, the visualization data is _volatile_, meaning it is not saved anywhere yet.  As such the page should not be reloaded, but relaunched by clicking on the administration page button if needed.  Once satisfied, the manager can click on the gear, and (with a github token) upload the new data to the code repository for the public.  

**Note**: Only rows marked as “reviewed” will be used in creation of the aggregates.

**Note**: All GitHub functionality is restricted and requires a secret token to function.  These can be entered by clicking the cog icon on this page and generated via the users setup on the Github website. [https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) 

**Note**: Tokens are privileged keys and have full control over your repository.  The keys should be rotated often, time limited, and never shared with untrusted individuals or individuals outside JPP.


## Backend & Accounts


### Google Mail and Docs

User address: [jpptorture@gmail.com](mailto:jpptorture@gmail.com) 

Recovery address: [info@jpp.org.pk](https://myaccount.google.com/email)

This is an account which was used to register the GitHub account and which contains the Drive doc file linked to the narrative tracker.


### GitHub Resources 

[https://github.com/JusticeProjectPakistan?tab=repositories](https://github.com/JusticeProjectPakistan?tab=repositories) 

This is an account which contains all web-facing public resources including but not limited to images, html documents, maps, aggregate data, and JavaScript code.  All repo data is available to the public and governed by the MIT license.

**Note**: It is required that your administrator familiarize themselves with token creation.  It is highly recommended that tokens expire on a regular basis and are given repository privileges only.


### AWS Resources

Amazon Web Services comprises two types of accounts.  There is a single “root” user who can control everything, and lesser privileged “IAM” accounts which are limited to the domain of privilege set by the root user.  Ex: While a person with root usernames and passwords could invoke services costing $1000s per day.  An appropriately circumscribed IAM account could, for instance, be only allowed to view a single database.  

All services on AWS have been instantiated using “Serverless” which is a tool allowing AWS Cloud Formation deployments using the YAML file contained in the GitHub repository.

**Note**: It is _required_ that your administrator familiarize themselves with the various AWS control panels, including but not limited to, billing, billable functions used for each service<sup>1</sup>,  database backup, and user creation.

<sup>1 </sup>Ex: DynamoDB On-demand vs. Provisioned capacity [https://aws.amazon.com/dynamodb/pricing/](https://aws.amazon.com/dynamodb/pricing/) 

**Note**: Aws includes pricing worksheets for most tools.

**Note**: Any changes made to AWS which are required in the long term should be made via the YAML file and re-deployed using Serverless.  Serverless will disregard any changes not in its configuration.


## AWS Technical Overview

Billable Resources Used:



* Serverless (Cloud Formation, s3)
    * Used for configuring services
* DynamoDB
    * Used to store, create, read, update, delete, review survey data
* Api Gateway
    * Used to make DynamoDB functions available to users and administrators
* Lambda
    * Runs the code connecting the DB to Api Gateway

**Note**: DynamoDB as a tool is not best suited for doing analytics or filtering.  If this is desired, downloading the database and analyzing it via a spreadsheet or “Notebook” tool such as Jupyter is suggested.

**Note**: All services are currently deployed under the jurisdiction US-EAST-1


## Launch Integration

When integrating with the GitHub Torture Tracker your administrator has at least 3 different options:



* Link to GitHub directly. This is the easiest method.  This will show the GitHub account address in the browser address bar.
* Lease another domain (Eg:  torturetracker.pk ) from a provider that allows encapsulating and forwarding of the domain to GitHub.
* Grafting/Encapsulating the site onto your current navigation tree.  This functionality is highly dependent on what your current main site provider makes available.

Your administrator should consult the relevant JPP team and providers for an appropriate solution for your use case.   

In addition to the points noted above your administrator should, upon receipt of my deliverables, change all passwords, secret keys, tokens, etc. on Amazon and GitHub to ensure that my access is removed and maintain/review all content for security/appropriateness.

**Note**: It is highly recommended that your administrator enable AWS multi-factor authentication. [https://console.aws.amazon.com/iamv2/home?#/home](https://console.aws.amazon.com/iamv2/home?#/home) 
