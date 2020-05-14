---
description: 'Buttons allow users to take actions, and make choices, with a single tap.'
---

# Buttons



![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F13csiRkAQZ53xjAa3YH3aAt1nBHx-pkzp%2Fbuttons-usage.png)

### Usage 

Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like:

* Dialogs
* Modal windows
* Forms
* Cards
* Toolbars

## Principles

Buttons are identifiable, findable, and specific.

### Identifiable

Buttons should indicate that they can trigger an action.

### Findable

Buttons should be easy to find among other elements, including other buttons.

### Clear

A button’s action and state should be clear.

## Types

![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1rI63_05lNHyMtSwrnzXJ1Erg0TbkSDTY%2Fbuttons-types-all.png)

1. **Text button** \(low emphasis\) Text buttons are typically used for less important actions. 
2. **Outlined Button** \(medium emphasis\) Outlined buttons are used for more emphasis than text buttons due to the stroke. 
3. **Contained button** \(high emphasis\) Contained buttons have more emphasis, as they use use a color fill and shadow. 
4. **Toggle button** Toggle buttons group a set of actions using layout and spacing. They’re used less often than other button types. 

### Anatomy 

Buttons contain one required element and four optional elements.



![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1CohpRuQZDOxIDHVQgMp4ly0VAZ8KW2jO%2Fbuttons-anatomy-all.png)

1. Text button  A. Text label C. Icon \(optional\) 
2. Contained button A. Text label B. Container C. Icon \(optional\) 
3. Outlined button A. Text label B. Container C. Icon \(optional\) 
4. Toggle button A. Container C. Icon

## Text label

Text buttons and contained buttons use text labels, which describe the action that will occur if a user taps a button. If a text label...READ MORE

Text buttons and contained buttons use text labels, which describe the action that will occur if a user taps a button. If a text label is not used, an icon should be present to signify what the button does.

By default Material uses capitalized button text labels \(for languages that have capitalization\). This is to distinguish the text label from surrounding text. If a text button does not use capitalization for button text, find another characteristic to distinguish it such as color, size, or placement.

![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1EokWBcXKaeD8uTLuFYHneKeCZHTpsgcC%2Fbuttons-text-label-do.png)

{% hint style="success" %}
**Do.**  
Use capitalization, for languages that allow capitalization.
{% endhint %}

![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B4V689etGs17RXZoQ29uVlZXeGs%2Fbuttons-elements-text-label-dont-02.png)

{% hint style="danger" %}
**Don’t wrap text.**  
For maximum legibility, a text label should remain on a single line.
{% endhint %}



### Hierarchy and placement 

## Hierarchy

A layout should contain a single prominent button that makes it clear that other buttons have less importance in the hierarchy. This high-emphasis button commands...READ MORE

### A single, prominent button

A layout should contain a single prominent button that makes it clear that other buttons have less importance in the hierarchy. This high-emphasis button commands the most attention.

### Other buttons

An app can show more than one button in a layout at a time, so a high-emphasis button can be accompanied by medium- and low-emphasis buttons that perform less important actions. When using multiple buttons, ensure the available state of one button doesn’t look like the disabled state of another.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B4V689etGs17czJ6LUFBUkswdkU%2Fbuttons-layout-diagram-01.png)

A button’s level of emphasis helps determine its appearance, typography, and placement.

## Placement

Multiple button types can be used to express different emphasis levels. A floating action button \(FAB\) represents the primary action for a screen. Related Article...READ MORE

Multiple button types can be used to express different emphasis levels.

![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1_iiovyuaFrJRspG3pZ0qkZKFKZt8jARq%2Fbuttons-layout-when-to-use-02.png)

This screen layout uses:

1. An extended floating action button for the highest emphasis
2. A contained button for high emphasis
3. A text button for low emphasis

![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B4V689etGs17NUF0YS1pZHZwZms%2Fbuttons-layout-do-04.png)

{% hint style="success" %}
**DO:** In a bottom bar, when using multiple buttons, indicate the more important action by placing it in a contained button \(next to a text button\)
{% endhint %}

![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1oQCxhHdnLgQKW_3fwqpAQBT5ONl_UAkB%2Fbuttons-layout-dont.png)

Don’t.

Avoid using two contained buttons next to one another if they don’t have the same fill color.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1irg4ghZHzb5pR6oCgOYhwk2kyvd0Wy9w%2Fbuttons-layout-do-outlined.png)

Do.

In a bottom bar, when using multiple buttons, you can place a outlined button \(medium emphasis\) next to a contained button \(high emphasis\).![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1yt_GtJcPLaweeSS5PDP_iQEkc3jsClZP%2Fbuttons-layout-do-outlined2.png)

Do.

When using multiple buttons in a bottom bar, you can place a text button \(low emphasis\) next to an outlined button \(medium emphasis\).![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1T0UVLDLgvcaAchhRhAT8irKXucOvoNr1%2Fbuttons-layout-do-06.png)

Do.

Use a contained button in a bottom sheet next to other important details.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B4V689etGs17cjdpT3luZDlpdVU%2Fbuttons-layout-dont-08.png)

Don’t.

Don’t place a button below another button if there is space to place them side by side.

### Text button 

## Usage

Text buttons are typically used for less-pronounced actions, including those located: In cards, text buttons help maintain an emphasis on card content. A button’s text...READ MORE

Text buttons are typically used for less-pronounced actions, including those located:

* In dialogs
* In cards

In cards, text buttons help maintain an emphasis on card content.

![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B4V689etGs17akh1aHFOZF9FdjQ%2Fbuttons-text-when-to-use-01.png)

Text button![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Z5RDqn4keM2WGm2MS7dn0UjoBG2oIUGj%2Ftext-button-usage-2.png)

Use a text button in snackbars.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1ylGHcBJQXKvVDuarTOMsFgos3xo44z9n%2Ftext-button-usage-3.png)

A text button against an image background

### Text label

A button’s text label is the most important element on a button, as it communicates the action that will be performed when the user touches it.

![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1X7ZHIvRPgmaKt4QAYwUsjFOpltHT6FG1%2Ftext-button-usage-1.png)

Text label using a distinct action

![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1P1ErA6WotitY_-tEQY8HNyN1AZFrNDBI%2Ftext-button-text-label-caution.png)

Caution.

Text labels need to be distinct from other elements. If the text label isn’t capitalized, it should use a different color, style, or layout from other text.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1ZN1vzXmrDrBOlhjGacaGT-v45oyCa_Qd%2Fbuttons-textbutton-text-label-dont-1.png)

Don’t.

Avoid text labels that are too long. They should be concise.

## Placement

Text buttons are often embedded in contained components like cards and dialogs, in order to relate themselves to the component in which they appear. Because...READ MORE

Text buttons are often embedded in contained components like cards and dialogs, in order to relate themselves to the component in which they appear. Because text buttons don’t have a container, they don’t distract from nearby content.

  


![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B4V689etGs17azZBS2ZpMlZsMEU%2Fbuttons-text-when-to-use-02.png)

Dialogs use text buttons because the absence of a container helps unify the action with the dialog text. Align text buttons to the right edge for left-to-right scripts.  


![Text buttons minimize distraction from card content.](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B4V689etGs17Q3FyWDBNd2duRW8%2Fbuttons-text-when-to-use-03.png)



## States

Text buttons can be placed in front of a variety of backgrounds. Until the button is interacted with, its container isn’t visible. To maintain accessibility,...READ MORE

Text buttons can be placed in front of a variety of backgrounds. Until the button is interacted with, its container isn’t visible.

To maintain accessibility, Material Design provides baseline opacity values for the color overlays used by states. A brand can adjust opacity values to suit its color scheme.[StatesStates are visual representations used to communicate the status of a component or interactive element.Related Articlearrow\_downward](https://material.io/design/interaction/states.html#states)

![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F14c0HqGVluF8KDMuij_AV5puYPmorTU2u%2Ftext-buttons-states.png)

Text button states

### Outlined button 

## Usage

Outlined buttons are medium-emphasis buttons. They contain actions that are important, but aren’t the primary action in an app. Outlined buttons are also a lower...READ MORE

Outlined buttons are medium-emphasis buttons. They contain actions that are important, but aren’t the primary action in an app.

### Alternatives

Outlined buttons are also a lower emphasis alternative to contained buttons, or a higher emphasis alternative to text buttons.

![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1JQ9DzJZipZfgxJ4oOuvOv-I4GC2LvaJu%2Fbuttons-outlined-usage-01.png)

## Container

Outlined buttons display a stroke around a text label. Stroke can be represented in different ways: In a resting state, outlined buttons should display containment...READ MORE

Outlined buttons display a stroke around a text label. Stroke can be represented in different ways:

* Set a button’s width to be the size of the text label, with 16dp padding on the left and right
* Set the button’s relative position to the responsive layout grid

In a resting state, outlined buttons should display containment with a stroke and no fill.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1lT12LCR3yOwaWQNjFeUqq9CAAaj-BICo%2Fbuttons-outlined-usage-02.png)

Outlined button![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1xk3_ykz5ZP10BcKoMcY1aN9qN6fDwaNO%2Fbuttons-outlined-usage-flexible.png)

Do.

An outlined button’s width is dynamically set to fit the text label.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1JxSchffVaJ6j8u1RsXg-7W0DKdg-0BjC%2Fbuttons-outlined-usage-dont.png)

Don’t.

An outlined button’s width shouldn’t be shorter than its text.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F17E4Sqn6-yKajqeA6mWuQy4dUdYAGvreG%2Fbuttons-outlined-usage-caution.png)

Caution.

Protect text when using Outlined buttons in front of images. This image uses a light purple scrim to provide text protection for this outlined button.

## States

Outlined buttons can be placed on top of a variety of backgrounds. Its container is transparent and until the button is interacted with, a color...READ MORE

Outlined buttons can be placed on top of a variety of backgrounds. Its container is transparent and until the button is interacted with, a color isn’t visible.

To maintain accessibility, Material Design provides baseline opacity values for the color overlays used by states. A brand can adjust opacity values to suit its color scheme.[StatesStates are visual representations used to communicate the status of a component or interactive element.Related Articlearrow\_downward](https://material.io/design/interaction/states.html#states)

![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1VeAknkDyfsIiVrvEMVovd69hGLdYrlbL%2Foutlined-button-states.png)

Outlined button states

### Contained button 

## Usage

Contained buttons are high-emphasis, distinguished by their use of elevation and fill. They contain actions that are primary to your app.READ MORE

Contained buttons are high-emphasis, distinguished by their use of elevation and fill. They contain actions that are primary to your app.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F16SaPpmZFcNCy7gWT_RP_5bhZNIPvt8vw%2Fbuttons-contained-do-1.png)

A contained button![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1SzmKmPfztCvyJXvOLT1BdfJ-OhsKqYoX%2Fbuttons-text-label-do-2.png)

Do.

Text labels can be written in sentence case, as long as the button is clearly distinguishable from elements around it.

## Container

Contained buttons display a container around a text label. Containers can be represented in different ways: Contained buttons should display containers with a solid color....READ MORE

Contained buttons display a container around a text label. Containers can be represented in different ways:

* Set container width to the size of the text label with 16dp padding on the left and right
* Set the container’s relative position to the [responsive layout grid](https://material.io/design/layout/responsive-layout-grid.html#)

Contained buttons should display containers with a solid color.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1nqILGS7JjzcsDSuTLJ7GxRIO4z22kKBb%2Fbuttons-contained-do.png)

A contained button with solid color![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1T8fFWArBDSr8J7hMspaNF1H55v81u47o%2Fbuttons-elements-container-flexible.png)

Do.

A button container’s width is dynamically set to fit its text label.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1L8s5rUDPfuShXXR2XQMOO9rW2XPsAvu5%2Fbuttons-elements-container-flexible-dont.png)

Don’t.

A button container’s width shouldn’t be shorter than its text.

Button container width can be set according to the responsive layout grid.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Nu-N8KeHI4vzH9BIEpa2hjsEkrSp9N2F%2Fbuttons-elements-container-extended.png)

Contained button in a responsive layout grid

## Icon

Contained buttons can place icons next to text labels to both clarify an action and call attention to a button.READ MORE

Contained buttons can place icons next to text labels to both clarify an action and call attention to a button.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B4V689etGs17RWttV3c2TmFhTDQ%2Fbuttons-elements-icon-01.png)

Do.

Use icons that clearly communicate their meaning.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B4V689etGs17alhIWHItMi0tc2s%2Fbuttons-elements-icon-dont-02.png)

Don’t.

Don’t vertically align an icon and text in the center of a contained button.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B4V689etGs17M09PRm51NjdQUVE%2Fbuttons-elements-icon-dont-03.png)

Don’t.

Don’t use two icons in the same button.

## Shadow & elevation

Buttons at higher elevations typically appear more prominent in a design. On press, elevated buttons lift up and the container displays touch feedback.READ MORE

Buttons at higher elevations typically appear more prominent in a design. On press, elevated buttons lift up and the container displays touch feedback.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F13xttwOjDgUlozIMq8F--9lSF8FasGw9P%2Fbuttons-elements-shadow-elevation.png)

Higher elevation increases the prominence of a contained button.

## States

The following opacity values are recommended for button container fill colors. Each app can alter the overlay values to suit their brand’s color palette. States...READ MORE

The following opacity values are recommended for button container fill colors. Each app can alter the overlay values to suit their brand’s color palette.[StatesStates are visual representations used to communicate the status of a component or interactive element.Related Articlearrow\_downward](https://material.io/design/interaction/states.html#states)

![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1sVn3mYbhEDdWau1n2DRo9CCdo6J-3e1g%2Fcontained-buttons-states.png)

Contained button states

### Toggle button 

## Usage

Toggle buttons can be used to group related options. To emphasize groups of related toggle buttons, a group should share a common container. Only one...READ MORE

Toggle buttons can be used to group related options. To emphasize groups of related toggle buttons, a group should share a common container.

### Selected action

Only one option in a group of toggle buttons can be selected and active at a time. Selecting one option deselects any other.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1p-QIDSJDZpaQ2OSUM72HNFWFAYfLDikP%2Fbuttons-toggle-usage.png)

These toggle buttons present options for aligning text to the left, right, and center.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1NyD_U2EBroJbbJR0wWhTcZ5tSsWXrJw_%2Fbuttons-toggle-usage-2.png)

Icons can be used as toggle buttons when they allow selection, or deselection, of a single choice, such as marking an item as a favorite.

## States

A toggle button’s state makes it clear which button is active. Hover and focus states express the available selection options for buttons in a toggle...READ MORE

### Active and available toggle buttons

A toggle button’s state makes it clear which button is active. Hover and focus states express the available selection options for buttons in a toggle group.

### Disabled toggle buttons

Toggle buttons that cannot be selected can either be given a disabled state, or be hidden.[StatesStates are visual representations used to communicate the status of a component or interactive element.Related Articlearrow\_downward](https://material.io/design/interaction/states.html#states)

![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1ual-GXUAsETAGunFrTagJhSnyCfYH3dD%2Ftoggle-buttons-states.png)

Toggle button states

```markup
https://preview.uxpin.com/2341115b5cf83c6001567074b7db0b860a7c4a9a#/pages/109236717/specification/no-panels?mode=i
```

ddd

