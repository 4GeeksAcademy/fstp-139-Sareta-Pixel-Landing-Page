import React from "react";

//include images into your bundle

import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./Card";
import { Footer } from "./Footer";



//create your first component
const Home = () => {
	return (
		<>
			<Navbar className="nav" />

			<div className="container mt-4">

				<div className="col-12">
					<Jumbotron />
				</div>



				<div className="row">
					<Card
						image="https://i.pinimg.com/1200x/d9/d5/a1/d9d5a17bb85d7eb741fe746cecae0655.jpg"
						title="Diferentes objetivos"
						description="Mientras unos invierten en el armario, otros prefieren invertir en neuronas. Cada loco con su tema." />
					<Card
						image="https://i.pinimg.com/736x/29/17/5d/29175dc91115dda45ec1b7fce0c0d140.jpg"
						title="Se acabó lo bueno"
						description="Volver de vacaciones es duro. Descubrir que ya no recuerdas ni cómo te llamaban..."
					/>
					<Card
						image="https://i.pinimg.com/1200x/e8/24/75/e824750eb91461b569c081755c345129.jpg"
						title="La belleza engaña"
						description="Hay quien es guapo por fuera, hay quien lo es por dentro... y luego estamos el resto, sobreviviendo."
					/>
					<Card
						image="https://i.pinimg.com/736x/82/9b/96/829b9622ed4acefca05a29a709b09f50.jpg"
						title="Manual para entender a los adultos"
						description="Capítulo 1: no lo entenderás. Capítulo 2: ellos tampoco saben explicarlo."
					/>
				</div>

			</div>
			<Footer/>
		</>
	);
};

export default Home;