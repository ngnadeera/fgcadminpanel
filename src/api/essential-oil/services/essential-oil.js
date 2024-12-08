'use strict';

/**
 * essential-oil service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::essential-oil.essential-oil');
