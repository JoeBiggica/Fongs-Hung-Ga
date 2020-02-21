const routes = require('next-routes')()
	.add('App', '/', 'Index')
	.add('classes', '/classes', 'Classes')
	.add('liondance', '/liondance', 'LionDance')
	.add('about', '/about', 'About')
	.add('contact', '/contact', 'Contact')
	.add({name: 'article', pattern: '/article/:slug', page: 'Article'})
	//.add('/:noname/:lang(en|es)/:wow+', 'complex')
	//.add({name: 'beta', pattern: '/v3', page: 'v3'})

module.exports = routes;
