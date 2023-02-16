import { useEffect, useRef } from "react";
import Background from "../background/Background";
import Section from "../section/Section";
import "./style.css";

const Header = () => {

    return (
		<Section>
			<header className="header">
				<div className="header__wrapper">
					<h1 className="header__title">
						<strong>
							Hi, my name is <em>Roman</em>
						</strong>
						<br />a frontend developer
					</h1>
					<div className="header__text">
						<p>with passion for learning and creating.</p>
					</div>
					<a href="/CV2.pdf" download className="btn">
						Download CV
					</a>
				</div>
			</header>		
		</Section>
	);
}

export default Header;