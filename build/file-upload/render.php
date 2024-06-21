<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

 var_dump($content);
 echo '<br>';
 var_dump($attributes);



// Check if mediaURL attribute is set
if (isset($attributes['mediaURL']) && !empty($attributes['mediaURL'])) {
    $media_url = esc_url($attributes['mediaURL']);
    $block_content = '<img src="' . $media_url . '" alt="Uploaded media" style="max-width: 100%; height: auto;" />';
} else {
    // Fallback content if mediaURL is not set or empty
    $block_content = ''; // You can set a default fallback here if needed
}

echo wp_kses_post($block_content);
?>
