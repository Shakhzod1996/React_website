import React, { Component } from 'react'
import { Container, Nav, Tab, Row, Col } from 'react-bootstrap'
import '../App.css'

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id='left-tab-example' defaultActiveKey='first'>
                    <Row>
                        <Col sm={3}>
                            <Nav variant='pills' className='flex mt-4'>
                                <Nav.Item className='link'>
                                    <Nav.Link eventKey='first'>Design</Nav.Link>
                                </Nav.Item>

                                <Nav.Item className='link'>
                                    <Nav.Link eventKey='second'>Team</Nav.Link>
                                </Nav.Item>

                                <Nav.Item className='link'>
                                    <Nav.Link eventKey='third'>Programming</Nav.Link>
                                </Nav.Item>

                                <Nav.Item className='link'>
                                    <Nav.Link eventKey='fourth'>Frameworks</Nav.Link>
                                </Nav.Item>

                                <Nav.Item className='link'>
                                    <Nav.Link eventKey='fifth'>Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>

                        <Col sm={9}>
                            <Tab.Content className='mt-4'>
                                <Tab.Pane eventKey='first'>
                                    <img className='photo' src='https://www.subtraction.com/wp-content/uploads/2015/12/2015-12-04-figma-e1449242250724.png'/>
                                    <p className='par'>Lorem imsun mipsu whne we come to your home be ready for leaving the right vay even who knows</p>
                                    <p className='par'>Lorem imsun mipsu whne we come to your home be ready for leaving the right vay even who knows</p>

                                </Tab.Pane>

                                <Tab.Pane eventKey='second'>
                                    <img className='photo' src='https://breezzly-prod.s3.eu-central-1.amazonaws.com/blog/assets/Screenshot_2020_05_29_at_01_47_32_1536x1047_fc8ddd6dae.png'/>
                                    <p className='par'>Lorem imsun mipsu whne we come to your home be ready for leaving the right vay even who knows</p>
                                </Tab.Pane>

                                <Tab.Pane eventKey='third'>
                                    <img className='photo' src='https://ux-journal.ru/wp-content/uploads/2020/05/Screenshot-2020-05-29-at-01.46.55-2048x1395.png'/>
                                    <p className='par'>Lorem imsun mipsu whne we come to your home be ready for leaving the right vay even who knows</p>
                                    <p className='par'>Lorem imsun mipsu whne we come to your home be ready for leaving the right vay even who knows</p>

                                </Tab.Pane>

                                <Tab.Pane eventKey='fourth'>
                                    <img className='photo' src='https://avatars.mds.yandex.net/get-zen_doc/751940/pub_5c1e202222d57e00a9f0a4e9_5c1e24611fdf2500aa89ba43/scale_1200'/>
                                    <p className='par'>Lorem imsun mipsu whne we come to your home be ready for leaving the right vay even who knows</p>
                                </Tab.Pane>

                                <Tab.Pane eventKey='fifth'>
                                    <img className='photo' src='https://figmafiles.com/wp-content/uploads/2021/06/01-slider-1680.png'/>
                                    <p className='par'>Lorem imsun mipsu whne we come to your home be ready for leaving the right vay even who knows</p>
                                    <p className='par'>Lorem imsun mipsu whne we come to your home be ready for leaving the right vay even who knows</p>

                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}
