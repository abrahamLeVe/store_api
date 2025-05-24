/**
 * size router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::size.size", {
  config: {
    find: {
      // policies
      policies: ["api::size.rate-limit"],
    },
    create: {
      policies: ["api::size.rate-limit"],
    },
    update: {
      policies: ["api::size.rate-limit"],
    },
    delete: {
      policies: ["api::size.rate-limit"],
    },
  },
});
