const Like = (props) => {
  let classes = "fa fa-heart";
  classes += !props.liked ? "-o" : "";
  return (
    <i
      className={classes}
      style={{ cursor: "pointer" }}
      aria-hidden="true"
      onClick={props.onLike}
    ></i>
  );
};

export default Like;
