import Banner from "../../components/Banner/";
import AproposBanner from "../../assets/img/banner-a-propos.webp";
import "./apropos.scss";
import Collapse from "../../components/Collapse";

const banner = "banner a-propos";

const COLLAPSE_CONTENT = [
	{
		title: "Fiabilité",
		text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
	},
	{
		title: "Respect",
		text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
	},
	{
		title: "Service",
		text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
	},
	{
		title: "Sécurité",
		text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
	},
];

export default function Apropos() {
	return (
		<main>
			<Banner img={AproposBanner} className={banner} />
			<div className="about-container">
				{COLLAPSE_CONTENT.map(({ title, text }, index) => (
					<Collapse key={index} title={title}>
						<p>{text}</p>
					</Collapse>
				))}
			</div>
		</main>
	);
}
