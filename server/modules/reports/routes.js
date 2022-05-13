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
    postReport: async (ctx) => {
        const { reportName, content, event, created } = ctx;


        const id = ctx.params.id
        const patient = map.filter((obj) => obj.id === id);

        patient.map((p) => {
            console.log(p);
            //add data to object
            // insert object into the reports list for fitting user
        })

        // send back data as in getDetails
        ctx.status = 201;
        ctx.body = { "text": "test" }
    }

}

export default function (router) {
    router.get('/', controller.getReports);
    router.get('/:id', controller.getDetails);
    router.post('/:id', controller.postReport);
}
