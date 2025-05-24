/**
 * sub-category router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::sub-category.sub-category", {
  config: {
    find: {
      // policies
      policies: ["api::sub-category.rate-limit"],
    },
    create: {
      policies: ["api::sub-category.rate-limit"],
    },
    update: {
      policies: ["api::sub-category.rate-limit"],
    },
    delete: {
      policies: ["api::sub-category.rate-limit"],
    },
  },
});
