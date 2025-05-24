import { RateLimit } from "koa2-ratelimit";
import type { Core } from "@strapi/strapi";
import { Context, Next } from "koa";

export default (_config: any, {}: { strapi: Core.Strapi }) => {
  return async (ctx: Context, next: Next) => {
    return RateLimit.middleware({
      interval: { min: 5 }, // 5 minute
      max: 100, // limit each IP to 100 requests per minute
      message: "Muchas peticiones, regrese dentro de 50 min.",
      headers: true,
    })(ctx, next);
  };
};
