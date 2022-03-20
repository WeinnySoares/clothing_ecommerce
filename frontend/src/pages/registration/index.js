import React from 'react';
import {Link} from 'react-router-dom';

import LogoImg      from '../../assets/icones/logo-h.svg'
import ClothingIcon from '../../assets/icones/icon-peca.svg'
//import DeleteIcon   from '../../assets/icones/x-icon.svg';
import DressIcon    from '../../assets/icones/vestido-icon.svg';
import PlusIcon     from '../../assets/icones/+.svg'
import SaveIcon     from '../../assets/icones/disquete.svg';
import './styles.css';


export default function registration(){

    return(
        <div className="registration-container">
            <header>
                <nav>
                    <Link to="/" className="current">Vitrines</Link>
                    <Link to="/manager" style={{color:'white'}}>Gerenciar vitrines</Link>
                </nav>
                <div className="logo">
                    <img src={LogoImg} alt="houpa" />
                </div>
            </header>
            <main>
                <div className="title">
                    <div className="row">
                        <span>Houpa! </span> 
                        <span>&gt; Gerenciar vitrines </span>
                        <span style={{color:'black'}}> &gt; Cadastrar produto</span>
                    </div>
                    <h1>
                        <img src={ClothingIcon} alt="cabide"/>
                        <span>
                            Cadastrar produto
                        </span>
                    </h1>
                </div>
                <div className="content">
                    <div className="row">
                        <h2>Cadastro de produto</h2>
                        <button><img src={SaveIcon} alt="" /> Salvar produto</button>
                    </div>
                    <h3><img src={DressIcon} alt="icone de vestido" /> Informações do produto</h3>
                    <form action="">
                        <div className="input-group">
                            <label>Nome do produto *
                                <input className="product-name" type="text" />
                            </label>
                            <label>
                                Preço
                                <input className="product-price" type="text" />
                            </label>
                        </div>
                        <div className="row-img">
                            <div className="img-group">
                                    <label>
                                        <input type="file" />
                                    </label>
                                    
                                    <label>
                                        <input type="file" />
                                    </label>
                                    
                                    <label>
                                        <input type="file" />
                                    </label>
                                    
                                    <label>
                                        <input type="file" />
                                    </label>
                                    
                            </div>
                        </div>
                        <div className="description">
                            <label>
                                Descrição da peça *
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </label>
                        </div>
                        <div className="size">
                            <label>Tamanhos</label>
                            <div className="size-group">
                                <div>
                                    <span>P</span>
                                    X
                                </div>
                                <div>
                                    <span>M</span>
                                    X
                                </div>
                                <div>
                                    <span>G</span>
                                    X
                                </div>
                                <div className="button-plus">
                                    <Link><img src={PlusIcon} alt=""></img></Link>
                                </div>
                            </div>
                        </div>
                        <div className="colors">
                            <label>Cores</label>
                            <div className="colors-group">
                                <div className="item">
                                    <span style={{'background-color':'#00BFCB'}} className="color">&nbsp;</span>
                                    x
                                </div>
                                <div className="item">
                                    <span style={{'background-color':'#7F1CEF'}} className="color">&nbsp;</span>
                                    x
                                </div>
                                <div className="button-plus">
                                    <Link><img src={PlusIcon} alt=""></img></Link>
                                </div>
                            </div>
                        </div>
                        <div className="stock">
                            <label>Estoque</label>
                            <div className="stock-group">
                                <div className="stock-item">
                                    <div className="item">
                                        <span style={{'background-color':'#7F1CEF'}} className="color">&nbsp;</span>
                                    </div>
                                    <div className="quantities">
                                        <div className="item-quantity">
                                            <div className="button-minus">-</div>
                                            <div className="item">
                                                <span className="size">
                                                    P
                                                </span>
                                                <span className="quantity"> 3</span>
                                            </div>
                                            <div className="button-plus">+</div>
                                        </div>
                                        <div className="item-quantity">
                                            <div className="button-minus">-</div>
                                            <div className="item">
                                                <span className="size">
                                                    M
                                                </span>
                                                <span className="quantity"> 3</span>
                                            </div>
                                            <div className="button-plus">+</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="button-plus">
                                <Link>+</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}