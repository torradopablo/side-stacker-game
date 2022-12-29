import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Form } from 'react-bootstrap';


function LoginComponent() {
  return (
    <div className='login-component-container' >
        <Form className='rounded p-4 p-sm-3'>
            <Form.Group 
                className='mb-3'
                controlId='formBasicEmail'
            >test
            </Form.Group>
        </Form>
    </div>
  );
}

export default LoginComponent;
