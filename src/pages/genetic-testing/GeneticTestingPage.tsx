import React from 'react';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import { CircleImage } from '../../components/genetic-testing/CircleImage';
import { PaperBlock } from '../../components/genetic-testing/PaperBlock';
import { TestingSteps } from '../../components/genetic-testing/TestingSteps';
import { SelfScreening } from '../../components/genetic-testing/SelfScreening';
import Testimonials from '../../components/home/Testimonials';

const GeneticTestingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[450px]">
          <img 
            src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Genetic Testing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Genetic Testing</h1>
              <p className="text-xl mb-8">Discover Your Genetic Profile</p>
              <button 
                onClick={() => window.location.href = '/genetic-testing/products'}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                View Tests
              </button>
            </div>
          </div>
        </div>

        <section className="py-16">
          <CircleImage
            image="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg"
            title="How can genetic testing help your health?"
            subtitle="Preventive Healthcare"
            contentTitle="Prevention is better than cure - health is your greatest wealth"
            content="Whether you're in good health or experiencing minor ailments, genetic testing provides valuable data for medical professionals to make informed recommendations and reduce potential risks."
          />
          
          <CircleImage
            image="https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg"
            title="Comprehensive Testing Services"
            subtitle="Multiple Testing Options"
            content="With analysis covering 29 cancers, 37 cardiovascular conditions, and 9 degenerative diseases as our foundation, we offer various specialized genetic tests to meet different needs and provide accurate insights into your health status."
            reverse
          />
        </section>

        <section className="bg-gray-50 py-16">
          <PaperBlock
            title="Diverse Report Types"
            subtitle="Comprehensive Analysis"
            description="Our genetic testing and reporting services include comprehensive packages for cancer screening, cardiovascular health, and degenerative diseases, along with specialized tests for those interested in specific aspects of their genetic profile."
            image="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg"
            color="blue"
            onClick={() => window.location.href = '/genetic-testing/products'}
          />

          <PaperBlock
            title="Family Health Exploration"
            subtitle="Genetic Health Screening"
            description="We offer genetic testing services for the whole family, including prenatal carrier screening, pediatric rare disease testing, and maternal health analysis, helping families plan for a healthier future."
            image="https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg"
            color="red"
            reverse
            showButton
            onClick={() => window.location.href = '/genetic-testing/products'}
          />

          <PaperBlock
            title="Your Family's First Line of Defense"
            subtitle="Preventive Healthcare"
            description="Our passion for genetic research drives us to explore various genetic markers using high-precision equipment, ensuring effective preventive measures through genetic insights."
            image="https://images.pexels.com/photos/3807738/pexels-photo-3807738.jpeg"
            color="green"
            showButton
            onClick={() => window.location.href = '/genetic-testing/products'}
          />
        </section>

        <TestingSteps />
        <SelfScreening />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default GeneticTestingPage;