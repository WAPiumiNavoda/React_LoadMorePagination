import React, { useState } from 'react'
import data from './data.js'

const Home = () => {
    const [noOfElements, setnoOfElements] = useState(4);
    const  loadMore = () =>{
        setnoOfElements(noOfElements + noOfElements);
    }

    const slice = data.cardData.slice(0,noOfElements);
  return (
    <>
     
         <section className='py-4 container'>
             <h1 className='row justify-content-center'>Animals</h1>
             <div className='row justify-content-center'>
                {slice.map((item,index)=>{
                    return(
                        <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4' key={index}>
                        <div className='card p-0 pb-3 overflow-hidden h-100 shadow'>
                         <img src={item.img} className='card-img-top p-2' style={{width:300, height:300}}/>
                         <div className='card-body'>
                             <h5 className='card-title'>{item.title}</h5>
                             <p className='card-text'>{item.desc}</p>

                             
                         </div>
                         <button className='btn btn-dark w-100 '>Read More</button>
                        </div>
                     </div>
                    )
                })}

                <button className='btn btn-dark w-100 m-3'
                        onClick={()=> loadMore()}>
                     Show More
                </button>
                
             </div>
         </section>
    </>
  )
}

export default Home