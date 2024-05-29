import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {longList} from './data'
import Slider from 'react-slick'
import { FaQuoteRight } from 'react-icons/fa'
const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
  }
  return (
    <section className='slick-container'>
      <Slider {...settings}>
        {longList.map((person)=>{
          const {image,title,id,name,quote} = person
          return (
            <article key={id}>
              <img src={image} alt={name} className='person-img'/>
              <h5 className={name}>{name}</h5>
              <p className={title}>{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight/>
            </article>
          )
        })}
      </Slider>
    </section>
  )
}
export default SlickCarousel