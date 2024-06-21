<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

// Check if mediaURL attribute is set
if (isset($attributes['mediaURL']) && !empty($attributes['mediaURL'])) {
    $media_url = esc_url($attributes['mediaURL']);
    $media_id = attachment_url_to_postid($media_url); // Get the attachment ID from the URL
    $metadata = wp_get_attachment_metadata($media_id); // Get the attachment metadata

    // Initialize the block content variable
    $block_content = '';

    if ($metadata && isset($metadata['filesize'])) {
        // Append the image tag with the file size
        $block_content .= '<div class="d-flex flex-column gap-4">';
        $block_content .= '<a href="' . $media_url . '" class="file-item d-flex align-items-center text-reset">';
        $block_content .= '<h3><i class="fa-solid fa-cloud-arrow-up"></i></h3>';
        $block_content .= '<div class="content ms-2">';
        $block_content .= '<h4 class="mb-1">' . basename($media_url) . '</h4>'; // Display the filename
        $block_content .= '<p class="fs-4 mb-1">' . wp_check_filetype($media_url)['ext'] . ', ' . size_format($metadata['filesize']) . '</p>'; // Display file type and size
        $block_content .= '<p class="text-primary">' . __('Download File', 'emigmablocks') . '</p>';
        $block_content .= '</div></a></div>';        
    }
} else {
    // Fallback content if mediaURL is not set or empty
    $block_content = ''; // You can set a default fallback here if needed
}

echo wp_kses_post($block_content);
?>
