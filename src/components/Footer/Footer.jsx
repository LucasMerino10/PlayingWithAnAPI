function Footer() {
  return (
    <>
      <footer className="footer">
        <p className="footer__paragraph">© 2023 Merino Lucas - Powered By </p>
        <a
          className="footer__link"
          href="https://www.themoviedb.org"
          target="blank"
        >
          <img
            src="../src/assets/tmdb-alt.svg"
            alt="The Movie DataBase"
            className="footer__img"
          />
        </a>
      </footer>
    </>
  );
}

export default Footer;
