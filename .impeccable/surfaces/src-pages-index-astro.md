---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

Scope: the whole recipe blog demo: the home page with the recipe index (`src/pages/index.astro`) and the 12 recipe pages (`src/pages/recipes/[slug].astro`). Mode: Read.

Audience: home chefs, food bloggers and cooking channels in Pakistan judging a demo on a phone; story visitors are people cooking at home with the phone propped up in the kitchen.
Job: get a cook from "what do I make" to a cooked dish. Action: pick a dish by category, time of day or search, set servings, cook step by step, save favourites on the phone.
Proof: 12 full recipes with credited stock photos, scaling that really works, steps that tick off and remember where you stopped.
Constraints: everything labelled demo, photos credited, ratings and comments made up and said so, newsletter and comments simulated, no health claims.

## Direction contract

THESIS: Ammi Jaan's kitchen as a loud modular identity: every category owns one flat colour bar, and the bars do the sorting, so a cook finds tonight's dish by colour and then cooks from a page that stays calm and clean. It refuses the white food blog grid with a pastel hero and a life story before the recipe.

OWN-WORLD: Cool grey field (#e6e9ec), white panels, ink black (#0a0a0a). Five flat category bars: rice yellow (#ffd400), salan and karahi orange (#ff6b1a), BBQ and fried cyan (#00b7ff), chai and snacks green (#32d74b), sweets magenta (#ff2da1). One heavy, tight grotesk (Schibsted Grotesk, 800 to 900 for display, 400 to 600 for reading) with words sitting on bars; Urdu dish names in Nastaliq. A square ink monogram, buttons with a black arrow tab, a few small tilted colour chips. Bars live on the grey and on photo edges, never across the food. Text on a bar is always ink.

STORY: A home cook lands on today's recipe and sees time and servings at once. They start cooking, or tap a colour bar or a time of day (sehri, lunch, chai time, dinner) to find another dish, or search by ingredient, and save a favourite on the phone. On a recipe page they set the servings and every quantity changes, tick off steps (an ink bar strikes each done step), keep the screen awake, and come back later to a flag on the step where they stopped. A food creator sees their own recipes looking this organised.

FIRST VIEWPORT: Home: header with the ink "AJ" square and nav. Today's recipe title huge in black grotesk with its category word sitting on its colour bar, the Urdu name, a time, servings and rating line, and a "Cook this" button in the dish's own category colour with a black arrow tab (category colours mean categories only; general buttons are ink). The dish photo on the right with two category bars clipped onto its corners. The first category bars start right below. On phones: title, photo, then the button, all in the first screen.

FORM: Colour Bars (modular identity), the challenger the user chose, seed key 406c486a. Signature interaction: the category bars are drawn to the number of recipes in each category; tapping one filters the index and the chosen bar slides out (clip-path) while the others shrink back. On recipe pages a done step is struck through by an ink bar that wipes across it.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
