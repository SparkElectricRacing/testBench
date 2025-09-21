export default function Box(props) {
  return (
    <div className="reader floatbox">
      <h1>{props.header}</h1>
      <div>
        {props.children}
      </div>
    </div>
  );
}
