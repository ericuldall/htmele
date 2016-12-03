# HTMeLe
## Programatically create HTMElements

### Usage
```
npm install htmele
```

```
var htmele = require('htmele');
var standard = htmele.create(tag <string>, content <string>, attributes <object>); //creates standard html tag <tag attr1=val1 attr2=val2>content</tag>
var short = htmele.createShort(tag <string>, attributes <object>); //creates short html tag <tag attr1=val1 attr2=val2 />
```

### Example

```
var mydiv = htmele.create(
	'div',
	htmele.create(
		'a',
		htmele.createShort('img', {src: "click-here-image.jpg"}) + ' Click Here',
		{
			href: "http://google.com"
		}
	),
	{
		style: "color: #fff; width: 200px;"
	}
);

console.log(mydiv); //<div style="color: #fff; width: 200px;"><a href="http://google.com"><img src="click-here-images.jpg" /> Click Here</a></div>
```
