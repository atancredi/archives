"use client";

import Page from "../PageContainer/Page/Page";
import PageContainer from "../PageContainer/PageContainer";

import './Links.css';

export default function Links() {

	const pageStyle = {
		backgroundImage: `url(fanz1/2.jpeg)`,
	}


	return (
		<PageContainer className={"no-y-scroll"}>
			<Page style={pageStyle}>
				<div className="links-container">
					
					<details className="links-entry">
						<summary className="links-text">LINK1</summary>
						<div className="links-content">Link1Content</div>
					</details>
					<details className="links-entry">
						<summary className="links-text">LINK1</summary>
						<div className="links-content">Link1Content</div>
					</details>
					<div className="links-entry"><div className="links-text">LINK2</div></div>
					<div className="links-entry"><div className="links-text">LINK3</div></div>
				</div>
			</Page>
		</PageContainer>
	)
}