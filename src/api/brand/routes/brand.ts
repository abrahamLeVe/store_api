/**
 * brand router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::brand.brand", {
  config: {
    find: {
      // policies
      policies: ["api::brand.rate-limit"],
    },
    create: {
      policies: ["api::brand.rate-limit"],
    },
    update: {
      policies: ["api::brand.rate-limit"],
    },
    delete: {
      policies: ["api::brand.rate-limit"],
    },
  },
});
