import Koa from 'koa';
import cors from '@koa/cors';
import KoaRouter from 'koa-router';
const app = new Koa();
import routes from './modules/reports/routes';

//middleware
app.use(cors());

//routes
const router = new KoaRouter({
    prefix: '/report'
});

routes(router);
app.use(router.routes());


export { app };
