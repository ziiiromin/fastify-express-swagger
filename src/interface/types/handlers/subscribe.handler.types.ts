import { FastifyRequest } from "fastify";
const device = require("current-device").default;

export type SubscribeCreateRequest = FastifyRequest<{
   Querystring:{
      inflow?: string | null | undefined;
   },
   Params:{
      gcode: string;
   },
   Body: {
      page_lang: string;
      phone: string;
      email: string;
      birth?: string | null | undefined;
      agree_yn?: number | null | undefined;
   }
}>;