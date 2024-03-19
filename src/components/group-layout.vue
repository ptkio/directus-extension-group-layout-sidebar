<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		sections: string[];
		layout: 'layout' | 'layout-center';
		layoutFields: Field[];
	}>(),
	{
		sections: ['top', 'content', 'aside', 'before', 'after'],
		layout: 'layout',
		layoutFields: [],
	},
);
const groupClasses = (groupName: string): string[] => {
	const baseClass = `group-layout-${groupName}`;
	const field = props.layoutFields.find((field) => field.meta?.options?.layout_part === groupName);

	const appearanceClasses = [];
	if (field?.meta?.options?.background) {
		appearanceClasses.push('group-layout-with-' + field.meta.options.background);
	}
	if (field?.meta?.options?.border) {
		appearanceClasses.push('group-layout-with-' + field.meta.options.border);
	}

	return [baseClass, ...appearanceClasses];
};

const hasSection = (name: string): boolean => props.sections.includes(name);

const hasAnySection = (names: string[]): boolean => names.some((name) => hasSection(name));
</script>

<template>
	<div :class="{ 'group-layout': true, 'group-layout-centered': layout === 'layout-center' }">
		<div :class="groupClasses('aside')" v-if="hasSection('aside')">
			<slot name="group-layout-aside" />
		</div>

		<div class="group-layout-main" v-if="hasSection('top')">
			<div class="center">
				<div :class="groupClasses('top')">
					<slot name="group-layout-top" />
				</div>
			</div>
		</div>

		<div class="group-layout-main" v-if="hasAnySection(['before', 'content', 'after'])">
			<div class="center">
				<div :class="groupClasses('before')" v-if="hasSection('before')">
					<slot name="group-layout-before" />
				</div>
				<div :class="groupClasses('content')" v-if="hasSection('content')">
					<slot name="group-layout-content" />
				</div>
				<div :class="groupClasses('after')" v-if="hasSection('after')">
					<slot name="group-layout-after" />
				</div>
			</div>
		</div>
	</div>

	<slot></slot>
</template>

<style scoped>
.group-layout-with-border {
	border-radius: var(--theme--border-radius);
	border: var(--theme--border-width) solid var(--theme--border-color);
	padding: calc(var(--content-padding) / 2);
}
.group-layout-with-border-accent {
	border-radius: var(--theme--border-radius);
	border: var(--theme--border-width) solid var(--theme--border-color-accent);
	padding: calc(var(--content-padding) / 2);
}
.group-layout-with-border-subdued {
	border-radius: var(--theme--border-radius);
	border: var(--theme--border-width) solid var(--theme--border-color-subdued);
	padding: calc(var(--content-padding) / 2);
}
.group-layout-with-background {
	border-radius: var(--theme--border-radius);
	background: var(--theme--background-normal);
	padding: calc(var(--content-padding) / 2);
}
.group-layout-with-background-subdued {
	border-radius: var(--theme--border-radius);
	background: var(--theme--background-subdued);
	padding: calc(var(--content-padding) / 2);
}
.group-layout-with-background-accent {
	border-radius: var(--theme--border-radius);
	background: var(--theme--background-accent);
	padding: calc(var(--content-padding) / 2);
}
.group-layout {
	width: 100%;
	position: relative;
	padding: 0;
	gap: 35px;
	max-width: 1127px;

	&.group-layout-centered {
		margin: 0 auto;
	}

	> div {
		min-height: 50px;
	}

	.group-layout-main {
		padding: 0;
		width: calc(100% - 335px);

		.center {
			width: calc(var(--theme--form--column-gap) + (var(--form-column-max-width) * 2));
			max-width: 100%;
			margin: 0 auto;
			display: flex;
			flex-direction: column;
			gap: 50px;
			> div:empty {
				display: none;
			}
		}
	}
	.group-layout-main + .group-layout-main {
		padding-top: 50px;
	}
	.group-layout-aside {
		width: 300px;
		float: right;
		position: sticky;
		top: 80px;
	}
}

/** In dialog box, don't show layout */
#dialog-outlet .group-layout {
	display: flex;
	flex-direction: column;
	> div {
		position: relative;
		width: 100%;
		float: none;
		top: 0;
		order: 3;

		&.group-layout-main {
			padding: 0;
		}

		&:first-child {
			order: 2;
		}
		&:nth-child(2) {
			order: 1;
		}
	}
}
/** In small screen case, don't show it too */
@media screen and (max-width: 1279px) {
	.group-layout {
		display: flex;
		flex-direction: column;

		> div {
			position: relative !important;
			width: 100% !important;
			float: none !important;
			top: 0 !important;
			order: 3 !important;

			&.group-layout-main {
				padding: 0 !important;
			}

			.center {
				margin: 0 !important;
			}

			&:first-child {
				order: 2 !important;
			}
			&:nth-child(2) {
				order: 1 !important;
			}
		}
	}
}
</style>
