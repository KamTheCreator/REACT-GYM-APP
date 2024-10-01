import React  from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/swoldier'
import { useState } from 'react'

function Header(props){
  const {index, title,description } = props
  return(
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-center gap-2'>
        <p className='text-3xl sm:text-4xl md:text-5xl  font-semibold  text-slate-400'>{index}</p>
        <h4 className='text-lg sm:text-2xl  md:text-3xl '>{title}</h4>


      </div>
      <p className='text-sm sm:text-base mx-auto'>{description}</p>
    </div>
  )
}

export default function Generator() {
  const [showModal, setShowModal] = useState(false)
  const [poison, setPoison] = useState('individual')
  const [muscles, seMuscles] = useState([])
  const [goal, setGoal] = useState('strength_power')


  function toggleModal(){
    setShowModal (!showModal)
  }
   

  return (
    <SectionWrapper header={"generate your workout "}  
    title={['it\'s' , 'huge', '0\'clock' ]}>

      <Header index={'01'} title={'pick your poison'} 
      description={'select the workout your wish to do '}/>
      <div className='grid gird-cols-2 sm:grid-cols-4 gap-4'>

     {Object.keys(WORKOUTS).map ((type, typeIndex) =>{
       return(
         <button onClick={() =>{
          setPoison(type)

         }} 
         className={'bg-slate-950  border border-blue-400  duration-200 hover:border-blue-600py-3 rounded-lg' +
           (type === poison ? ' ' : ' border-blue-400'  )} 
         key={typeIndex}>
          <p className='capitalize '> {type.replace('_',"")}</p>
        </button>
      )
      
    })}
    </div>
    <Header index={'02'} title={'lock on traget'} 
      description={'select the muscles workout you want '}/>
      <div className='bg-slate-950  border-solid border-blue-400  flex rounded-lg   flex-col'>
        <button onClick={toggleModal} 
        className=' relative py-3 flex items-center justify-center'>
           <p> Select muscle groups</p>
           <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2  fa-caret-down"></i>
        </button>
        {showModal &&  (
           <div className='flex flex-col '> modal</div>
           )}

    </div>
    <Header index={'03'} title={'become juggeranut'} 
      description={'select your ultimate objective '}/>
      {/* <div className='grid grid-cols-3  sm:grid-cols-4 gap-4'> */}
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>

     {Object.keys(SCHEMES).map ((scheme, schemeIndex) => {
       return(
        <button onClick={() =>{
         setGoal(scheme)

        }} 
        className={'bg-slate-950  border border-blue-400  duration-200 hover:border-blue-600py-3 rounded-lg' +
          (scheme === goal ? ' ' : ' border-blue-400'  )} 
        key={schemeIndex}>
         <p className='capitalize '> {scheme.replace('_',"")}</p>
       </button>
     )
     
      
    })}
    </div>
     
    </SectionWrapper>
  )
}
