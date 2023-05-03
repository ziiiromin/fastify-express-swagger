import { subscribeHandler } from "../handlers";
import { FastifyInstance } from "fastify";
import { createSubscriberRouteSchema } from "./swagger-schema/subscribe.route.schema";

const reservationRoute = async (app: FastifyInstance) => {
    app.post(
      "/subscribe/:gcode",
      { schema: createSubscriberRouteSchema },
      subscribeHandler.createSubscriber
    );
}

export default reservationRoute;