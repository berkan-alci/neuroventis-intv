import Koa from 'koa';
import cors from '@koa/cors';
import KoaRouter from 'koa-router';
import bodyParser from 'koa-bodyparser';
const app = new Koa();
import routes from './modules/reports/routes';

//middleware
app.use(cors());
app.use(bodyParser());
//routes
const router = new KoaRouter({
    prefix: '/report'
});

routes(router);
app.use(router.routes());


export { app };
