/* Add menu items to this array: */
const menuItems = [
	{ item:'Phonemic Keyboards',        link:'index.html'},
	{ item:'Shavian Keyboards',         link:'shavian.html'},
	{ item:'Other Keyboard Layouts',    link:'other.html'},
	{ item:'Downloads',                 link:'downloads.html'},
	{ item:'Site-map',                  link:'sitemap.html'},
	{ item:'About',                     link:'about.html'}
];

// coming soon (hopefully):
//	{ item:'Learning English',          link:'learn.html'},
//	{ item:'Phonetic Dictionaries',     link:'dicts.html'},
//	{ item:'Phonetic Spellchecks',      link:'spell.html'},

//   // version 1 (buttons):
//   const headerHtml = [
//   //	'<a href="./index.html" class="home" title="Back to homepage"><b>NeilRaiden.com</b></a>\n',
//   	'<button style="padding:4px 32px;font-size:20px;"  onclick="location.href=\'./index.html\'" type="button"><span title="https://NeilRaiden.com">NeilRaiden.com</span></button>\n',
//   	'<button style="padding:0px 12px;font-size:24px;"  onclick="toggleBlock(\'pageSetup\')"><span title="Styles preferences">&#x2699;</span></button>\n',
//   	'<button style="padding:0px 12px;font-size:24px;float:right" onclick="toggleBlock(\'menuLinks\')">&#x2630;</button>\n' ];

// version 2 (flex):
// todo: separate pageSetup and fontSetup, use icon: ⓕ  ⒡  ḟ ƒ f ℱ Ḟ ₣ ℉ F
// ⓕ   - Html Hex &#x24d5; Html Decimal &#9429;
// ℱA  - Html Hex &#x2131; Html Decimal &#8497;

const headerHtml = [
	'<div class="hdr">',
	'<div class="hlogo"  onclick="location.href=\'./index.html\'">NeilRaiden.com</div>\n',
	'<div class="hsetup" id="pageSetupBtn" onclick="toggleSetup(\'pageSetup\')"><span title="Styles &amp; preferences">&#x2699;</span></div>\n',
	'<div class="hspacer">&nbsp;</div>',
	'<div class="hmenu"  id="menuLinksBtn" onclick="toggleHmenu(\'menuLinks\')">&#x2630;</div>\n', 
	'</div>' ];

//	// version 1 (button):
//	const footerHtml = [
//		'<p class="copy">Copyright &copy; 2025 NeilRaiden.com (AGPLv3)</p>',
//		'<div class="button" onclick="toTop()"><span title="Return to top">TOP &#x2B06;</span></div>\n' ];
//	// version 0 :
//	//	'<button onclick="toTop()"><b><span title="Return to top"><span style="font-size:10px;">TOP</span>&#x2B06;</span></b></button>\n' ];
//	//	'<button onclick="toTop()">&#x1F51D;</a>\n' ];

// version 1 (button):
const footerHtml = [
	'<div class="ftr">',
	'<div class="ftrcopy">Copyright &copy; 2025 NeilRaiden.com (AGPLv3)</div>',
	'<div class="ftrtotop" onclick="toTop()"><span title="Return to top">TOP &#x2B06;</span></div>\n',
	'</div>' ];

/* old:
const styleSetupHtml = [
'<div class="grid-container">',
'	<div>Text font size:</div>',
'	<div><button class="pgSetup" onclick="changeTxtFontSize(-1)"> - </button></div>',
'	<div id="textSize">11pt</div>',
'	<div><button class="pgSetup" onclick="changeTxtFontSize(1)"> + </button></div>',
'	<div>Headings font size:</div>',
'	<div><button class="pgSetup" onclick="changeHeadFontSize(-1)"> - </button></div>',
'	<div id="headSize">28pt</div>',
'	<div><button class="pgSetup" onclick="changeHeadFontSize(1)"> + </button></div>',
'	<div>IPA symbols font size:</div>',
'	<div><button class="pgSetup" onclick="changeIPAFontSize(-1)"> - </button></div>',
'	<div id="ipaSize">12pt</div>',
'	<div><button class="pgSetup" onclick="changeIPAFontSize(1)"> + </button></div>',
'	<div>Line spacing:</div>',
'	<div><button class="pgSetup" onclick="changeLineHeight(-0.1)"> - </button></div>',
'	<div id="lineHigh">1.4</div>',
'	<div><button class="pgSetup" onclick="changeLineHeight(0.1)"> + </button></div>',
'	<div>Word spacing:</div>',
'	<div><button class="pgSetup" onclick="changeWordSpace(-1)"> - </button></div>',
'	<div id="wordSpc">1px</div>',
'	<div><button class="pgSetup" onclick="changeWordSpace(1)"> + </button></div>',
'</div>' ];
*/

const styleSetupHtml = [
'<table class="pgSetupTb">',
'	<tr>',
'		<td>Text font size:</td>',
'		<td><button class="pgSetup" onclick="changeTxtFontSize(-1)"> - </button></td>',
'		<td id="textSize">11pt</td>',
'		<td><button class="pgSetup" onclick="changeTxtFontSize(1)"> + </button></td>',
'	</tr>',
'	<tr>',
'		<td>Headings font size:</td>',
'		<td><button class="pgSetup" onclick="changeHeadFontSize(-1)"> - </button></td>',
'		<td id="headSize">28pt</td>',
'		<td><button class="pgSetup" onclick="changeHeadFontSize(1)"> + </button></td>',
'	</tr>',
'	<tr>',
'		<td>IPA symbols font size:</td>',
'		<td><button class="pgSetup" onclick="changeIPAFontSize(-1)"> - </button></td>',
'		<td id="ipaSize">12pt</td>',
'		<td><button class="pgSetup" onclick="changeIPAFontSize(1)"> + </button></td>',
'	</tr>',
'	<tr>',
'		<td>Line spacing:</td>',
'		<td><button class="pgSetup" onclick="changeLineHeight(-0.1)"> - </button></td>',
'		<td id="lineHigh">1.4</td>',
'		<td><button class="pgSetup" onclick="changeLineHeight(0.1)"> + </button></td>',
'	</tr>',
'	<tr>',
'		<td>Word spacing:</td>',
'		<td><button class="pgSetup" onclick="changeWordSpace(-1)"> - </button></td>',
'		<td id="wordSpc">1px</td>',
'		<td><button class="pgSetup" onclick="changeWordSpace(1)"> + </button></td>',
'	</tr>',
'</table>' ];


// ---------- functions ----------
function insertHTML(htmlCode) {
	document.write(htmlCode.join(''));
}

function insertNavBar() {
	let code = '<div id="menuLinks">\n<ul>\n';

	for(let i in menuItems) {
		code += '<li><a href="' + menuItems[i].link + '">' + menuItems[i].item + '</a></li>\n';
	}
		code += '</ul>\n</div>\n';
	document.write(code);
}
/*
// OLD (switched to <table>): this function is called from  webPageSetup() - see below
function insertFontPickers(path) {
	//	let code = '<div id="fontPick" class="modal">\n';
	//let path = '';
	let	code = '<div class="grid-container" style="grid-template-columns: auto auto;">\n';

	// font picker for ordinary text:
		code += '	<div><a href="' + path + 'fonts.html">Text font</a>:</div>\n';
		code += '	<div><select id="textFontSelect" name="Select text font" onchange="changeTextFont(this)">\n';
		//code += '	<div><select id="textFontSelect" name="Select text font" onchange="changeFont(this,\'--fontFamilyText\')">\n';

	for (let i in fontList) {
		code += '<option value="' + fontList[i].name + '"';
		if ( fontList[i].name == textFontFamily ) { code += ' selected="selected"'; }
		code += '>' + fontList[i].name + '</option>\n';
	}
	code += '	</select></div>\n';

	// font picker for text with IPA symbols:
		code += '	<div><a href="' + path + 'fonts.html">IPA font</a>:</div>\n';
		code += '	<div><select id="ipaFontSelect" name="Select text font" onchange="changeIpaFont(this)">\n';
		//code += '	<div><select id="ipaFontSelect" name="Select text font" onchange="changeFont(this,\'--fontFamilyIPA\')">\n';

	for (let i in fontList) {
		code += '<option value="' + fontList[i].name + '"';
		if ( fontList[i].name == ipaFontFamily ) { code += ' selected="selected"'; }
		code += '>' + fontList[i].name + '</option>\n';
	}
	code += '	</select></div>\n';

	// font picker for headings only (h1, h2, ..., h6)
	code += '	<div><a href="' + path + 'fonts.html">Header font</a>:</div>\n';
	code += '	<div><select id="headFontSelect" name="Select header font" onchange="changeHeadFont(this)">\n';
	//code += '	<div><select id="headFontSelect" name="Select header font" onchange="changeFont(this,\'--fontFamilyHead\')">\n';

	for (let i in fontList) {
		code += '<option value="' + fontList[i].name + '"';
		if ( fontList[i].name == headFontFamily ) { code += ' selected="selected"'; }
		code += '>' + fontList[i].name + '</option>';
	}

	code += '	</select></div>\n';
	code += '</div> <!-- endof: grid-container -->\n';
	//	code += '</div>\n';
	
	document.write(code);
}
*/

// NEW (switched to <table>): this function is called from  webPageSetup() - see below
function insertFontPickers(path) {
	// OLD: let	code = '<div class="grid-container" style="grid-template-columns: auto auto;">\n';
	let	code = '<table class="pgSetupTb">\n<tr>\n';

	// font picker for ordinary text:
		code += '	<td><a href="' + path + 'fonts.html">Text font</a>:</td>\n';
		code += '	<td><select id="textFontSelect" name="Select text font" onchange="changeTextFont(this)">\n';

	for (let i in fontList) {
		code += '<option value="' + fontList[i].name + '"';
		if ( fontList[i].name == textFontFamily ) { code += ' selected="selected"'; }
		code += '>' + fontList[i].name + '</option>\n';
	}
	code += '	</select></td>\n</tr>';

	// font picker for text with IPA symbols:
		code += '	<tr>\n<td><a href="' + path + 'fonts.html">IPA font</a>:</td>\n';
		code += '	<td><select id="ipaFontSelect" name="Select text font" onchange="changeIpaFont(this)">\n';

	for (let i in fontList) {
		code += '<option value="' + fontList[i].name + '"';
		if ( fontList[i].name == ipaFontFamily ) { code += ' selected="selected"'; }
		code += '>' + fontList[i].name + '</option>\n';
	}
	code += '	</select></td>\n</tr>';

	// font picker for headings only (h1, h2, ..., h6)
	code += '	<tr>\n<td><a href="' + path + 'fonts.html">Header font</a>:</td>\n';
	code += '	<td><select id="headFontSelect" name="Select header font" onchange="changeHeadFont(this)">\n';

	for (let i in fontList) {
		code += '<option value="' + fontList[i].name + '"';
		if ( fontList[i].name == headFontFamily ) { code += ' selected="selected"'; }
		code += '>' + fontList[i].name + '</option>';
	}

	code += '	</select></td>\n';
	code += '</tr>\n</table>\n';
	
	document.write(code);
}
function fontsCompareTable() {
	let tdstyle = "";
	let code = '<table><tr><th>Font Name</th><th>Digits</th><th>agy</th><th>alphabet</th><th>ALPHABET</th><th>Icons</th></tr>\n';
	for (let i in fontList) {
		tdstyle = '<td style="font-family:' + fontList[i].name + ', blank;">';
		code += '<tr><td>' + fontList[i].name + '</td>';
		code += tdstyle + '0123456789</td>';
		code += tdstyle + 'agy</td>';
		code += tdstyle + 'abcdefghijklmnopqrstuvwxyz</td>';
		code += tdstyle + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ</td>';
		code += tdstyle + '&#x2b06; &#x1f51d; &#x2630; &#x2699;</td>';
		code += tdstyle + '</tr>\n';
	}
	code += '</table>\n';
	document.write(code);
}

function webPageSetup(path) {
/*	let code = '<div style="text-align:left;"><button style="padding:0px 12px;font-size:24px;"  onclick="toggleBlock(\'pageSetup\')"><span title="Styles preferences">&#x2699;</span></button></div>\n';
	document.write(code);
	*/
	insertHTML(styleSetupHtml);
	insertFontPickers(path);
}

/* Toggle navigation menu - the hamburger menu on top bar */
function toggleBlock(blockName) {
  let x = document.getElementById(blockName);
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/* toggle Site Preferences (Setup) */
function toggleSetup(name) {
	//toggleBlock(pageSetup);
	let x = document.getElementById(name);
	let y = document.getElementById(name + "Btn");
	if (x.style.display === "block") {
		x.style.display = "none";
		// when modifying style, after one use "class:hover" stops working
		// use y.className instead.
		//y.style.color = "white";
		//y.style.backgroundColor = "slateblue";
		y.className = "hsetup";
	} else {
		x.style.display = "block";
		//y.style.color = "black";
		//y.style.backgroundColor = "white";
		y.className = "hspres";
	}
}

/* toggle Site Preferences (Setup) */
function toggleHmenu(name) {
	//toggleBlock(pageSetup);
	let x = document.getElementById(name);
	let y = document.getElementById(name + "Btn");
	if (x.style.display === "block") {
		x.style.display = "none";
		// when modifying style, after one use "class:hover" stops working
		// use y.className instead.
		//y.style.color = "white";
		//y.style.backgroundColor = "slateblue";
		y.className = "hmenu";
	} else {
		x.style.display = "block";
		//y.style.color = "black";
		//y.style.backgroundColor = "white";
		y.className = "hmpres";
	}
}

/* Toggle navigation menu - the hamburger menu on top bar */
/* UNUSED !!! */
function flexBlock(blockName) {
  let x = document.getElementById(blockName);
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

// scroll to the top of the document:
function toTop() {
	document.body.scrollTop = 0;            // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

// turn off the splash screen on welcome page:
function splashOff() {
	let x = document.getElementById("splash");
	let y = document.getElementById("mainPage");
	x.style.display = "none";
	y.style.display = "block";
}

// ---------- page setup dialog for formatting styles ----------
// change font (main, div, p, a, ul, li, ...)
function changeTextFont(selectedFont) {

	let selectedIndex = selectedFont.selectedIndex;
	let selectedText  = selectedFont.options[selectedIndex].text;
	let selectedValue = selectedFont.options[selectedIndex].value;

	console.log("Selected text font: " + selectedText + ", index: " + selectedIndex + ", value: " + selectedValue);
	r.style.setProperty('--textFontFamily', selectedValue );
	textFontFamily = selectedValue;
}

// change IPA symbols font (main, div, p, a, ul, li, ...)
function changeIpaFont(selectedFont) {

	let selectedIndex = selectedFont.selectedIndex;
	let selectedText  = selectedFont.options[selectedIndex].text;
	let selectedValue = selectedFont.options[selectedIndex].value;

	console.log("Selected text font: " + selectedText + ", index: " + selectedIndex + ", value: " + selectedValue);
	r.style.setProperty('--ipaFontFamily', selectedValue );
	ipaFontFamily = selectedValue;
}

// change font ( headings: h1, h2, ..., h6)
function changeHeadFont(selectedFont) {

	let selectedIndex = selectedFont.selectedIndex;
	let selectedText  = selectedFont.options[selectedIndex].text;
	let selectedValue = selectedFont.options[selectedIndex].value;

	console.log("Selected heading font: " + selectedText + ", index: " + selectedIndex + ", value: " + selectedValue);
	r.style.setProperty('--headFontFamily', selectedValue );
	headFontFamily = selectedValue;
}

// ---- universal changeFont() function - fails for some reason :(
// fontCategory can be:
//	'--fontFamilyText'
//	'--fontFamilyIPA'
//	'--fontFamilyHead'
/*
function changeFont(selectedFont,fontCategory) {

	let selectedIndex = selectedFont.selectedIndex;
	let selectedText  = selectedFont.options[selectedIndex].text;
	let selectedValue = selectedFont.options[selectedIndex].value;

	console.log("Selected text font: " + selectedText + ", index: " + selectedIndex + ", value: " + selectedValue + "\n fontCat: " + fontCategory);

	//r.style.setProperty( fontCategory, selectedValue );

	if( fontCategory == "--fontFamilyText" ) {
		r.style.setProperty('--fontFamilyText', selectedValue );
		fontFamilyText = selectedValue;
	}
	if( fontCategory == "--fontFamilyIPA"  ) {
		fontFamilyIPA  = selectedValue;
		r.style.setProperty('--fontFamilyIPA', selectedValue );
	}
	if( fontCategory == "--fontFamilyHead" ) {
		r.style.setProperty('--fontFamilyHead', selectedValue );
		fontFamilyHead = selectedValue;
	}
}
*/

function changeTxtFontSize(val) {
	if( ( val < 0 && textFontSize > 6 ) || ( val > 0 && textFontSize < 25 ) ) {
		textFontSize += val;
		r.style.setProperty('--textFontSize', textFontSize + 'pt');
		document.getElementById('textSize').innerHTML = textFontSize + "pt";
	}
}

function changeHeadFontSize(val) {
	if( ( val < 0 && headFontSize > 8 ) || ( val > 0 && headFontSize < 50 ) ) {
		headFontSize += val;
		r.style.setProperty('--headFontSize', headFontSize + 'pt');
		document.getElementById('headSize').innerHTML = headFontSize + "pt";
	}
}

function changeIPAFontSize(val) {
	if( ( val < 0 && ipaFontSize > 8 ) || ( val > 0 && ipaFontSize < 50 ) ) {
		ipaFontSize += val;
		r.style.setProperty('--ipaFontSize', ipaFontSize + 'pt');
		document.getElementById('ipaSize').innerHTML = ipaFontSize + "pt";
	}
}

function changeLineHeight(val) {
	if( ( val < 0 && lineHeight > 0.8 ) || ( val > 0 && lineHeight < 2 ) ) {
		lineHeight += val;
		r.style.setProperty('--lineHeight', lineHeight);
		document.getElementById('lineHigh').innerHTML = lineHeight.toFixed(1);
	}
}

function changeWordSpace(val) {
	if( ( val < 0 && wordSpace > -5 ) || ( val > 0 && wordSpace < 20 ) ) {
		wordSpace += val;
		r.style.setProperty('--wordSpace', wordSpace + "px");
		document.getElementById('wordSpc').innerHTML = wordSpace.toFixed(0) + "px";
	}
}

/* ---------- global CSS variables (defined in layout.css)* ---------- /
/* global CSS variables */
/*
:root {
	--textFontSize: 11pt;
	--headFontSize: 28pt;
	--ipaFontSize:  12pt;
	--monoFontSize: 12pt;
	--shawFontSize: 14pt;
	--textFontFamily: Poppins;
	--headFontFamily: TexGyreHerosCondensed;
	--ipaFontFamily: InterAlia;
	--monoFontFamily: RobotoMono;
	--shawFontFamily: InterAlia;
	--lineHeight: 1.4;
	--wordSpace: 1px;
}
*/

// global JS variables 
// - some of these variables have their corresponding counterpart in the ":root" CSS global variables
var textFontSize  = 11; 	// text     font-size (default 14pt)
var headFontSize  = 28; 	// header   font-size (default 28pt)
var ipaFontSize   = 12; 	// IPA tags font-size (default 12pt) - font-family: NotoSans
var monoFontSize  = 10;
var shawFontSize  = 12;
var textFontFamily ='Poppins';
var headFontFamily ='TexGyreHerosCondensed';
var ipaFontFamily  ='InterAlia';
var monoFontFamily ='RobotoMono';
var shawFontFamily ='InterAlia';
var lineHeight    =  1.4;
var wordSpace     =  1;
var r = document.querySelector(':root'); 	// Get the root element

