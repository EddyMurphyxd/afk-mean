const app = require('./app.js');
const appRouter = require('./router');
const config = require('./config');

const APP_PORT = process.env.APP_PORT || config.serverPort;

app.use(appRouter.routes());

console.dir(`[config manager|${config.serverType}] Configuration loaded `);

app.listen(APP_PORT, () => console.dir(`static server is up and running on http://localhost:${APP_PORT}`));

