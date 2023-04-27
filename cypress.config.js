const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

      baseUrl: 'https://www.grocerycrud.com/v1.x/demo/my_boss_is_in_a_hurry/bootstrap',
      viewportWidth: 1440,
      viewportHeight: 900
  
    },
  },
);
