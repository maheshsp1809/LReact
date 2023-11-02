// ParentComponent.js
import FirstLevelChild from "./FirstLevelChild";

export default function ParentComponent() {
  const data = "Hello from Parent";

  return (
    <div>
      <h1>Parent Component</h1>
      <FirstLevelChild data={data} />
    </div>
  );
}
