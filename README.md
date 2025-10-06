# NeilRaiden.github.io (NeilRaiden.com)

If you'd like to use the layout of this website for you own website, then please copy the following files:

* `template.html` - use this file to create `index.html`, and all sub-pages.
* `layout.css` - CSS code
* `layout.js` - JS scripts (note: to add new items to the menu, see `menuItems` array)

Also, copy the `fonts` directory with the following files:

* `create-css.sh` - Bash script, creates CSS and JS files for the website
* _optional:_ `fonts.html` - simple comparison table of the fonts (may be useful to select fonts) - not required for functioning of the website, though.

After copying your favorite font files to the `fonts` directory, please run the `create-css.sh` Bash script.  
That script will create three files in the `fonts` directory:

* `fontlist.txt` - simple text file, list of font files
* `fontlist.js` - contains JavaScript array `fontList` with the abbreviated name and file name for all fonts
* `fonts.css` - contains `@font-face` definitions of all fonts


