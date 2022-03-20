import React from 'react';
import { Link } from 'react-router-dom';

import LogoImg from '../../assets/icones/logo-h.svg'
import StoreIcon from '../../assets/icones/icon-loja.svg'
import FotoPng from '../../assets/fotos-looks/foto2.png';
import './styles.css';

export default function vitrine(){

    return(
        <div className="vitrine-container">
            <header>
                <nav>
                    <Link to="/"style={{color:'white'}}>Vitrines</Link>
                    <Link to="/manager">Gerenciar vitrines</Link>
                </nav>
                <div className="logo">
                    <img src={LogoImg} alt="houpa" />
                </div>
            </header>
            <main>
                <div className="title">
                    <div className="row">
                        <span>Houpa! </span> 
                        <span style={{color:'black'}}> &gt; Vitrines </span>
                    </div>
                    <h1>
                        <img src={StoreIcon} alt="home"/>
                        <span>
                            Vitrines
                        </span>
                    </h1>
                </div>
                <div className="content">
                    <div className="row">
                        <span>Todos</span>
                        <div className="div-search">
                            <input type="text" className="search" placeholder="Pesquisar" />
                        </div>
                    </div>
                    <div className="collection">
                        <article>
                            <img src={FotoPng} alt="" />
                            <span>VESTIDO DE BOLINHA</span>
                            <span className="price">R$ 50,00</span>
                        </article>
                        <article>
                            <img src={FotoPng} alt="" />
                            <span>VESTIDO DE BOLINHA</span>
                            <span className="price">R$ 50,00</span>
                        </article>
                        <article>
                            <img src={FotoPng} alt="" />
                            <span>VESTIDO DE BOLINHA</span>
                            <span className="price">R$ 50,00</span>
                        </article>
                        <article>
                            <img src={FotoPng} alt="" />
                            <span>VESTIDO DE BOLINHA</span>
                            <span className="price">R$ 50,00</span>
                        </article>
                        <article>
                            <img src={FotoPng} alt="" />
                            <span>VESTIDO DE BOLINHA</span>
                            <span className="price">R$ 50,00</span>
                        </article>
                        <article>
                            <img src={FotoPng} alt="" />
                            <span>VESTIDO DE BOLINHA</span>
                            <span className="price">R$ 50,00</span>
                        </article>
                        <article>
                            <img src={FotoPng} alt="" />
                            <span>VESTIDO DE BOLINHA</span>
                            <span className="price">R$ 50,00</span>
                        </article>
                    </div>
                </div>
            </main>
        </div>
    );
}