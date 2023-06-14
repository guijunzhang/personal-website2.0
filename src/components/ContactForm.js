import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xoqzgezy");
  if (state.succeeded) {
      return <p>Thank you for checking out my site and taking the time to contact me 🤩</p>;
  }
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}> 
        <input 
            id="email" 
            name="email" 
            type="email"
            required
            maxLength={128}
            placeholder="Your E-mail *"
            className="outline-none border-2 border-black rounded-3xl px-8 py-2" 
        />
        <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
        />
        <textarea 
            id="message"
            name="message"
            required
            maxLength={1048576}
            placeholder="What's up?"
            className='outline-none border-2 border-black rounded-3xl px-8 py-2 min-h-[16em]'
        ></textarea>
        <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
        />
        <div className="container">
        <button type="submit" className="button" disabled={state.submitting}>  
                <div className="button__line"></div>
                <div className="button__line"></div>
                <span className="button__text">Submit</span>
                <div className="button__drow1"></div>
                <div className="button__drow2"></div>
            </button>
        </div>
    </form>
  );
}
export default function App() {
  return (
    <ContactForm />
  );
}