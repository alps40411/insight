import React from 'react';
import NavbarMPA from '../components/common/NavbarMPA';
import FooterMPA from '../components/common/FooterMPA';
import ContactForm from '../components/contact/ContactForm';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMPA />
      <main className="flex-grow">
        <ContactForm />
      </main>
      <FooterMPA />
    </div>
  );
};

export default ContactPage; 