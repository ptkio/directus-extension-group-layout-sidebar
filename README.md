# Group layout sidebar interface for Directus
Group layout sidebar is an interface for Directus that provides field organization with a docked sidebar.

![](https://raw.githubusercontent.com/ptkio/directus-extension-group-layout-sidebar/main/screenshots/main.png)

## Layout Organization
You have 5 available sections:

- **Top:** Fields will be placed at the top, suitable for fields such as title.
- **Sidebar:** Fields will be positioned in a docked sidebar, ideal for fields like status, slug, etc.
- **Before Content:** Fields will be placed before the main fields.
- **Content:** This is designated for main fields.
- **After Content:** This section is reserved for secondary fields such as SEO or other accessory fields.

All sections have a small spacing between them to differentiate each one.

![](https://raw.githubusercontent.com/ptkio/directus-extension-group-layout-sidebar/main/src/assets/layout.svg)

### It's Mobile-Friendly
In responsive scenarios, such as on mobile devices or in a drawer layout, the sidebar will be positioned after the "Top" layout group.

## How to Use This Interface

1. **Initiate by Creating a Layout Wrapper:**
    - Add a new field using this interface and set the layout option to "layout wrapper".

2. **Create Layout-Specific Fields:**
    - Add new fields with this interface, setting the layout option as "top", "sidebar", "content", etc., according to your needs.

3. **Organize Fields Within the Layout Wrapper:**
    - Place fields designated as "top", "sidebar", "content", ..., inside the field marked as "layout wrapper".

4. **Subgroup Placement:**
    - Insert your fields into the corresponding subgroups (e.g., "top", "sidebar", "content").

### Tips
**Identify Groups with Key Fields:**

Utilize the key field of each group for easier identification within the editor.
**Example:** grp_sidebar

## Enhancements and Bugs 
This is the first release. 

Please feel free to report any bugs or suggestions, and I will look into addressing them.

## Recommended extension
**Compact Theme:**
https://github.com/ptkio/directus-extension-theme-clean-compact-light

## Screenshots:
#### Example 1: The user form
![Example 1: user form](https://raw.githubusercontent.com/ptkio/directus-extension-group-layout-sidebar/main/screenshots/example_form.png)

#### Example 2: The settings form
![Example 2: settings form](https://raw.githubusercontent.com/ptkio/directus-extension-group-layout-sidebar/main/screenshots/example_settings.png)
