function Header() {
  return (
    <header>
      <ul className="nav">
        <NavItem href="/">HOME</NavItem>
        <NavItem href="/about">ABOUT ME</NavItem>
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
