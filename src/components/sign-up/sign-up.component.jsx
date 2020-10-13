import React from "react";
import './sign-up.style.scss'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',

        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
if(password!==confirmPassword){
    alert("Password Doesn't match")
return;
}
try{
    const{user}=await auth.createUserWithEmailAndPassword(email,password);
    await createUserProfileDocument(user, {displayName})
    this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    
}catch (e) {
    alert(e)
    console.log("error is hapening"+e)
}

    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;

        return (
            <div className='sign-up'>
                <h2 className='title'> I dont have Account</h2>
                <span>Sign Up with Your Email And Password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Eamil'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit' >Sign Up</CustomButton>
                </form>
            </div>
        )
    }

}

export default SignUp;