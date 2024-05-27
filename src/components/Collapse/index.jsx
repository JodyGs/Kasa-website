import "./collapse.scss";
import { useState } from "react";
import arrow from "../../assets/img/arrow.svg";
import { useRef } from "react";

function Collapse({ title, children }) {
	const [open, setOpen] = useState(false);
	const toggle = () => {
		setOpen(!open);
	};
	const contentRef = useRef();

	return (
		<div className="collapse-container">
			<div className="collapse-title">
				<p>{title}</p>
				<button
					aria-expanded={open ? "true" : "false"}
					aria-controls="collapse-parent"
					aria-label="open this collapse"
				>
					<img
						src={arrow}
						className={open ? "arrow down" : "arrow up"}
						alt="Ouvrir l'article"
						onClick={toggle}
					/>
				</button>
			</div>

			<div
				id="collapse-parent"
				className={open ? "collapse-parent show" : "collapse-parent hide"}
				ref={contentRef}
				style={open ? { maxHeight: "999px" } : { maxHeight: "0px" }}
			>
				<div className="collapse-content">{children}</div>
			</div>
		</div>
	);
}

export default Collapse;
