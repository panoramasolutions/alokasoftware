import React, { useState } from 'react';
import { Badge } from '../../../../components/ui/badge';
import { Button } from '../../../../components/ui/button';
import { Card, CardContent } from '../../../../components/ui/card';

import bannervideo from '../../../../assets/bannervideo.mp4';
import company from '../../../../assets/Pic.png';
import companies from '../../../../assets/Pict.png';
import whatsup from '../../../../assets/w.jpg';
import bigImage from '../../../../assets/image.png';


import { ChevronRightIcon } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";


export const MainContentSection = ({
  keyFeaturesRef,
  aboutusRef,
  ourServicesRef,
  testimonialRef,
  faqRef,
  handleNavClick,
}: any) => {
  // Data for the "About Us" feature cards
  const featureCards = [
    {
      icon: 'https://c.animaapp.com/mdd04i9koSfWJV/img/vector-32.svg',
      title: 'Deep Industry Insight',
      description:
        'We blend domain expertise with cutting-edge tech—AI, ML, and cybersecurity.',
    },
    {
      icon: 'https://c.animaapp.com/mdd04i9koSfWJV/img/vector-45.svg',
      title: 'True Client Partnership',
      description:
        'We work as an extension of your team to solve real-world business challenges.',
    },
    {
      icon: 'https://c.animaapp.com/mdd04i9koSfWJV/img/vector-36.svg',
      title: 'Future-Ready Approach',
      description:
        '24/7 monitoring, predictive maintenance, and roadmaps designed for growth.',
    },
  ];

  // Data for the service cards
  const serviceCards = [
    {
      icon: 'https://c.animaapp.com/mdd04i9koSfWJV/img/component-1-3.svg',
      title: 'Cloud Strategy & Consulting',
      description:
        'From total visioning to tactical cloud roadmaps, cost modeling, and vendor-neutral governance across AWS, Azure & GCP.',
    },
    {
      icon: 'https://c.animaapp.com/mdd04i9koSfWJV/img/component-1-6.svg',
      title: 'Data Engineering',
      description:
        "We provide support for any models ranging from data analysis,data engineering to even data science.",
    },
    {
      icon: 'https://c.animaapp.com/mdd04i9koSfWJV/img/component-1-5.svg',
      title: 'Full-Stack Development',
      description:
        "Build robust end to end solutions in any full stack frameworks like Java, Dotnet, MEAN, MERN etc.",
    },

    {
      icon: 'https://c.animaapp.com/mdd04i9koSfWJV/img/component-1-6.svg',
      title: 'Python Expert',
      description:
        'Develop robust, scalable, and secure backend systems, automate business tasks, and build APIs using industry-best Python practices',
    },

    {
      icon: 'https://c.animaapp.com/mdd04i9koSfWJV/img/component-1-6.svg',
      title: 'AI/ML',
      description:
        'Deploy cutting-edge AI/ML solutions to automate decision-making, detect patterns, and enhance user experience with predictive insights',
    },
    {
      icon: 'https://c.animaapp.com/mdd04i9koSfWJV/img/component-1-1.svg',
      title: 'Business Intelligence(Power BI)',
      description:
        'Leverage Power BI dashboards and reports to gain visual insights, monitor KPIs, and drive smarter business strategies',
    },

    {
      icon: 'https://c.animaapp.com/mdd04i9koSfWJV/img/component-1.svg',
      title: 'Automation & DevOps',
      description:
        'Streamline delivery pipelines, cut errors, and embrace agility with full-stack CI/CD and IaC.',
    },

    {
      icon: 'https://c.animaapp.com/mdd04i9koSfWJV/img/component-1-1.svg',
      title: 'Business Development',
      description:
        "Receive automated insights and recommendations tailored to your business needs. Let AlokaSoft's AI guide your strategies.",
    },

    {
      icon: 'https://c.animaapp.com/mdd04i9koSfWJV/img/component-1-2.svg',
      title: 'Networking & Infrastructure',
      description:
        'Architect resilient networks—wired, wireless, hybrid—designed for performance and security.',
    },
  ];

  // Data for the "How We Work" steps
  const workSteps = [
    {
      icon: 'https://c.animaapp.com/mdd04i9koSfWJV/img/icon-credit-card-cursor-click.svg',
      title: "Let's Talk Goals",
      description: 'We dig deep to get your business + tech aligned.',
    },
    {
      icon: 'https://c.animaapp.com/mdd04i9koSfWJV/img/vector-19.svg',
      title: 'Plan Like Pros',
      description: 'We map out what works—and what scales.',
    },
    {
      icon: 'https://c.animaapp.com/mdd04i9koSfWJV/img/icon-world--transaction--transfer.svg',
      title: 'Make It Happen',
      description: 'From idea to impact, fast.',
    },
    {
      title: 'Keep Getting Better',
      description: "We don't stop. We fine-tune and future-proof.",
    },
  ];

  const features = [
    {
      title: "Lorem Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
  ];

  const [showAllServices, setShowAllServices] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  // How many to show initially
  const initialServiceCount = 9;

  return (
    <div className='flex flex-col items-start w-full relative z-[3]'>
      {/* Hero Section */}
      <section className='flex flex-col items-center pt-28 pb-[34px] px-8 w-full bg-white'>
        <div className='flex flex-row max-w-[1204px] items-center gap-[60px] w-full'>
          {/* Left Side: id=1 */}
          <div
            id="1"
            className='flex flex-col max-w-[600px] items-start gap-10 w-full flex-shrink-0'
          >
            <div className='flex flex-col items-start gap-5 w-full'>
              <div className='flex items-center gap-2  py-2  bg-white'>
                
                <span className='font-body-base-medium text-[#248799] text-[20px] font-bold'>
                  Smarter IT. Stronger Business.
                </span>
              </div>

              <h1 className='text-[48px] font-bold font-inter font-heading-desktop-h1-bold text-[#343844] text-left'>
                Empowering Digital Acceleration with Smarter Cloud, Data &amp;
                Automation Solutions
              </h1>

              <div className='flex items-start px-0 py-0 w-full gap-2'>
                <p className='flex-1 opacity-80 font-body-base-regular text-[#343844] text-left'>
                  From strategy to execution, we help businesses unlock agility,
                  scale, and intelligence—securely and seamlessly.
                </p>
              </div>
            </div>

            <div className='flex items-start gap-3'>
              <Button
                className='px-5 py-3 bg-[#248799] rounded-xl text-white'
                onClick={() => handleNavClick('Our Services')}
              >
                Explore Our Services
              </Button>
              {/* Popup button code commented out */}
            </div>
          </div>

          {/* Right Side: id=2 */}
          <div
            id="2"
            className='relative w-full h-[556px] bg-[#387ff5] rounded-3xl overflow-hidden border border-solid border-[#f5f6f9] flex-1'
          >
            <div className='absolute w-full h-[556px] top-0 left-0 bg-[#6099f7] overflow-hidden'>
              {/* <video
                className='absolute w-full h-[556px] object-cover'
                src={bannervideo}
                controls
                poster='https://c.animaapp.com/mdd04i9koSfWJV/img/image-2.png'
              /> */}
              <img src={bigImage} className='absolute w-full h-full object-cover' alt='Background' />
            </div>
          </div>
        </div>
      </section>

    
 

      {/* About Us Section */}
      <section
        ref={aboutusRef}
        className='pt-[75px] pb-28 px-8 w-full flex flex-col items-center gap-[60px] bg-white  w-full'
      >
        <div className='flex flex-col items-center gap-[60px] w-full max-w-[1204px]'>
          <div className='flex flex-col max-w-[520px] items-center gap-8 w-full'>
            <div className='flex flex-col items-center gap-4 w-full'>
              <Badge className='flex items-center gap-2 px-3 py-2 rounded-[20px] border border-solid border-[#b6bbcd] shadow-shadow-to-bot-neutral-1 bg-white'>
                <div className='relative w-5 h-5'>
                  <img
                    className='absolute w-[18px] h-[17px] top-0.5 left-px'
                    alt='Vector'
                    src='https://c.animaapp.com/mdd04i9koSfWJV/img/vector-16.svg'
                  />
                </div>
                <span className='font-body-base-medium text-[#343844]'>
                  About Us
                </span>
              </Badge>

              <div className='flex items-center gap-2 w-full'>
                <h1 className='text-[39px] font-bold font-inter font-heading-desktop-h1-bold text-[#343844] text-center'>
                  Your Strategic Tech Partner
                </h1>
              </div>

              <div className='flex max-w-[820px] items-center px-5 py-0 mx-[-150px]'>
                <p className='flex-1 opacity-80 font-body-base-regular text-[#343844] text-center'>
                  At AlokaSoft, we blend deep technical expertise with
                  forward-looking vision to help businesses thrive in the
                  digital era. With a rich history in delivering AI-driven,
                  cloud-first, and data-centric platforms, we specialize in
                  bespoke solutions that are robust, scalable, and secure.
                </p>
              </div>
            </div>
          </div>

          <div className='flex flex-col justify-center gap-10 w-full'>
            <div className='flex flex-wrap items-start justify-center gap-6 w-full'>
              {featureCards.map((card, index) => (
                <Card
                  key={index}
                  className='flex-1 min-w-[360px] border border-solid border-[#387ff5] shadow-shadow-to-bot-primary-4 rounded-xl  shadow-[0px_2px_6px_#d4f8ff36,0px_13px_12px_#d4f8ff36,0px_24px_15px_#d4f8ff36,0px_40px_16px_#d4f8ff36,0px_62px_17px_#d4f8ff36]'
                >
                  <CardContent className='flex flex-col items-start gap-2 px-5 py-4'>
                    <div className='flex items-start gap-3 w-full'>
                      <div className='flex items-start gap-2'>
                        <div className='relative w-6 h-6'>
                          <img
                            className='absolute w-5 h-5 top-0.5 left-0.5'
                            alt='Vector'
                            src={card.icon}
                          />
                        </div>
                      </div>
                      <h3
                        className='flex-1 font-body-base-semibold text-[#343844] font-semibold'
                        style={{ fontWeight: 600 }}
                      >
                        {card.title}
                      </h3>
                    </div>
                    <p className='opacity-80 font-body-base-regular text-[#343844]'>
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

    
          </div>
        </div>
      </section>
  {/* Clients Section */}
     <section className='flex flex-col items-center pt-10 pb-[60px] px-8 w-full bg-white'>
        <div className='flex flex-col items-center gap-5 w-full max-w-[1204px]'>
          <p className=' font-body-base-regular text-[#343844] text-center text-[39px] font-bold  font-inter font-heading-desktop-h1-bold text-[#343844] ' >
          Clientele
          </p>

          <img className='min-w-[1240px] w-full' alt='Logo' src={company} />
          <img className='min-w-[1240px] w-full' alt='Logo' src={companies} />
        </div>
      </section>
      {/* Our Services Section */}
      <section
        ref={ourServicesRef}
        className='flex flex-col items-center gap-[60px] pt-12 pb-28 px-8 w-full bg-[#248799]'
      >
        <div className='flex flex-col  gap-[60px] w-full max-w-[1204px]'>
          <div className='max-w-[800px] w-full flex flex-col items-center gap-8'>
            <div className='flex flex-col  gap-4 w-full'>
             

              <div className='flex items-left gap-2 w-full'>
                <h2 className='flex-1 font-heading-desktop-h2-bold text-white text-left text-[39px] font-bold font-inter'>
                  Our Services
                </h2>
              </div>
            </div>
          </div>

          <div className='relative flex flex-wrap max-w-[1204px] items-start justify-center gap-8 pb-20 w-full'>
            <div className='flex flex-wrap items-start justify-center gap-8 flex-1'>
              {(showAllServices
                ? serviceCards
                : serviceCards.slice(0, initialServiceCount)
              ).map((service, index) => (
                <Card
                  key={index}
                  className={`flex-1 min-w-[292px]  rounded-xl border border-solid ${
                    service.highlighted
                      ? 'border-[#387ff5]'
                      : 'border-[#b6bbcd]'
                  }`}
                >
                  <CardContent className='flex flex-col items-start justify-center gap-4 p-8'>
                    <img
                      className='w-[131.09px] h-[131.09px] mt-[-5.09px] ml-[-30.55px]'
                      alt='Component'
                      src={service.icon}
                    />
                    <div className='flex flex-col h-[110px] items-start justify-center gap-1 w-full'>
                      <h3 className='h-7 font-heading-desktop-h5-bold text-[#e7f4ff] whitespace-nowrap font-bold'>
                        {service.title}
                      </h3>
                      <p className=' font-body-base-regular text-[#e7f4ff]'>
                        {service.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          {/* Button and image always at the bottom after all cards */}
          {/* <div className="flex flex-col w-full items-center justify-end gap-2 px-6 py-0 mt-8 relative">
            <img
              className="absolute w-full h-[263px] top-[-300px] left-0"
              alt="Gradient mask"
              src="https://c.animaapp.com/mdd04i9koSfWJV/img/gradient-mask.svg"
            />
            <Button
              variant="outline"
              className="px-5 py-3 rounded-xl border border-solid border-[#343844] backdrop-blur-[6px] z-10"
              onClick={() => setShowAllServices(prev => !prev)}
            >
              <span className="font-button-small-bold text-[#343844]">
                {showAllServices ? "Reduce applications" : "Explore more application"}
              </span>
            </Button>
          </div> */}
        </div>
      </section>

      {/* Key Features Section */}
  <section className="relative w-full z-[3]">
      <div className="flex flex-col md:flex-row w-full">
        {/* Left side - How we work */}
        <div className="w-full md:w-1/2 bg-[#d4f8ff] p-8 md:p-16 flex flex-col justify-center">
          <h2 className="font-bold text-modmathblack text-4xl tracking-[-0.14px] leading-[46.1px] mb-8">
        How we work
          </h2>

          <p className="text-modmathblack text-xl tracking-[-0.20px] leading-7 font-normal mb-12 max-w-[530px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&#39;s standard dummy
        text ever since the 1500s, when an unknown
          </p>

          <Button className="w-32 h-10     px-5 py-3 bg-[#248799] rounded-xl text-white">
        <span className="ml-2  " >Lorem Has</span>
        <ChevronRightIcon className="w-[11px] h-[11px] ml-2 " />
          </Button>
        </div>

        {/* Right side - Features */}
        <div className="w-full md:w-1/2 bg-[#F5F7FA] p-8 md:p-16 flex flex-col justify-center">
          <h3 className="font-bold text-modmathblack text-2xl mb-8">
        Features
          </h3>

          <Card className="border-none shadow-none bg-transparent">
        <CardContent className="p-0">
          <Accordion type="single" collapsible className="w-full">
            {features.map((feature, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-t border-b py-4"
          >
            <AccordionTrigger className="hover:no-underline">
              <div className="text-left font-medium text-modmathblack text-2xl leading-[33.6px]">
            {feature.title}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="text-modmathblack text-xl tracking-[-0.20px] leading-7 font-normal pt-2">
            {feature.description}
              </div>
            </AccordionContent>
          </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
          </Card>
        </div>
      </div>
    </section>

      {/* How We Work Section */}
   
    </div>
  );
};
