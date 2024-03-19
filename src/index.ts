import { defineInterface } from '@directus/extensions-sdk';
import InterfaceComponent from './interface.vue';
import PreviewSVG from './assets/preview.svg';
import LayoutSVG from './assets/layout.svg';

export default defineInterface({
	id: 'ptkio-group-layout',
	name: 'Group layout sidebar',
	icon: 'web',
	hideLabel: true,
	description: 'Group layout with sidebar',
	component: InterfaceComponent,
	types: ['alias'],
	localTypes: ['group'],
	group: 'group',
	preview: PreviewSVG,
	options: [
		{
			field: 'layout_part',
			name: 'Layout',
			type: 'string',
			schema: {
				default_value: 'layout',
			},
			meta: {
				interface: 'select-dropdown',
				width: 'full',
				options: {
					choices: [
						{
							text: 'Layout wrapper (centered)',
							value: 'layout-center',
						},
						{
							text: 'Layout wrapper',
							value: 'layout',
						},
						{
							text: 'Top',
							value: 'top',
						},
						{
							text: 'Sidebar',
							value: 'aside',
						},
						{
							text: 'Before content',
							value: 'before',
						},
						{
							text: 'Content',
							value: 'content',
						},
						{
							text: 'After content',
							value: 'after',
						},
					],
				},
			},
		},
		{
			field: 'background',
			name: 'Background color',
			schema: {
				default_value: '',
			},
			meta: {
				width: 'half',
				interface: 'select-dropdown',
				options: {
					allowNone: true,
					choices: [
						{
							value: 'background',
							text: 'Background',
						},
						{
							value: 'background-accent',
							text: 'Background (Accent)',
						},
						{
							value: 'background-subdued',
							text: 'Background (Subdued)',
						},
					],
				},
			},
		},
		{
			field: 'border',
			name: 'Border color',
			schema: {
				default_value: '',
			},
			meta: {
				width: 'half',
				interface: 'select-dropdown',
				options: {
					allowNone: true,
					choices: [
						{
							value: 'border',
							text: 'Border',
						},
						{
							value: 'border-accent',
							text: 'Border (Accent)',
						},
						{
							value: 'border-subdued',
							text: 'Border (Subdued)',
						},
					],
				},
			},
		},
		{
			field: 'guide',
			name: 'Information',
			type: 'alias',
			meta: {
				interface: 'presentation-notice',
				width: 'full',
				options: {
					text:
						'<div style="display: flex; gap: 20px;"><div>' +
						'<strong style="text-transform: uppercase">How to use this group field:</strong>' +
						'<p>- Start by creating a "Layout Wrapper" group.</p>' +
						'<p>- Create subgroups with layouts for the top, sidebar, content, etc., and place them inside the Layout Wrapper.</p>' +
						'<p>- Place your fields inside the subgroups.</p>' +
						'<br><strong  style="text-transform: uppercase">Tips:</strong><p>Use the key field of each group to identify them in the editor. Example : grp_sidebar</p>' +
						'</div><div style="width: 300px;flex: 1">' +
						LayoutSVG +
						'</div></div>',
				},
			},
		},
	],
});
