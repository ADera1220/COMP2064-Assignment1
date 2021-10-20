import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function Contact({ name, ...props }) {
    const [show, setShow] = useState(false);
    const [fName, setFName] = useState(true);
    const [lName, setLName] = useState(true);
    const [email, setEmail] = useState(true);
    const [emailBody, setEmailBody] = useState(true);
    
    const handleSubmit = () => {
        const templateId = 'template_3w8hzkc';

	    sendFeedback(templateId, 
            {
                message_html: emailBody, 
                from_name: `${fName} ${lName}`, 
                reply_to: email
            })
    }

    const sendFeedback = (templateId, variables) => {
        window.emailjs.send(
            'service_laqq7xy', templateId,
            variables, 'user_HhZ70vEUWi3DygLoZFBQk').then(res => {
              console.log('Email successfully sent!')
            })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }

    const handleChange = (event) => {
        switch(event.target.id){
            case 'fName':
                setFName(event.target.value)
                break;
            case 'lName':
                setLName(event.target.value)
                break;
            case 'email':
                setEmail(event.target.value)
                break;
            case 'emailBody':
                setEmailBody(event.target.value)
                break;
            default:
                break;
        }
      }

    return (
        <div>
          <Alert show={show} variant="success">
            <Alert.Heading>Let me know your're interested</Alert.Heading>
            <form>
                <div className="mb-3">
                    <label for="fName" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="fName" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label for="lName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lName" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label for="emailBody" className="form-label">Subject</label>
                    <textarea type="textarea" className="form-control" id="emailBody" placeholder='Write Something' onChange={handleChange} />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleSubmit} value='submit'/>
            </form>
            <hr />
            <div className="d-flex justify-content-end">
                <Button onClick={() => setShow(false)} variant="outline-success">
                    Close me y'all!
                </Button>
            </div>
          </Alert>
    
          {!show && <Button onClick={() => setShow(true)}>Send an E-mail</Button>}
        </div>
      );
  }
  
export default Contact;