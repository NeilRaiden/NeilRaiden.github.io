/* Add menu items to this array: */
const menuItems = [
/*	{ item:'Learning English',      link:'learn.html'},
	{ item:'Phonetic Dictionaries', link:'dicts.html'},
	{ item:'Phonetic Spellchecks',  link:'spell.html'},
	{ item:'Keyboard Layouts',      link:'layouts.html'},*/
	{ item:'Home',                  link:'index.html'},
	{ item:'Site-map',              link:'sitemap.html'},
	{ item:'About',                 link:'about.html'}
];

const headerHtml = [
//	'<a href="./index.html" class="home" title="Back to homepage"><b>NeilRaiden.com</b></a>\n',
	'<button style="padding:4px 32px;font-size:20px;"  onclick="location.href=\'./index.html\'" type="button"><span title="https://NeilRaiden.com">NeilRaiden.com</span></button>\n',
	'<button style="padding:0px 12px;font-size:24px;"  onclick="toggleBlock(\'pageSetup\')"><span title="Styles preferences">&#x2699;</span></button>\n',
	'<button style="padding:0px 12px;font-size:24px;float:right" onclick="toggleBlock(\'menuLinks\')">&#x2630;</button>\n' ];

const footerHtml = [
	'<div class="copy">Copyright &copy; 2025 NeilRaiden.com (AGPLv3)</div>\n',
	'<button onclick="toTop()"><b><span title="Return to top"><span style="font-size:10pt">TOP</span>&#x2B06;</span></b></button>\n' ];
//	'<button onclick="toTop()">&#x1F51D;</a>\n' ];

const styleSetupHtml = [
'<div class="grid-container">',
'	<div>Text font size:</div>',
'	<div><button class="pgSetup" onclick="changeTxtFontSize(-1)"> - </button></div>',
'	<div id="textSize">14pt</div>',
'	<div><button class="pgSetup" onclick="changeTxtFontSize(1)"> + </button></div>',
//'	<div>Headings font size:</div>',
//'	<div><button class="pgSetup" onclick="changeHeadFontSize(-1)"> - </button></div>',
//'	<div id="headSize">28pt</div>',
//'	<div><button class="pgSetup" onclick="changeHeadFontSize(1)"> + </button></div>',
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

// this function is called from  webPageSetup() - see below
function insertFontPickers(path) {
//	let code = '<div id="fontPick" class="modal">\n';
	let	code = '<div class="grid-container" style="grid-template-columns: auto auto;">\n';

// font picker for ordinary text
		code += '	<div><a href="' + path + 'fonts.html">Text font</a>:</div>\n';
		code += '	<div><select id="textFontSelect" name="Select text font" onchange="changeTextFont(this)">\n';

	for (let i in fontList) {
		code += '<option value="' + fontList[i].name + '"';
		if ( fontList[i].name == fontFamilyText ) { code += ' selected="selected"'; }
		code += '>' + fontList[i].name + '</option>\n';
	}
	code += '	</select></div>\n';

// font picker for headings only (h1, h2, ..., h6)
	code += '	<div><a href="' + path + 'fonts.html">Header font</a>:</div>\n';
	code += '	<div><select id="headFontSelect" name="Select header font" onchange="changeHeadFont(this)">\n';

	for (let i in fontList) {
		code += '<option value="' + fontList[i].name + '"';
		if ( fontList[i].name == fontFamilyHead ) { code += ' selected="selected"'; }
		code += '>' + fontList[i].name + '</option>';
	}

	code += '	</select></div>\n';
	code += '</div> <!-- endof: grid-container -->\n';
//	code += '</div>\n';
	
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
		code += tdstyle + '&#x2b06; &#x1f51d; &#x2630; &#x2699;</td></tr>\n';
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

/* Toggle navigation menu - the hamburger menu on top bar */
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
	let selectedText = selectedFont.options[selectedIndex].text;
	let selectedValue = selectedFont.options[selectedIndex].value;

	console.log("Selected text font: " + selectedText + ", index: " + selectedIndex + ", value: " + selectedValue);
	r.style.setProperty('--fontFamilyText', selectedValue );
	fontFamilyText = selectedValue;
}

// change font ( headings: h1, h2, ..., h6)
function changeHeadFont(selectedFont) {

	let selectedIndex = selectedFont.selectedIndex;
	let selectedText = selectedFont.options[selectedIndex].text;
	let selectedValue = selectedFont.options[selectedIndex].value;

	console.log("Selected heading font: " + selectedText + ", index: " + selectedIndex + ", value: " + selectedValue);
	r.style.setProperty( '--fontFamilyHead', selectedValue );
	fontFamilyHead = selectedValue;
}

function changeTxtFontSize(val) {
	if( ( val < 0 && textFontSize > 6 ) || ( val > 0 && textFontSize < 25 ) ) {
		textFontSize += val;
		r.style.setProperty('--fontSizeText', textFontSize + 'pt');
		document.getElementById('textSize').innerHTML = textFontSize + "pt";
	}
}

//function changeHeadFontSize(val) {
//	if( ( val < 0 && headFontSize > 8 ) || ( val > 0 && headFontSize < 50 ) ) {
//		headFontSize += val;
//		r.style.setProperty('--fontSizeHead', headFontSize + 'pt');
//		document.getElementById('headSize').innerHTML = headFontSize + "pt";
//	}
//}

function changeIPAFontSize(val) {
	if( ( val < 0 && ipaFontSize > 8 ) || ( val > 0 && ipaFontSize < 50 ) ) {
		ipaFontSize += val;
		r.style.setProperty('--fontSizeIPA', ipaFontSize + 'pt');
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
:root {
	--fontSizeText: 14pt;
	--fontSizeHead: 28pt;
	--fontFamilyText: Now;
	--fontFamilyHead: Dangrek;
	--lineHeight: 1.1;
	--wordSpace: 1px;
} */

// global JS variables 
// - some of these variables have their corresponding counterpart in the ":root" CSS global variables
var textFontSize  =  14; 	// text     font-size (default 14pt)
//var headFontSize  =  28; 	// header   font-size (default 24pt)
var ipaFontSize   =  12; 	// IPA tags font-size (default 12pt) - font-family: NotoSans
var lineHeight    =  1.4;
var wordSpace     =  1;
var fontFamilyText ='Now';
var fontFamilyHead ='Dangrek';
var r = document.querySelector(':root'); 	// Get the root element

