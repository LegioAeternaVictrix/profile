import IconLink from "./common/IconLink";

function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <IconLink icon="github" href="https://github.com/LegioAeternaVictrix" />
        <IconLink
          icon="facebook"
          href="https://www.facebook.com/mikaelson09/"
        />
        <IconLink
          icon="linkedin"
          href="https://www.linkedin.com/in/claudiubaituc/"
        />
      </div>
    </footer>
  );
}

export default Footer;
