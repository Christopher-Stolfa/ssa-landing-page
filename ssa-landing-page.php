<?php

/**
 * Plugin Name: ssa-landing-page
 * Plugin URI: a url
 * Description: ssa landing page plugin
 * Version: 0.1 
 * Text Domain: ssa-landing-page
 * Author: Christopher Stolfa <xcstolfax@gmail.com>
 */

// First register resources with init
function ssa_landing_page_init()
{
    $path = "/frontend/static";
    if (getenv('WP_ENV') == "development") {
        $path = "/frontend/build/static";
    }
    wp_register_script("ssa_landing_page_js", plugins_url($path . "/js/main.js", __FILE__), array(), "1.0", false);
    wp_register_style("ssa_landing_page_css", plugins_url($path . "/css/main.css", __FILE__), array(), "1.0", "all");
}

add_action('init', 'ssa_landing_page_init');

// Function for the short code that call React app
function ssa_landing_page()
{
    wp_enqueue_script("ssa_landing_page_js", '1.0', true);
    wp_enqueue_style("ssa_landing_page_css");
    return "<div id=\"ssa_landing_page\"></div>";
}

add_shortcode('ssa_landing_page', 'ssa_landing_page');
