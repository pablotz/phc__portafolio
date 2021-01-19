import facebook from '../res/facebook.png'
import youtube from '../res/youtube.png'
import twitter from '../res/gorjeo.png'
import { Wave } from 'react-animated-text';


//Creacion del elemento dinamico
const presentation = () => {
    return(
         <div id="presentation" className="inline-flex space-x-4 mb-24 mt-24">
            <div className="mt-24 ml-60 w-1/2 flex-1">
                <div className="mb-4">
                    <h1 className="name font-serif text-7xl font-bold mt-3">
                        <Wave
                        text="Pablo" 
                        effect="verticalFadeIn"
                        effectChange={2.5}
                        effectDirection='down'
                        iterations={1}
                        />
                        </h1>
                    <h1 className="name font-serif text-6xl mt-3">
                        <Wave
                        text="Hernández" 
                        effect="verticalFadeIn"
                        effectChange={2.5}
                        effectDirection='down'
                        iterations={1}
                        /></h1>
                    <h1 className="name font-serif text-6xl font-medium mt-3">
                        <Wave
                        text="Contreras" 
                        effect="verticalFadeIn"
                        effectChange={2.5}
                        effectDirection='down'
                        iterations={1}
                        /></h1>
                </div>
                <div className="mt-2">
                    <hr className="border-solid border-2 border-dark-gray-100"></hr>
                    <a href="https://www.facebook.com/" target="_blank"><img className="icons inline-block mt-4"src={facebook}></img></a>
                    <a href="https://www.youtube.com/" target="_blank"><img className="iconsL inline-block ml-4 mt-4"src={youtube}></img></a>
                    <a href="https://twitter.com/home" target="_blank"><img className="iconsL inline-block ml-4 mt-4"src={twitter}></img></a> 
                </div>
                
            </div>
            <div className="w-1/2 flex-2 mt-20">
                    <div className="mt-12 font-serif ml-20 mr-40 text-5xl auto leading-relaxed">
                        Lideres de la información en Mante y en la región.
                    </div>
            </div>
        </div>   
    )
}

export default presentation;