import { Link } from "react-router-dom";
import "./notfound.scss";

export default function NotFound() {
	return (
		<main>
			<p className="error404">404</p>
			<p className="error-msg">Oups! La page que vous demandez n'existe pas.</p>
			<Link to={"/"}>
				<p className="link-to-home">Retourner sur la page d'accueil</p>
			</Link>
		</main>
	);
}
