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

![Beacon Theme Structure](http://f.cl.ly/items/3E3l1J1L1b153n0v1l1Y/beacon.png)		
 		
Wouldn't that be cool?		 		

Stucture
---

- Themes: the frontend of your blog or website
- Plugins: small add-ons that give extra functionality
- Apps: large add-ons that give your website super powers

Content would be broken into "collections" (similar to WordPress custom post types) - starting with Posts, Pages and Users. The "post" model and theme structure would follow WordPress' lead, but with some improvements. Themes, plugins and apps could be installed thru an automatic "container" loader.


More Ideas
---

- [Proposed Data Model](beacon/docs/MODEL.md) 
- [Theme Structure Overview](beacon/docs/THEME.md)
- [Default Theme Prototype](beacon/themes/skipper/)
- [Single-Page Theme Prototype](views/blog.ejs)
- [Snippet Manager Overview](beacon/docs/SNIPPETS.md)
- [Conditionals and Helpers List](beacon/apps/core/helpers.js)
- [What Beacon adds to Sails.js](beacon/docs/SAILS.md)
- [Why Beacon Would be Cooler than WordPress](beacon/docs/WORDPRESS.md)


Credits
---

- [Sails.js](http://sailsjs.org)
- [EJS](http://embeddedjs.com/)
- Liquid Templating Language
- [WordPress](http://wordpress.org)
- [St. Louis Javascript Meetup](http://stljs.org)


What do you think?
---

Hit me up:

- email [d@dylanized.com](mailto:d@dylanized.com)
- twitter [@dylanized](http://twitter.com/dylanized)
