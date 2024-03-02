import React,{useState, useRef} from 'react'
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Cont from "../Contact/contact.gif";
import './Contact.css'
// Dv By Karim
const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false)
    const [notDone, setNotDone] = useState(false)
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
        setDone(false)
        setNotDone(false)
    }

    const sendEmail = (e) => {
    e.preventDefault();
    
    if(!formData.from_name || !formData.reply_to ||!formData.message){
      setNotDone(true)
    } else {
      
      //  credentials emailjs 
      
    emailjs
      .sendForm(
        "service_k3lbjgj",
        "template_10z7iabe",
        form.current,
        "VOAt8Akm9LhI7CAG"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
    };
    
// Dv By Karim
    return(
        <Container style={{paddingTop: '50px'}} >
            <Row >
            <Col md={6} className="c-left" >
            <h1 >Get in Touch </h1>
            <h1 className="yellow">Contact me</h1>
            <h2><i class="fa fa-commenting" aria-hidden="true"></i> <i class="fa fa-commenting" aria-hidden="true"></i> <i class="fa fa-commenting" aria-hidden="true"></i></h2>
            <br />
            <img className='contactimg' src={Cont} alt="coding" />
            
            </Col>
            <Col md={6} className="c-right">
    <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="from_name" className="user" placeholder="Enter Your Name" onChange={handleChange} style={{color: 'white'}} />
        <input type="email" name="reply_to" className="user" placeholder="Enter Your Email" onChange={handleChange} style={{color: 'white'}} />
        <input type="tel" name="phone_number" className="user" placeholder="Enter Your Phone Number" onChange={handleChange} style={{color: 'white'}} />
        <input type="text" name="address" className="user" placeholder="Enter Your Address" onChange={handleChange} style={{color: 'white'}} />
        <select name="country" className="user" onChange={handleChange} style={{color: '#7500fa', background: 'transparent'}}>
        <option value="">Select Your Country</option>
        <option value="Morocco">Morocco</option>
        <option value="Spain">Spain</option>
        <option value="France">France</option>
        <option value="Germany">Germany</option>
        <option value="UK">UK</option>
        <option value="USA">USA</option>
        </select>

        <textarea name="message" className="user" placeholder="Enter Your Message" onChange={handleChange} style={{color: 'white'}} />
        <span className='not-done'>{notDone && "Please, fill all the input fields"}</span>
        <Button type="submit" className="button" disabled={done}>Send <i className="fa fa-paper-plane" aria-hidden="true"></i></Button>
        <span className='done'>{done && "Thanks For Contacting me !"}</span>
    </form>
</Col>

            </Row>
        </Container>
    )
}
// Dv By Karim
export default Contact