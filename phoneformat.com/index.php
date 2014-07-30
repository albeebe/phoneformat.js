<HTML>
<HEAD>








<!--

 PhoneFormat.js contains all the code you need to implement the same formatting
 you see on this page.  Just click the download button on this page

-->
<script type="text/javascript" src="js/PhoneFormat.js"></script>































































		<title>Javascript Phone Number Formatter</title> 
		<link rel="stylesheet" type="text/css" href="css/styles.css" />
		<script type="text/javascript" src="js/source.js"></script>
		<script type="text/javascript" src="js/jquery.js"></script>
		<META NAME="Description" CONTENT="Advanced javascript library for easily formatting phone numbers for just about every country on earth. Quickly convert phone numbers to e164, international, and local format. ">
		<META NAME="keywords" CONTENT="javascript,phone,number,format,formatter,e164,international,libphonenumber">
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-2160750-6']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
	</HEAD>
<BODY onload="load()">
<CENTER>
	<TABLE>
		<TR>
			<TD VALIGN="top" align="center">
	<DIV class="title">
		<IMG src="images/phoneformat_dot_com.png" alt="phoneformat.com" WIDTH="451" HEIGHT="55">
	</DIV>
	
	<DIV style="height:20px"></DIV>
	
	<DIV class="textbox">
		<INPUT id="phonebox" class="textbox" type="tel" onclick="clickPhone()" onkeyup="processPhone();" placeholder="Enter a phone number">
	</DIV>

	<DIV id="popup" class="popup" style="display: none">
		<DIV style="height: 30px"></DIV>
		<DIV class="popup-title">
			<CENTER>
			<TABLE height="100%" cellspacing="0" cellpadding="0">
				<TR>
					<TD>
						<DIV style="color: white; font-size: 20px;">Country </DIV>
					</TD>
					<TD width="5">
					</TD>
					<TD>
						<SELECT id="select_country" onclick="processPhone();" onchange="processPhone();">
						<option value="AF">Afghanistan</option>
<option value="AL">Albania</option>
<option value="DZ">Algeria</option>
<option value="AS">American Samoa</option>
<option value="AD">Andorra</option>
<option value="AO">Angola</option>
<option value="AI">Anguilla</option>
<option value="AQ">Antarctica</option>
<option value="AG">Antigua And Barbuda</option>
<option value="AR">Argentina</option>
<option value="AM">Armenia</option>
<option value="AW">Aruba</option>
<option value="AU">Australia</option>
<option value="AT">Austria</option>
<option value="AZ">Azerbaijan</option>
<option value="BS">Bahamas</option>
<option value="BH">Bahrain</option>
<option value="BD">Bangladesh</option>
<option value="BB">Barbados</option>
<option value="BY">Belarus</option>
<option value="BE">Belgium</option>
<option value="BZ">Belize</option>
<option value="BJ">Benin</option>
<option value="BM">Bermuda</option>
<option value="BT">Bhutan</option>
<option value="BO">Bolivia</option>
<option value="BA">Bosnia And Herzegovina</option>
<option value="BW">Botswana</option>
<option value="BV">Bouvet Island</option>
<option value="BR">Brazil</option>
<option value="IO">British Indian Ocean Territory</option>
<option value="BN">Brunei</option>
<option value="BG">Bulgaria</option>
<option value="BF">Burkina Faso</option>
<option value="BI">Burundi</option>
<option value="KH">Cambodia</option>
<option value="CM">Cameroon</option>
<option value="CA">Canada</option>
<option value="CV">Cape Verde</option>
<option value="KY">Cayman Islands</option>
<option value="CF">Central African Republic</option>
<option value="TD">Chad</option>
<option value="CL">Chile</option>
<option value="CN">China</option>
<option value="CX">Christmas Island</option>
<option value="CC">Cocos (Keeling) Islands</option>
<option value="CO">Columbia</option>
<option value="KM">Comoros</option>
<option value="CG">Congo</option>
<option value="CK">Cook Islands</option>
<option value="CR">Costa Rica</option>
<option value="CI">Cote D'Ivorie (Ivory Coast)</option>
<option value="HR">Croatia (Hrvatska)</option>
<option value="CU">Cuba</option>
<option value="CY">Cyprus</option>
<option value="CZ">Czech Republic</option>
<option value="CD">Democratic Republic Of Congo (Zaire)</option>
<option value="DK">Denmark</option>
<option value="DJ">Djibouti</option>
<option value="DM">Dominica</option>
<option value="DO">Dominican Republic</option>
<option value="TP">East Timor</option>
<option value="EC">Ecuador</option>
<option value="EG">Egypt</option>
<option value="SV">El Salvador</option>
<option value="GQ">Equatorial Guinea</option>
<option value="ER">Eritrea</option>
<option value="EE">Estonia</option>
<option value="ET">Ethiopia</option>
<option value="FK">Falkland Islands (Malvinas)</option>
<option value="FO">Faroe Islands</option>
<option value="FJ">Fiji</option>
<option value="FI">Finland</option>
<option value="FR">France</option>
<option value="FX">France, Metropolitan</option>
<option value="GF">French Guinea</option>
<option value="PF">French Polynesia</option>
<option value="TF">French Southern Territories</option>
<option value="GA">Gabon</option>
<option value="GM">Gambia</option>
<option value="GE">Georgia</option>
<option value="DE">Germany</option>
<option value="GH">Ghana</option>
<option value="GI">Gibraltar</option>
<option value="GR">Greece</option>
<option value="GL">Greenland</option>
<option value="GD">Grenada</option>
<option value="GP">Guadeloupe</option>
<option value="GU">Guam</option>
<option value="GT">Guatemala</option>
<option value="GN">Guinea</option>
<option value="GW">Guinea-Bissau</option>
<option value="GY">Guyana</option>
<option value="HT">Haiti</option>
<option value="HM">Heard And McDonald Islands</option>
<option value="HN">Honduras</option>
<option value="HK">Hong Kong</option>
<option value="HU">Hungary</option>
<option value="IS">Iceland</option>
<option value="IN">India</option>
<option value="ID">Indonesia</option>
<option value="IR">Iran</option>
<option value="IQ">Iraq</option>
<option value="IE">Ireland</option>
<option value="IM">Isle of Man</option>
<option value="IL">Israel</option>
<option value="IT">Italy</option>
<option value="JM">Jamaica</option>
<option value="JP">Japan</option>
<option value="JO">Jordan</option>
<option value="KZ">Kazakhstan</option>
<option value="KE">Kenya</option>
<option value="KI">Kiribati</option>
<option value="KW">Kuwait</option>
<option value="KG">Kyrgyzstan</option>
<option value="LA">Laos</option>
<option value="LV">Latvia</option>
<option value="LB">Lebanon</option>
<option value="LS">Lesotho</option>
<option value="LR">Liberia</option>
<option value="LY">Libya</option>
<option value="LI">Liechtenstein</option>
<option value="LT">Lithuania</option>
<option value="LU">Luxembourg</option>
<option value="MO">Macau</option>
<option value="MK">Macedonia</option>
<option value="MG">Madagascar</option>
<option value="MW">Malawi</option>
<option value="MY">Malaysia</option>
<option value="MV">Maldives</option>
<option value="ML">Mali</option>
<option value="MT">Malta</option>
<option value="MH">Marshall Islands</option>
<option value="MQ">Martinique</option>
<option value="MR">Mauritania</option>
<option value="MU">Mauritius</option>
<option value="YT">Mayotte</option>
<option value="MX">Mexico</option>
<option value="FM">Micronesia</option>
<option value="MD">Moldova</option>
<option value="MC">Monaco</option>
<option value="MN">Mongolia</option>
<option value="MS">Montserrat</option>
<option value="MA">Morocco</option>
<option value="MZ">Mozambique</option>
<option value="MM">Myanmar (Burma)</option>
<option value="NA">Namibia</option>
<option value="NR">Nauru</option>
<option value="NP">Nepal</option>
<option value="NL">Netherlands</option>
<option value="AN">Netherlands Antilles</option>
<option value="NC">New Caledonia</option>
<option value="NZ">New Zealand</option>
<option value="NI">Nicaragua</option>
<option value="NE">Niger</option>
<option value="NG">Nigeria</option>
<option value="NU">Niue</option>
<option value="NF">Norfolk Island</option>
<option value="KP">North Korea</option>
<option value="MP">Northern Mariana Islands</option>
<option value="NO">Norway</option>
<option value="OM">Oman</option>
<option value="PK">Pakistan</option>
<option value="PW">Palau</option>
<option value="PA">Panama</option>
<option value="PG">Papua New Guinea</option>
<option value="PY">Paraguay</option>
<option value="PE">Peru</option>
<option value="PH">Philippines</option>
<option value="PN">Pitcairn</option>
<option value="PL">Poland</option>
<option value="PT">Portugal</option>
<option value="PR">Puerto Rico</option>
<option value="QA">Qatar</option>
<option value="RE">Reunion</option>
<option value="RO">Romania</option>
<option value="RU">Russia</option>
<option value="RW">Rwanda</option>
<option value="SH">Saint Helena</option>
<option value="KN">Saint Kitts And Nevis</option>
<option value="LC">Saint Lucia</option>
<option value="PM">Saint Pierre And Miquelon</option>
<option value="VC">Saint Vincent And The Grenadines</option>
<option value="SM">San Marino</option>
<option value="ST">Sao Tome And Principe</option>
<option value="SA">Saudi Arabia</option>
<option value="SN">Senegal</option>
<option value="SC">Seychelles</option>
<option value="SL">Sierra Leone</option>
<option value="SG">Singapore</option>
<option value="SK">Slovak Republic</option>
<option value="SI">Slovenia</option>
<option value="SB">Solomon Islands</option>
<option value="SO">Somalia</option>
<option value="ZA">South Africa</option>
<option value="GS">South Georgia And South Sandwich Islands</option>
<option value="KR">South Korea</option>
<option value="ES">Spain</option>
<option value="LK">Sri Lanka</option>
<option value="SD">Sudan</option>
<option value="SR">Suriname</option>
<option value="SJ">Svalbard And Jan Mayen</option>
<option value="SZ">Swaziland</option>
<option value="SE">Sweden</option>
<option value="CH">Switzerland</option>
<option value="SY">Syria</option>
<option value="TW">Taiwan</option>
<option value="TJ">Tajikistan</option>
<option value="TZ">Tanzania</option>
<option value="TH">Thailand</option>
<option value="TG">Togo</option>
<option value="TK">Tokelau</option>
<option value="TO">Tonga</option>
<option value="TT">Trinidad And Tobago</option>
<option value="TN">Tunisia</option>
<option value="TR">Turkey</option>
<option value="TM">Turkmenistan</option>
<option value="TC">Turks And Caicos Islands</option>
<option value="TV">Tuvalu</option>
<option value="UG">Uganda</option>
<option value="UA">Ukraine</option>
<option value="AE">United Arab Emirates</option>
<option value="GB">United Kingdom</option>
<option SELECTED value="US">United States</option>
<option value="UM">United States Minor Outlying Islands</option>
<option value="UY">Uruguay</option>
<option value="UZ">Uzbekistan</option>
<option value="VU">Vanuatu</option>
<option value="VA">Vatican City (Holy See)</option>
<option value="VE">Venezuela</option>
<option value="VN">Vietnam</option>
<option value="VG">Virgin Islands (British)</option>
<option value="VI">Virgin Islands (US)</option>
<option value="WF">Wallis And Futuna Islands</option>
<option value="EH">Western Sahara</option>
<option value="WS">Western Samoa</option>
<option value="YE">Yemen</option>
<option value="YU">Yugoslavia</option>
<option value="ZM">Zambia</option>
<option value="ZW">Zimbabwe</option>
						</SELECT>
					</TD>
				</TR>
			</TABLE>
			</CENTER>
		</DIV>
		<DIV class="popup-content">

			<DIV class="popup-item">
				<DIV class="popup-label">Local</DIV>
				<DIV id="phone_national" class="popup-value"></DIV>
			</DIV>
			
			<DIV class="popup-divider"></DIV>
			
			<DIV class="popup-item">
				<DIV class="popup-label">International</DIV>
				<DIV id="phone_international" class="popup-value"></DIV>
			</DIV>
			
			<DIV class="popup-divider"></DIV>
			
				<DIV class="popup-item">
				<DIV class="popup-label">E164</DIV>
				<DIV id="phone_e164" class="popup-value"></DIV>
			</DIV>
			
			<DIV class="popup-divider"></DIV>
			
			<DIV class="popup-item">
				<DIV class="popup-label">Country</DIV>
				<DIV id="phone_country" class="popup-value"></DIV>
			</DIV>
			
			
			<DIV class="popup-divider"></DIV>
			
			<DIV class="popup-item">
				<DIV class="popup-label">Mobile Dialing</DIV>
				<DIV id="phone_mobile_dial" class="popup-value"></DIV>
			</DIV>
			
			<DIV class="popup-divider"></DIV>
			
			<DIV class="popup-item">
				<DIV class="popup-label">Valid Number</DIV>
				<DIV id="phone_valid" class="popup-value"></DIV>
			</DIV>
			
		</DIV>
	</DIV>
			<DIV ID="download" STYLE="margin-top: 20px">
				<A HREF="https://github.com/albeebe/phoneformat.js"><IMG SRC="images/download.png" WIDTH="303" HEIGHT="43" BORDER="0"></A>
			</DIV>
			<DIV STYLE="margin-top:15px; font-size:10px;">
			<A HREF="http://code.google.com/p/libphonenumber/">Built using Google's libphonenumber library.</A>
			<A HREF="https://code.google.com/p/libphonenumber/source/browse/#svn%2Ftrunk%2Fjavascript%2Fi18n%2Fphonenumbers%253Fstate%253Dclosed">(r680 7/30/2014)</A>
			</DIV>
			</TD>
			<TD>

			</TD>
		</TR>
	</TABLE>
</CENTER>	

<DIV STYLE="font-family: helvetica; font-size: 10px; color: white; padding: 15px; text-align: center">
Created by <A href="http://twitter.com/albeebe">Al Beebe</A>
</DIV>

</BODY>
</HTML>
