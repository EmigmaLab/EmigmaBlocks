import { __ } from '@wordpress/i18n';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import { MediaUploadCheck, MediaUpload } from '@wordpress/block-editor';
import './editor.scss';
import trashIcon from './trashIcon.jpg';


// Define allowed types array
const allowedTypes = [
	'application/pdf',
	'application/msword',
	'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
	'application/vnd.ms-excel',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
];


export default function Edit({ attributes, setAttributes }) {
	const { mediaURL } = attributes;

	const onSelectMedia = (media) => {
		setAttributes({ mediaURL: media.url });
	};

	const onRemoveMedia = () => {
		setAttributes({ mediaURL: '' });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Media Settings', 'your-block')}>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={onSelectMedia}
							allowedTypes={allowedTypes}
							value={mediaURL}
							render={({ open }) => (
								<button onClick={open} className="components-button is-secondary">
									{mediaURL ? __('Change Media', 'your-block') : __('Select Media', 'your-block')}
								</button>
							)}
						/>
					</MediaUploadCheck>
					{mediaURL && (
						<div>
							<p>{mediaURL.split('/').pop()}</p>
							<button onClick={onRemoveMedia} className="components-button is-link is-destructive">
								{__('Remove Media', 'your-block')}
								<img src={trashIcon} alt="Trash Icon" />
							</button>
						</div>
					)}
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				{mediaURL ? (
					<p>{mediaURL.split('/').pop()}</p>
				) : (
					<p>{__('No media uploaded', 'your-block')}</p>
				)}
			</div>
		</>
	);
}