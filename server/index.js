import { app } from './app';

const start = async () => {
    console.log('Starting up server...')

    app.listen(5000, () => {
        console.log("Listening on 5000. Up and ready!");
    });
};

start();

