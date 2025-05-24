/**
 * product router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::product.product", {
  config: {
    find: {
      // policies
      policies: ["api::product.rate-limit"],
    },
    create: {
      policies: ["api::product.rate-limit"],
    },
    update: {
      policies: ["api::product.rate-limit"],
    },
    delete: {
      policies: ["api::product.rate-limit"],
    },
  },
});
