import React from 'react';
import './style.scss';


class Portada extends React.Component{
	render(){
		return(
			<section className="hero is-fullheight" style={{backgroundColor: 'transparent'}}>
				<div className="hero-body">

					<div className="bg__portada" style={{backgroundImage: `url('${require('../../assets/images/bg-grimm.jpg')}')`}}></div>
					<div className="container">
						<br/>
						<div className="columns" style={{ paddingTop: 50 }}>
							<div className="column is-5">
								<div className="originalOfNetflix">

									<p className="title is-3 has-text-white is-marginless" style={{marginBottom: '5px'}}>
										<span className="has-text-weight-light">ORIGINAL DE </span>
										<span className="has-text-weight-extrabold">LAUTIFLIX</span>
									</p>
									<br/>
									<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Grimm_Logo.png/800px-Grimm_Logo.png" width="200" alt=""/>
								</div>
								<br/>
								<div className="has-text-left">
									<button className="button lautiflix__button__rp is-dark">
										<i className="material-icons">play_arrow</i>
										&nbsp;
										Reproducir
										&nbsp;
									</button>
									&nbsp;
									<span> </span>
									&nbsp;
									&nbsp;
									<button className="button lautiflix__button__rp is-dark">
										<i className="material-icons">add</i>
										&nbsp;
										Mi Lista
										&nbsp;
									</button>
									<br/>&nbsp;
									<p className="title has-text-white" style={{fontSize: '22px'}}>Ve a la temporada 6</p>
									<p className="subtitle has-text-white">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum sequi odio modi adipisci, vel, ipsa esse doloribus quam
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}


export default Portada;