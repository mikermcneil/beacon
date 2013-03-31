BEACON - concept for an ideal blogging platform
===

site
	.title
	.desc
	.home
	.theme
	.plugins
	.apps
	.fields   	<< allow custom fields on the site	
	
page

	.title (in the head)
	.template
	.type (category / single / page / archive / etc)
	.slug
	.permalink
	.posts
	.bodyclass

post
	.id
	.title
	.content({ limit : 100; images : false; html : false; })
	.date
	.status
	.template
	.type
		.set_taxonomies()
		.set_fields()
	.taxonomies
	.fields
	.comments
	.author
	.numComments
	
image
	.id
	.slug
	.ext
	.path
	
cats
tags
taxonomies()
	
users
	.id
	.username
	.realname
	.access
	.avatar
	.links
	.intro
	
posts
	.reset
	.default
	.query {
		cat
		postType
		tag
		fields
		date
		orderBy
		order
		num
	}