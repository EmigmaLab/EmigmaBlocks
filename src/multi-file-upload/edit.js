import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	const ALLOWED_BLOCKS = [ 'create-block/file-upload' ]; // Allow only the file-upload block

	return (
		<div {...useBlockProps()}>
			<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
		</div>
	);
}
