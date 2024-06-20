import '../style.css';
import logo from '/cropped-cropped-tamra-3.png'

export default function Footer({...props}) {
    return(
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="widget">
                        <img className="footer_logonew" src={logo} alt="Game District" title="Game District" />
                        <p>Making you realize the power of Digital Intelligence.</p>
                         {/* <img className="copy_right_icon" alt="icon" src="imgs/icons.jpg" />  */}
                        <div className="copy_right"> © Copyright Tamra Games 2023,<br /> All Rights Reserved. </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="widget">
                        <h3 className="widget_title">company</h3>
                        <ul className="menu"><li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>
                            <a href="about.html">About</a>
                        </li>
                        <li>
                            <a href="solutions.html">Solutions</a>
                        </li>
                        <li>
                            <a href="publishing.html">Publishing</a>
                        </li>
                        <li>
                            <a href="whygames.html">Why Games</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="widget">
                    <h3 className="widget_title">Get on board</h3>
                    <ul className="menu">
                        <li>
                            <a href="careers.html">Careers</a>
                        </li>
                        <li>
                            <a href="#">Terms &amp; Conditions</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="contact.html">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="widget">
                    <h3 className="widget_title">Get in touch</h3>
                        <p>
                            <img className="footer-icon" alt="" src="imgs/icon_phone.jpg" />
                            <a href="tel:+966533323358">+966533323358</a>
                        </p>
                        <p>
                            <img className="footer-icon" alt="" src="imgs/icon_email.jpg" /> 
                            <a href="mailto:support@tamragames.com">support@tamragames.com</a>
                        </p>
                        <p>
                            <img className="footer-icon" alt="Facebook" src="imgs/icon_facebook.jpg" />
                            <a href="https://www.facebook.com/people/Tamra-Games-تمرة-للألعاب/61553598410423/"> Facebook</a>
                        </p>
                        <p> 
                            <img className="footer-icon" alt="Instagram" src="imgs/icon_instagram.jpg" />
                            <a href="https://www.instagram.com/tamragamesksa/"> Instagram</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="clr"></div>
        </div>
    </footer>
    );

}