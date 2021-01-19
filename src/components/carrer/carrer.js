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


const carrer = () => {
    return(
        <div id="carrer" className="diagonal-box">
            <div className="content">
                <h1 className="mt-24 font-serif text-5xl font-bold mt-3 ml-24 text-white">Carrera</h1>
                <p className="mt-10 ml-24 w-1/2 text-lg text-white font-serif leading-relaxed md:text-justify">
                    In commodo culpa ad ut consequat adipisicing irure ea anim excepteur enim nisi. Aute ut ad exercitation deserunt labore. Proident excepteur anim enim voluptate consectetur ex.
                    Officia dolore aliquip et qui sit incididunt aliqua est aliquip esse. Eu cupidatat elit laboris ad duis et cillum laboris anim excepteur esse ea voluptate do. Aute mollit amet aliquip consectetur.
                    </p>
                <div className="gallery">
                <Carousel itemsToShow={4} enableAutoPlay = {true} autoPlaySpeed={5000}>
                    <img src={p2}></img>
                    <img src={p7}></img>
                    <img src={p3}></img>
                    <img src={p5}></img>
                    <img src={p4}></img>
                    <img src={p6}></img>
                    <img src={p1}></img>
                    <img src={p9}></img>
                    <img src={p8}></img>
                </Carousel>
                </div>
            </div>
        </div>
    )
}

export default carrer;