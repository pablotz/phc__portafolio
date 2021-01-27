import Carousel from 'react-elastic-carousel'
import p1 from '../res/Photos/1.jpg'
import p2 from '../res/Photos/2.jpg'
import p3 from '../res/Photos/3.jpg'
import p4 from '../res/Photos/4.jpg'
import p5 from '../res/Photos/5.jpg'
import p6 from '../res/Photos/6.jpg'
import p7 from '../res/Photos/7.jpg'
import p8 from '../res/Photos/8.jpg'
import p9 from '../res/Photos/9.jpg'
import p10 from '../res/Photos/10.jpeg'
import p11 from '../res/Photos/11.jpeg'
import p12 from '../res/Photos/12.jpeg'
import p13 from '../res/Photos/13.jpeg'
import p14 from '../res/Photos/14.jpeg'

const carrer = () => {
    return(
        <div id="carrer" className="diagonal-box">
            <div className="content">
                <h1 className="mt-24 font-serif text-4xl lg:text-5xl font-bold lg:mt-3 ml-10 lg:ml-24 text-white">Carrera</h1>
                <p className="mt-10 w-80 ml-10 lg:ml-24 lg:w-1/2 text-sm lg:text-lg text-white font-serif leading-relaxed text-justify">
                    In commodo culpa ad ut consequat adipisicing irure ea anim excepteur enim nisi. Aute ut ad exercitation deserunt labore. Proident excepteur anim enim voluptate consectetur ex.
                    Officia dolore aliquip et qui sit incididunt aliqua est aliquip esse. Eu cupidatat elit laboris ad duis et cillum laboris anim excepteur esse ea voluptate do. Aute mollit amet aliquip consectetur.
                    </p>
                <div className="gallery">
                <Carousel itemsToShow={4} enableAutoPlay = {true} autoPlaySpeed={5000}>
                    <img src={p2} alt="p1"></img>
                    <img src={p7} alt="p7"></img>
                    <img src={p3} alt="p3"></img>
                    <img src={p10} alt="p10"></img>
                    <img src={p5} alt="p5"></img>
                    <img src={p4} alt="p4"></img>
                    <img src={p6} alt="p6"></img>
                    <img src={p1} alt="p1"></img>
                    <img src={p13} alt="p13"></img>
                    <img src={p14} alt="p14"></img>
                    <img src={p9} alt="p9"></img>
                    <img src={p8} alt="p8"></img>
                    <img src={p9} alt="p9"></img>
                    <img src={p11} alt="p11"></img>
                    <img src={p12} alt="p12"></img>
                    

                </Carousel>
                </div>
            </div>
        </div>
    )
}

export default carrer;