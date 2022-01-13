import React, { Component } from 'react'
import { Accordion, Row, Col, Container, Card, ListGroup } from 'react-bootstrap'

export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md='9'>
                        <div style={{ display: 'block' }}>
                            <div className='mt-5' style={{ display: 'flex', marginBottom: '30px' }}>
                                <div className='mx-4'>
                                    <img
                                        width={150}
                                        height={150}
                                        className='mr-3'
                                        src='https://avatars.mds.yandex.net/get-zen_doc/3413519/pub_5ff887b2fe4e686f6ae6ba3f_5ff887d7f906b16872a69755/scale_1200' />

                                </div>

                                <div>
                                    <h5>JavaScript</h5>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Consequuntur facilis voluptate error veniam, eius tenetur
                                        distinctio ipsum quo vitae hic, aut, ad quaerat inventore earum?
                                        Sequi sapiente hic soluta laboriosam!

                                    </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', marginBottom: '30px' }}>
                                <div className='mx-4'>
                                    <img
                                        width={150}
                                        height={150}
                                        className='mr-3'
                                        src='https://miro.medium.com/max/1200/1*K-4RqDC6zFrpAG31ayDDOg.png' />

                                </div>

                                <div>
                                    <h5>React</h5>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Consequuntur facilis voluptate error veniam, eius tenetur
                                        distinctio ipsum quo vitae hic, aut, ad quaerat inventore earum?
                                        Sequi sapiente hic soluta laboriosam!

                                    </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', marginBottom: '30px' }}>
                                <div className='mx-4'>
                                    <img
                                        width={150}
                                        height={150}
                                        className='mr-3'
                                        src='https://yt3.ggpht.com/a/AATXAJwM4bwxBTy9Khvt5tEhNS3yt87q8z3dk0k5ig=s900-c-k-c0xffffffff-no-rj-mo' />

                                </div>

                                <div>
                                    <h5>Html/Css</h5>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Consequuntur facilis voluptate error veniam, eius tenetur
                                        distinctio ipsum quo vitae hic, aut, ad quaerat inventore earum?
                                        Sequi sapiente hic soluta laboriosam!

                                    </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', marginBottom: '30px' }}>
                                <div className='mx-4'>
                                    <img
                                        width={150}
                                        height={150}
                                        className='mr-3'
                                        src='https://andreyex.ru/wp-content/uploads/2018/05/Kak-ustanovit-Java-s-apt-na-Ubuntu-18.04.jpg' />

                                </div>

                                <div>
                                    <h5>Java</h5>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Consequuntur facilis voluptate error veniam, eius tenetur
                                        distinctio ipsum quo vitae hic, aut, ad quaerat inventore earum?
                                        Sequi sapiente hic soluta laboriosam!

                                    </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', marginBottom: '30px' }}>
                                <div className='mx-4'>
                                    <img
                                        width={150}
                                        height={150}
                                        className='mr-3'
                                        src='https://telegram.org.ru/uploads/posts/2021-02/1614256626_python_logo.jpg' />

                                </div>

                                <div>
                                    <h5>Python</h5>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Consequuntur facilis voluptate error veniam, eius tenetur
                                        distinctio ipsum quo vitae hic, aut, ad quaerat inventore earum?
                                        Sequi sapiente hic soluta laboriosam!

                                    </p>
                                </div>
                            </div>

                        </div>
                    </Col>

                    <Col md='3'>
                        <h5 className='text-center mt-5'>Categories</h5>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>JavaScript</ListGroup.Item>
                                <ListGroup.Item>React</ListGroup.Item>
                                <ListGroup.Item>Html/Css</ListGroup.Item>
                                <ListGroup.Item>Java</ListGroup.Item>
                                <ListGroup.Item>Python</ListGroup.Item>

                            </ListGroup>
                        </Card>

                        <Card className='mt-3' bg='light'>
                            <Card.Body>
                                <Card.Title>Site widget</Card.Title>
                                <Card.Text>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Consequuntur facilis voluptate error veniam, eius tenetur
                                    distinctio ipsum quo vitae hic, aut, ad quaerat inventore earum?
                                    Sequi sapiente hic soluta laboriosam!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
