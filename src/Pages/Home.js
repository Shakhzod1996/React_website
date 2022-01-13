import React, { Component } from 'react'
import { Button, Card, CardGroup, Container } from 'react-bootstrap'
import CaruselBox from '../Components/CoruselBox'

export default class Home extends Component {
    render() {
        return (
            <>
                <CaruselBox />

                <Container>
                    <h2 className='text-center m-4'>Our Team</h2>
                    <CardGroup>
                    <Card className='m-4'>
                            <Card.Img 
                                variant='top' 
                                src='https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />

                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Lorem ipsum mipsun shipsun beautoful 
                                    man comes to see her she is exiting 
                                </Card.Text>
                                <Button variant='primary'>About Team</Button>
                            </Card.Body>
                        </Card>

                        <Card className='m-4'>
                            <Card.Img 
                                variant='top' 
                                src='https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />

                            <Card.Body>
                                <Card.Title>Managers</Card.Title>
                                <Card.Text>
                                    Lorem ipsum mipsun shipsun beautoful 
                                    man comes to see her she is exiting 
                                </Card.Text>
                                <Button variant='primary'>About Team</Button>
                            </Card.Body>
                        </Card>

                        <Card className='m-4'>
                            <Card.Img 
                                variant='top' 
                                src='https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />

                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Lorem ipsum mipsun shipsun beautoful 
                                    man comes to see her she is exiting 
                                </Card.Text>
                                <Button variant='primary'>About Team</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                        
                </Container>
            </>

        )
    }
}
