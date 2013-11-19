var defaultPhone = "";


/* ************************************** */
function load() {
	/*
	
	*/
	
	$('#phonebox').val(defaultPhone);
	$('#phonebox').focus();
	
	processPhone();
}


// -------------------------------------------------------------------------   
function clickPhone() {
	/*
	
	Called when the phone box is clicked
	
	*/

	if ($('#phonebox').val() == defaultPhone) {
		$('#phonebox').val('');
	}
	
	processPhone();
}


// -------------------------------------------------------------------------   
function processPhone() {
	/*
	
	Process the phone number
	
	*/

	phone = $('#phonebox').val();
		
	if (phone.length == 0) {
		$('#popup').fadeOut('fast');
	} else {
		$('#popup').fadeIn('fast');
	}
	
	var country = $('#select_country').val();
	
	var e164 = formatE164(country, phone);
	if (e164.substring(0, 1) == "+") {
		$('#phone_e164').html(e164);
	} else {
		$('#phone_e164').html('+');
	}
	$('#phone_international').html(formatInternational(country, phone));
	$('#phone_national').html(formatLocal(country, phone));
	var countryCode = countryForE164Number(formatE164(country, phone));
	if (countryCode.length == 0) { 
		$('#phone_country').html('-');
	} else {
		$('#phone_country').html(countryCode + " - " + countryCodeToName(countryCode));
	}
	$('#phone_mobile_dial').html(formatNumberForMobileDialing(country, phone));
	if (isValidNumber(phone, country)) {
		$('#phone_valid').html('Yes');
	} else {
		$('#phone_valid').html('No');
	}
}