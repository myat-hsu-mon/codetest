import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  componentDidMount() {
    if (typeof window !== undefined) {
      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".navMenu");

      const mobileMenu = () => {
        hamburger?.classList.toggle("active");
        navMenu?.classList.toggle("active");
      };
      hamburger?.addEventListener("click", mobileMenu);

      const closeMenu = () => {
        hamburger?.classList.remove("active");
        navMenu?.classList.remove("active");
      };
      const navLink = document.querySelectorAll(".navLink");
      navLink.forEach((n) => n.addEventListener("click", closeMenu));
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
