const Title = (props) => {
  const { title, desc, className } = props;
  return (
    <div className={className ? className : ""}>
      <h1>{title}</h1>
      {desc ? <p>{desc}</p> : ""}
    </div>
  );
};

export default Title;
