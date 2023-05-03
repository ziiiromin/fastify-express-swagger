import { FastifyRequest } from "fastify";
const device = require("current-device").default;

export type ReservationCreateRequestByPhone = FastifyRequest<{
   Querystring:{
      inflow?: string | null | undefined;
   },
   Params:{
      gcode: number;
   },
   Body: {
        language: string;
        phone: string;
        invite_code?: string | undefined;
   }
}>;
export type ReservationCreateRequestByEmail = FastifyRequest<{
   Querystring:{
      inflow?: string | null | undefined;
   },
   Params:{
      gcode: number;
   },
   Body: {
        language: string;
        email: string;
        invite_code?: string | undefined;
   }
}>;