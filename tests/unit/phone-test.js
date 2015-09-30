'use strict';
define(
  function() {
    return function(args) {
      var phoneFormat = args.phoneFormat;
      var countryCode = 'US';
      var validPhoneNumber = '541-441-1130';
      var validInternationalPhoneNumber = '+1-541-441-1130';
      var tenDigitRegex = /^[1-9][0-9]{9}$/;

      test('phoneformatter exists', function() {
        ok(phoneFormat);
      });

      test('countryForE164Number', function() {
        var result = phoneFormat.countryForE164Number(validInternationalPhoneNumber);

        assert.equal(result, 'US');
      });

      test('formatNumberForMobileDialing', function() {
        var result = phoneFormat.formatNumberForMobileDialing(countryCode, validPhoneNumber);

        equal(result, '+1 541-441-1130');
      });

      test('isValidNumber', function() {
        var result = phoneFormat.isValidNumber(validPhoneNumber, countryCode);

        equal(result, true);
      });

      test('formatE164', function() {
        var result = phoneFormat.formatE164(countryCode, validPhoneNumber);

        equal(result, '+15414411130');
      });

      test('formatInternational', function() {
        var result = phoneFormat.formatInternational(countryCode, validPhoneNumber);

        equal(result, '(541) 441-1130');
      });

      test('formatLocal', function() {
        var result = phoneFormat.formatLocal(countryCode, validPhoneNumber);

        equal(result, '(541) 441-1130');
      });

      test('exampleLandlineNumber', function() {
        var example = phoneFormat.exampleLandlineNumber(countryCode);

        equal(tenDigitRegex.test(example), true);
      });

      test('exampleMobileNumber', function() {
        var example = phoneFormat.exampleMobileNumber(countryCode);

        equal(tenDigitRegex.test(example), true);
      });

      test('cleanPhone', function() {
        var result = phoneFormat.cleanPhone(validPhoneNumber);

        equal(result, '5414411130');
      });

      test('countryCodeToName', function() {
        var result = phoneFormat.countryCodeToName(countryCode);

        equal(result, 'United States');
      });
    };
  }
);
