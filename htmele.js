'use strict';

class Htmele {

	static stringifyAttrs(attrs){
		var attrStr = '';
		for(var key in attrs){
			attrStr += key + '="' + attrs[key] + '" ';
		}
		return attrStr.trim();
	}
	
	static create(element, content, attrs){
		return '<' + element + ' ' + this.stringifyAttrs(attrs) + '>' + content + '</' + element + '>';
	}

	static createShort(element, attrs){
		return '<' + element + ' ' + this.stringifyAttrs(attrs) + '\>';
	}

}

module.exports = Htmele;
