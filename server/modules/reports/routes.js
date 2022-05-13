import map from './db.json';

const controller = {
    getReports: (ctx) => {
        const userReports = map(({ name, email, gender, registered, reports }) => { name, email, gender, registered, reports });
        ctx.status = 200;
        ctx.body = userReports;
    }

}

export default function (router) {
    router.get('/', controller.getReports);
}
