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

// Shortcode 2

// function ssa_landing_page_shortcode()
// {

//     return '<div id="ssa_landing_page" ></div>';
// }

// add_shortcode('ssa_landing_page', 'ssa_landing_page_shortcode');

// function ssa_landing_page_load_assets()
// {

//     $react_app_js  = plugin_dir_url(__FILE__) . 'frontend/build/static/js/all_in_one_file.js';
//     $react_app_css = plugin_dir_url(__FILE__) . 'frontend/build/static/css/all_in_one_file.css';

//     // time stops stylesheet/js caching while in development, might want to remove later  
//     $version = time();
//     wp_enqueue_script('ssa_landing_page', $react_app_js, array(), $version, true);
//     wp_enqueue_style('ssa_landing_page', $react_app_css, array(), $version);
// }

// add_action('wp_enqueue_scripts', 'ssa_landing_page_load_assets');
