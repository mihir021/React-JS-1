import { useState } from "react";

const US5 = () => {
	const [title, setTitle] = useState("lj uni");
	const [titleColor, setTitleColor] = useState("red");
	const [showHooks, setShowHooks] = useState(true);

	const handleToggleText = () => {
		setTitle((prev) => (prev === "lj uni" ? "welcome student" : "lj uni"));
	};

	const handleToggleColor = () => {
		setTitleColor((prev) => (prev === "red" ? "blue" : "red"));
	};

	const handleToggleHooks = () => {
		setShowHooks((prev) => !prev);
	};

	return (
		<div>
			<h1 style={{ color: titleColor }}>{title}</h1>
			{showHooks ? <h2>React JS Hooks</h2> : null}

			<button type="button" onClick={handleToggleText}>
				Change Text
			</button>
			<button type="button" onDoubleClick={handleToggleColor}>
				Change Color
			</button>
			<button type="button" onClick={handleToggleHooks}>
				{showHooks ? "Hide" : "Show"}
			</button>
		</div>
	);
};

export default US5;

