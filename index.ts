import db from "./src/models";
import App from "./src/app";

const app = App({});
const hostname = "0.0.0.0"
const PORT = 80

db.sequelize.sync().then(() => {
    app.listen({port:Number(PORT), host: hostname}, (err) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        app.log.info(`SERVE ON ${PORT}`);
    });
})