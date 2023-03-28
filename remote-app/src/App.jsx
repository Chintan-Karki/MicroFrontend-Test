import { render } from "solid-js/web";

import "./index.scss";
import Counter from "host_app/Counter";
const App = () => (
	<div class="mt-10 text-3xl mx-auto max-w-6xl">
		<div>Name: remote-app</div>
		<div>Framework: solid-js</div>
		<div>Language: JavaScript</div>
		<div>CSS: Tailwind</div>
		<Counter />
	</div>
);
render(App, document.getElementById("app"));
