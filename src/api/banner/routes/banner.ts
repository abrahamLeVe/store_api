/**
 * banner router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::banner.banner", {
  only: ["find", "findOne", "create", "update", "delete"],
  config: {
    find: {
      // policies
      policies: ["api::banner.rate-limit"],
    },
    create: {
      policies: ["api::banner.rate-limit"],
    },
    update: {
      policies: ["api::banner.rate-limit"],
    },
    delete: {
      policies: ["api::banner.rate-limit"],
    },
  },
});
