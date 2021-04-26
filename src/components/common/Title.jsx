function Title(props) {
  return (
    <div className={`title-box ${props.className}`}>
      <h2 className="title ff-1">{props.children}</h2>
    </div>
  );
}

export default Title;
