import React from 'react';
import NavbarMPA from '../components/common/NavbarMPA';
import FooterMPA from '../components/common/FooterMPA';
import AboutHero from '../components/about/AboutHero';
import AboutAdvantages from '../components/about/AboutAdvantages';
import PhotoGallery from '../components/about/PhotoGallery';
import TeamBanner from '../components/about/TeamBanner';
import ExecutiveProfile from '../components/about/ExecutiveProfile';
import DepartmentSection from '../components/about/DepartmentSection';

// Sample data for departments
const rdStaff = [
  {
    name: "Dr. Tan Wei Cheng",
    nameEn: "TAN WEI CHENG",
    title: "R&D Consultant",
    titleEn: "R&D Consultant",
    image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Dr. Lim Yi Jia",
    nameEn: "LIM YI JIA",
    title: "R&D Vice President",
    titleEn: "R&D Vice President",
    image: "https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const marketingStaff = [
  {
    name: "Tseng Jue Ming",
    nameEn: "TSENG JUE MING",
    title: "Sales Coordinator",
    titleEn: "Sales Coordinator",
    image: "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const adminStaff = [
  {
    name: "Tsai He Rong",
    nameEn: "TSAI HE RONG",
    title: "Senior Executive Secretary",
    titleEn: "Senior Executive Secretary",
    image: "https://images.pexels.com/photos/5704720/pexels-photo-5704720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const AboutPageMPA = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMPA />
      <main className="flex-grow">
        <AboutHero />
        <AboutAdvantages />
        <PhotoGallery />
        <TeamBanner />
        <ExecutiveProfile />
        <DepartmentSection 
          title="R&D Department" 
          titleEn="Research & Development" 
          color="blue" 
          textColor="blue" 
          staff={rdStaff}
        />
        <DepartmentSection 
          title="Marketing Department" 
          titleEn="Marketing & Planning" 
          color="green" 
          textColor="green" 
          reverse={true} 
          staff={marketingStaff}
        />
        <DepartmentSection 
          title="Administration" 
          titleEn="Administration Department" 
          color="lightGreen" 
          textColor="lightGreen" 
          staff={adminStaff}
        />
      </main>
      <FooterMPA />
    </div>
  );
};

export default AboutPageMPA; 