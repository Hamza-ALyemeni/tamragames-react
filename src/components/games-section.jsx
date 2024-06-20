import '../style.css';
import  sultan  from "/sultan.jpeg";
import  strongDude  from "/strong-dude.jpeg";
import  girlWithDog  from "/girl-with-a-dog.jpeg";
import  guyCar  from "/guy-with-car.jpeg";
import  colorGame  from "/color-game.jpeg";
import  unknownGame  from "/unknown-game.jpeg";
import  gameIconTwo from "/game-icon-2.jpg";
import  gameIconThree from "/game-icon-3.jpg";
import  gameIconFour from "/game-icon-4.jpg";
import  gameIconFive from "/game-icon-5.jpg";

export default function GamesSection({...props}) {
    return (
        <section className="fullpage">
            <div className="home_section_gamesicon">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <img className="wow animate__animated animate__slideInLeft game-icon-1" src={sultan} alt="game-icon-1" />
                            <img className="wow animate__animated animate__slideInDown game-icon-s-3" src={strongDude} alt="game-icon-s-1" />
                            <img className="wow animate__animated animate__slideInDown game-icon-s-3" src={girlWithDog} alt="game-icon-s-2" />
                            <img className="wow animate__animated animate__slideInDown game-icon-s-3" src={guyCar} alt="game-icon-s-3" />
                            <img className="wow animate__animated animate__slideInDown game-icon-s-4" src={colorGame} alt="game-icon-s-4" />
                            <img className="wow animate__animated animate__slideInDown game-icon-s-5" src={unknownGame} alt="game-icon-s-5" />
                            <img className="wow animate__animated animate__slideInRight game-icon-2" src={gameIconTwo} alt="game-icon-2" />
                            <div className="clr"></div>
                            <img className="wow animate__animated animate__slideInUp game-icon-3" src={gameIconThree} alt="game-icon-3" />
                            <img className="wow animate__animated animate__slideInUp game-icon-4" src={gameIconFour} alt="game-icon-4" />
                            <img className="wow animate__animated animate__slideInUp game-icon-5" src={gameIconFive} alt="game-icon-5" />
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                            <img
                                src={sultan}
                                className="w-100 shadow-1-strong rounded mb-4 wow animate__animated animate__slideInLeft"
                                alt="Boat on Calm Water"
                            />
                            <img
                                src={strongDude}
                                className="w-100 shadow-1-strong rounded mb-4 wow animate__animated animate__slideInUp"
                                alt="Wintry Mountain Landscape"
                            />
                        </div>
                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <img
                                src="bowling-game.jpeg"
                                className="w-100 shadow-1-strong rounded mb-4 wow animate__animated animate__slideInUp"
                                alt="Mountains in the Clouds"
                            />
                            <img
                                src="desgne-game.jpeg"
                                className="w-100 shadow-1-strong rounded mb-4 wow animate__animated animate__slideInDown"
                                alt="Boat on Calm Water"
                            />
                        </div>
                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <img
                                src="girl-with-a-dog.jpeg"
                                className="w-100 shadow-1-strong rounded mb-4 wow animate__animated animate__slideInLeft"
                                alt="Waves at Sea"
                            />
                            <img
                                src="car-dessert-game.jpeg"
                                className="w-100 shadow-1-strong rounded mb-4 wow animate__animated animate__slideInUp"
                                alt="Yosemite National Park"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                            <img
                                src="farming-game-maybe.jpeg"
                                className="w-100 shadow-1-strong rounded mb-4 wow animate__animated animate__slideInUp"
                                alt="Boat on Calm Water"
                            />
                            <img
                                src="car-dessert-game.jpeg"
                                className="w-100 shadow-1-strong rounded mb-4 wow animate__animated animate__slideInRight"
                                alt="Wintry Mountain Landscape"
                            />
                        </div>
                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <img
                                src="colors-game-maybe.jpeg"
                                className="w-100 shadow-1-strong rounded mb-4 wow animate__animated animate__slideInDown"
                                alt="Mountains in the Clouds"
                            />
                            <img
                                src="table-game.jpeg"
                                className="w-100 shadow-1-strong rounded mb-4 wow animate__animated animate__slideInLeft"
                                alt="Boat on Calm Water"
                            />
                        </div>
                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <img
                                src="horro-game-maybe.jpeg"
                                className="w-100 shadow-1-strong rounded mb-4 wow animate__animated animate__slideInUp"
                                alt="Waves at Sea"
                            />
                            <img
                                src="unknown-game.jpeg"
                                className="w-100 shadow-1-strong rounded mb-4 wow  animate__animated animate__slideInRight"
                                alt="Yosemite National Park"
                            />
                        </div>
                    </div> */}
                </div>
                <div className="clr"></div>
            </div>
        </section>
    );
}
