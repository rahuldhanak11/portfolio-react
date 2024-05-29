
import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactContainer = styled.div`
  padding: 20px;
  color: #FFFFFF;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #413F4B;
  border-radius: 5px;
  background-color: #1E1E1E;
  color: #FFFFFF;
  outline: none;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #413F4B;
  border-radius: 5px;
  background-color: #1E1E1E;
  color: #FFFFFF;
  resize: none;
  outline: none;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #DC143C;
  color: #FFFFFF;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #A10E2D;
  }
`;

const SuccessMessage = styled.div`
  margin-top: 20px;
  color: #4BB543;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_tycxlnt', 'template_xjtsuqf', formData, 'vHWmQyGOKMEukdMKg')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitted(true);
      setFormData({
        from_name: '',
        email: '',
        message: '',
      });
    }, (error) => {
      console.log('FAILED...', error);
    });
};

  return (
    <ContactContainer>
      <MapContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30141.72372330873!2d72.82172715274096!3d19.20762613615712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6c71e00b21f%3A0xfa74b1f57d575513!2sKandivali%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1716985322267!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </MapContainer>
      <ContactForm onSubmit={handleSubmit}>
        <Input
          type="text"
          name="from_name"
          placeholder="Name"
          value={formData.from_name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name= "email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextArea
          name="message"
          rows="5"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button type="submit">Send</Button>
      </ContactForm>
      {submitted && <SuccessMessage>Your message has been sent successfully!</SuccessMessage>}
    </ContactContainer>
  );
};

export default Contact;
