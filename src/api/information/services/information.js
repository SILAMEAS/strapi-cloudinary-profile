'use strict';

/**
 * information service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::information.information');
