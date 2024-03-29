import React from 'react';



const Register=({onChangeRoute})=>{
 return(
  <article className="br4 ba shadow-5 dark-gray b--black-10 mv4 w-150 w-50-m w-25-l mw6 center">
   <main className="pa4 black-80">
   <form className="measure">
     <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
       <legend className="f4 fw6 ph0 mh0">Register</legend>
       <div className="mt3">
         <label className="db fw6 lh-copy f6">Name</label>
         <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text"/>
       </div>
       <div className="mt3">
         <label className="db fw6 lh-copy f6" >Email</label>
         <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
       </div>
       <div className="mv3">
         <label className="db fw6 lh-copy f6">Password</label>
         <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
       </div>
     </fieldset>
     <div className="">
       <input
         onClick={()=>onChangeRoute('home')}
         className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
         type="submit"
         value="Register"/>
     </div>
   </form>
 </main>
</article>

 );
}
export default Register ;