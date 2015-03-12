'use strict';
define(
  function() {
    return function(args) {
      var phoneFormat = args.phoneFormat;
      var edgeCases = args.edgeCases;
      var countryCode = 'US';
      var validPhoneNumber = '541-441-1130';
      var validInternationalPhoneNumber = '+1-541-441-1130';

      test('phoneformatter exists', function() {
        ok(phoneFormat);
      });

      test('countryForE164Number', function() {
        var result = phoneFormat.countryForE164Number(validInternationalPhoneNumber);
        ok(result);
      });

      test('formatNumberForMobileDialing', function() {
        var result = phoneFormat.formatNumberForMobileDialing(countryCode, validPhoneNumber);
        ok(result);
      });

      test('isValidNumber', function() {
        var result = phoneFormat.isValidNumber(validPhoneNumber, countryCode);
        ok(result);
      });

      test('formatE164', function() {
        var result = phoneFormat.formatE164(countryCode, validPhoneNumber);
        ok(result);
      });

      test('formatInternational', function() {
        var result = phoneFormat.formatInternational(countryCode, validPhoneNumber);
        ok(result);
      });

      test('formatLocal', function() {
        var result = phoneFormat.formatLocal(countryCode, validPhoneNumber);
        ok(result);
      });

      test('exampleLandlineNumber', function() {
        var result = phoneFormat.exampleLandlineNumber(countryCode);
        ok(result);
      });

      test('exampleMobileNumber', function() {
        var example = phoneFormat.exampleMobileNumber(countryCode);
        ok(example);
        equal(example.length > 0, true);
      });

      test('cleanPhone', function() {
        var result = phoneFormat.cleanPhone(validPhoneNumber);
        ok(result);
      });

      test('countryCodeToName', function() {
        var result = phoneFormat.countryCodeToName(countryCode);
        ok(result);
      });
    };
  }
);
