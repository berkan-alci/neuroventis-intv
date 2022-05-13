# Neurox-v

👋 This is the assessment for full stack software engineer within [Neuroventis](https://neuroventis.care/).

One small application has been started containing a server part and a client part.

You need Node.js > 14 to run this exercise.

## Server

The server application has been created using [Koa.js](https://koajs.com/).
To start the application navigate to the `server` folder and run:

1. `npm install`
2. `node index.js`

The application contains a JSON file that when booted up serves as a in-memory database.

## Client

The client application has been created using React, concretely via `create-react-app` script.
To start the application navigate to the `client` folder and run:

1. `npm install`
2. `REACT_APP_SERVER_URL='http://localhost:5000' npm start`

Where REACT_APP_SERVER_URL contains the URL of the server application.

## Solving the challenges

Clone this project into your personal git repository (gitlab or github).

Please proceeed by reviewing the [issues list](https://gitlab.com/raymundo.vasquezruiz.epione/full-stack-test/-/issues) and tackle the issues starting by #1.

The issues are increasing in complexity and you **do not need to solve them all** to be considered for an interview. We want to see how you tackle the challenges and at which level you're currently standing. At Neuroventis we believe in continuous improvement and we know that today is just a start 🙃. We'll be reviewing the solutions, the code styling, the modularization and the tests.

Timebox this test to a maximum of 4 hours. When this time completes please send us the link to your repository via e-mail.

Feel free to change or add anything in the project structure.

Show us how can you bring a small idea closer to production 🚀

## Interviewee README additions:

### Pre-start changes & remarks:

-   All of the items below were done 35 minutes prior to starting with the assignment (so at 15h55)
-   Re-configured commonjs to es6 (server)
-   Package.json was changed to work with jest & setup file (server)
-   Continuous Development setup using skaffold & k8s
-   Installing packages & looking around for critical deprecations on the client
-   Dockerizing server & client

### Time restrictions:

-   Timebox: 4h
-   Start time: 16h30 GMT+1:00 (email with repo sent at this point)
-   Due time: 20h30 GMT+1:00
-   Due time if work beforehand is counted in: 19h55 GMT+1:00

### Issues/Completed:

-   [ ] [[bug] Patients reports table not displaying](https://gitlab.com/raymundo.vasquezruiz.neuroventis/full-stack-test/-/issues/1)[x]
-   [ ] [[feature] As a user I want to access the patient details so that I can work with them](https://gitlab.com/raymundo.vasquezruiz.neuroventis/full-stack-test/-/issues/2)
-   [ ] [[feature] As a user I want to be able to add new patient reports](https://gitlab.com/raymundo.vasquezruiz.neuroventis/full-stack-test/-/issues/3)
-   [ ] [[feature] As a user I want to generate a patient report in NE-1 format to exchange with hospitals](https://gitlab.com/raymundo.vasquezruiz.neuroventis/full-stack-test/-/issues/4)
-   [ ] [[Extra] Adding a workflow on github for testing with pull requests]
-   [ ] [[Extra] Adding a branch where you can run this on localhost without any configuration whatsoever]

### Pre-requisites to running with kubernetes:

-   Install docker: https://docs.docker.com/get-docker/
-   Install kubernetes: https://docs.docker.com/desktop/kubernetes/
-   CD tool: Install skaffold: https://skaffold.dev/

### Installation & Setup guide(w/k8s - local):

-   pull repo: `git pull`
-   Install ingress NGINX controller https://kubernetes.github.io/ingress-nginx/deploy/ (mac&windows compatible only)
-   Go to hosts file, add `127.0.0.1 nv-interview.com`
-   Go to root of dir `skaffold dev`

### Installation & Setup guide(without skaffold):
