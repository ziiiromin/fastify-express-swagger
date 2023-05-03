import { reservationHandler } from "../handlers";
import { FastifyInstance } from "fastify";
import {
    createReservPhoneRouteSchema,
    createReservEmailRouteSchema
  } from "./swagger-schema/reservation.route.schema";

const reservationRoute = async (app: FastifyInstance) => {
    app.post(
      "/pre-reservation/phone/:gcode",
      { schema: createReservPhoneRouteSchema },
      reservationHandler.createReservPhone
    );
    app.post(
      "/pre-reservation/email/:gcode",
      { schema: createReservEmailRouteSchema },
      reservationHandler.createReservEmail
    );
}

export default reservationRoute;