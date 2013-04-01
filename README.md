# Beacon
### a better blogging platform

*Under Construction*

Beacon is an idea for a streamlined CMS engine built on top of [Sails.js](http://sailsjs.org) and Node. It is modeled after WordPress, but without the bad parts - plus a bunch of extras thrown in.

So far this is just a conceptual mockup, please pardon our dust.

What Might It Look Like?
---

Like this:

	<!-- the main post loop -->
			
	<% if (posts.hasPosts) { %>    

		<% if (page.isArchive) { %>
			<h1><%- page.title %></h1>					        
		<% } %>

		<% posts.forEach() { %>
		
			<div class="post <%- post.postType %>">

				<h2><a href="<%- post.permalink %>" title="<%- post.title %>"><%- post.title %></a></h2>
				
				<h4>by <%- post.author %> on <%- post.date('m d, y') %></h4>

				<%- post.content({'limit': 50, 'link': 'Read More...'}) ->

				<small><% snippet('commentCount') %></small>

				<!-- how to display a featured img -->
				<img class="thumb" src="<%- post.featuredImg('thumb') %>" alt="" />
			
			</div>

		<% } %>
		
		<% } else snippet('error'); %>
		
And like this:

![Beacon Theme Structure](http://cl.ly/image/2i3s0q1J2936/beacon_theme.png)		
 		
Wouldn't that be cool?		 		

Stucture
---

- Themes: the frontend of your blog or website
- Plugins: small add-ons that give extra functionality
- Apps: large add-ons that give your website super powers

Content would be broken into "collections" (similar to WordPress custom post types) - starting with Posts, Pages and Users. The theme data model and theme structure would stay very similar to how WordPress works, but simpler and more consistent. Themes, plugins and apps could be installed thru an automatic "container" loader.


More Ideas
---

- [Proposed Data Model](MODEL.md) 
- [Theme Structure Overview](THEME.md)
- [Default Theme Prototype](beacon/themes/skipper/)
- [Single-Page Theme Prototype](views/blog.ejs)
- [Snippet Manager Overview](SNIPPETS.md)
- [Conditionals and Helpers List](beacon/apps/core/helpers.js)
- [What Beacon adds to Sails.js](SAILS.md)
- [Why Beacon Would be Better than WordPress](WORDPRESS.md)


Credits
---

- [Sails.js](http://sailsjs.org)
- [EJS](http://embeddedjs.com/)
- Liquid Templating Language
- [WordPress](http://wordpress.org)
- [St. Louis Javascript Meetup](http://stljs.org)


What do you think?
---

[d@dylanized.com](mailto:d@dylanized.com)

[@dylanized](http://twitter.com/dylanized)
