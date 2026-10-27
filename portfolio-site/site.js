/* ==========================================================================
   SITE.JS  —  the small amount of behavior the site needs
   ==========================================================================

   WHAT THIS FILE DOES
   JavaScript makes a page DO things (HTML is the content, CSS is the look).
   This file has three small jobs:
     1. Opens and closes the menu on phones
     2. Starts the stone slide-in animation when a section scrolls into view
     3. Fills in the current year in the footer

   You will rarely need to edit this file. It is shared by index.html and
   every case study page.
   ========================================================================== */


/* --------------------------------------------------------------------------
   1. PHONE MENU
   On small screens the nav links are hidden behind a "☰" button.
   Pressing the button adds or removes the class "open" on the link list,
   and style.css shows the list when it has that class.
   -------------------------------------------------------------------------- */
const menuButton = document.getElementById('nav-toggle');   // the ☰ button
const menuLinks  = document.getElementById('nav-menu');     // the list of links

// "if" guards: skip this job if a page doesn't have a menu
if (menuButton && menuLinks) {

  // When the button is pressed, show or hide the menu
  menuButton.addEventListener('click', () => {
    const menuIsOpen = menuLinks.classList.toggle('open');   // toggle = add if missing, remove if present
    menuButton.setAttribute('aria-expanded', menuIsOpen);    // tells screen readers whether it's open
  });

  // When any link in the menu is tapped, close the menu again
  menuLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => menuLinks.classList.remove('open'));
  });
}


/* --------------------------------------------------------------------------
   2. SLIDE-IN ANIMATION
   Every section (and the hero) has class="slide-in" in the HTML.
   An "IntersectionObserver" watches them and tells us the moment one scrolls
   into view. When that happens we:
     - add the class "slide-in-started"  -> style.css starts the animation
     - wait a few seconds, then add "slide-in-finished" -> style.css switches
       the animations off so they never replay
   -------------------------------------------------------------------------- */
const SECONDS_BEFORE_FINISHED = 3.8;   // a little longer than the longest animation (if you slow the animations in style.css, raise this)

const slideInSections = document.querySelectorAll('.slide-in');   // every animated section

const sectionWatcher = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    // "isIntersecting" means: this section is now at least partly on screen
    if (entry.isIntersecting) {
      const section = entry.target;

      section.classList.add('slide-in-started');

      setTimeout(() => {
        section.classList.add('slide-in-finished');
      }, SECONDS_BEFORE_FINISHED * 1000);   // setTimeout counts in milliseconds

      sectionWatcher.unobserve(section);    // only animate once per section
    }
  });
}, { threshold: 0.12 });   // trigger when 12% of the section is visible

// Start watching every section
slideInSections.forEach(section => sectionWatcher.observe(section));


/* --------------------------------------------------------------------------
   3. FOOTER YEAR
   Finds the empty <span id="footer-year"> in the footer and fills in the
   current year, so you never have to update it by hand.
   -------------------------------------------------------------------------- */
const footerYear = document.getElementById('footer-year');
if (footerYear) footerYear.textContent = new Date().getFullYear();
