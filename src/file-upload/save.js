import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { mediaURL } = attributes;

    if (!mediaURL) {
        return null; // If mediaURL is empty, return null to output nothing
    }

    return (
        <p {...useBlockProps.save()}>
            <img src={mediaURL} alt="Uploaded media" style={{ maxWidth: '100%', height: 'auto' }} />
        </p>
    );
}
