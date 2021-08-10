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

Please proceeed by reviewing the [issues list](https://gitlab.com/raymundo.vasquezruiz.epione/full-stack-test/-/issues) and tackle the issues starting by #1.

Feel free to change or add anything in the project structure.

We'll be reviewing the solutions, the code styling, the modularization and the tests.

Show us how can you bring a small idea closer to production 🚀
