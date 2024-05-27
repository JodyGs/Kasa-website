import defaultImg from "../../assets/img/host.svg";

function linebreak(text) {
	return text.replace(" ", "\n");
}

export default function ProfilePicture({ picture, name }) {
	const imgErrorHandler = (e) => {
		e.target.src = defaultImg;
	};

	return (
		<div className="profile">
			<p>{linebreak(name)}</p>
			<img src={picture} alt={name} onError={(e) => imgErrorHandler(e)} />
		</div>
	);
}
