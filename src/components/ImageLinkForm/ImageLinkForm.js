import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm=({onInputChange,onButtonSumbit})=>{
 return(
   <div >
   <p className='f3 center'>
   {'This Magic Brain will detect your face. TRY IT'}
   </p>
   <div className='center'>
     <div className='former pa4 br3 shadow-5 center'>
     <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
     <button className='w-30 grow f4 link ph3 pv2 whitr bg-light-purple ' onClick={onButtonSumbit}>Detect</button>
   </div>
   </div>

  </div>

 );
}
export default ImageLinkForm ;
