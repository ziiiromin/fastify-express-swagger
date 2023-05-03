import fastify, { FastifyReply, FastifyRequest } from "fastify";
import config from "../config";

exports.options = {
  swagger: {
    info: {
      title: "node fastify app init - swagger",
      description: "REST API",
      version: "1.0.0",
    },
    // externalDocs: {
    //   url: "https://swagger.io",
    //   description: "Find more info here",
    // },
    host: `192.168.0.90:${config.port}`,
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [
      { name: "reservation", description: "사전예약 API" },
      { name: "subscribe", description: "구독 API" },
    ],
    securityDefinitions: {
      apiKey: {
        type: "apiKey",
        name: "Authorization",
        in: "header",
        scheme: "bearer",
        bearerFormat: "JWT",
        description: "JWT access token",
      },
    },
  },
  uiConfig: {
    // docExpansion: "full",
    deepLinking: true,
  },
  uiHooks: {
    // @ts-ignore
    onRequest: function (request, reply, next) {
      next();
    },
    preHandler: function (request: any, reply: any, next: () => void) {
      next();
    },
  },
  staticCSP: true,
  // @ts-ignore
  transformStaticCSP: (header) => header,
  exposeRoute: true,
};