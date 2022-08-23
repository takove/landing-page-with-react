import React from "react";
import { Cards } from "./Cards.jsx";
import { Footer } from "./Footer.jsx";
import { Header } from "./Header.jsx";

//include images into your bundle
import { NavBar } from "./NavBar.jsx";

//create your first component

let cards = [
	{
		imgSrc : "https://images.unsplash.com/photo-1618614944895-fc409a83ad80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"

	},
	{
		imgSrc : "https://images.unsplash.com/photo-1594476664296-8c552053aef3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
	},
	{
		imgSrc : "https://image.shutterstock.com/image-vector/blue-background-many-cubes-floating-600w-2121578552.jpg"
	},
	{
		imgSrc : "https://image.shutterstock.com/image-vector/glitter-diamonds-sunburst-rays-blue-600w-2153028859.jpg"
	}
]

const Home = () => {
	return (
		<div>
			<NavBar />
			<Header/>
			<div className="container d-flex flex-wrap justify-content-center">
				{cards.map((card,index)=>{
					return <Cards key={index} imgSrc={card.imgSrc} />
				})}
			</div>
			<Footer />
		</div>
	);
};

export default Home;
