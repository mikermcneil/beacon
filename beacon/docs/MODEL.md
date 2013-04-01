Concept of Beacon Data Model:
---

site

-	.title
-	.desc
-	.home
-	.theme
-	.plugins
-	.apps
-	.fields   	<< allow custom fields on the site	
	
page

-	.title (in the head)
-	.template
-	.type (category / single / page / archive / etc)
-	.slug
-	.permalink
-	.posts
-	.bodyclass
	
collections						<< like WordPress Custom Post Types	
								<< comes with Posts, Pages, Users
								<< addons for Portfolio, Links
								
post
-	.id
-	.title
-	.slug
-	.permalink
-	.collection					<< like WP's custom post types
-	.postType					<< micro blogging taxonomy
-	.content({ limit: 100; images: false; html: false; link: "Read More..."})
-	.rawContent 				<< no formatting
-	.date()
-	.modified
-	.status
-	.template
-	.cats
-	.tags
-	.taxonomies
-	.fields
-	.comments
-	.author	
-	.parent
-	.order
-	.commentCount
	
image
-	.id
-	.slug
-	.ext
-	.path
		
cats
tags			<< global set of categories, tags
postTypes		<< micro blogging formats, only applied to posts
taxonomies		<< additional taxonomies can be added
	
users
-	.id
-	.username
-	.realname
-	.access
-	.avatar
-	.links
-	.desc
-	.fields
	
menus			<< simple abstraction of WordPress menu manager
-	.slug
-	.links
-		.text
-		.title
-		.dest
	
query			<< default collection is posts, comes preloaded like 'var posts = query()'
-	.reset
-	.default
	
query_obj
-	.hasPosts
-	.forEach