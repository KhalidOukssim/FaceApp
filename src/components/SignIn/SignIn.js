import React from 'react';



class SingIn extends React.Component{
  constructor(props){
    super(props);
    this.state={
      signInemail:'',
      signInpass:'',
      success:false
    }
  }
  onEmailChange=(event)=>{
    this.setState({signInemail:event.target.value})
  }
  onPassChange=(event)=>{
    this.setState({signInpass:event.target.value})
  }
  onSubmitSignIn=()=>{
    fetch('http://localhost:3000/signin',{
     method:'post',
     headers:{'Content-Type':'application/json'},
     body:JSON.stringify({
       email:this.state.signInemail,
       pass:this.state.signInpass
     })
    }).then(response=>response.json()).then(data=>{
       if(data==='success'){
         console.log("success maan");
         this.setState({success:true})
        ;}})
      
        if(this.state.success){
      this.props.onChangeRoute('home')
     } 
    }


       
 
  render(){
    const {onChangeRoute}=this.props;
    return(
      <article className="br4 ba shadow-5 dark-gray b--black-10 mv4 w-150 w-50-m w-25-l mw6 center">
       <main className="pa4 black-80">
       <form className="measure">
         <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
           <legend className="f4 fw6 ph0 mh0">Sign In</legend>
           <div className="mt3">
             <label className="db fw6 lh-copy f6">Email</label>
             <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
             type="email"
             onChange={this.onEmailChange}
             />
           </div>
           <div className="mv3">
             <label className="db fw6 lh-copy f6">Password</label>
             <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
             type="password"
             onChange={this.onPassChange}
             />
           </div>
             
         </fieldset>
         <div className="">
           <input
             onClick={this.onSubmitSignIn}
             className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
             type="submit"
             value="Sign in"/>
         </div>
         <p className="f5 fw6 ph0 mh0 pointer" 
            onClick={()=>onChangeRoute('Register')}
         >Register</p>
       </form>
     </main>
    </article>
    
     );

    }
 
}
export default SingIn ;
