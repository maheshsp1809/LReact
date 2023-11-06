const arr = ["a", "b", "c", "d", "e"];
export default function Renders() {
  return (
    <div>
      <ol>
        {arr.map((ele) => (
          <li>{ele}</li>
        ))}
      </ol>
    </div>
  );
}
