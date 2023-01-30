import React, { useState } from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';
import Staff from './container/Staff/Staff';
import CoreValues from './container/CoreValues/CoreValues';
import Vision from './container/Vision/Vision';
import Mission from './container/Mission/Mission';
import Product from './container/Product/Product';
import Natural from './container/Natural/Natural';
import Master from './container/Master/Master';
import Service from './container/Service/Service';
import Got from './container/Got/Got';
import Lan from './container/Lan/Lan';
import Barista from './container/Barista/Barista';

const App = () => {
  const [readAboutMore, setReadAboutMore] = useState(false)
  const [readVisionMore, setReadVisionMore] = useState(false)
  const [readProductMore, setReadProductMore] = useState(false)
  const [readNaturalMore, setReadNaturalMore] = useState(false)
  const [readProcessMore, setReadProcessMore] = useState(false)
  const [readServiceMore, setReadServiceMore] = useState(false)
  const [readBaristaMore, setReadBaristaMore] = useState(false)

  const handleAboutClick = () => {
    setReadAboutMore(!readAboutMore)
  }
  console.log('readAboutMore', readAboutMore)
  console.log('readProductMore', readProductMore)

  const handleVisionClick = () => {
    setReadVisionMore(!readVisionMore)
  }

  const handleProductClick = () => {
    setReadProductMore(!readProductMore)
  }

  const handleNaturalClick = () => {
    setReadNaturalMore(!readNaturalMore)
  }

  const handleProcessClick = () => {
    setReadProcessMore(!readProcessMore)
  }

  const handleCompactClick = () => {
    setReadAboutMore(false)
    setReadProductMore(false)
  }
  const handleServiceClick = () => {
    setReadServiceMore(!readServiceMore)
  }
  const handleBaristaClick = () => {
    setReadBaristaMore(!readBaristaMore)
  }
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs handleAboutClick={handleAboutClick} readAboutMore={readAboutMore} handleNaturalClick={handleNaturalClick} readNaturalMore={readNaturalMore} />
      <CoreValues readAboutMore={readAboutMore} handleVisionClick={handleVisionClick} />
      <Vision readVisionMore={readVisionMore} readAboutMore={readAboutMore} />
      <Mission readVisionMore={readVisionMore} handleProductClick={handleProductClick} readAboutMore={readAboutMore} />
      <Product readProductMore={readProductMore} readAboutMore={readAboutMore} />
      <SpecialMenu readProductMore={readProductMore} handleCompactClick={handleCompactClick} readAboutMore={readAboutMore} />
      <Natural readNaturalMore={readNaturalMore} handleProcessClick={handleProcessClick} handleNaturalClick={handleNaturalClick} readProcessMore={readProcessMore} />
      <Chef />
      <Master handleServiceClick={handleServiceClick} />
      <Service readServiceMore={readServiceMore} />
      <Got readServiceMore={readServiceMore} />
      <Lan readServiceMore={readServiceMore} handleBaristaClick={handleBaristaClick} />
      <Barista readBaristaMore={readBaristaMore} readServiceMore={readServiceMore} />
      {/* <Staff /> */}
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
}
export default App;
