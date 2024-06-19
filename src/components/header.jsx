import '../style.css';

export default function Header() {
    return(
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="for-language-swap-logo">
                            <div className="logo">
                                <a href="#">
                                    <img alt="Tamra Games" src="#"/>
                                </a>
                            </div>
                        </div>
                        
                        <div className="main_menu">
                            <ul>
                                <li className="active">
                                     <a href="#">Home</a> 
                                </li>
                                <li className="">
                                    <a href="#" >About</a> 
                                </li>
                                <li className="" >
                                    <a href="#" >Solutions</a>
                                </li>
                                <li className="">
                                    <a href="#" >Publishing</a> 
                                </li>
                                <li className=""> 
                                    <a href="#" >Why Games</a> 
                                </li>
                                <li className=""> 
                                    <a href="#" >Careers</a> 
                                </li>
                                <li className=""> 
                                    <a href="#" >Contact</a> 
                                </li>
                                <li className="publishing-button"> 
                                    <a target="_blank" href="#" >Publish Your Game</a> 
                                </li>
                                <li>
                                    <a href="index-ar.html" >عربي</a>
                                </li>
                            </ul>
                        </div>
                        <div className="mobile_menu">
                            <span className="icon">☰ </span>
                            <div id="mySidenav" className="sidenav">
                                <span className="closebtn">×</span>
                                <ul>
                                    <li className="{router.pathname == &quot;/&quot; ? &quot;active&quot; : &quot;&quot;}">
                                         <a href="#">Home</a> 
                                    </li>
                                    <li className="{router.pathname == &quot;about&quot; ? &quot;active&quot; : &quot;&quot;}">
                                        <a href="#">About</a> 
                                    </li>
                                    <li> 
                                        <a href="#">Solutions</a> 
                                    </li>
                                    <li> 
                                        <a href="publishing.html">Publishing</a> 
                                    </li>
                                    <li> 
                                        <a href="#">Brands</a> 
                                    </li>
                                    <li> 
                                        <a href="#">Careers</a> 
                                    </li>
                                    <li> 
                                        <a href="#">Contact</a> 
                                    </li>
                                    <li> 
                                        <a target="#" href="#">Publish Your Game</a>  
                                    </li>
                                    <li>
                                        <a href="#" >عربي</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                     <div className="lang-button" >
                        <a href="#"> عربي</a>
                    </div> 
                </div>
            </div>
            <div className="clr">

            </div>
        </div>
    
    );
}
