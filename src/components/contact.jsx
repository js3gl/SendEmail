import React from 'react';
import './App.css';
import emailJs from '@emailjs/browser';

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = {
      FirstName: 'First',      
      LastName: 'Last',     
      Email: 'email@gmail.com',  
      Message: 'Hello World', 
    };

    console.log(form);

    emailJs
      .send(
        'Service_ID',
        'template_ID',
        form,
        'Email_ID'
      )
      .then((res) => {
        console.log('Email sent successfully:', res);
        // Assuming you want to clear the form after successful submission
        e.target.reset();
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div className="App">
      <div>
        <form onSubmit={handleSubmit}>

          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;

