export default function Alert(props) {
  return <div>{props.show === "true" && <div>Something went wrong</div>}</div>;
}
