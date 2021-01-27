import facebook from '../res/facebook.png'
import youtube from '../res/youtube.png'
import twitter from '../res/gorjeo.png'
import { Wave } from 'react-animated-text';


//Creacion del elemento dinamico
const presentation = () => {
    return(
         <div id="presentation" className="inline-flex space-x-4 mb-24 mt-24">
            <div className="mt-24 ml-7 lg:ml-60 flex-1 w-1/3 lg:w-1/2">
                <div className="mb-4">
                    <h1 className="name font-serif text-4xl lg:text-7xl font-bold mt-3">
                        <Wave
                        text="Pablo" 
                        effect="verticalFadeIn"
                        effectChange={2.5}
                        effectDirection='down'
                        iterations={1}
                        />
                        </h1>
                    <h1 className="name font-serif text-3xl lg:text-6xl mt-3">
                        <Wave
                        text="Hernández" 
                        effect="verticalFadeIn"
                        effectChange={2.5}
                        effectDirection='down'
                        iterations={1}
                        /></h1>
                    <h1 className="name font-serif text-3xl lg:text-6xl font-medium mt-3">
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
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><img alt="face" className="icons inline-block mt-4"src={facebook}></img></a>
                    <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><img alt="you" className="iconsL inline-block ml-4 mt-4"src={youtube}></img></a>
                    <a href="https://twitter.com/home" target="_blank" rel="noreferrer"><img alt="twitter" className="iconsL inline-block ml-4 mt-4"src={twitter}></img></a> 
                </div>
                
            </div>
            <div className="w-1/3 mt-32 lg:w-1/2 flex-2 ">
                <p className="font-serif text-xl lg:text-5xl lg:leading-relaxed auto leading-relaxed lg:mr-28 mr-4">
                    Lideres de la información en Mante y en la región
                </p>
            </div>
        </div>   
    )
}

export default presentation;