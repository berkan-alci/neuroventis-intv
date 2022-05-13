import map from './db' assert { type: "json" };

const controller = {
    getReports: (ctx) => {

        if (!map || map === null) {
            throw new Error('no data provided');
        }

        ctx.status = 200;
        ctx.body = { map };
    }

}

export default function (router) {
    router.get('/', controller.getReports);
}
