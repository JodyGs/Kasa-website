import React from "react";
import Banner from "../../components/Banner";
import homeBanner from "../../assets/img/banner.webp";
import Card from "../../components/Card";
import { Link } from "react-router-dom";
import "./home.scss";

const clsn = "banner";

export default function Home() {
	const [data, setData] = React.useState([]);
	const [error, setError] = React.useState();

	React.useEffect(() => {
		async function getData() {
			try {
				const response = await fetch("../data.json");
				const data = await response.json();
				setData(data);
			} catch (err) {
				setError(true);
			}
		}
		getData();
	}, []);

	if (error) {
		console.log("error"); //TODO: Page 404
	} else if (data) {
		return (
			<main>
				<Banner img={homeBanner} className={clsn} />
				<div className="lodging-cards-container">
					{data &&
						data.length > 0 &&
						data.map((lodging) => (
							<Link key={`housing-${lodging.id}`} to={`/housing/${lodging.id}`}>
								<Card cover={lodging.cover} name={lodging.title} />
							</Link>
						))}
				</div>
			</main>
		);
	}
}
