/**
 * model router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::model.model", {
  config: {
    find: {
      // policies
      policies: ["api::model.rate-limit"],
    },
    create: {
      policies: ["api::model.rate-limit"],
    },
    update: {
      policies: ["api::model.rate-limit"],
    },
    delete: {
      policies: ["api::model.rate-limit"],
    },
  },
});
