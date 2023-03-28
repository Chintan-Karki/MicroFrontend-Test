import { createSignal } from "solid-js";

export default () => {
	let [count, setCount] = createSignal(0);
	return (
		<div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
			<button onClick={() => setCount(count() - 1)}>-</button>
			<div>Count: {count()}</div>
			<button onClick={() => setCount(count() + 1)}>+</button>
		</div>
	);
};
