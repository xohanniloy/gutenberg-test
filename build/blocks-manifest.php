<?php
// This file is generated. Do not modify it manually.
return array(
	'cv-gutenberg-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/cv-gutenberg-block',
		'version' => '0.1.0',
		'title' => 'Cv Gutenberg Block - Test',
		'category' => 'widgets',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			'attributes' => array(
				'className' => 'wp-block-create-block-cv-gutenberg-block'
			)
		),
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => 'Hello from CV Gutenberg Block'
			),
			'tag' => array(
				'type' => 'string',
				'default' => 'h2'
			),
			'titleColor' => array(
				'type' => 'string',
				'default' => '#444444'
			),
			'BgColor' => array(
				'type' => 'string',
				'default' => '#444444'
			),
			'gradientBg' => array(
				'type' => 'string'
			),
			'Padding' => array(
				'type' => 'object',
				'default' => array(
					'top' => '20',
					'right' => '20',
					'bottom' => '20',
					'left' => '20'
				)
			),
			'radius' => array(
				'type' => 'number',
				'default' => '0'
			),
			'url' => array(
				'type' => 'string'
			),
			'alt' => array(
				'type' => 'string'
			),
			'id' => array(
				'type' => 'number'
			),
			'gallery' => array(
				'type' => 'array'
			),
			'repeatIcon' => array(
				'type' => 'array',
				'default' => array(
					
				)
			)
		),
		'supports' => array(
			'color' => array(
				'background' => false,
				'text' => true
			),
			'html' => false,
			'typography' => array(
				'fontSize' => true
			),
			'anchor' => true,
			'align' => true
		),
		'textdomain' => 'cv-gutenberg-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
