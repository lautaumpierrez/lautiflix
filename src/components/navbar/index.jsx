import React from 'react';
import './style.scss';

class Navbar extends React.Component{

	constructor(props){
		super(props);
		this.state={
			scrolled: false,
		}
	}
	componentDidMount(){
		const $html = document.querySelector('html');
		window.addEventListener('scroll',()=>{
			if($html.scrollTop > 50){
				this.setState({scrolled: true});
			}else{
				this.setState({scrolled: false});

			}
		})
	}
	render(){
		let {scrolled} = this.state;
		return (
			<nav className={"navbar is-fixed-top "+(scrolled ? 'is-scrolled':'')}>
				<div className="navbar-brand">
					<a className="navbar-item">
						<img src={require('../../assets/lautiflix.png')}  alt=""/>
					</a>
					<div className="navbar-item  menu_for_mobile is-hidden-desktop">
						<div className="dropdown is-hoverable">
						  <div className="dropdown-trigger">
						    <button className="button" aria-haspopup="true">
						      <span>Explorar</span>
						      <span className="icon is-small">
						        <i className="material-icons">keyboard_arrow_down</i>
						      </span>
						    </button>
						  </div>
						  <div className="dropdown-menu" id="dropdown-menu4" role="menu">
						    <div className="dropdown-content">
						      <div className="dropdown-item">
						      	<a className="has-text-white">Inicio</a>
						      </div>
						      <div className="dropdown-item">
						      	<a className="has-text-white">Series</a>
						      </div>
						      <div className="dropdown-item">
						      	<a className="has-text-white">Peliculas</a>
						      </div>
						      <div className="dropdown-item">
						      	<a className="has-text-white">Agregados recientemente</a>
						      </div>
						      <div className="dropdown-item">
						      	<a className="has-text-white">Mi lista</a>
						      </div>
						    </div>
						  </div>
						</div>
					</div>
				</div>
				<div className="navbar-menu">
					<div className="navbar-start">
						<a className="navbar-item active">
							Inicio
						</a>
						<a className="navbar-item">
							Series
						</a>
						<a className="navbar-item">
							Peliculas
						</a>
						<a className="navbar-item">
							Agregados recientemente
						</a>
						<a className="navbar-item">
							Mi lista
						</a>
					</div>
				</div>
			</nav>
		);
	}
}


export default Navbar;