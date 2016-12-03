# HTMeLe
## Programatically create HTMElements

### Usage
```
npm install htmele
```

```
var htmele = require('htmele');
var element = htmele.create(tag <string>[, content <string|array>, attributes <object>]); //creates standard html tag <tag attr1=val1 attr2=val2>content</tag>
```

### Example

**
```
var mydiv = htmele.create(
	'div',
	htmele.create(
		'a',
		[
			htmele.create('img', {src: "click-here-image.jpg"}),
			'Click Here'
		],
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

### More Info

HTMEle with autmatically determine whether or not to use a full html block or short tag based on the tag string you pass to it.
If you want to see a list of which tags are treated as short you can see an array by calling the following method:

```
console.log(htmele.getShortTags());
```

Short tags do not accept any content so the second argument is treated as attributes. Take the following example to differentiate:

```
// Standard HTML Block tag <div>
console.log(htmele.create('div', ['foo', 'bar'], {style: "background: #eee;"})); //<div style="background: #eee;">foo bar</div>

// Short HTML tag <img>
console.log(htmele.create('img', {src: "my-image.jpg"})); //<img src="my-image.jpg">
```
