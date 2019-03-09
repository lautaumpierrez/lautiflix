import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class listCarousel extends React.Component{

	constructor(props){
		super(props);
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
	}
	next(){
		let $html = document.querySelector('html').clientWidth;
		const imageScroll = document.getElementById(this.props.idScroll);
		imageScroll.scrollLeft += $html;
	}
	previous(){
		let $html = document.querySelector('html').clientWidth;
		const imageScroll = document.getElementById(this.props.idScroll);
		imageScroll.scrollLeft -= $html;

	}
	componentDidMount(){

	}
	render(){
		let {idScroll, title, openVideo} = this.props;
		return(
			<div className="lautiflix__carousel">
				<p className="subtitle has-text-light has-text-weight-bold" style={{marginBottom: 10}}>{title}</p>
				<div>
					<div onClick={this.previous} className="lautiflix__carousel__control lautiflix__carousel__inline is-left-control">
						<i className="material-icons">keyboard_arrow_left</i>
					</div>
					<div className="lautiflix__carousel__images lautiflix__carousel__inline" id={idScroll}>
						<div className="columns is-gapless is-mobile ">
							<div className="lautiflix__carousel__img column is-2-desktop is-4-touch">
								<div onClick={openVideo} className="childComp">
									<ImageCarousel bannerImage="http://images.vertele.eldiario.es/2019/01/10/criticas/Sex-education_2084501626_9723727_660x371.jpg"></ImageCarousel>
								</div>
							</div>
							<div className="lautiflix__carousel__img column is-2-desktop is-4-touch">
								<div onClick={openVideo} className="childComp">
									<ImageCarousel bannerImage="https://1yazat78t1q1ticyv3i8g9il-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/the100pic.jpg"></ImageCarousel>
								</div>
							</div>
							<div className="lautiflix__carousel__img column is-2-desktop is-4-touch">
								<div onClick={openVideo} className="childComp">
									<ImageCarousel bannerImage="https://www.nocreasnada.com/wp-content/uploads/2018/11/2018-11-17_5bf0a27395c9f_shadowhunters.jpg"></ImageCarousel>
								</div>
							</div>
							<div className="lautiflix__carousel__img column is-2-desktop is-4-touch">
								<div onClick={openVideo} className="childComp">
									<ImageCarousel bannerImage="https://2.bp.blogspot.com/-XC_AXTvmzwo/WTTyUapHUuI/AAAAAAAAIu8/KiXaoE71fGYQ87OmrxrnAhFSUnMKb32eACLcB/s1600/originals-serie.jpg"></ImageCarousel>
								</div>
							</div>
							<div className="lautiflix__carousel__img column is-2-desktop is-4-touch">
								<div onClick={openVideo} className="childComp">
									<ImageCarousel bannerImage="https://www.roastbrief.com.mx/wp-content/uploads/2018/05/roastbrief-trollhunters-la-serie-animada-de-guillermo-del-toro-780x405.jpg"></ImageCarousel>
								</div>
							</div>
							<div className="lautiflix__carousel__img column is-2-desktop is-4-touch">
								<div onClick={openVideo} className="childComp">
									<ImageCarousel bannerImage="https://www.roastbrief.com.mx/wp-content/uploads/2018/05/roastbrief-trollhunters-la-serie-animada-de-guillermo-del-toro-780x405.jpg"></ImageCarousel>
								</div>
							</div>
							<div className="lautiflix__carousel__img column is-2-desktop is-4-touch">
								<div onClick={openVideo} className="childComp">
									<ImageCarousel bannerImage="https://www.roastbrief.com.mx/wp-content/uploads/2018/05/roastbrief-trollhunters-la-serie-animada-de-guillermo-del-toro-780x405.jpg"></ImageCarousel>
								</div>
							</div>
							<div className="lautiflix__carousel__img column is-2-desktop is-4-touch">
								<div onClick={openVideo} className="childComp">
									<ImageCarousel bannerImage="https://www.roastbrief.com.mx/wp-content/uploads/2018/05/roastbrief-trollhunters-la-serie-animada-de-guillermo-del-toro-780x405.jpg"></ImageCarousel>
								</div>
							</div>
						</div>
					</div>
					<div onClick={this.next}  className="lautiflix__carousel__control lautiflix__carousel__inline is-right-control">
						<i className="material-icons">keyboard_arrow_right</i>

					</div>
				</div>
			</div>
		);
	}
}

class ImageCarousel extends React.Component{
	componentDidMount(){

	}
	render(){
		const {bannerImage} = this.props;
		return(
			<div className="image__carousel" style={{backgroundImage: `url(${bannerImage})`}}>
				<div className="play_button">
					<div className="icon">
						<center>
							<div className="icon_set">
								<i className="material-icons icon">play_arrow</i>
							</div>
						</center>
					</div>
				</div>
			</div>
		);
	}

}
listCarousel.propTypes = {
	idScroll: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
}
export default listCarousel;
