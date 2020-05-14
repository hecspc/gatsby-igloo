# Menus



### Usage 

A menu displays a list of choices on a temporary surface. They appear when users interact with a button, action, or other control.

## Principles

Menus are unobtrusive, contextual, and scannable.READ MORE![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Qdkn6JB9F6hIVUmB8jJxxkvPefomYX-7%2Fmenu-illos-unobtrusive.png)

### Nimble

Menus should be easy to open, close, and interact with.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1tgzRZxtFZ-zYfECAAlAojFORXcZgCWmn%2Fmenu-illos-contextual.png)

### Contextual

Menu content should be suited to user needs.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Sv_1ajPD_rMFy--Cus8RwgsPegZPaiHS%2Fmenu-illos-scannable.png)

### Scannable

Menu items should be easy to scan.

## Types

Menus allow users make a selection from multiple options. They are less prominent and take up less space than selection controls, such as a set...READ MORE

Menus allow users make a selection from multiple options. They are less prominent and take up less space than selection controls, such as a set of radio buttons.

![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B54x0KDcs5U-R3BETkhoSnlpZXM%2Foption-baseline-dropdown.png)

### Dropdown menus

Dropdown menus display a list of options, triggered by an icon, button, or action. Their placement varies based on the element that opens them.

![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B54x0KDcs5U-aUp4eDJOWW0yUFE%2Foption-exposed-line-item.png)

### Exposed dropdown menus

Exposed dropdown menus display the currently selected menu item above the list of options. Some variations can accept user-entered input.

## Placement

Menus appear in front of all other permanent UI elements. The maximum height of a menu should be at least one row less than the...READ MORE

### Elevation

Menus appear in front of all other permanent UI elements.

![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B54x0KDcs5U-amdTUHZoX0RhYkk%2Fbehavior-location.png)

Menus appear at a higher elevation than all other permanent UI elements.

### Height

The maximum height of a menu should be at least one row less than the height of the app’s UI.

![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1vMZ-REWDM4q50tWciD6AoLPXryTp9-rl%2Fmenu-length.png)

The rows in this menu are 32dp tall. That’s also the space used between the menu and the bottom of the screen.

### Position

Menus should be positioned relative to the edge of the screen or browser. They typically appear next to \(or in front of\) the element that generates them. If they are in a position to be cut off by the browser or screen’s edge, the menu can instead appear to the left, right, or above the element that generates it.

![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B54x0KDcs5U-cV83SmI1eDdsMGs%2Fcascading-menu-2.png)

Menus can change their position to avoid being truncated by the screen or browser’s edge.

### Anatomy 

Menus display lists of related options \(which can be grouped together\) as well as unrelated options. Menus appear when a user taps an interactive UI element such as an icon, button, action, or content, such as selected items or text.[ListsLists are continuous, vertical display of text or images.Related Articlearrow\_downward](https://material.io/design/components/lists.html#lists)

![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B54x0KDcs5U-aWUwOFdLMC1HR2c%2Felements-text-only.png)

### Text list

1. Container
2. Text
3. Divider

![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B54x0KDcs5U-djl1TUpiNDI4ODQ%2Felements-text-icons.png)

### Text and icon list

1. Container
2. Leading icon
3. Text
4. Divider

![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B54x0KDcs5U-LXcteXBoTUdlbUE%2Felements-text-icon-command.png)

### Text, icon, and keyboard command list

1. Container
2. Leading icon
3. Text
4. Divider
5. Command
6. Cascading menu indicator

![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B54x0KDcs5U-dEtrb3B2WjlxNlk%2Felements-text-states.png)

### Text with selection state list

1. Selection state

## Actions

Action states inside menusREAD MORE

### Disabled actions

Display actions as disabled when they can only be used sometimes, under certain conditions. They should be displayed as disabled rather than removing them.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B54x0KDcs5U-SURUSWpwRUpuN1k%2Fdisabled-text-copy.png)

The Redo action is disabled when that action isn’t available, and the Cut and Copy actions are disabled until content is selected.

### Behavior 

## Scrolling

If not all menu items are displayed at once, menus can be scrollable. In this state, menus show a persistent scrollbar.READ MORE

If not all menu items are displayed at once, menus can be scrollable. In this state, menus show a persistent scrollbar.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F19nhQUFavIjrk04dwpPRRXukOKR49istm%2Fscrollable.png)

When its content is scrollable, menus display scrollbars.

## Motion

Menus open using a scale animation \(an animation that shows an element grow in size\). The animation creates a relationship between the menu and the...READ MORE

Menus open using a scale animation \(an animation that shows an element grow in size\). The animation creates a relationship between the menu and the action that generates the menu.

### Position

A menu’s position on screen affects where and how it will appear. If opened at the top of the screen, it will expand downwards \(to avoid being cropped\).

Menus at different positions on screen open in different ways, adapting to the space available.

By default, menus open with an entrance animation. However, on desktop, menus can skip the animation and open instantly instead.

1. Mobile menus have entrance animations
2. Desktop menus have the option to open instantly

### Dropdown menu 

## Usage

A dropdown menu is a compact way of displaying multiple choices. It appears upon interaction with an element \(such as an icon or button\) or...READ MORE

A dropdown menu is a compact way of displaying multiple choices. It appears upon interaction with an element \(such as an icon or button\) or when users perform a specific action.

## Placement

Dropdown menus are positioned relative to both the element that generates them and the edges of the screen or browser. They can appear in front...READ MORE

Dropdown menus are positioned relative to both the element that generates them and the edges of the screen or browser. They can appear in front of, beside, above, or below the element that generates them.

### Default placement

A dropdown menu is typically positioned below the element that generates it.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B54x0KDcs5U-a2JhNkN6RVQxaEU%2Fbaseline-menu-intro.png)

A dropdown menu triggered by an icon on mobile.

### Cascading menu \(Desktop only\)

Cascading menus allow users to choose from a large variety of choices, by displaying menus with multiple levels of hierarchy.

They are organized into menus of parent list items that contain child list items. Child list items appear to right or left of parent list items, depending on where there is room to expand child list items.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1mhrkJ86SLipQ23E4qoeuOg-T5WwxZt4o%2Fmenu-intro.png)

A parent list item can trigger a cascading menus containing child actions.

### Contextual menu

Contextual menus aren’t triggered by a consistent UI element. They appear next to where a user taps, and their actions can vary based on the tap target.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1gd9u8DyXLip1oURXFEro2Faiz1H7FapU%2Fdropdown-contextual.png)

To reveal a contextual menu, tap and hold, or right click \(desktop\), selected text.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B54x0KDcs5U-NG10N1FXc25UeGM%2Fbehavior-text-selection.png)

A contextual menu appears next to selected text.

## Behavior

When an option is chosen from a dropdown menu, the element that generates it remains the same.READ MORE

When an option is chosen from a dropdown menu, the element that generates it remains the same.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B54x0KDcs5U-NC1tYmRKQWIzdDA%2Fbehavior-icon.png)

1. Tapping the icon triggers a dropdown menu.
2. Choosing a menu option doesn’t change the icon of the element generating the menu.

### Exposed dropdown menu 

## Usage

Exposed dropdown menus display the currently selected menu item above the menu. They can be used only when a single menu item can be chosen...READ MORE

Exposed dropdown menus display the currently selected menu item above the menu.

They can be used only when a single menu item can be chosen at a time.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1jZJMO39zb6ZxoDREog5GqOFbJBjpzp9k%2Fexposed-line-item-intro.png)

This exposed dropdown menu displays the currently selected item \(in this case, a font selection\) above the menu.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1rL2xG7X_c0Hd81tlCPpo0puWwT68z_Nt%2Fselect-intro.png)

On desktop, a filled exposed dropdown menu displays the currently selected item \(in this case, a type of phone\) above the menu.

## Behavior

Upon selecting an item, an exposed dropdown menu updates to display that item. In some cases, it can accept and display user input \(whether or...READ MORE

Upon selecting an item, an exposed dropdown menu updates to display that item. In some cases, it can accept and display user input \(whether or not it’s listed as a menu choice\).![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1RABVLpsjAjSPIarQDmDYMnN1tH6zs8-b%2Fselect-behavior-filled.png)

Filled exposed dropdown menu states

1. Inactive  
2. Activated  
3. Inactive and populated   
  
![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1nKIXQ03XlW3r1XhvrX2saBJaU6xI5oME%2Fselect-behavior-outlined.png)

Outlined exposed dropdown menu states

1. Inactive  
2. Activated  
3. Inactive and populated   
  


## Placement

An exposed dropdown menu is positioned below the element that generates the dropdown. Alternatively the filled and outlined variations can open a native picker.READ MORE

An exposed dropdown menu is positioned below the element that generates the dropdown. Alternatively the filled and outlined variations can open a native picker.

The menu appears below the text field on desktop and mobile. On mobile, a native picker can instead be used.

## Variation

An exposed dropdown menu can be customized to have a different appearance or behavior. An editable dropdown menu displays the currently selected menu item above...READ MORE

An exposed dropdown menu can be customized to have a different appearance or behavior.

### Editable dropdown menu

An editable dropdown menu displays the currently selected menu item above the menu. A user can enter a value that’s not listed in the menu. You can restrict the types of values that users can enter to certain types. For example, you can set the menu to only accept positive numbers.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Tm9leB3kjm2bhhAVmtRnGTBE_Z4fEkuP%2Feditable-dropdown-intro.png)

This editable dropdown menu displays the currently selected font size. A user can also enter a value not listed in the menu, such as seven.

### Filled dropdown menu

A filled dropdown menu looks like a filled text field. It displays the currently selected menu item above the menu.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1w6p664vHi-DOc3Ul5NYeDT1pmE9w8h4Y%2Fselect-type-filled.png)

Filled dropdown menu

The menu container corners furthest from the menu control have a 4dp radius.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1eRL5QWFjsLRcO0uTiDkcGA0UW3bVaa2w%2Fselect-type-filled-menu-style.png)

Filled dropdown menu

Top corners: 0dp radius  
Bottom corners \(shaped\): 4dp radius  
  
  


When using a leading icon with a filled dropdown menu, the floating label and the menu items must be aligned with one another.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1EDGPDh9kaWfnm_ydOWRCbYv3sMchFpfF%2Fselect-leading-icon-filled.png)

Filled dropdown menu with a leading icon

### Outlined dropdown menu

An outlined dropdown menu looks like an outlined text field. It displays the currently selected menu item above the menu.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1c5N4e5LSayeww8gtcJvPGrQx4Veyn5Yy%2Fselect-type-outlined.png)

Outlined dropdown menu

For outlined dropdown menus, all corners of the menu container have a 4dp radius.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1BpXvplunzHzEEEN20UiVmJQYzq0Qmuah%2Fselect-type-outlined-menu-style.png)

Outlined dropdown menu

All corners: 4dp radius

Forms with outlined dropdown menus should align the menu label with the icon.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1t23_fpUnRs7Ea5_f5I0-HSwPDxrQR5wc%2Fselect-leading-icon-outlined.png)

Outlined dropdown menu with a leading icon

## States

![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F15FKXcRxcJWxj9VtmFrQe4erb2t5Q5Mcu%2Fselect-states-filled.png)

Filled exposed dropdown menu states![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1kES4H5C7LCWt5uqnEXZSZnO6te4-tb9j%2Fselect-states-outlined.png)

Outlined exposed dropdown menu states

### Theming 

## Basil Material theme

This recipe app’s menus have been customized using Material Theming. Areas of customization include color and typography. Basil is a recipe browsing app that demonstrates...READ MORE

This recipe app’s menus have been customized using Material Theming. Areas of customization include color and typography.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F10_CMDoSUHyqn363izxWaXCagih4WJu03%2Fmenu-basil-ahero.png)

Basil’s customized menu[BasilBasil is a recipe browsing app that demonstrates how Material Design can be used in the food lifestyle space.Related Articlearrow\_downward](https://material.io/design/material-studies/basil.html#basil)[The Color SystemThe Material Design color system helps you choose colors for your user interface.Related Articlearrow\_downward](https://material.io/design/color/the-color-system.html#the-color-system)[Applying color to UIIn a UI, color has a variety of roles: from containing meaning, to expressing a look and feel.Related Articlearrow\_downward](https://material.io/design/color/applying-color-to-ui.html#applying-color-to-ui)

### Color

Basil’s menus use custom color on four elements: the menu container, text, icon, and hover overlay.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1kwEvZDZZmwXuPWUJut6OBvjXoqc234_O%2Fmenu-basil-color.png)

<table>
  <thead>
    <tr>
      <th style="text-align:left">Element</th>
      <th style="text-align:left">Category</th>
      <th style="text-align:left">Attribute</th>
      <th style="text-align:left">Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">Container</td>
      <td style="text-align:left">Surface</td>
      <td style="text-align:left">
        <p>Color</p>
        <p>Opacity</p>
      </td>
      <td style="text-align:left">
        <p>#FFFFFF</p>
        <p>100%</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Text</td>
      <td style="text-align:left">On Surface</td>
      <td style="text-align:left">
        <p>Color</p>
        <p>Opacity</p>
      </td>
      <td style="text-align:left">
        <p>#29302E</p>
        <p>100%</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Icon</td>
      <td style="text-align:left">Primary</td>
      <td style="text-align:left">
        <p>Color</p>
        <p>Opacity</p>
      </td>
      <td style="text-align:left">
        <p>#356859</p>
        <p>54%</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Hover overlay</td>
      <td style="text-align:left">Primary</td>
      <td style="text-align:left">
        <p>Color</p>
        <p>Opacity</p>
      </td>
      <td style="text-align:left">
        <p>#356859</p>
        <p>4%</p>
      </td>
    </tr>
  </tbody>
</table>### Typography

Basil’s menu text uses custom typography.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1U7llUZH-FNpd419SB-bzyNN-k29NhhVN%2Fmenu-basil-type.png)

| Element | Category |  |
| :--- | :--- | :--- |


