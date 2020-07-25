//**********************************************************
// Core Functions
//**********************************************************


//----------------------------------------------------------
// Clone an object/array
//----------------------------------------------------------
// Don't use Object.prototype to pollute object data array
function $clone(obj){

	if(typeof obj != "object") return obj;

	var newObj;

	if(obj instanceof Array){
		// Clone Array
		newObj = [];
		for(var i=0; i<obj.length; i++){
			if(typeof obj[i] == "object"){
				newObj[i] = $clone(obj[i]);
			}else{
				newObj[i] = obj[i];
			}
		}
	}else{
		// Clone Object
		newObj = {};
		for(i in obj){
			if(typeof obj[i] == "object"){
				newObj[i] = $clone(obj[i]);
			}else{
				newObj[i] = obj[i];
			}
		}
	}

	return newObj;

}


//----------------------------------------------------------
// Extend an object if property not exist yet
//----------------------------------------------------------
function $extend(objTarget, objAdd, forceOverride){

	var obj = $clone(objTarget); // always new, no pollution

	if(typeof obj != "object") return obj;

	for(var item in objAdd){
		if(obj[item] == undefined || forceOverride) obj[item] = objAdd[item];
	}

	return obj;

}


//----------------------------------------------------------
// Convert Object to JSON String
//----------------------------------------------------------
function $toJSON(obj, param){

	// paramters
	var defaultParam = {
		'indent': 0,
		'indentText': '',
		'delimiter': '',
		'includeFunction': false
	};

	param = param ? $extend(param, defaultParam) : defaultParam;

	//execute
	var indentString = '';
	var prevIndentString = '';

	if(param['indentText'] != ''){
		param['indent']++;
		prevIndentString = new Array(param['indent']).join(param['indentText']);
		indentString = new Array(param['indent']+1).join(param['indentText']);
	}

	switch(typeof(obj)){

		case "object":

			if(obj instanceof Array){

				var out = [];
				for(var i=0; i<obj.length; i++){
					var t = $toJSON(obj[i], param);
					if(t){
						out.push(indentString + t);
					}
				}

				out = "[" +
					param["delimiter"] +
					out.join("," + param["delimiter"]) +
					param["delimiter"] +
					prevIndentString + "]";

			}else if(obj instanceof Date){

				return "new Date(" +
					obj.getFullYear() + "," + obj.getMonth() + "," + obj.getDate() + "," +
					obj.getHours() + "," + obj.getMinutes() + "," + obj.getSeconds() + "," + obj.getMilliseconds() +
					")";

			}else if(obj instanceof Object){

				var out = [];
				for(label in obj){
					var l = $toJSON(label);
					var t = $toJSON(obj[label], param);
					if(t){
						out.push(indentString + l + ": " + t);
					}
				}

				out = "{" +
					param["delimiter"] +
					out.join("," + param["delimiter"]) +
					param["delimiter"] +
					prevIndentString + "}";

			}

			break;

		case "string":

			var str = obj;
			str = str.replace(/\\"/g, '\\\\"');
			str = str.replace(/\r/g, '\\r');
			str = str.replace(/\t/g, '\\t');
			str = str.replace(/\n/g, '\\n');
			str = str.replace(/\f/g, '\\f');
			str = str.replace(/\"/g, '\\"');

			out = '"' + str + '"';
			break;

		case "number":

			out = isFinite(obj) ? String(obj) : 'null';
			break;

		case "boolean":

			out = obj.toString();
			break;

		case "function":

			if(param["includeFunction"]){
				out = obj.toString();
			}else{
				out = '';
			}

			break;

		case "null":

			out = "null";
			break;
	}

	return out;

}


//----------------------------------------------------------
// Convert JSON String to Object
//----------------------------------------------------------
function $fromJSON(jsonString){

	var obj;

	try{
		obj = eval("(" + jsonString + ")");
	}catch(e){
		obj = null;
	}

	return obj;

}


//----------------------------------------------------------
// Debug functions
//----------------------------------------------------------
function $dump(obj){

	alert(
		$toJSON(
			obj,
			{
				"indentText": '  ',
				"delimiter": "\n"
			}
		)
	);

}


//**********************************************************
// String Functions
//**********************************************************


//----------------------------------------------------------
// Repeat a string
//----------------------------------------------------------
String.prototype.$repeat = function(times){

	return new Array(times + 1).join(this);

}


//----------------------------------------------------------
// Trim a string
//----------------------------------------------------------
String.prototype.$trim = function(){

	return this.replace(/^[\s\n\t]*|[\s\n\t]*$/g, "");

}


//----------------------------------------------------------
// Get the char font width - detect Unicode Wide char
//----------------------------------------------------------
String.prototype.$charWidthAt = function(index){

	// paramters
	if(this.length < 1) return 0;
	if(!index) index = 0;

	// execute
	var charCode = this.charCodeAt(index);

	// Control Chars
	if(charCode < 32){
		return 0;
	}

	// Wide chars
	if(
		(charCode >= 0x1100 && charCode <= 0x115F)
		|| (charCode == 0x2329 || charCode == 0x232A)
		|| (charCode >= 0x2E80 && charCode <= 0x303E)
		|| (charCode >= 0x3041 && charCode <= 0x4DB5)
		|| (charCode >= 0x4E00 && charCode <= 0xA4C6)
		|| (charCode >= 0xAC00 && charCode <= 0xDFFF)
		|| (charCode >= 0xF900 && charCode <= 0xFAD9)
		|| (charCode >= 0xFE10 && charCode <= 0xFE19)
		|| (charCode >= 0xFE30 && charCode <= 0xFE6B)
		|| (charCode >= 0xFF01 && charCode <= 0xFF60)
		|| (charCode >= 0xFFE0 && charCode <= 0xFFEE)
		){
		return 2;
	}

	// Normal
	return 1;

}


//----------------------------------------------------------
// Cut a string for display - Unicode Wide char supported
//----------------------------------------------------------
String.prototype.$cut = function(length, param){

	// paramters
	var defaultParam = {
		'addPoints': true,
		'pointsText': '...',
		'reverse': false
	};

	param = param ? $extend(param, defaultParam) : defaultParam;

	// execute
	var result = this.valueOf();
	var realLength = 0;

	if(!param['reverse']){

		for(var i=0; (realLength<=length) && (i<this.length); i++){
			realLength += this.$charWidthAt(i);
		}

		result = result.substring(0, i);

	}else{

		for(var i=this.length-1; (realLength<=length) && (i>-1); i--){
			realLength += this.$charWidthAt(i);
		}

		result = result.substring(result.length - i, result.length);

	}

	if(param['addPoints'] && result.length != this.length){
		if(!param['reverse']){
			result += param['pointsText'];
		}else{
			result = param['pointsText'] + result;
		}
	}

	return result;

}


//----------------------------------------------------------
// HTML Encode
//----------------------------------------------------------
String.prototype.$encodeHTML = function(isTextArea){

	// execute
	var result = this.valueOf();
	result = result.replace(/\&/g, "&amp;");
	result = result.replace(/\>/g, "&gt;");
	result = result.replace(/\</g, "&lt;");
	result = result.replace(/\"/g, "&quot;");
	result = result.replace(/\'/g, "&#39;");

	if(!isTextArea) result = result.replace(/\n/g, "<br/>");

	return result;

}


//----------------------------------------------------------
// Remove HTML Tags
//----------------------------------------------------------
String.prototype.$stripHTML = function(){

	// execute
	var result = this.valueOf();
	result = result.replace(/\<[^\<\>]+\>/g,"");
	result = result.replace(/ +/g," ");
	result = result.replace(/\n+/g,"\n");

	return result;

}


//----------------------------------------------------------
// Sanitize HTML - Remove Malicious HTML Codes
//----------------------------------------------------------
String.prototype.$sanitizeHTML = function(arrAllowedTags){

	// parameters
	if(arrAllowedTags == undefined){
		arrAllowedTags = {
			"br": {},
			"b": {},
			"strong": {},
			"u": {},
			"em": {},
			"ul": {},
			"ol": {},
			"li": {},
			"blockquote": {
				"style": {invalid: "expression|script"}
			},
			"p": {
				"align": {valid: "left|center|right"},
				"style": {invalid: "expression|script"}
			},
			"span": {
				"style": {invalid: "expression|script"}
			},
			"div": {
				"align": {valid: "left|center|right"},
				"style": {invalid: "expression|script"}
			},
			"a": {
				"href": {valid: "^(http|https|ftp|mailto)\:"},
				"title": {},
				"target": {}
			},
			"img": {
				"src": {valid: "^(http|ftp):"},
				"alt": {}
			}
		};
	}


	// execute
	var result = this.valueOf();

	result = result.replace(/[\x00-\x1f\x7f]/ig, "");

	// Loop through all open tags
	var re = /\<([^\/].*?)(\/)?\>/ig;
	while( (arrMatch = re.exec(result)) != null){

		// Process Tags
		var sourceLength = arrMatch[1].length;
		var arrParts = arrMatch[1].split(" ");
		var targetString = "";

		for(var item in arrAllowedTags){

			// Check for Allowed Tags
			var tagName = arrParts[0];
			if(arrAllowedTags[tagName]){

				// Allowed Tags
				for(var i=1; i<arrParts.length; i++){

					// Check for attributes
					var pos = arrParts[i].indexOf("=");
					if(pos<1){

							// Not Found - Remove it
							arrParts.splice(i, 1);
							i--;

					}else{

						// Found
						var attrName = arrParts[i].substr(0, pos);
						var attrValue = arrParts[i].substr(pos+1, arrParts[i].length);

						// Remove quotes and encode inside content
						if(attrValue.indexOf('"')==0 || attrValue.indexOf("'")==0){
							attrValue = attrValue.substr(1, attrValue.length);
							attrValue = attrValue.substr(0, attrValue.length-1);
						}

						//Check For allowed attributes
						if(arrAllowedTags[tagName][attrName]){

							// Found
							// Do Validation
							if(arrAllowedTags[tagName][attrName].valid){
								var attrRe = new RegExp(arrAllowedTags[tagName][attrName].valid, "ig");
								if(!attrRe.test(attrValue)){
									// Not Found - Remove it
									arrParts.splice(i, 1);
									i--;
									continue;
								}
							}

							//Check for invalid content
							if(arrAllowedTags[tagName][attrName].invalid){
								var attrRe = new RegExp(arrAllowedTags[tagName][attrName].invalid, "ig");
								if(attrRe.test(attrValue)){
									// Not Found - Remove it
									arrParts.splice(i, 1);
									i--;
									continue;
								}
							}

							// Re-assemble the attribute item
							attrValue = attrValue.replace(/\"/ig, "&quot;");
							arrParts[i] = attrName + '="' + attrValue + '"';

						}else{
							arrParts.splice(i, 1);
							i--;
						}

					}

				}

				targetString = "<" + arrParts.join(" ") + arrMatch[2] + ">";

			}else{

				// Forbidden Tags - Remove it
				targetString = "";

			}

		}

		// Update String
		result = result.replace(arrMatch[0], targetString);

		// Set RegExp Position
		re.lastIndex += targetString.length - sourceLength;

	}

	return result;

}


//----------------------------------------------------------
// Sanitize URL - Remove Malicious Codes
//----------------------------------------------------------
String.prototype.$sanitizeURL = function(){

	// execute
	var result = this.valueOf();

	// no special pprotocols
	var re = /^(.*?)script:/ig;
	if(re.test(result)) return "";
	re = /^about:/ig;
	if(re.test(result)) return "";

	result = result.replace(/</ig, "%3C");
	result = result.replace(/>/ig, "%3E");
	result = result.replace(/ /ig, "%20");

	return result;

}


//----------------------------------------------------------
// Safe string parameter value for tag attributes
//----------------------------------------------------------
String.prototype.$safeQuote = function(bSingleQuote){

	// execute
	var result = this.valueOf();

	if(bSingleQuote){
		result = result.replace(/\'/ig, "\\\'");
	}else{
		result = result.replace(/\"/ig, "\\\"");
	}

	return result;

}

//**********************************************************
// Datetime Functions
//**********************************************************
$Date = {};
$Date.names = {};
$Date.names.weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
$Date.names.weekdayAbbr = ["Sun", "Mon", "Tue", "Wedy", "Thu", "Fri", "Sat"];
$Date.names.month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
$Date.names.monthAbbr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
$Date.names.ampm = ["AM", "PM"];
$Date.names.ampmAbbr = ["A", "P"];


//----------------------------------------------------------
// Parse a yyy-mm-dd hh:ii:ss format datetime string
//----------------------------------------------------------
$Date.parse = function(strDateTime){

	var theDate = new Date();
	var iNum = 0;
	var strDate;
	var strTime;

	// Break apart
	strDateTime = strDateTime.split(" ");

	if(strDateTime.length == 2){

		strDate = strDateTime[0];
		strTime = strDateTime[1];

	}else if(strDateTime.length == 1){

		strDate = strDateTime[0];
		strTime = "";

	}else{

		return null;

	}

	// Parse date string
	strDate = strDate.split("-");

	if(strDate.length != 3){

		return null;

	}else{

		iNum = parseInt(strDate[0], 10);
		if(iNum != NaN) theDate.setFullYear(iNum);

		iNum = parseInt(strDate[1], 10);
		if(iNum != NaN) theDate.setMonth(iNum-1);

		iNum = parseInt(strDate[2], 10);
		if(iNum != NaN) theDate.setDate(iNum);
	}

	// Parse time string
	strTime = strTime.split(":");

	if(strTime.length == 3){

		iNum = parseInt(strTime[0], 10);
		if(iNum != NaN) theDate.setHours(iNum);

		iNum = parseInt(strTime[1], 10);
		if(iNum != NaN) theDate.setMinutes(iNum);

		iNum = parseInt(strTime[2], 10);
		if(iNum != NaN) theDate.setSeconds(iNum);

	}

	return theDate;

}


//----------------------------------------------------------
// Convert Date to String
//----------------------------------------------------------
// d : day of the month
// dd : day of the month (with 0)
// ddd : abbr. name of the day of the week
// dddd : name of the day of the week
// M : month
// MM : month (with 0)
// MMM : abbr. name of the month
// MMMM : name of the month
// y : short year
// yy : short year (with 0)
// yyyy : full year in four digits
// h : hour in 12
// hh : hour in a 12 (with 0)
// H : hour in 24
// HH : hour in 24 (with 0)
// m : minute
// mm : minute (with 0)
// s : second
// ss : second (with 0)
// f : milliseconds
// t : abbr. AM/PM (A/P)
// tt : AM/PM
// z : time zone offset ("+" or "-" followed by the hour only)
// zz : time zone offset (with 0)
// zzz : full time zone offset
// zzzz : full time zone offset (with : between hour and minute)
// ==== SHORTHANDS =============================================
// CWA14051-1 : 2007-03-01 17:08:20           -> yyyy-MM-dd HH:mm:ss (Default)
//    RFC1123 : Thu, 01 Mar 2007 09:08:20 GMT -> ddd, dd MMM yyyy HH:mm:ss zzz (Always converted to GMT)
//    ISO8601 : 2007-03-01T17:08:20+0800     -> yyyy-MM-ddTHH:mm:sszzzz
//        W3C : 2007-03-01T17:08:20+0800      -> same as ISO8601
Date.prototype.$toString = function(strFormat, param){

	// parameters
	var defaultParam = {
		'names': $Date.names,
		'toUTC': false,
		'UTC' : ''
	};

	param = param ? $extend(param, defaultParam) : defaultParam;

	if(!strFormat) strFormat = "CWA14051-1";

	switch(strFormat){
		case "CWA14051-1":
			strFormat = "yyyy-MM-dd HH:mm:ss";
			break;
		case "RFC1123":
			strFormat = "ddd, dd MMM yyyy HH:mm:ss zzz";
			param['toUTC'] = true;
			param['UTC'] = 'GMT';
			break;
		case "W3C":
		case "ISO8601":
			strFormat = "yyyy-MM-ddTHH:mm:sszzzz";
			param['UTC'] = 'Z';
			break;
	}

	//execute
	var datetime = new Date(Number(this));

	if(param['toUTC']){
		datetime.setMinutes((datetime.getMinutes()+datetime.getTimezoneOffset()));
	}

	var tokens = {};
	tokens["d"] = datetime.getDate();
	tokens["dd"] = tokens["d"]<10 ? "0"+tokens["d"] : tokens["d"];
	tokens["ddd"] = param['names'].weekdayAbbr[datetime.getDay()];
	tokens["dddd"] = param['names'].weekday[datetime.getDay()];
	tokens["M"] = datetime.getMonth() + 1;
	tokens["MM"] = tokens["M"]<10 ? "0"+tokens["M"] : tokens["M"];
	tokens["MMM"] = param['names'].monthAbbr[datetime.getMonth()];
	tokens["MMMM"] = param['names'].month[datetime.getMonth()];
	tokens["yyyy"] = datetime.getFullYear();
	tokens["y"] = tokens["yyyy"] % 100;
	tokens["yy"] = tokens["y"]<10 ? "0"+tokens["y"] : tokens["y"];
	tokens["H"] = datetime.getHours();
	tokens["HH"] = tokens["H"]<10 ? "0"+tokens["H"] : tokens["H"];
	tokens["h"] = tokens["H"]>12 ? tokens["H"]-12 : tokens["H"];
	tokens["hh"] = tokens["h"]<10 ? "0"+tokens["h"] : tokens["h"];
	tokens["t"] = tokens["H"]>12 ? param['names'].ampm[1] : param['names'].ampm[0];
	tokens["tt"] = tokens["H"]>12 ? param['names'].ampmAbbr[1] : param['names'].ampmAbbr[0];
	tokens["m"] = datetime.getMinutes();
	tokens["mm"] = tokens["m"]<10 ? "0"+tokens["m"] : tokens["m"];
	tokens["s"] = datetime.getSeconds();
	tokens["ss"] = tokens["s"]<10 ? "0"+tokens["s"] : tokens["s"];
	tokens["f"] = datetime.getMilliseconds();
	var z_flag = datetime.getTimezoneOffset()<0 ? "+" : "-";
	var z_value = Math.abs(Math.round(datetime.getTimezoneOffset()/60));
	var z_minute = datetime.getTimezoneOffset()%60;
	tokens["z"] = z_flag + z_value;
	tokens["zz"] = z_flag + (z_value<10 ? "0"+z_value : z_value);
	tokens["zzz"] = tokens["zz"] + (z_minute<10 ? "0"+z_minute : z_minute);
	tokens["zzzz"] = tokens["zz"] + ":" + (z_minute<10 ? "0"+z_minute : z_minute);

	if(param['toUTC'] || (param['UTC'] != '' && datetime.getTimezoneOffset() == 0)){
		tokens["z"] = tokens["zz"] = tokens["zzz"] = tokens["zzzz"] = param['UTC'];
	}

	var result = "";
	var pos = 0;
	while(pos<strFormat.length){

		var currentChar = strFormat.charAt(pos);
		var currentToken = "";

		while((strFormat.charAt(pos)==currentChar) && (pos < strFormat.length)) {
			currentToken += currentChar;
			pos++;
		}

		if (tokens[currentToken]){
			result += tokens[currentToken];
		}else{
			result += currentToken;
		}

	}

	return result;

}





//**********************************************************
// Array Functions
//**********************************************************

//----------------------------------------------------------
// Check if an array contains a value
//----------------------------------------------------------
Array.prototype.$contains = function(value){

	return this.$indexOf(value)>-1 ? true : false;

}


//----------------------------------------------------------
// Find a value inside array
//----------------------------------------------------------
Array.prototype.$indexOf = function(value){

	for(var i=0; i<this.length; i++){
		if(this[i] == value) return i;
	}

	return -1;

}


//----------------------------------------------------------
// Sort - extended
//----------------------------------------------------------
Array.prototype.$sort = function(key, param){

	// parameters
	var defaultParam = {
		'compareLength': false,
		'descending': false
	};

	param = param ? $extend(param, defaultParam) : defaultParam;

	if(key == undefined){

		this.sort();

	}else{

		this.sort(
			function(item1, item2){
				var t1 = item1[key];
				var t2 = item2[key];
				if(param["compareLength"]){
					if(t1.length>t2.length) return 1;
					if(t1.length<t2.length) return -1;
				}
				if(t1>t2) return 1;
				if(t1==t2) return 0;
				return -1;
			}
		);

	}

	if(param["descending"]) this.reverse();

}


//**********************************************************
// DHTML Functions
//**********************************************************

//----------------------------------------------------------
// Get DHTML object by id
//----------------------------------------------------------
function $id(){

	var objs;
	if(arguments.length == 1){

		// single
		objs = document.getElementById(arguments[0]);

		if(!objs) objs = null;

	}else{

		// multiple
		objs = [];

		for(var i=0; i<arguments.length; i++){
			var obj = document.getElementById(arguments[i]);
			if(obj) objs.push(obj);
		}

		if(objs.length < 1) objs = null;

	}

	return objs;

}


//----------------------------------------------------------
// Get DHTML objects by name
//----------------------------------------------------------
function $name(name){

	var allObjs = [];

	for(var i=0; i<arguments.length; i++){
		var objs = document.getElementsByName(arguments[i]);
		allObjs = allObjs.concat(objs);
	}

	if(objs.length < 1) objs = null;

	return objs;

}


//----------------------------------------------------------
// Simplified event listener
//----------------------------------------------------------
function $event(action, type, obj, func){

	if(!obj) obj = window;
	if(!type || !func) return;

	if(action == "+"){
		if(window.attachEvent){
			obj.attachEvent("on" + type, func);
		}else{
			obj.addEventListener(type, func, false);
		}
	}else{
		if(window.detachEvent){
			obj.detachEvent("on" + type, func);
		}else{
			obj.removeEventListener(type, func);
		}
	}


}



//----------------------------------------------------------
// Shortcut for document.write and object.innerHTML
//----------------------------------------------------------
function $write(content, id, append){

	if(id){
		var obj = $id(id);
		if(obj){
			if(append){
				obj.innerHTML += content;
			}else{
				obj.innerHTML = content;
			}
			return;
		}
	}

	document.write(content);

}


//----------------------------------------------------------
// Read Language String
//----------------------------------------------------------
$langNamespace = {lang:{}};

function $lang(label){

	var str = $langNamespace[label];

	if(!str) str = "[!" + label + "]";

	return str;

}


//----------------------------------------------------------
// Write Language String
//----------------------------------------------------------
function $writeLang(label){
	document.write($lang(label));
}


//----------------------------------------------------------
// Parse QueryString into Object
//----------------------------------------------------------
function $parseQueryString() {

	var urlString = String(document.location);
	var result = {};

	var pos = urlString.indexOf("?");
	if(pos < 0) return result;

	var query = urlString.substr(pos + 1, urlString.length);
	query = query.split("&");

	for(var i=0; i<query.length;i++){
		pos = query[i].indexOf("=");
		var key = query[i].substr(0, pos);
		var value = query[i].substr(pos + 1, query[i].length);
		result[key] = value;
	}

	return result;

}


//----------------------------------------------------------
// Cookies Manager
//----------------------------------------------------------
function $cookies(method, name, value, ttl) {
	switch(method){
		case "get":
			var cookieArray = document.cookie.split("; ");
			for(var i=0; i<cookieArray.length; i++) {
				var item = cookieArray[i].split("=");
				if(item[0] == name && typeof(item[1])!= "undefined"){
					return item[1];
				}
			}
			return "";
			break;

		case "set":
			if(!ttl) ttl = 30;
			var date = new Date();
			date.setTime(date.getTime() + (ttl * 24*60*60*1000));
			document.cookie = name + '=' + value + '; expires=' + date.toGMTString() + '; path=/';
			break;

		case "del":
			document.cookie = name + '=;expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/';
			break;

	}

}


//**********************************************************
// DHTML UI Functions
//**********************************************************

//----------------------------------------------------------
// Show/Hide Element
//----------------------------------------------------------
function $toggleElement(id, method, style){

	var obj = document.getElementById(id);
	if(!obj) return false;

	if(!style) style = "block";

	switch(method){
		case "show":
			obj.style.display = style;
			return true;
			break;

		case "hide":
			obj.style.display = "none";
			return false;
			break;

		default:
			if(obj.style.display != "none"){
				obj.style.display = "none";
				return false;
			}else{
				obj.style.display = style;
				return true;
			}

	}

}


//----------------------------------------------------------
// Build Page Links
//----------------------------------------------------------
function $pageLinks(intCount, intPageSize, intCurrentPage, intShowPages, urlFormat){

	if(intShowPages == undefined) intShowPages = 5;
	if(urlFormat == undefined){
		urlFormat = {};
		urlFormat["separator"] = ' ';
		urlFormat["normal"] = '<a href="?page=%page"> %page </a>';
		urlFormat["active"] = '<a href="#" class="buttons-active"> %page </a>';
		urlFormat["prev"] = '<a href="?page=%page"> &#8249; </a>';
		urlFormat["next"] = '<a href="?page=%page"> &#8250; </a>';
		urlFormat["first"] = '<a href="?page=%page"> &laquo; </a>';
		urlFormat["last"] = '<a href="?page=%page"> &raquo; </a>';
	}

	var btr8Page = Math.floor((intCount-1)/intPageSize) + 1;
	var output = "";

	// Calculate Page Bounds
	var prevBound = intCurrentPage - Math.floor(intShowPages/2);
	var nextBound = intCurrentPage + Math.floor(intShowPages/2);
	if(prevBound <= 0){
		prevBound = 1;
		nextBound = intShowPages;
	}
	if(nextBound > btr8Page){
		nextBound = btr8Page;
		prevBound = btr8Page - intShowPages;
	}
	if(prevBound <= 0) prevBound = 1;

	if(btr8Page == 1){

		output = urlFormat["active"].replace(/\%page/ig, "1");

	}else{

		// First Page Link
		if(prevBound>1) output += urlFormat["first"].replace(/\%page/ig, "1") + urlFormat["separator"];

		// Previous Page Link
		if(intCurrentPage>1) output += urlFormat["prev"].replace(/\%page/ig, (intCurrentPage-1)) + urlFormat["separator"];

		// Main Portion
		for(var i=prevBound; i<=nextBound; i++){

			if(intCurrentPage == i){
				output += urlFormat["active"].replace(/\%page/ig, i) + urlFormat["separator"];
			}else if(i <= btr8Page){
				output += urlFormat["normal"].replace(/\%page/ig, i) + urlFormat["separator"];
			}

		}

		// Next Page Link
		if(intCurrentPage<btr8Page) output += urlFormat["next"].replace(/\%page/ig, (intCurrentPage+1));

		// Last Page Link
		if(nextBound<btr8Page) output += urlFormat["separator"] + urlFormat["last"].replace(/\%page/ig, btr8Page);

	}

	return output;

}



function UrlDecode(str){ 
	var ret=""; 
	for(var i=0;i<str.length;i++){ 
		var chr = str.charAt(i); 
		if(chr == "+"){ 
			ret+=" "; 
		}else if(chr=="%"){ 
			var asc = str.substring(i+1,i+3); 
			if(parseInt("0x"+asc)>0x7f){ 
				ret+=asc2str(parseInt("0x"+asc+str.substring(i+4,i+6))); 
				i+=5; 
			}else{ 
				ret+=asc2str(parseInt("0x"+asc)); 
				i+=2; 
			} 
		}else{ 
			ret+= chr; 
		} 
	} 
	return ret; 
}

function GetBrowser(){
	var AgentInfo = navigator.userAgent.toLowerCase();
	var browser = false;
	if (AgentInfo.indexOf("msie") > -1) {
		var re = new RegExp("msie\\s?([\\d\\.]+)","ig");
		var arr = re.exec(AgentInfo);
		if (parseInt(RegExp.$1) >= 7.0) {
			browser = true;
		}
	} else if (AgentInfo.indexOf("firefox") > -1) {
		browser = true;
	}
	return browser;
}