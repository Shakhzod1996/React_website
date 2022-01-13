import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import forestImg from '../assets/zero.jpg'
import ocean from '../assets/second.jpg'
import robot from '../assets/third.jpg'
import '../App.css';


export default class CoruselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img 
                    className='d-block w-100'
                    src={forestImg}
                    alt='forest'/>

                    <Carousel.Caption>
                        <h3>Forest Image</h3>
                        <p>Lorem ipsun when come inside someone in the morning</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img 
                    className='d-block w-100'
                    src={robot}
                    alt='robot'/>

                    <Carousel.Caption>
                        <h3>Robot Image</h3>
                        <p>Lorem ipsun when come inside someone in the morning</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img 
                    className='d-block w-100'
                    src={ocean}
                    alt='ocean'/>

                    <Carousel.Caption>
                        <h3>Ocean Image</h3>
                        <p>Lorem ipsun when come inside someone in the morning</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
