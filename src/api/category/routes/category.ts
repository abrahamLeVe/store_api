/**
 * category router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::category.category", {
  config: {
    find: {
      // policies
      policies: ["api::category.rate-limit"],
    },
    create: {
      policies: ["api::category.rate-limit"],
    },
    update: {
      policies: ["api::category.rate-limit"],
    },
    delete: {
      policies: ["api::category.rate-limit"],
    },
  },
});
