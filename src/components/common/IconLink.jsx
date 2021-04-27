import "../../styles/IconLink.css";

function IconLink({ icon, href }) {
  return (
    <a className="icon-link" href={href}>
      <i className={`icon fab fa-${icon}`}></i>
    </a>
  );
}

export default IconLink;
