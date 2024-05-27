import "./collapse.scss";
import React from "react";
import arrow from "../../assets/img/arrow.svg";

function Collapse({ title, children }) {
	const [open, setOpen] = React.useState(false);
	const toggle = () => {
		setOpen(!open);
	};
	const contentRef = React.useRef();

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
				style={
					open
						? { height: contentRef.current.scrollHeight + "px" }
						: { maxHeight: "0px" }
				}
			>
				<div className="collapse-content">{children}</div>
			</div>
		</div>
	);
}

export default Collapse;
