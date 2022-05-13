import { app } from '../server/app.js'

const start = async () => {
    console.log('Starting up server...')

    app.listen(5000, () => {
        console.log("Listening on 5000. Up and ready!");
    });
};

start();

