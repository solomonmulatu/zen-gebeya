import React from "react";
import './sign-in.style.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {auth,signInWithGoogle} from "../../firebase/firebase.utils";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit =async event => {
        event.preventDefault();
        const{email,password}=this.state;
try{
    await auth.signInWithEmailAndPassword(email,password);
    this.setState({
        email: '',
        password: ''
    })
}catch (e) {
    alert(e)
}

        

    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I Already Have Account</h2>
                <span>Sign in with Your Email and Password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} label='Email' name='email' type='email'
                               value={this.state.email} onChange={this.handleChange} required/>
                    <FormInput handleChange={this.handleChange} label='Password' name='password' type='password'
                               value={this.state.password} onChange={this.handleChange} required/>
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;