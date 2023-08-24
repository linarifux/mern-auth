import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';

function Hero() {
    return (
        <Card className="text-center m-5">
            <Card.Body>
                <Card.Title>MERN Authentication</Card.Title>
                <Card.Text>
                    A simple demonstration of MERN Authentication with JWT in an HTTP-Only cookie. Redux is also used to manage the state.
                </Card.Text>
                <div className='d-flex justify-content-center'>
                    <LinkContainer to='/login'><Button variant="primary" className='me-3'>Sign In</Button></LinkContainer>
                    <LinkContainer to='/register'><Button variant="secondary">Sign Up</Button></LinkContainer>
                </div>
            </Card.Body>
        </Card>
    );
}

export default Hero;