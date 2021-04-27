import "../styles/Header.css";

function Header() {
  return (
    <header>
      <ul className="nav">
        <NavItem href="/">HOME</NavItem>
        <NavItem href="/me">ABOUT ME</NavItem>
        <NavItem href="/my-projects">PROJECTS</NavItem>
        <NavItem href="/my-skills">SKILLS</NavItem>
      </ul>
    </header>
  );
}

function NavItem(props) {
  return (
    <li className="nav-item">
      <a className="nav-link" href={props.href}>
        {props.children}
      </a>
    </li>
  );
}

export default Header;
