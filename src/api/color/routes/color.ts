/**
 * color router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::color.color", {
  config: {
    find: {
      // policies
      policies: ["api::color.rate-limit"],
    },
    create: {
      policies: ["api::color.rate-limit"],
    },
    update: {
      policies: ["api::color.rate-limit"],
    },
    delete: {
      policies: ["api::color.rate-limit"],
    },
  },
});
