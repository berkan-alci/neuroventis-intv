import map from './db' assert { type: "json" };

const controller = {
    getReports: (ctx) => {

        if (!map || map === null) {
            throw new Error('no data provided');
        }

        ctx.status = 200;
        ctx.body = { map };
    },
    getDetails: (ctx) => {

        const id = ctx.params.id

        if (!map || map === null) {
            throw new Error('no data provided!')
        }

        const patient = map.filter((obj) => obj._id === id);
        console.log(patient);


        ctx.status = 200;
        ctx.body = { data: patient }


    },

}

export default function (router) {
    router.get('/', controller.getReports);
    router.get('/:id', controller.getDetails)
}
