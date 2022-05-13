import map from './db.json'

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
        let data;
        patient.map((p) => {
            data = p;
        })
        ctx.status = 200;
        ctx.body = { data }


    },

}

export default function (router) {
    router.get('/', controller.getReports);
    router.get('/:id', controller.getDetails)
}
