# Siva Test ReactJS FrontEnd Preview

Instructions to Run:

1. git clone repo
2. cd into [ProjectDirecotory i.e Directory that contains App.js]
3. To Run App : ** [Assumed server is already running and on http://localhost:5000/listings ] **. ====> npm start
4. To Run Test Cases : Test Cases [AddPatientButton, App Render Test, ButtonClick ]   =======> npm run test [Had To Use sudo permissions for me]
5. To Get React Version : npm view react version

## NPM Dev Environment Configuration for reference

React JS VERSION: 18.2.0

Node JS VERSION: 14.19.3

Express JS VERSION : 4.18.1

MongoDB VERSION - 4.9.1

You can check version by using : npm view [packagename] version Example: npm view react version, npm view express version, npm view mongoDb version

Below is the Home Page that is available on  http://localhost:3000/listings . Also Is the Add Patient Modal that pops up on hitting the ADD PATIENT Button.


Home           |  Add Patient Modal
:-------------------------:|:-------------------------:
![](https://github.com/basilsv/Siva_Test_ReactJS_With_Components/blob/main/images/Patient_Listings.png)  |  ![](https://github.com/basilsv/Siva_Test_ReactJS_With_Components/blob/main/images/Add_Patient_Modal.png)

Below is the Add Patient Modal With Valid Field vs Email Field Being Empty error that stops form submission.

All Field Modal Valid          |  Email Field Empty Error
:-------------------------:|:-------------------------:
![](https://github.com/basilsv/Siva_Test_ReactJS_With_Components/blob/main/images/All_Field_Validated_Validation.png)  |  ![](https://github.com/basilsv/Siva_Test_ReactJS_With_Components/blob/main/images/Email_Error_Empty_Validation.png)

Below is the Email Invalid vs Empty(earlier) vs Showing multiple errors that prevent form submission

Email Field Invalid Error         |  Multiple Error Validation
:-------------------------:|:-------------------------:
![](https://github.com/basilsv/Siva_Test_ReactJS_With_Components/blob/main/images/Email_Error_Invalid_Validation.png)  |  ![](https://github.com/basilsv/Siva_Test_ReactJS_With_Components/blob/main/images/Multiple_Error_Validation.png)

Below - On Submit an error fires asking user to clear errors before submitting and Phone Invalid use case

On Submit Clear Errors          |  Phone Invalid Error
:-------------------------:|:-------------------------:
![](https://github.com/basilsv/Siva_Test_ReactJS_With_Components/blob/main/images/On_Submit_Clear_Errors_Error.png)  |  ![](https://github.com/basilsv/Siva_Test_ReactJS_With_Components/blob/main/images/Phone_Invalid_Validation.png)

Below is the Search demo that does the search function through listings without refreshing page while user inputs each letter into search i.e onChanging value vs If No results were returned on Search. 

Search On-Change Value         |  No Results Spreadsheet Case
:-------------------------:|:-------------------------:
![](https://github.com/basilsv/Siva_Test_ReactJS_With_Components/blob/main/images/Search_On_Change_Filter.png)  |  ![](https://github.com/basilsv/Siva_Test_ReactJS_With_Components/blob/main/images/No_Results_Return_Valid.png)

Below is the Before Delete vs After Delete - This is also done without refreshing the page and the newly added one is appended without re-render.

Before Delete         |  After Delete
:-------------------------:|:-------------------------:
![](https://github.com/basilsv/Siva_Test_ReactJS_With_Components/blob/main/images/Patient_Listings.png)  |  ![](https://github.com/basilsv/Siva_Test_ReactJS_With_Components/blob/main/images/After_Delete.png)








