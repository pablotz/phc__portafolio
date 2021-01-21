import Header from './components/header/header'
import Presentation from './components/presentation/presentation'
import Carrer from './components/carrer/carrer'
import Social from './components/social-media/social'
import Contact from './components/contact/contact'


import './components/header/header.css'
import './components/presentation/presentation.css'
import './components/carrer/carrer.css'
import './components/social-media/social.css'
import './components/contact/contact.css'


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Presentation></Presentation>
      <Carrer></Carrer>
      <Social></Social>
      <Contact></Contact>
    </div>
  );
}

export default App;
