import photo from '../res/Photos/PP.png'
const contact = () => {
    return(
        <div className="contact-container">
            <h1 className="mt-24 mb-20 font-serif text-5xl font-bold mt-3 ml-24" id="contact">Contacto</h1>
            <div className="photo-container">
                <img src={photo} alt="Picture"></img>
                <div className="button" id="button-2">
                    <div id="slide"></div>
                    <a className="mail" href="mailto:pablohdzc@hotmail.com">Enviar correo</a>
                </div>
                <p  className="pablotz mt-10 opacity-60 w-1/2 text-lg text-black font-serif leading-relaxed md:text-justify">© PabloTz 2021</p>
            </div>
        </div>
    )
}

export default contact;