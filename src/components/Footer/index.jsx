import logoFooter from "../../assets/img/logo-footer.png";
import "./footer.scss";

function Footer() {
	return (
		<footer>
			<img src={logoFooter} alt="Kasa" />
			<p>&copy; 2020 Kasa. All rights reserved</p>
		</footer>
	);
}

export default Footer;
