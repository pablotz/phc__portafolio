import face from '../res/f.png'
import tweet from '../res/twwt.png'
import play from '../res/play.png'

const social = () => {
    return(
        <div className="social-container">
            <h1 className="mt-24 mb-20 font-serif text-5xl font-bold mt-3 ml-24" id="social">Redes</h1>
            <div className="mt-40 place-self-center">
                <div className="social-divs facebook ml-56 transition duration-500 ease-in-out transform hover:-translate-y-5 ">
                    <a href="https://www.facebook.com/ "><img src={face} alt=""/></a>
                </div>
                 <div className="social-divs youtube ml-24 transition duration-500 ease-in-out transform hover:-translate-y-5">
                    <a href="https://www.youtube.com/"><img src={play} alt=""/></a>
                </div>
                <div className="social-divs twitter ml-24 transition duration-500 ease-in-out transform hover:-translate-y-5">
                    <a href="https://twitter.com/home"><img src={tweet} alt=""/>  </a>
                </div> 
            </div>
        </div>
    )
}

export default social;