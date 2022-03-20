import React from 'react';
import {Link} from 'react-router-dom';

import LogoImg from '../../assets/icones/logo-h.svg'
import HangerIcon from '../../assets/icones/icon-cabide.svg'
import EditIcon from '../../assets/icones/icon-edit-regular.svg';
import DeleteIcon from '../../assets/icones/x-icon.svg';
import Foto from '../../assets/fotos-looks/foto2.png';
import './styles.css';

export default function manager(){

    return(
        <div className="manager-container">
            <header>
                <nav>
                    <Link to="/">Vitrines</Link>
                    <Link to="/manager" style={{color:'white'}}>Gerenciar vitrines</Link>
                </nav>
                <div className="logo">
                    <img src={LogoImg} alt="houpa" />
                </div>
            </header>
            <main>
                <div className="title">
                    <div>
                        <div className="row">
                            <span>Houpa! </span> 
                            <span style={{color:'black'}}> &gt; Gerenciar vitrines </span>
                        </div>

                        <h1>
                            <img src={HangerIcon} alt="cabide"/>
                            <span>
                                Gerenciar vitrines
                            </span>
                        </h1>
                        <span><strong>Cadastre seus produtos</strong></span>
                    </div>
                    <div>
                        <button> Cadastrar Produto</button>
                    </div>

                </div>
                <div className="content">
                    <div className="row">
                        <div className="div-search">
                            <input type="text" className="search" placeholder="Pesquisar" />
                        </div>
                    </div>
                    <div className="products">
                        <article>
                            <div className="info">
                                <img src={Foto} alt="" />
                                <div>
                                    <p><strong>TOP CROPPED VISCOSE</strong></p>
                                    <p>Marca: Unique Chic</p>
                                    <p>Ref: 0396845610</p>    
                                </div>
                            </div>
                            <div className="action">
                                <Link to="/edit">
                                        <img src={EditIcon} alt="editar" />
                                </Link>
                                <Link to="/delete">
                                    <img src={DeleteIcon} alt="excluir" />
                                </Link>
                            </div>
                        </article>
                    </div>
                    <p className="view-more"><Link to={'/registration?page'}>Carregar mais produtos</Link></p>
                </div>
            </main>
        </div>
    );
}