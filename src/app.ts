import fastify, { FastifyServerOptions }  from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import { reservationRouter, subscribeRouter } from "./routes";
import { swaggerOption } from "./config/swagger";
import cors from '@fastify/cors'

const App = (option: FastifyServerOptions) => {
        const app = fastify(option);
        app.get("/", async(req) => {
                        return {
                                "message": "SERVER NODEJS FASTIFY COURSE",
                        };
        });

        app.register(cors, {
                origin: ["http://0.0.0.0:3000"],
                methods: ["POST"]
        });
        app.register(fastifySwagger, swaggerOption.options);
        app.register(fastifySwaggerUI, {prefix : "/swagger-ui"});
        app.register(reservationRouter, {prefix: "/api/v1"});
        app.register(subscribeRouter, {prefix: "/api/v1"});

        return app;
}

export default App;