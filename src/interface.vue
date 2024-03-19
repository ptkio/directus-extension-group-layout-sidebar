<script setup lang="ts">
import { Field, ValidationError } from '@directus/types';
import { computed } from 'vue';
import GroupLayout from './components/group-layout.vue';

const props = withDefaults(
	defineProps<{
		field: Field;
		fields: Field[];
		primaryKey: number | string;
		values: Record<string, unknown>;
		initialValues: Record<string, unknown>;
		disabled?: boolean;
		batchMode?: boolean;
		batchActiveFields?: string[];
		loading?: boolean;
		validationErrors?: ValidationError[];
		badge?: string;
		layout_part?: 'layout' | 'layout-center' | 'top' | 'content' | 'aside' | 'before' | 'after';
		direction?: string;
	}>(),
	{
		batchActiveFields: () => [],
		validationErrors: () => [],
		layout_part: 'layout',
	},
);

defineEmits(['apply']);

const groupLayoutFields = computed(() =>
	props.fields.filter(
		(field) =>
			field.type === 'alias' &&
			field.meta?.interface === 'ptkio-group-layout' &&
			field.meta?.options?.layout_part,
	),
);

const groupsNames = computed(() =>
	groupLayoutFields.value.reduce((acc, field) => {
		acc[field.meta.options.layout_part] = field.field;
		return acc;
	}, {}),
);

const sections = computed(() => [...new Set(groupLayoutFields.value.map((field) => field.meta.options.layout_part))]);
</script>

<template>
	<div class="fill">
		<GroupLayout :sections="sections" :layout-fields="groupLayoutFields" :layout="layout_part">
			<template #group-layout-top>
				<v-form
					:initial-values="initialValues"
					:fields="fields"
					:model-value="values"
					:primary-key="primaryKey"
					:group="groupsNames.top"
					:validation-errors="validationErrors"
					:loading="loading"
					:batch-mode="batchMode"
					:disabled="disabled"
					:badge="badge"
					:direction="direction"
					:show-no-visible-fields="false"
					:show-validation-errors="false"
					@update:model-value="$emit('apply', $event)"
				/>
			</template>
			<template #group-layout-content>
				<v-form
					:initial-values="initialValues"
					:fields="fields"
					:model-value="values"
					:primary-key="primaryKey"
					:group="groupsNames.content"
					:validation-errors="validationErrors"
					:loading="loading"
					:batch-mode="batchMode"
					:disabled="disabled"
					:badge="badge"
					:direction="direction"
					:show-no-visible-fields="false"
					:show-validation-errors="false"
					@update:model-value="$emit('apply', $event)"
				/>
			</template>
			<template #group-layout-aside>
				<v-form
					:initial-values="initialValues"
					:fields="fields"
					:model-value="values"
					:primary-key="primaryKey"
					:group="groupsNames.aside"
					:validation-errors="validationErrors"
					:loading="loading"
					:batch-mode="batchMode"
					:disabled="disabled"
					:badge="badge"
					:direction="direction"
					:show-no-visible-fields="false"
					:show-validation-errors="false"
					@update:model-value="$emit('apply', $event)"
				/>
			</template>
			<template #group-layout-before>
				<v-form
					:initial-values="initialValues"
					:fields="fields"
					:model-value="values"
					:primary-key="primaryKey"
					:group="groupsNames.before"
					:validation-errors="validationErrors"
					:loading="loading"
					:batch-mode="batchMode"
					:disabled="disabled"
					:badge="badge"
					:direction="direction"
					:show-no-visible-fields="false"
					:show-validation-errors="false"
					@update:model-value="$emit('apply', $event)"
				/>
			</template>
			<template #group-layout-after>
				<v-form
					:initial-values="initialValues"
					:fields="fields"
					:model-value="values"
					:primary-key="primaryKey"
					:group="groupsNames.after"
					:validation-errors="validationErrors"
					:loading="loading"
					:batch-mode="batchMode"
					:disabled="disabled"
					:badge="badge"
					:direction="direction"
					:show-no-visible-fields="false"
					:show-validation-errors="false"
					@update:model-value="$emit('apply', $event)"
				/>
			</template>
		</GroupLayout>
	</div>
</template>
