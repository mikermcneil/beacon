<?php

	/* util functions */

	// field helper - WIP

	if ( ! function_exists( 'get_field' ) ) {	
		function get_field($field='title', $post_id=false, $arg3='thumbnail') {

			// if post_id is slug or ID
			if (is_int($post_id)) {
				$identifier = 'page_id';
			} elseif (is_string ($post_id)) {
				$identifier = 'pagename';
			}

			if ($identifier) {

				// set up query					
				$args = array(
						$identifier => $post_id
				);											
				$query = new WP_Query( $args );				

				// loop through sites and populate sites_array	
				while ( $query->have_posts() ) : $query->the_post();			
					$post = $query->post;								
				endwhile;

			} elseif (is_object($post_id)) {

				// pass thru post obj
				$post = $post_id;

			} else {

				// grab default post
				global $post;			

			}

			switch ($field) {
			    case 'title':
			        $return = $post->post_title;
			        break;
			    case 'content':
			        $return = $post->post_content;
			        break;
			    case 'slug':
			        $return = $post->pagename;
			        break;
			    case 'id':
			    	$return = $post->ID;
			    	break;
			    case 'permalink':
			    	$return = $post->guid;
			    	break;
			    // the rest of this is untested
			    case 'thumbnail';
			    	$return = get_the_post_thumbnail( $post->ID, $arg3 );
			    	break;
			    case 'thumbnail_url';				    	
					$thumb = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), $arg3 );
					echo $thumb[0];
				case 'parent';
					$return = $post–>post_parent;
					break;
				case 'type';
					$return = $post–>post_type;
					break;
				case 'date';
					$return = get_the_date($arg3);
					break;
				case 'post_intro';
					$return = get_post_intro($post->post_content);
					break;
				case 'first_paragraph';
					$return = get_first_paragraph($post->post_content);
					break;
				case 'content_imageless';
					return preg_replace('/<img[^>]+>/', '', get_field('content'));
					break;
				case 'num_comments';
					$return = $post->comment_count;
					break;				
			}							

			if ($identifier) wp_reset_postdata();			

			return $return;

		}	
	}

	if ( ! function_exists( 'echo_field' ) ) {	
		function echo_field($field='title', $post_id=false) {
			echo ( get_field($field, $post_id) );
		}		
	}


	if (!function_exists('get_first_paragraph')) {
		function get_first_paragraph($content) {
			$content = get_field('content');

			$start = strpos($content, '<p>');
			$end = strpos($content, '</p>', $start);

			return substr($content, $start, $end-$start+4);
		}
	}

	// theme directory helper

	if ( ! function_exists( 'get_theme_dir' ) ) {
		function get_theme_dir($generation='child') {

			if ($generation == 'parent') {
				return (get_bloginfo('template_directory'));
			} else {
				return (get_stylesheet_directory_uri());
			}

		}
	}

	if ( ! function_exists( 'echo_theme_dir' ) ) {	
		function echo_theme_dir($generation) {
			echo ( get_theme_dir($generation) );
		}		
	}	

	// compress if/then/echo helper  (inspire by @getkirby)

	if ( ! function_exists( 'ecco' ) ) {		
		function ecco($condition, $output="", $alt_output="") {
			if ($condition) {
				echo ($output);
			} else {
				echo ($alt_output);
			}	
		}	
	}		

	// custom field functions - WIP, NEEDS TESTING

	if (!function_exists('has_custom_field')) {
		function has_custom_field($id, $key) {
			$id = get_the_id($id);
			if (get_post_meta($id, $key, true)) {
				return true;
			}
			return false;
		}
	}

	if (!function_exists('get_custom_field')) {
		function get_custom_field($PostID = null, $Key) {
			global $post;

			$PostID = $PostID ? (int) $PostID : $post->ID;

			return get_post_meta($PostID, $Key, true);
		}
	}

	if (!function_exists('echo_custom_field')) {
		function echo_custom_field($PostID = null, $Key) {
			print get_custom_field($PostID, $Key);
		}
	}

	if (!function_exists('get_custom_fields')) {
		function get_custom_fields($PostID = null, $Key) {
			global $post;

			$PostID = $PostID ? (int) $PostID : $post->ID;

			return get_post_meta($PostID, $Key, false);
		}
	}

	function display_custom_field_shortcode($id, $key) {
		$id = get_post_id($id);
		if (get_post_meta($id, $key, true)) {
			echo do_shortcode(get_post_meta($id, $key, true));
		}	
	}		

	if (!function_exists('load_google_font')) {
		function load_google_font($font) {
				?>
				<link href='http://fonts.googleapis.com/css?family=<?php echo $font ?>' rel='stylesheet' type='text/css' />
				<?php
		}	
	}