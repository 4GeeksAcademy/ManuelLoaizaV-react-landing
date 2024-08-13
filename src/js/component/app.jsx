import React from "react";

import Album from "./album";
import Footer from "./footer";
import Hero from "./hero";
import Navbar from "./navbar";

export default function App() {
	return (
		<>
			<Navbar/>
			<Hero/>
			<Album/>
			<Footer/>
		</>
	);
};
