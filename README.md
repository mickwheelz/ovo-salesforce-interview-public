# OVO Salesforce Interview task

Welcome!

## Pre-requsites

You will need the following in order to complete this task;

1. Access to a salesforce org; This should *not* ne a production org. You should either use a scratch org, or a developer edition org

If you don't have an org to use please go to https://developer.salesforce.com/signup to get developer edition org.

2. A suitable IDE and GIT configured on your system, as you will need to clone this repository and deploy it to your org to start.

We recomend VSCode, however feel free to use any IDE you are comfortable with. You need to clone and deploy this repository so the Developer Console cannot be used for this task.

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
