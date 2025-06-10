import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ContactForm from '../components/contact/ContactForm';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage; 