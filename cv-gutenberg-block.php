<?php
/**
 * Plugin Name:       Cv Gutenberg Block
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       cv-gutenberg-block
 *
 * @package CreateBlock
 */

if ( !defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}
/**
 * Registers the block using a `blocks-manifest.php` file, which improves the performance of block type registration.
 * Behind the scenes, it also registers all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
 */
function create_block_cv_gutenberg_block_block_init() {
    /**
     * Registers the block(s) metadata from the `blocks-manifest.php` and registers the block type(s)
     * based on the registered block metadata.
     * Added in WordPress 6.8 to simplify the block metadata registration process added in WordPress 6.7.
     *
     * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
     */
    if ( function_exists( '  ' ) ) {
        wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
        return;
    }

    /**
     * Registers the block(s) metadata from the `blocks-manifest.php` file.
     * Added to WordPress 6.7 to improve the performance of block type registration.
     *
     * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
     */
    if ( function_exists( 'wp_register_block_metadata_collection' ) ) {
        wp_register_block_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
    }
    /**
     * Registers the block type(s) in the `blocks-manifest.php` file.
     *
     * @see https://developer.wordpress.org/reference/functions/register_block_type/
     */
    $manifest_data = require __DIR__ . '/build/blocks-manifest.php';
    foreach ( array_keys( $manifest_data ) as $block_type ) {
        register_block_type( __DIR__ . "/build/{$block_type}" );
    }
}
add_action( 'init', 'create_block_cv_gutenberg_block_block_init' );
function wpcv_enqueue_font_awesome() {
    // Frontend এবং Editor — উভয়ের জন্য লোড হবে
    wp_enqueue_style(
        'font-awesomexx',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css',
        array(),
        '6.5.0'
    );
}
add_action( 'enqueue_block_assets', 'wpcv_enqueue_font_awesome' );
add_action( 'enqueue_block_editor_assets', 'wpcv_enqueue_font_awesome' );
