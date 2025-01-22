# request_bucket_ny

<img width="20" alt="NY" src="https://github.com/user-attachments/assets/273ed4e1-a241-426d-a787-cf0e9c3582de" /> Welcome to Team New Yorkshire's Request Bucket app! <img width="20" alt="NY" src="https://github.com/user-attachments/assets/9517d98d-787d-4c3f-99ba-898d53fbc420" />

Request Bucket NY is a web service to collect arbitrary HTTP requests and inspect them via RESTful API or simple web UI.
It is strongly inspired by the requirements of the team assignment given by the esteemed Instructor Srdjan Coric in week 3 of Capstone

In this app:
- a user can create a unique buckect
- each bucket is associated with two urls: 
  - one for sending requests to the bucket
  - one for viewing requests made to the bucket
    
- when requests are made to the bucket, the request method, path, headers, and body are displayed on the UI
- the user can see a list of total requests made to a bucket
- the user can click past requests from this list and view data for that request
- the bucket and request data are stored in PostgeSQL
- the request payload data is stored in MongoDB
- the user is associated with a specific bucket, so that the same visitor can navigate back to the same bucket after closing and reopening the window
- the user can easily click a button to copy the endpoint
- the front end uses React 

