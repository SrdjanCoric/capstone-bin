# request_bucket_ny

<img width="15" alt="NY" src="https://github.com/user-attachments/assets/273ed4e1-a241-426d-a787-cf0e9c3582de" /> Welcome to Team New Yorkshire's Request Bucket app! <img width="15" alt="NY" src="https://github.com/user-attachments/assets/9517d98d-787d-4c3f-99ba-898d53fbc420" />

Request Bucket NY is a web service to collect arbitrary HTTP requests and inspect them via RESTful API or simple web UI.
It is strongly inspired by the requirements of the team assignment given by the esteemed Instructor Srdjan Coric in week 3 of Capstone

In this app:
- a user can create a unique bin
- each bin is associated with two urls: 
  - one for sending requests to the bin
  - one for viewing requests made to the bin
    
- when requests are made to the bin, the request method, path, headers, and body are displayed on the UI
- a list of total requests made to a bin are visible to the user
- the user can click past requests from this list and view data for that request
- bin and request data are stored in PostgeSQL
- request payload data is stored in MongoDB

- associate a user with a specific bin, so that the same visitor can navigate back to the same bin after closing and reopening the window. 
- real-time functionality via websockets so requests show up on the UI without a page refresh
- the front end uses React 
- the user can easily click a button to copy the endpoint
