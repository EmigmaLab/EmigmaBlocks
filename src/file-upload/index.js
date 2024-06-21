/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import metadata from './block.json';
import save from './save';


const uploadIcon = (
<svg fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" viewBox="0 0 512 512" enable-background="new 0 0 512 512">
<path d="M470.7,277.2c3-11.2,4.7-22.9,4.7-35c0-75.8-61.4-137.1-137.1-137.1c-19.5,0-38,4.1-54.7,11.4
	c-16.8-39-55.6-66.3-100.7-66.3c-60.6,0-109.7,49.1-109.7,109.7c0,4.1,0.8,7.9,1.2,11.9C30.5,192.1,0,236.3,0,287.9
	c0,70.7,57.3,128,128,128h310.9c40.4,0,73.1-32.7,73.1-73.1C512,313.8,495.1,289.1,470.7,277.2z M292.6,251.3v91.4h-73.1v-91.4
	h-54.9l91.4-91.4l91.4,91.4H292.6z"/>
</svg>
);




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	/**
	 * @see ./edit.js
	 */
	icon: uploadIcon,
	edit: Edit,
    save
} );
