# Elisa & Christan — Wedding Design System

A brand and visual identity system for the wedding of **Elisa und Christan**. This design system captures the romantic, elegant, and celebratory spirit of their wedding materials and provides a foundation for designing coordinated assets: invitations, programs, menus, signage, digital content, and more.

## Real Wedding Details

| Key | Value |
|-----|-------|
| **Couple** | Elisa & Christan |
| **Main date** | Samstag, 08. August 2026 |
| **Venue** | Kirche Caputh, Brandenburg |
| **Pre-celebration** | 07. August 2026 — Vorfreuen |
| **Wind-down** | 09. August 2026 — Ausklingen |
| **Honeymoon trip** | 18.–22. Oktober 2026 — Südafrika (optional group trip) |
| **Teaser line** | "Wir heiraten – und es wird mehr als ein Fest!" |
| **RSVP note** | "Die Einladung mit allen Details folgt." |
| **Date format** | 08 \| 08 \| 2026 (pipe-separated, no leading-zero day suppression) |

> **The Protea motif is intentional:** Protea is the national flower of South Africa — directly tied to the couple's honeymoon destination. It carries meaning, not just decoration.

---

## Sources

The following files were provided as source material:

| File | Description |
|------|-------------|
| `uploads/Protea.png` | Delicate line-art illustration of a Protea flower — the central brand motif |
| `uploads/Wir_heiraten.png` | Script headline: "Wir heiraten – und es wird mehr als ein Fest!" in gold + slate |
| `uploads/Namen.png` | Couple name lockup: "Elisa & Christan" in slate script with gold ampersand |

No codebase or Figma link was provided; the design system is derived entirely from these visual assets.

---

## CONTENT FUNDAMENTALS

### Language & Tone
- **German-language** throughout ("Wir heiraten", "und es wird mehr als ein Fest!")
- Tone is **warm, joyful, and intimate** — personal but not overly casual
- Copy feels **poetic and celebratory**: "und es wird mehr als ein Fest!" ("and it will be more than a party!")
- Uses **first-person plural** ("Wir" = We) — the couple speaks together
- No emoji used anywhere; the aesthetic is refined and print-inspired
- **No ALL CAPS** for headlines; instead, elegant mixed-case calligraphic script carries the weight
- Exclamation marks used sparingly but with intention (one per piece, maximum)
- Dates and details written in full, not abbreviated
- Dash used as an expressive pause: "Wir heiraten –"

### Copy Examples
- *"Wir heiraten – und es wird mehr als ein Fest!"*
- *"Elisa & Christan"*
- Expected copy patterns: ceremony date, location, RSVP requests — all in a warm, handwritten-letter register

---

## VISUAL FOUNDATIONS

### Colors
| Role | Name | Hex | Description |
|------|------|-----|-------------|
| Primary accent | Gold | `#B8922B` | Warm antique gold — used for key words, ampersand, and decorative elements |
| Primary text | Slate | `#3F5059` | Dark teal-slate — used for names and secondary script |
| Illustration | Taupe | `#C0B2AA` | Soft warm gray — used for the protea line art |
| Background | Cream | `#FDFAF6` | Warm off-white — primary paper/background color |
| Background alt | Warm White | `#F3EDE4` | Slightly deeper warm tone for layering |
| Muted text | Mist | `#9E9088` | For supporting fine print, captions |

### Typography
Two script fonts define the identity. Both are elegant calligraphic scripts with strong thick/thin contrast.

- **Display Script** (Gold headlines): A bold, expressive calligraphic hand — used for "Wir heiraten". Nearest Google Fonts match: **Great Vibes**. ⚠️ *Substitution flagged — original font file not provided.*
- **Name Script** (Slate names + subheadings): A refined, upright calligraphic hand — used for "Elisa & Christan" and "und es wird mehr als ein Fest!". Nearest Google Fonts match: **Pinyon Script** or **Corinthia**. ⚠️ *Substitution flagged.*
- **Body / Details**: For practical text (dates, times, addresses), a light-weight serif such as **Cormorant Garamond Light** complements the scripts beautifully.
- No sans-serif fonts detected or intended; this is a fully serif/script brand.

### Backgrounds
- Flat warm cream (`#FDFAF6`) is the dominant background — simulating fine paper stock
- No photography, gradients, or textures used in the provided assets
- The protea illustration is used as a **watermark/ghost element** at low opacity (the taupe tone on white creates this effect naturally)
- Print aesthetic: assets feel designed for letterpress or digital print, not screen-first

### Illustration
- **Protea flower** is the central brand motif — a South African flower symbolizing courage, transformation, and diversity
- Style: **minimal line art**, single-weight or near-single-weight strokes, no fills
- Color: `#C0B2AA` (warm taupe) — a tone that reads as an embossed or letterpress mark
- The protea is used large, as a background element, not as a small icon

### Layout
- **Centered composition** throughout — all text and elements centered on the page
- Generous white space; nothing feels crowded
- Vertical rhythm: large display script → smaller secondary script → fine-print details below
- Elements are stacked vertically with measured breathing room

### Animation
- No animation detected in source assets
- If motion is introduced, it should be **slow, gentle fades** — nothing bouncy or playful
- Suggested easing: `cubic-bezier(0.4, 0, 0.2, 1)` with 600–1200ms durations

### Corner Radii
- Not applicable to the print-first aesthetic
- If used in digital contexts: very subtle (2–4px) or zero

### Cards & Surfaces
- No card components detected; the brand is print-document-first
- In digital contexts: flat surfaces, no shadows, rely on whitespace for separation

### Iconography
- No icon system used; the protea illustration *is* the brand icon
- No emoji, no unicode substitutes
- See ICONOGRAPHY section below

---

## ICONOGRAPHY

No icon font or system is used. The brand relies on a single bespoke illustration:

- **Protea flower** (`assets/Protea.png`) — line-art, warm taupe, used as the hero brand mark
- **Ampersand "&"** — treated as a typographic glyph in gold; acts as a visual connector between names
- No SVG icon sets, no icon fonts, no emoji

For digital use, the protea may be used as an SVG trace (not provided) or as the PNG asset at appropriate opacity.

---

## FILES INDEX

| Path | Description |
|------|-------------|
| `README.md` | This file — design system overview |
| `SKILL.md` | Agent skill definition |
| `colors_and_type.css` | CSS custom properties for all color and type tokens |
| `assets/Protea.png` | Protea flower illustration |
| `assets/Wir_heiraten.png` | Headline script asset |
| `assets/Namen.png` | Couple name lockup |
| `preview/` | Visual preview cards for the Design System tab |
| `ui_kits/wedding-invitation/` | High-fidelity UI kit: digital wedding invitation |

---

## ⚠️ CAVEATS

1. **Font files not provided** — Google Fonts substitutions used (Great Vibes, Pinyon Script, Cormorant Garamond). Please provide original font files for pixel-perfect reproduction.
2. **No codebase or Figma** — design system is inferred from 3 image assets only. Additional materials (full invitation PDF, mood board, etc.) would enrich the system.
3. **Colors are approximated** from visual inspection of the PNG files — hex values may differ slightly from the designer's originals.
