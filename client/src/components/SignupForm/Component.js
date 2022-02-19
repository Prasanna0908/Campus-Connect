import React from 'react';
import { Field } from 'redux-form';
import Form from '../shared/form/Form';
import renderField from '../shared/form/renderField';
import { usernameValidator, passwordValidator,emailValidator } from '../../util/validators';
import SubmitButton from '../shared/form/SubmitButton';
import PasswordStrengthBar from 'react-password-strength-bar';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {pass: ""};
  }
  componentDidMount() {
    this.redirectIfLoggedIn();
  }

  
  componentDidUpdate(prevProps, prevState, snapshot) {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.token) this.props.history.push('/');
  }

  onSubmit = (props) => { 
    
    // this.props.history.push('/login') 
    // console.log(this.props)
    this.props.attemptSignup(props.username, props.password, props.Email,this.props.history);
  };

  render() {
    return (
      <Form
        loading={this.props.loading}
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name='username'
          label='username'
          type='text'
          component={renderField}
          validate={usernameValidator}
        />
        <Field
          name='password'
          label='password'
          type='password'
          component={renderField}
          validate={passwordValidator}
          onChange={(e)=>{
            this.setState({pass: e.target.value})
          }
          }
        />
        <PasswordStrengthBar style={{width:"100%"}} password={this.state.pass} />
        <Field
          name='password2'
          label='confirm password'
          type='password'
          component={renderField}
        />
         <Field
          name='Email'
          label='email'
          type='email'
          component={renderField}
          validate={emailValidator}
        />
        <SubmitButton type='submit'>sign up</SubmitButton>
      </Form>
    );
  }
}

export default SignupForm;
