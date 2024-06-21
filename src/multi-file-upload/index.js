import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import EditSingle from '../file-upload/edit';
import saveSingle from '../file-upload/save';
import EditMulti from './edit';
import saveMulti from './save';
import singleMetadata from '../file-upload/block.json';
import multiMetadata from './block.json';

registerBlockType(singleMetadata.name, {
	edit: EditSingle,
	save: saveSingle,
	...singleMetadata,
});

registerBlockType(multiMetadata.name, {
	edit: EditMulti,
	save: saveMulti,
	...multiMetadata,
});
