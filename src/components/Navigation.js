import React from "react";
import headerImage from "../images/messageOnPhoneDesignDevelop_medium_cropped_compressed_moz.jpg";
import Introduction from "./Introduction";
import { Link, withRouter } from "react-router-dom";

function Navigation({ withBanner = true }) {
  /**
   * Called when clicking on the hamburger menu.  This is different that
   * another menu item since it brings up the overlay instead of direct navigation.
   */
  function onClickHamburger(e) {
    /**
     * The pageMenu is the overlay menu on narrow screens
     * Show the pageMenu and hide the web page content section
     */
    let pageMenu = document.getElementById("pageMenu");
    if (pageMenu) {
      if (pageMenu.classList && !pageMenu.classList.contains("visible")) {
        pageMenu.classList.add("visible");
        let content = document.getElementById("content");
        if (content) {
          content.style.display = "none";
        } 
      } 
    } 
  }

  /**
   * All that needs to be done on scroll should go here
   */
  window.onscroll = function () {
    /**
     * Adjust the size of the banner image to go smaller as
     * scrolling down and reverse as scrolling to top
     */
    let img = document.getElementById("imageToTransform");
    if (img) {
      if (window.pageYOffset === 0 && img.classList) {
        img.classList.remove("smaller");
      } else if (!img.classList.contains("smaller")) {
        img.classList.add("smaller");
      }
    }

    /**
     * display scroll to top button if off first page
     */
    let scrollToTopIcon = document.getElementById("scrollToTopIcon");
    if (scrollToTopIcon) {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        scrollToTopIcon.style.display = "block";
      } else {
        scrollToTopIcon.style.display = "none";
      }
    }
  };

  /**
   * Go to the top smoothly
   */
  function onClickGoToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /**
   * The pageMenu is the overlay menu on narrow screens
   * Hide the pageMenu and show the web page content section
   */
  function closePageMenu() {
    let pageMenu = document.getElementById("pageMenu");
    if (pageMenu) {
      if (pageMenu.classList && pageMenu.classList.contains("visible")) {
        pageMenu.classList.remove("visible");
        let content = document.getElementById("content");
        if (content) {
          content.style.display = "block";
        }
      }
    }
  }

  let pageMenu = (
    <div className="pageMenu" id="pageMenu">
      <i className="fas fa-times-circle closeMenu" onClick={closePageMenu}></i>
      <ul>
        <li>
          <Link to="/" onClick={closePageMenu}>
            Home
          </Link>
        </li>{" "}
        <li>
          <Link to="/projects" onClick={closePageMenu}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/blogs" onClick={closePageMenu}>
            Blogs
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closePageMenu}>
            About Me
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closePageMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );

  let classname = withBanner
    ? "container withBanner"
    : "container withoutBanner";

  let navMenu = (
    <div>
      {pageMenu}
      <div className={classname}>
        <div className="topnav" id="myTopnav">
          <div className="left">
            <Link to="/contact">Anne Shackelford</Link>
          </div>
          <div className="right">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/about">About Me</Link>
            <Link to="/contact">Contact</Link>
            <div className="hamburger" onClick={onClickHamburger}>
              <i className="fas fa-bars"></i>
            </div>
          </div>
          {withBanner ? <Introduction /> : null}
        </div>
      </div>
      <div className="footerMenu">
        <i
          className="fas fa-arrow-up"
          id="scrollToTopIcon"
          onClick={onClickGoToTop}
        ></i>
      </div>
    </div>
  );

  let navWithBanner = (
    <div className="headerBar" id="headerBar">
      <div className="bannerImage">
        {navMenu}
        <div className="gradient">
          <img src={headerImage} alt="CSS" id="imageToTransform" />
        </div>
      </div>
    </div>
  );

  let navWithoutBanner = navMenu;

  if (withBanner) return navWithBanner;
  else return navWithoutBanner;

}

export default withRouter(Navigation);
