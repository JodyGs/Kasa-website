import "./banner.scss";

export default function Banner({ img, className }) {
	return (
		<div className={className}>
			<img src={img} alt="Hero Banner" />
			<h1>{"Chez vous, \npartout et ailleurs"}</h1>
		</div>
	);
}
