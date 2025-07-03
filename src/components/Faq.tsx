import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How do I book the best JKIA taxi service?',
      answer: 'You can book our reliable JKIA taxi service by calling us directly at 0731 050 573, filling out our secure online booking form, or sending us a message. We recommend booking in advance to ensure availability, especially during peak travel times. Payment is processed securely through PayPal.'
    },
    {
      question: 'What areas does your JKIA airport transfer service cover?',
      answer: 'We primarily serve Nairobi and its suburbs with our JKIA taxi service, including all major hotels, residential areas, and business districts. We also offer long-distance airport transfer to other cities and tourist destinations in Kenya. Please contact us for specific location inquiries.'
    },
    {
      question: 'Why do you only accept PayPal payment for JKIA taxi service?',
      answer: 'We use PayPal secure payment for enhanced security and transparency. This protects our drivers from cash-related security risks and provides complete transaction transparency for our customers. PayPal offers buyer protection and secure payment processing for the best JKIA taxi experience.'
    },
    {
      question: 'How early should I book my JKIA airport transfer?',
      answer: 'We recommend booking your JKIA taxi at least 24 hours in advance to ensure availability. For airport pickups, we track your flight status and adjust for any delays, so you don\'t need to worry about flight changes. Our reliable JKIA pickup service is available 24/7.'
    },
    {
      question: 'Do you charge for waiting time during JKIA pickup?',
      answer: 'We offer complimentary waiting time of 30-45 minutes for JKIA airport pickups (depending on the service level). After that, additional waiting time is charged at reasonable rates. This is part of our commitment to providing the best JKIA taxi service.'
    },
    {
      question: 'How does PayPal payment work for JKIA taxi booking?',
      answer: 'After confirming your JKIA taxi booking, we send you a secure PayPal payment request to cymohmwaz@yahoo.com. You can pay using your PayPal account, credit card, or debit card through PayPal\'s secure platform. This ensures safe and transparent payment for your airport transfer.'
    },
    {
      question: 'What makes JKIA Express the best JKIA taxi service?',
      answer: 'JKIA Express is the best JKIA taxi service because we offer reliable airport transfer with professional drivers, secure PayPal payment, 24/7 availability, flight tracking, and transparent pricing. We have served 10,000+ satisfied customers with our trusted JKIA pickup service since 2015.'
    },
    {
      question: 'Is your JKIA taxi service available 24/7?',
      answer: 'Yes, our JKIA taxi service is available 24 hours a day, 7 days a week. Whether you need early morning airport transfer or late-night JKIA pickup, our reliable drivers are ready to serve you. Call 0731 050 573 anytime for immediate JKIA taxi booking.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Frequently Asked Questions - Best JKIA Taxi Service</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our reliable JKIA airport transfer service with secure PayPal payment. If you don't see what you're looking for, please contact us directly.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
            >
              <button 
                className={`
                  w-full px-6 py-4 text-left font-medium flex justify-between items-center
                  ${openIndex === index ? 'bg-blue-900 text-white' : 'bg-white text-blue-900 hover:bg-gray-50'}
                  transition-colors duration-300
                `}
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <Minus size={20} className={openIndex === index ? 'text-white' : 'text-blue-900'} />
                ) : (
                  <Plus size={20} className="text-blue-900" />
                )}
              </button>
              <div 
                className={`
                  overflow-hidden transition-all duration-300 bg-white
                  ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                `}
              >
                <div className="p-6 text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Have more questions about our JKIA taxi service? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+254731050573" 
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              Call Best JKIA Taxi: 0731 050 573
            </a>
            <a 
              href="/contact" 
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              Book JKIA Taxi Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;