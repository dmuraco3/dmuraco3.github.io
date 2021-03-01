import {Form, Row, Col, Button, Alert} from 'react-bootstrap'
import {useState, useRef} from 'react'

export default function Contact() {
    const [Email, setEmail] = useState('')
    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [message, setMessage] = useState('')
    const formRef = useRef(null)

    const [successShow, setShowSucces] = useState(false)
    const [errorShow, setErrorShow] = useState(false)

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value)
    }
    const handleLastNameChange = (e) => {
        setLastName(e.target.value)
    }
    const handleMessageChange = (e) => {
        setMessage(e.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        event.stopPropagation()
        
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        }else {
            event.preventDefault()
            event.stopPropagation()
            let opts = {
                email: Email,
                fname: FirstName,
                lname: LastName,
                message: message,
            }

            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://formspree.io/f/xoqpodbv');
            xhr.setRequestHeader("Accept", "application/json");
            xhr.onreadystatechange = () => {
              if (xhr.readyState !== XMLHttpRequest.DONE) return;
              if (xhr.status === 200) {
                console.log({ status: "SUCCESS" });
                formRef.current.reset();
                setShowSucces(true)

              } else {
                console.log({ status: "ERROR" });
                setErrorShow(true)
              }
            };
            xhr.send(JSON.stringify(opts) );
        }
    }
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Please fill out this form to contact me</h1>
            {successShow ?
                <Alert variant="success" dismissible onClose={() => {
                    setShowSucces(false)
                }}>
                    <Alert.Heading>Thanks for Contacting Me</Alert.Heading>
                    <p>I will respond to you as soon as possible</p>
                </Alert>
                :
                <>
                </>
            }
            <div className="ContactFormHolder">
                <Form ref={formRef} className="ContactForm" onSubmit={handleSubmit}>

                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control onChange={handleEmailChange} required type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label >First name</Form.Label>
                                <Form.Control onChange={handleFirstNameChange} required type="text" placeholder="John"/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Last name</Form.Label>
                                <Form.Control onChange={handleLastNameChange} required type="text" placeholder="John"/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control onChange={handleMessageChange} required as="textarea" rows={3} />
                    </Form.Group>
                    <Button type="submit" variant="success" size="lg" block>
                        Send Message
                    </Button>
                </Form>
            </div>
        </div>
    )
}