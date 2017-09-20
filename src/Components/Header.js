import React from 'react';
import './Header.css';

export default function Header() {
    return(
        <div>
            <div className="site-name">
                <img src="http://www.menghishoes.com/wp-content/uploads/menghishoesandco.png" alt="Menghi Shoes & Co."/>
            </div>
            <div id="menu" className="navbar navbar-default navflex" role="navigation">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-menubuilder"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse navbar-menubuilder">
                    <ul className="nav navbar-nav">
                        <li><a href="www.menghishoes.com">Home</a>
                        </li>
                        <li className="dropdown"><a href="www.menghishoes.com/#">About</a>
                        <div className="dropdown-content">
                            <a href="#">Azienda</a>
                            <a href="#">Brands</a>
                            <a href="#">Le Marche</a>
                        </div>
                        </li>
                        <li className="dropdown"><a href="www.menghishoes.com/#">Collezioni</a>
                        <div className="dropdown-content">
                            <p><b>AI 2017-2018</b></p>
                            <a href="#">Donna</a>
                            <a href="#">Borse</a>
                            <a href="#">Uomo</a>
                            <p><b>PE 2017</b></p>
                            <a href="#">Donna</a>
                            <a href="#">Borse</a>
                            <a href="#">Uomo</a>
                        </div>
                        </li>
                        <li><a href="www.menghishoes.com/showroom">Showroom</a>
                        </li>
                        <li><a href="www.menghishoes.com/store-locator">Store Locator</a>
                        </li>
                        <li><a href="www.menghishoes.com/contatti">Contatti</a>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    )
}