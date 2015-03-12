"use strict";

require.config({
  paths: {
    'QUnit': 'qunit'
  },
  shim: {
    'QUnit': {
      exports: 'QUnit',
      init: function() {
        QUnit.config.autoload = false;
        QUnit.config.autostart = false;
      }
    }
  }
});

require(
  ['QUnit', 'jquery', '../dist/phone-format-amd', 'unit/phone-test'],
  function (QUnit, jQuery, phoneFormat, phoneTest) {
    var defaultOptions = {
      phoneFormat: phoneFormat
    };

    phoneTest(defaultOptions);

    QUnit.load();
    QUnit.start();
  }
);
