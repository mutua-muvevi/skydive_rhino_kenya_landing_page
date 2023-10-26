import React from "react";

import Footer from "src/layout/footer/footer";
import Navbar from "src/layout/navbar/navbar";

import About from "src/sections/about";
import Banner from "src/sections/banner";
import Contact from "src/sections/contact";
import Map from "src/sections/map";
import Services from "src/sections/services";
import Statements from "src/sections/statements";

const Landing = () => {
	return (
		<>
			<Navbar />
			<Banner/>
			<About/>
			<Statements/>
			<Services/>
			<Contact/>
			<Map/>
			<Footer />
		</>
	);
};

export default Landing;
