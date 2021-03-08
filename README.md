# OVO Salesforce Interview Task

Welcome!

The aim of this task is to understand how you develop on salesforce. This task is based on a real world example of the type of work we do here at OVO.

The time alloted is one hour, you may not get everything complete in that time but 

## Pre-requsites

You will need the following in order to complete this task;

1. Access to a salesforce org; This should **not** be a production org. Please use either a empty Scrarch org, or a Developer Edition org.

If you don't have an org to use please go to https://developer.salesforce.com/signup and get a developer edition org.

2. A suitable IDE and GIT configured on your system. You will need to clone this repository and deploy it to your org to start the task.

We recomend VSCode, however feel free to use any IDE you are comfortable with. NOTE: As you need to clone and deploy this repo, the Developer Console cannot be used.

3. SFDX and LWC-Jest in order to deploy and test your code. If you have yarn installed on your system you can run `yarn install` once you have cloned the repository to install these dependancies.


## Getting Started

1. Clone the repository to a folder on your local machine. You can use the git client you are most comfortable with to do this.
2. If you don't have a Scratch org, or don't have your developer org configured with SFDX, you should do this now. There is a scratch org config in `config/project-scratch-def.json` you can use.
3. Deploy the code from this repository to your org using SFDX.

## Task

We have been provided with an API that returns a list of customers who have an online account. This API has been built by another team within OVO and is detailed in the API section below.

We need to retieve and display the data that this API returns. The display of this data must be done in a lightning web component.

## Design Notes

1. The information returned from the API must be displayed to the user by using Lightning Web Components
2. Any errors must be handled and shown to the user.
3. Any Apex should have unit tests.
4. LWC should also have JEST tests.

## API Details

The API is RESTful and secured useing HTTP Basic Autentication. The endpoint, username and password will be provided to you by the interviewer. 

Here is an example of the API Repsonse. It will always contain more than one item, and all fields will always be populated.

```json
[
    {
        "id": 1,
        "username": "Michelle.Wheeler",
        "firstName": "Michelle",
        "lastName": "Wheeler"
    }
]
```

## Further Information

1. Feel free to use the docs / google, this is not a closed book exercise. We want you to code how you normally would.
2. For the purposes of this exercise, we aren't concerned with what it looks like to the user, as long as the information is there.
3. You don't need to consider pagination / handling more than 10 results for this exercise.
4. Security/Access control does not need to be considered for this exercise.
5. You do not need to commit your changes back to this repository. 
