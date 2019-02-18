import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './components/navbar/';
import Portada from './components/portada/';
import ListCarousel from './components/list-carousel/';
import 'bulma/css/bulma.css';
import 'animate.css/animate.css';

class App extends Component {
  render() {
    return (
      <div className="application">
      	<Navbar/>
      	<Portada/>
      	<div className="lautiflix__container">
          <ListCarousel idScroll="id2190218" title="Mi lista"></ListCarousel><br/>
          <ListCarousel idScroll="id2190216" title="Más populares"></ListCarousel><br/>
  		</div>
      </div>
    );
  }
}

export default App;
