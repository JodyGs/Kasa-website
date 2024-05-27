import React from "react";
import Collapse from "../../components/Collapse";
import { useParams } from "react-router-dom";
import "../../index.scss";
import "./housing.scss";
import ProfilePicture from "../../components/ProfilePicture";
import Rating from "../../components/Rating";
import Carrousel from "../../components/Carrousel";
import NotFound from "../../pages/NotFound";

export default function Housing() {
	const { id } = useParams();
	const [data, setData] = React.useState();
	const [error, setError] = React.useState();

	function filterData(datas) {
		let filteredData;
		filteredData = datas.filter((d) => d.id === id);
		if (filteredData.length === 0) {
			setError(true);
		} else {
			return filteredData;
		}
	}
	React.useEffect(() => {
		async function getData() {
			try {
				const response = await fetch("../data.json");
				const datas = await response.json();
				setData(filterData(datas));
			} catch (err) {
				setError(true);
			}
		}
		getData();
	}, []);

	if (error) {
		return <NotFound />;
	} else if (data) {
		return (
			<main>
				<article className="estate">
					<Carrousel slides={data[0].pictures} />
					<section className="estate-details">
						<div className="estate-details-header">
							<div className="estate-title-container">
								<h1>{data[0].title}</h1>
								<p>{data[0].location}</p>
								<ul className="tag-container">
									{data[0].tags.map((tag, index) => {
										return (
											<li key={index} className="tag">
												{tag}
											</li>
										);
									})}
								</ul>
							</div>
							<div className="estate-owner-container">
								<ProfilePicture
									picture={data[0].host.picture}
									name={data[0].host.name}
								/>
								<Rating rating={data[0].rating} />
							</div>
						</div>
						<div className="estate-collapsibles">
							<Collapse title={"Description"}>
								<p>{data[0].description}</p>
							</Collapse>
							<Collapse title={"Équipements"}>
								<ul>
									{data[0].equipments.map((equipment, index) => {
										return <li key={index}>{equipment}</li>;
									})}
								</ul>
							</Collapse>
						</div>
					</section>
				</article>
			</main>
		);
	}
}
