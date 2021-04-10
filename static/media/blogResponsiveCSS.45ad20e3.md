# CSS Responsive Websites
![](https://i.imgur.com/2zs7ABk.jpg)

Hi! I'd like to share with you some tips I have on quickly creating a responsive website. There are some minimum rules that can be applied to quickly put into place what is needed. Some may think that all this is automatic, but no, sometimes a layout that is narrow gets cut off or clipped or overflows, fonts are too big, margins are too big. Sometimes a wide layout is too wide, uncomfortable visually concerning the desired User Experience.

## Tip 1: Start Narrow
![](https://i.imgur.com/nWpiMSb.jpg)


Start by creating your responsive website with narrow dimensions then make it more responsive afterwards; i.e. start with a width of below 500px. On browsers you can either resize when in the developer tools or choose to see the application as if it were on the mobile device.

![](https://i.imgur.com/9paQXpt.jpg)

Once all is working as desired then expand to above 768px to see how the layout is, and then above 1024px. Check font sizes, the amount of space the text and images take up on the screen, the placement of text and images.


## Tip 2: Basic Rules for a Responsive Website
![](https://i.imgur.com/fjn0ySO.png)

**Max Width:** The max width should be around 800px. This can be set using a max-width value and a width:85% for example depending on the screen width.

**@media screen:** Use @media screen in your style css file to indicate the behavior to have at min and max widths.

**Font Sizes:** They should be increased on a larger screen and vice versa. 1em body font is the standard size. Note that 'em' fonts are good because they are resizable in browsers where font sizes can be adjusted.


## Tip 3: Additional Rules for a Responsive Website
**Grid:** Use grid display to allow the best flow of your items and the most control when going from narrow and wide and vice versa. For example, a 2 column layout can easily be changed into a 1 column layout on a narrow screen.

**Menu:** The menu bar almost always needs to be updated when going from wide to narrow as the width will often not be supported on a narrow screen. The 'hamburger' icon is often used for menus. It can be found in the Font Awesome fonts.  This blog uses a menu that disappears but reappears when scrolling up as the entire website is on one page.

*Last updated: March 23, 2021*