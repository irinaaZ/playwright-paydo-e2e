const { test: base } = require('@playwright/test');
const authFixtures = require('./auth');
const pagesFixtures = require('./pages');

const test = base.extend({
    ...authFixtures,
    ...pagesFixtures,
});

module.exports = { test };
