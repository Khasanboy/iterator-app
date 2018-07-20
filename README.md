# iterator-app

This is a simple application that sends request to different end points until certian condition is met.
There are 2 separate applications in backend folder and in front-end folder.

backend folder contains a Spring boot application that has the front-end application already built into it and serves the front end app on localhost:8080. To run this application just clone this repository or download this folder and import the backend app into eclipse or intelliJ IDEs as a existing maven project and run the IteratorApplication.java file as java or spring-boot application. Running the app using cmd is also possible ))

front-end folder contains angular application that is build using angular-cli.  This application has automated tests also.
To run this application just clone this repository or download this folder and open in any editor (I use vscode) and open the terminal and run npm install. This command installs all the dependancies for the application. After it finished install run npm start. This opens new tab in your browser and runs the application on http://localhost:4200

To run automated tests use ng test or npm run test commands.

To build the application run npm run build command or ng build --prod command.  

npm run build command run some other commands (
    "postbuild": "npm run deploy",
    "predeploy": "rimraf ../backend/src/main/resources/static && mkdirp ../backend/src/main/resources/static",
    "deploy": "copyfiles -f dist/** ../backend/src/main/resources/static"
    )
and creates the bundle files in ../backend/src/main/resources/static folder.

(if you get error in npm run build command maybe you don't have https://www.npmjs.com/package/copyfiles dependancy)

For now application is sending 70 requests but you can change it inside backend MainController class;

Live application is running on https://iterator-app.herokuapp.com/

