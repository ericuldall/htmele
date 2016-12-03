'use strict';

class Htmele {

	static getShortTags(){
		return [
			'img',
			'br',
			'hr',
			'input',
			'link',
			'meta'
		]
	}

	static stringifyAttrs(attrs){
		var attrStr = '';
		for(var key in attrs){
			attrStr += key + '="' + attrs[key] + '" ';
		}
		return attrStr.trim();
	}

	static stringifyContent(content){
		return Array.isArray(content) ? content.join(' ') : content;
	}
	
	static create(element){
		element = element.toLowerCase();
		if(	this.getShortTags().indexOf(element) > -1 ){
			return this.createShort.apply(this, Array.from(arguments));
		}

		return this.createLong.apply(this, Array.from(arguments));
	}

	static createLong(element, content, attrs){
		return '<' + element + ' ' + this.stringifyAttrs(attrs) + '>' + this.stringifyContent(content) + '</' + element + '>';
	}

	static createShort(element, attrs){
		return '<' + element + ' ' + this.stringifyAttrs(attrs) + '>';
	}

}

module.exports = Htmele;
