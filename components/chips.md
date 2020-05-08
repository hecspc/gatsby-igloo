---
description: 'Chips are compact elements that represent an input, attribute, or action.'
---

# Chips

![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1PAItZL1RXY_fWc8ZWFDJKqGRVV4OQwuy%2Fpurpose-01.png)

### Usage 

Chips allow users to enter information, make selections, filter content, or trigger actions. Chips should appear dynamically as a group of multiple interactive elements. Unlike buttons, which should be a consistent and familiar call to action, one that a user expects to appear as the same action in the same general area.

## Principles

Chips are compact, relevant and focused.

### Compact

Chips are compact components that represent discrete information.

### Relevant

Chips should have a clear and helpful relationship to the content or task they represent.

### Focused

Chips should make tasks easier to complete, or content easier to sort.

## Types

There are input, choice, filter and action chips.

![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1bqMzV-lgxi6GhC8zF6MrxLHtReMV1S_b%2Fchips-types-entry.png)

### Input chips

Input chips represent information used in fields, such as an entity or different attributes.

![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1PSFSymk6oxY9x-FtfKEknOuQpEFU_-g8%2Fchips-types-choice.png)

### Choice chips

In sets that contain at least two options, choice chips represent a single selection.

![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F13XlEcbFJxRBSlK18nPZsZ-qqbUE1hFYq%2Fchips-types-filter.png)

### Filter chips

Filter chips represent filters for a collection.

![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Fj8Z4RaB4ewDFc_q9rr3AymHRX0SS3oW%2Fchips-types-action.png)

### Action chips

Action chips trigger actions related to primary content.

### Anatomy 

![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1lxdaRJ6FXCuTNdmb5bxfBFevLdhzG4EG%2Felements.png)

#### 1. Container

Chip containers hold all chip elements, and their size is determined by those elements. A container can also be defined by a stroke.

#### 2. Thumbnail \(optional\)

Thumbnails identify entities \(like individuals\) by displaying an avatar, logo, or icon.

#### 3. Text

Chip text can be an entity name, description, tag, action, or conversational.

#### 4. Remove icon \[optional\]

Entry chips can include a Remove icon.

### Input chips 

## Usage

Input chips represent a complex piece of information in compact form, such as an entity \(person, place, or thing\) or text. They enable user input...READ MORE

Input chips represent a complex piece of information in compact form, such as an entity \(person, place, or thing\) or text. They enable user input and verify that input by converting text into chips.

![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1VZTQ-Hzb1YUQF9xn1ovXnVkPV_3IVO3o%2Fchips-types-input.png)

An input chip used to show an entity.

![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1tIKiHTZ4L2cPOlRMVbGSojGSp8R9h_QR%2Fchips-types-input-outlined.png)

An outlined input chip used to show an entity.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1GavwusfKRTyh1CRgGv9jYbxa962xNQQP%2Finput-usage-text.png)

Input chips can provide suggested responses.

## Behavior

Input chips are predictive, editable, movable, expandable, and appear in groups.READ MORE

### Transformative

Input chips transform text based on user input.

Text transforming into an input chip.

### Editable

An input chip’s text is editable until the user takes an action with the chip, such as sending an email. To edit an input chip’s text, tap the chip.

Input chips become editable when tapped.

### Informational

If text input is not recognized by the system, input chips can display an error state.

![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1KuXrco1yGRVGK1SNNm7KnfRySvRpWXHa%2Fentry-chip-behavior-error.png)

Input chips can represent an error state.

### Multiple

A single field can contain multiple entry chips.

Multiple entry chips

### Movable

Entry chips can be reordered or moved into other fields.

Movable entry chips

### Expandable

Input chips can expand to show more information or options.

Expandable entry chips

## Placement

Input chips work together with other UI elements.READ MORE

Input chips can be integrated with other components. They can appear:

* Inline with the text input cursor in a field
* In a stacked list
* In a horizontally scrollable list

![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1fD_fhRHOQl0yc9BtWmzPbtj3gU9qFG4s%2Fentry-chip-behavior-stackable.png)

Input chips can wrap to a new row if all of the chips need to be visible.

Input chips that horizontally scroll.

## States

![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1SdXde429CX7iphzp_SawbCRBZmKZ4q8d%2Finput-chips-states.png)

### Choice chips 

## Usage

Choice chips allow selection of a single chip from a set of options. Choice chips clearly delineate and display options in a compact area. They...READ MORE

Choice chips allow selection of a single chip from a set of options.

Choice chips clearly delineate and display options in a compact area. They are a good alternative to toggle buttons, radio buttons, and single select menus.

![ A set of choice chips](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1xMFLiF1q3AT2keIicd9uVZ6dATiozjgQ%2Fchips-types-choice.png)

![A set of outlined choice chips](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1d9vjFKpmKTobFghrf-iyVyOoXkpPTMb2%2Fchips-types-choice-outlined.png)

## Behavior

Selecting a single choice chip automatically deselects all other chips in the set.READ MORE

Selecting a single choice chip automatically deselects all other chips in the set.

Selecting a choice chip deselects the other chips

## Placement

Choice chips appear as part of a series of other choice chips. They are typically displayed horizontally and sequentially. An overlay is a semi-transparent covering...READ MORE

Choice chips appear as part of a series of other choice chips. They are typically displayed horizontally and sequentially.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1fiRSVfHSxR9DHcdUjyaAPHBAfE35BHQK%2Fcomposition-01.png)

Do.

Horizontal placement of choice chips![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1VBpD8PFxEu-v2d4NV6OkiCOtcpJy7OvF%2Fcomposition-02.png)

Do.

Choice chips can scroll horizontally.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F19KRzOMZgMG-uprWpDeiHfRa_Z2_P2wG5%2Fcomposition-03.png)

Caution.

Choice chips can wrap to a new row. However, using two or more rows of choice chips can make each chip harder to scan.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1A0jwCx3fOhCl-KoFctXnfVclMgC93RFH%2Fcomposition-04.png)

Don’t.

Choice chips shouldn’t present only a single option.[AnatomyAn overlay is a semi-transparent covering on an element indicating state. Overlays allow for a systematic approach to visualizing states through opacity values.Related Articlearrow\_downward](https://material.io/design/interaction/states.html#anatomy)

## States

Choice chips statesREAD MORE

![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1JV0z5ArX_g37vhqxGPFe1kDK8x8KwGPb%2Fchoice-chips-states.png)

![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1-EoW1kQnD32bp-Fz1ThxBbLLnKC7HtZt%2Foutlined-choice-chips-states.png)

Do.

Choice chips states

### Filter chips 

## Usage

Filter chips use tags or descriptive words to filter content. Filter chips clearly delineate and display options in a compact area. They are a good...READ MORE

Filter chips use tags or descriptive words to filter content.

Filter chips clearly delineate and display options in a compact area. They are a good alternative to toggle buttons or checkboxes.![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1R6au3jDvf04E5mlCYQcfVZ10otZruQ69%2Fchips-types-filter.png)

A filter chip![](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1z3RCHf1A6lk_wmo14VgEKfpT8lieXCee%2Fchips-types-filter-outlined.png)

An outlined filter chip[  
](https://material.io/design/components/buttons.html#toggle-button)

