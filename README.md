# PhoneFormat.js

#### A javascript phone formatter

## Install

### via Bower
`bower install phoneformat.js`

### via NPM
`npm install phoneformat.js`

All files for usage are in the /dist directory.

- **Amd**:
  - phone-format-amd.js or phone-format-amd.min.js
- **Exports**:
  - phone-format-exports.js or phone-format-amd.min.js
- **Global**:
  - phone-format-global.js or phone-format-global.min.js
- **Original Blend**:
  - phone-format.js or phone-format.min.js

## DEMO
[PhoneFormat.com](http://www.phoneformat.com)

## API

| Function                     	| Parameters                                 	| Example                                                                  	|   	|   	|
|------------------------------	|--------------------------------------------	|--------------------------------------------------------------------------	|---	|---	|
| countryForE164Number         	| phoneNumber : string                       	| phoneFormat.countryForE164Number(validInternationalPhoneNumber);         	|   	|   	|
| formatNumberForMobileDialing 	| countryCode : string, phoneNumber : string 	| phoneFormat.formatNumberForMobileDialing(countryCode, validPhoneNumber); 	|   	|   	|
| isValidNumber                	| phoneNumber : string, countryCode : string 	| phoneFormat.isValidNumber(validPhoneNumber, countryCode);                	|   	|   	|
| formatE164                   	| countryCode: string, phoneNumber : string  	| phoneFormat.formatE164(countryCode, validPhoneNumber);                   	|   	|   	|
| formatInternational          	| countryCode : string, phoneNumber : string 	| phoneFormat.formatInternational(countryCode, validPhoneNumber);          	|   	|   	|
| formatLocal                  	| countryCode : string, phoneNumber : string 	| phoneFormat.formatLocal(countryCode, validPhoneNumber);                  	|   	|   	|
| exampleLandlineNumber        	| countryCode : string                       	| phoneFormat.exampleLandlineNumber(countryCode);                          	|   	|   	|
| exampleMobileNumber          	| countryCode : string                       	| phoneFormat.exampleMobileNumber(countryCode);                            	|   	|   	|
| cleanPhone                   	| phoneNumber : string                       	| phoneFormat.cleanPhone(validPhoneNumber);                                	|   	|   	|
| countryCodeToName            	| countryCode : string                       	| phoneFormat.countryCodeToName(countryCode);                              	|   	|   	|


## FAQ

**Is PhoneFormat.js in sync with the latest libphonenumber?**

More often then not PhoneFormat.js will NOT be using the [latest version](https://code.google.com/p/libphonenumber/source/browse/#svn%2Ftrunk%2Fjavascript%2Fi18n%2Fphonenumbers) of libphonenumber.

It was last synced v8.3.3

If this is causing you any headaches, please follow the instructions below to update the source files in /lib.

  * Step 1

    * Copy to your clipboard, the contents of [closure.txt](https://github.com/albeebe/phoneformat.js/blob/master/closure.txt) at the top of this page

  * Step 2

    * Go to Googles [Closure Compiler Service](http://closure-compiler.appspot.com/home)

  * Step 3

    * Paste the contents of [closure.txt](https://github.com/albeebe/phoneformat.js/blob/master/closure.txt) into the big textarea on the left side of the screen under the **Compile** button.
    * Make sure you delete whatever text is already the textarea!
    * After you've pasted it press the **Compile** button
    * If everything works correctly, on the right side of the screen will be a freshly compiled google-libraries.js

  * Step 4

    * Update `lib/google-libraries.js` with the compiled libraries from the compiler service.
    * Run `npm run build`
    * Commit your change, push it up and submit a pull request.
    * Thank you!

## Questions?

* [@sturdynut](http://twitter.com/sturdynut)
* [@albeebe](http://twitter.com/albeebe)


This project was created by [@albeebe](http://twitter.com/albeebe).
