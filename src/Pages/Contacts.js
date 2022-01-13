import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default class Contacts extends Component {
    render() {
        return (
            <Container style={{width: '700px'}}>
                <h1 className='text-center'>Contact Us</h1>

                <Form>
                    <Form.Group controlId='formBasicEmail'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type='email' placeholder='Enter email' />
                        <Form.Text>
                            We will never share your email with anyone else
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId='formBasicPassword'>
                        <Form.Label>Enter Your Data</Form.Label>
                        <Form.Control as='textarea' rows='4'/>
                    </Form.Group>

                    <Form.Group controlId='formBasicCheckbox' className='mt-3'>
                        <Form.Check type='checkbox' label='check me out' />
                    </Form.Group>

                    <Button variant='primary' type='submit' className='mt-3'>Submit</Button>
                </Form>
            </Container>
        )
    }
}
