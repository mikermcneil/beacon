# sails-plus
### a Sails.js application boilerplate

*Under Construction*

This is a fresh Sails install, with a few extras:

- some useful packages are added in package.json, including the Jam.js frontend dependency manager
- Jam and Require.js integrated into the site layout header
- Conditionizr.js added
- reusable layout elements modularized into /snippets folder (see below)

Snippet Manager:
---

The goal of this is to create a library of commonly used snippets, which can be passed information or easily overridden.  This is inspired by WordPress' template tag system, and the WP get_template_part function. Maybe over time, this could grow into a full plugin system.

Some snippets don't need any settings. Other snippets take a single setting, this is available as 'id' inside the snippet. Other snippets need more settings, you can pass them a JSON object.

I'd like to get the manager working like this:

	snippet('jquery');													// prints out google jquery include				
	snippet('ga', 'UA-6700192');										// prints out google analytics code
	snippet('youtube', {id: 'yt99erls', width: 300, height: 200)});  	// id = 1001, desc = "text goes here"
	
	snippets('jquery, conditionizr, require');
	snippets('jquery', 'conditionizr', ['favicon', 'favicon.png']);
	snippets(['youtube', {id: 'yt98erls', width: 300, height: 200)}], ['youtube', {id: 'xt33epes', width: 300, height: 200)}]);
	
The proof of concept is getting close to this, but there's still some problems. (see layout.ejs for details)
	
Ideally, the settings and defaults could also be set externally like this:
	
	snippets.ga.id = 'UA-6700192';
	snippets.favicon.defaults.id = 'favicon.png';
	
Snippets would be organized into folders (underneath the /snippets root), but the folder need not be specified when you call them. To override a snippet, just duplicate it in the root and edit it.
	
This is a work in progress! Feedback welcome, d@dylanized.com	

Snippet Library (alpha):
---

Here's a start to the snippets library. Most of these are just stubbed out, need actual code still.

System:

- css.ejs (wrapper for assets.css)
- js.ejs (wrapper for assets.js)
- conditionizr.ejs (direct from cdn)
- favicon.ejs
- ga.ejs
- google-font.ejs
- jquery.ejs (direct to google)
- require.ejs (loads jam dependencies)
- templates.ejs
- typekit.ejs
- viewport.ejs

Content:

- disqus.ejs
- instagram.ejs
- lipsum.ejs (placeholder text)
- placeholdit.ejs (placeholder image)
- quote.ejs
- scribd.ejs
- tweet.ejs
- vimeo.ejs
- youtube.ejs

Other Todos:
---

- get require.js working with knockout (or bypass it)
- integrate require.js compiling into process
- finish view snippets, inspired by punch-thirdparty-snippets-helper
- how to call snippets from any template?
- make cleaner way to call snippets, pass single var?
- how to pass variables into snippets?
- make google fonts working, and supporting array
- connect Knockout.js mapping plugin to the Sails websocket
- HTML minification?
- markdown view parser?
- frontend boilerplate code
- optional js assets in footer?
