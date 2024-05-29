import {list} from './data'
import {FaQuoteRight} from 'react-icons/fa'
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'
import{useState,useEffect} from 'react'
const Carousel = () => {
  const [person,setPerson] = useState(list)
  const [currentPerson,setCurrentPerson] = useState(0)
  const prev = () => {
    setCurrentPerson((old)=>{
      return (old-1+person.length)%person.length
    })
  }
  const next = () => {
    setCurrentPerson((old)=>{
      return (old+1)%person.length
    })
  }
  useEffect(()=>{
    let id = setInterval(()=>{
      next()
    },2000)
    return (()=>clearInterval(id))
  },[currentPerson])
  return (
    <section className="slider-container">
      {list.map((person,index)=>{
          const {image,title,id,name,quote} = person
          return (
            <article key={id} className='slide'
            style = {{transform : `translateX(${100*(index-currentPerson)})`,
            opacity : index===currentPerson?1:0,
            visibility: index===currentPerson ? 'visible' : 'hidden'
          }} >
            
              <img src={image} alt={name} className='person-img'/>
              <h5 className={name}>{name}</h5>
              <p className={title}>{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight/>
            </article>
          )
        })}
        <button type='button' className='prev' onClick={prev}><FiChevronLeft/></button>
        <button type='button' className='next' onClick={next}><FiChevronRight/></button>
    </section>
  )
}
export default Carousel