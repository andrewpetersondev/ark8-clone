# ark8-clone

The purpose of this project is to create a clone of the ARK/8 homepage.

The inspiration for this was found at https://www.awwwards.com/sites/ark-8.

The actual webpage is located at https://ark8.net/en-na

## global styles

## site-wrapper

- site-wrapper div should hold all of the code
  - nav, main, sections, and footer

## navbar

- navbar is sticky
  - the sticky effect is created by adding "display: relative" on the parent element and "display: sticky" on the child element
  - for some reason, "sticky" did not work so I used "fixed" and added a width

```css
.nav-container {
  display: fixed;
  width: 100%;
}
```

- use flexbox to spread out 3 child elements
- inside of child elements use flexbox for ul elements

  - each li element is also a flexbox parent containing the button and the svg image

-

- TODO
  - [] the nav shoud be overlayed onto the hero section

## .hero section

- this is the section that users land on
- use hero.jpeg
- in order to create a background image that spans the whole width and container height

## new arrivals

Todo

- [] adjust layout so that items are uniform width
- [] adjust arrows and dots so they appear on hover
