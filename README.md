# HOSPITAL CONNECT WEB APP

## Hospital connect will provide various api's used for hospital purposes . This can be integrated with any app for sending and retrieving data.... 

### Steps to use this application for your own project
1) npm init --> Do the required configuration
2) install mongoDB
3) As it uses many dependencies so you have to install required dependencies.
   Go to project folder and type in terminal --> npm install package_name 
   #### package_name are as follows -->
    "body-parser",
    "cookie-parser",
    "express",
    "jsonwebtoken",
    "mongoose",
    "passport",
    "passport-jwt",
    "password-hash"
 4) Type in terminal npm start . 
 Following this steps you will be good to go

 ### Functionalities 
 There can be 2 types of Users
- Doctors
- Patients
- Doctors can log in
- Each time a patient visits, the doctor will follow 2 steps
- Register the patient in the app (using phone number , email address , name and age , if the patient
already exists, patient info in the API is recieved)
- After the checkup, Report is created
- Patient Report will have the following fields
- Name
- Status 
- Created by doctor
- Date

 ### Routes available
- /doctors/create → with email, name, password and confirm-password
- /doctors/login → returns the JWT to be used
- /patients/register
- /patients/:id/create-report
- /patients/:id/all-reports → List all the reports of a patient oldest to latest
- /reports/:status → List all the reports of all the patients filtered by a specific
status


