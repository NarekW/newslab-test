const Photo = (props) => {
  return (
    <div className="images-container">
      <img style={{ maxWidth: "200px" }} alt="err" src={props.URL} />
    </div>
  );
};
export default Photo;
