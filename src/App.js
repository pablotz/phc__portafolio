import Header from './components/header/header'
import Presentation from './components/presentation/presentation'
import Carrer from './components/carrer/carrer'
import Social from './components/social-media/social'
import './components/header/header.css'
import './components/presentation/presentation.css'
import './components/carrer/carrer.css'
import './components/social-media/social.css'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Presentation></Presentation>
      <Carrer></Carrer>
      <Social></Social>
    </div>
  );
}

export default App;
