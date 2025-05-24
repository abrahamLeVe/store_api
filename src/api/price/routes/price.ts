/**
 * price router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::price.price", {
  config: {
    find: {
      // policies
      policies: ["api::price.rate-limit"],
    },
    create: {
      policies: ["api::price.rate-limit"],
    },
    update: {
      policies: ["api::price.rate-limit"],
    },
    delete: {
      policies: ["api::price.rate-limit"],
    },
  },
});
