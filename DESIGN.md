---
name: Ammi Jaan's Kitchen
description: A demo Pakistani recipe blog drawn as a modular identity of flat colour bars on cool grey.
colors:
  field: "#e6e9ec"
  field-deep: "#d6dade"
  panel: "#ffffff"
  ink: "#0a0a0a"
  ink-soft: "#3d4248"
  rule: "#b9bfc6"
  cat-rice: "#ffd400"
  cat-salan: "#ff6b1a"
  cat-bbq: "#00b7ff"
  cat-snacks: "#32d74b"
  cat-sweets: "#ff2da1"
  error: "#b3001b"
  error-on-ink: "#ff9aa8"
typography:
  display:
    fontFamily: "Schibsted Grotesk, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(3rem, 1.6rem + 5.4vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Schibsted Grotesk, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.4rem + 2.4vw, 3.25rem)"
    fontWeight: 850
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  headline-panel:
    fontFamily: "Schibsted Grotesk, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1.2rem + 1.1vw, 2rem)"
    fontWeight: 850
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Schibsted Grotesk, Segoe UI, system-ui, sans-serif"
    fontSize: "1.3125rem"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Schibsted Grotesk, Segoe UI, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  body-step:
    fontFamily: "Schibsted Grotesk, Segoe UI, system-ui, sans-serif"
    fontSize: "1.3125rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  body-small:
    fontFamily: "Schibsted Grotesk, Segoe UI, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "Schibsted Grotesk, Segoe UI, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0.06em"
  label-small:
    fontFamily: "Schibsted Grotesk, Segoe UI, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0.06em"
  urdu-name:
    fontFamily: "Nastaliq Names, Noto Nastaliq Urdu, Jameel Noori Nastaleeq, serif"
    fontSize: "clamp(1.5rem, 1.2rem + 1.1vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: "0"
rounded:
  none: "0px"
spacing:
  "1": "0.25rem"
  "2": "0.5rem"
  "3": "0.75rem"
  "4": "1rem"
  "5": "1.5rem"
  "6": "2rem"
  "7": "3rem"
  "8": "4.5rem"
  "9": "7rem"
components:
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.panel}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 1.5rem"
    height: "52px"
  button-category:
    backgroundColor: "{colors.cat-salan}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 1.5rem"
    height: "52px"
  button-plain:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 1.5rem"
    height: "52px"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 1rem"
    height: "44px"
  chip-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.panel}"
    rounded: "{rounded.none}"
    padding: "0 1rem"
    height: "44px"
  tool:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 1rem"
    height: "48px"
  tool-on:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.panel}"
    rounded: "{rounded.none}"
    padding: "0 1rem"
    height: "48px"
  input-field:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1rem"
    height: "52px"
  recipe-card:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1rem 1.5rem"
  card-seam-bar:
    backgroundColor: "{colors.cat-rice}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.5rem 0.75rem"
    height: "34px"
  category-bar:
    backgroundColor: "{colors.cat-bbq}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    height: "3.5rem"
  step-tile:
    backgroundColor: "{colors.cat-salan}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    size: "52px"
  step-tile-done:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.panel}"
    rounded: "{rounded.none}"
    size: "52px"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "0 0.75rem"
    height: "44px"
  monogram:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.panel}"
    rounded: "{rounded.none}"
    size: "44px"
---

# Design System: Ammi Jaan's Kitchen

## Overview

**Creative North Star: "The Sorting Bars"**

A loud modular identity in the Studio Dumbar manner, put to a quiet job. Five flat colour bars, one per kind of dish, do the sorting: the cook finds tonight's dish by colour, then cooks from a page that stays calm, white and black. Everything else is cool grey field, white panel and near black ink, set square, flat and heavy. The colour is loud precisely because it is rationed to one meaning.

Type is a single tight grotesk run from 400 for reading to 900 for display, with dish words sitting on their category bar and Urdu dish names in Nastaliq beside them. Corners are square everywhere. Depth is tonal: panels sit on the field, bars sit on edges and seams. Motion is a wipe, never a bounce: bars clip in from the left, a done step is struck by an ink bar that wipes across each line.

Density is generous and kitchen sized: 18px body, 21px method steps, 44 to 52px targets, and a fixed cooking bar on phones. The system refuses the white food blog grid with a pastel hero.

**Key Characteristics:**
- Five category colours, each meaning one kind of dish and nothing else.
- Ink for every general action and every state change.
- Bars live on the grey, on seams and on photo edges, never across the food.
- Square corners, flat surfaces, one soft lift for hover and the welcome back banner.
- One grotesk from 400 to 900, plus Nastaliq for Urdu dish names.
- Authored 24px icon set, 2px square capped strokes.

## Colors

Cool grey ground, white panels, near black ink, and five saturated category bars that carry meaning rather than decoration.

### Primary
- **Kitchen Ink** (ink): the voice of the system. Text, 2px rules and borders, the AJ monogram, the demo strip, every general action (ink button, servings stepper, selected chips, pressed tools, resume button, all done panel, the tip box, the newsletter block, the step flag) and every done state (step tick tile, the strike). Also the focus ring (3px solid, 3px offset) and the text selection's text.

### Secondary
The five category bars. Each one is a category and appears only where that category is being named.
- **Rice Yellow** (cat-rice): Rice. Also the text selection background, the one place it is used without naming rice.
- **Karahi Orange** (cat-salan): Salan and karahi.
- **Tikka Cyan** (cat-bbq): BBQ and fried.
- **Chai Green** (cat-snacks): Chai and snacks.
- **Mithai Magenta** (cat-sweets): Sweets.

They appear in exactly five places: the title word bar, the step number tiles, the card seam bars, the photo corner bar, and the home "Cook this" button. On the home page they also fill the category bars that filter the index.

### Tertiary
- **Fix-it Red** (error): the one red for anything the visitor has to fix, on grey or white (comment form message and a 3px field border).
- **Fix-it Pink** (error-on-ink): the same job on the ink newsletter block.

### Neutral
- **Cool Grey Field** (field): the page ground and the browser theme colour; also the disabled stepper button.
- **Deep Grey** (field-deep): footer ground, photo placeholders, the 2px track under each category bar, scrollbar track.
- **Panel White** (panel): cards, the ingredients panel, step rows, comments, inputs, plain buttons, the phone cooking bar; and the text colour on ink.
- **Soft Ink** (ink-soft): secondary text: facts, captions, Urdu on cards and bars, placeholders, done step text, disabled tools.
- **Hairline Grey** (rule): 1px dividers in ingredient lists, fact cells and the cooking bar; disabled tool border.

### Named Rules
**The One Meaning Rule.** A category colour means its category and nothing else. General actions are ink. If a button would work the same on any recipe, it is not allowed a category colour.

**The Ink On Bar Rule.** Text on a bar is always ink. Never white on yellow, cyan, green, orange or magenta.

**The Dry Food Rule.** Bars never cross the food. Card bars are label wide and sit on the seam, half on the photo and half on the panel. Photo bars straddle the bottom edge by 12px. Only the small tilted ink square may sit on the food side.

## Typography

**Display Font:** Schibsted Grotesk, self hosted variable 400 to 900 (with Segoe UI, system-ui, sans-serif)
**Body Font:** Schibsted Grotesk (same family)
**Urdu Font:** Nastaliq Names, a self hosted Noto Nastaliq Urdu subset for dish names (with Noto Nastaliq Urdu, Jameel Noori Nastaleeq, serif)

**Character:** One heavy, tight grotesk that shouts the dish name at 900 and reads a method step at 400; the Nastaliq names add the kitchen's own script beside it without competing.

### Hierarchy
- **Display** (900, fluid 3rem to 6rem, 0.9): the dish title on the home hero and the recipe page, last word on its category bar.
- **Headline** (850, fluid 2rem to 3.25rem, 0.98): section heads ("Pick a colour, find a dish", "All recipes", "Cook next", newsletter).
- **Headline Panel** (850, fluid 1.5rem to 2rem): heads inside panels (Ingredients, Method) and the empty state.
- **Title** (800, 1.3125rem, 1.15): card titles, brand name, category bar labels (850), fact values, the all done line.
- **Body** (400, 1.125rem, 1.55): reading text. Intros run 1.3125rem at 1.45 with a 34 to 38ch measure.
- **Body Step** (400, 1.3125rem, 1.5): method steps on desktop; drops to body size under 640px.
- **Body Small** (400 to 700, 0.9375rem): facts, captions, result line, credits, hints.
- **Label** (800, 0.9375rem, 0.06em, uppercase): nav, field labels, fact names, back link. Buttons track wider (0.08em); card seam bars tighter (0.04em).
- **Label Small** (800, 0.8125rem, 0.06em, uppercase): the "you stopped here" flag, saved count, cooking bar labels.
- **Urdu Name** (700, line height 1.6 to 2): beside every dish and category name, at display companion size on heroes and body size on cards.

### Named Rules
**The Word On The Bar Rule.** In a dish title the category word sits on its colour bar (clone decoration, so it breaks cleanly across lines); the rest of the title stays bare ink on grey.

**The Steady Figures Rule.** Figures that change in place (amounts, servings, progress, counts) are tabular so nothing jumps; other figures are lining.

## Layout

A centred page of min(1280px, 100% minus 2rem). Sections are divided by a full width 2px ink rule with 3rem above content and 4.5rem below; major blocks sit 7rem apart. Spacing runs a nine step scale from 0.25rem to 7rem.

Home: a two column hero (words 0.95fr, photo 1.05fr), then the category section (head 0.7fr, bars 1.3fr; stacked under 1100px), then the index with search, time of day chips and a saved chip, over a three column card grid (two under 1100px, one under 640px). Recipe: a two column head (words and photo), a body of ingredients (0.8fr, sticky on desktop) beside the method (1.2fr; stacked under 1000px), then comments and cook next.

Under 900px the hero and recipe head reflow into one column ordered for a phone: title, Urdu name, photo, then the action, then facts and intro, so the cook sees the dish and the button in the first screen. Under 700px recipe pages gain a fixed 64px cooking bar. Under 760px the nav keeps only Saved.

Breakpoints in use: 480, 640, 700, 760, 900, 1000, 1100px.

## Elevation & Depth

Flat by default. Depth comes from tone: white panels on grey field, ink blocks on grey, bars on seams and edges. One soft shadow exists, the lift, used for a card on hover (with a 3px rise) and for the welcome back banner that floats over the recipe. The cooking bar's current link uses an inset 4px ink underline, which is a mark, not elevation.

### Shadow Vocabulary
- **Lift** (`box-shadow: 0 1px 2px rgb(10 10 10 / 0.08), 0 18px 32px -22px rgb(10 10 10 / 0.45)`): card hover and the welcome back banner only.

### Named Rules
**The Flat Panel Rule.** Panels rest flat. A shadow appears only for hover on a card or for the one banner that needs to float.

## Shapes

Square everything: zero radius on buttons, inputs, checkboxes, cards, chips and bars. Borders are 2px ink for anything you press or type into, 1px hairline grey for dividers. The recurring geometry is the bar, a flat horizontal rectangle; the arrow tab, a square ink cell on the end of a button or chosen bar; and the small ink square tilted 12 to 14 degrees on a photo corner. Photos are always cropped 4:3. Icons are drawn on a 24px grid with 2px square capped, mitred strokes.

## Components

### Buttons
Flat blocks with an ink arrow tab.
- **Shape:** square (0px), 2px ink border, 52px tall, a 52px square tab at the end holding a 22px arrow.
- **Ink (default):** ink ground, white label. Every general action: resume, post comment.
- **Category:** the dish's category colour with ink label and ink tab. Only "Cook this" on the home hero.
- **Plain:** white ground, ink label, tab split off by a 2px ink rule. Secondary actions: clear filters, start over, newsletter sign up on ink.
- **Hover / Active:** the tab arrow nudges 3px toward its direction (200ms); press scales to 0.97 (140ms).

### Chips
- **Style:** transparent on grey, 2px ink border, 44px tall, 700 weight small text, optional 18px icon.
- **State:** hover fills white; selected (time of day, saved on this phone) fills ink with white text.

### Tools
The recipe's Save, Keep screen on and Share. White, 2px ink border, 48px tall, 800 weight. Pressed (saved, screen kept on) turns ink. Keep screen on is always shown; without the Wake Lock API it is disabled with a hairline border, soft ink text and a written reason beneath.

### Cards / Containers
- **Recipe card:** white panel, 4:3 photo, square corners, no border. The category seam bar (34px, label wide, uppercase) is pulled up 17px so it sits half on the photo and half on the panel. A saved recipe gets a 44px ink square with a saved icon in the top right corner.
- **Ingredients panel:** white, 1.5rem padding, sticky on desktop, 2px ink rule under its head.
- **Ink blocks:** the newsletter, the tip box (with a 3rem by 6px white bar under its head), the all done panel. White text on ink.
- **Shadow Strategy:** lift on card hover only (see Elevation).

### Inputs / Fields
- **Style:** white ground, 2px ink border, square, 52px tall; search adds a 22px icon inset at the left.
- **Ingredient ticks:** 24px square checkboxes with a 2px ink border; checked fills ink with a white tick, and the line goes soft ink with a 2px strike.
- **Focus:** 3px solid ink outline at 3px offset; white outline on ink blocks.
- **Error:** the border goes 3px in fix-it red (fix-it pink on ink) with a bold message below.

### Navigation
Header: the 44px ink AJ monogram and brand name on the left, uppercase 800 labels on the right, 44px targets, a 3px underline on hover. Footer: deep grey, the monogram, the demo note and two columns of photo credits. A full width ink demo strip sits above the header on every page.

### Category Bars (signature)
Full width buttons, 3.5rem tall, on a 2px deep grey track. Each colour fill is clipped to the category's count over the largest count, never shorter than its label; on phones the fill is the label width plus the count's share of the rest. Hover extends the fill 1.5rem. Choosing one slides its fill to full width (460ms clip-path wipe) and shows an ink down arrow tab; the others drop to a full colour strip along the bottom at their own length. Urdu names sit at the right end.

### Method Steps (signature)
White rows, each a button. A 52px category coloured number tile (44px on phones) beside the step text. Done: the tile turns ink with a white tick, the text goes soft ink, and a solid 0.14em ink strike at the x-height wipes across each line (420ms). The step where the cook stopped carries an ink "you stopped here" flag on its top edge, and a returning visitor sees the welcome back banner.

### Phone Cooking Bar
Below 700px: a fixed 64px white bar with a 2px ink top rule. An ink AJ cell, Ingredients and Method links (icon over label), and an ink step counter. The current link fills grey with a 4px inset ink underline, in the board's nav style.

## Do's and Don'ts

### Do:
- **Do** give each kind of dish exactly one colour and use it only where that dish or category is named: title word bar, step tiles, card seam bar, photo corner bar, the home "Cook this" button.
- **Do** keep every general action and every done state ink.
- **Do** put text on a bar in ink, always.
- **Do** place bars on seams and edges: card bars half on photo, half on panel; photo bars straddling the bottom edge by 12px.
- **Do** draw category bars to count over the largest count, never shorter than the label.
- **Do** keep corners square and borders 2px ink on anything pressable or typable.
- **Do** use the authored 24px icon set with 2px square capped strokes for every icon.
- **Do** pair dish and category names with their Urdu name in Nastaliq.
- **Do** keep targets at 44px or more, and 52px for primary actions and inputs.
- **Do** honour reduced motion: wipes and transitions collapse to instant.

### Don't:
- **Don't** use a category colour on a general action (servings stepper, resume, newsletter, filters).
- **Don't** run a bar across the food; only the small tilted ink square may sit on the photo.
- **Don't** set white text on a category bar.
- **Don't** round corners or use pill shapes.
- **Don't** add shadows beyond the single lift.
- **Don't** use a second red; errors are fix-it red on grey or white and fix-it pink on ink.
- **Don't** use icon fonts, emoji or text glyphs as icons.
- **Don't** add a second Latin typeface.
