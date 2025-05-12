import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How do I book a taxi from JKIA?',
      answer: 'You can book our taxi service by calling us directly at 0745 667 165 or 0707 310 507, filling out our online booking form, or sending us a WhatsApp message. We recommend booking in advance to ensure availability, especially during peak travel times.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'We primarily serve Nairobi and its suburbs, including all major hotels, residential areas, and business districts. We also offer long-distance transfers to other cities and tourist destinations in Kenya. Please contact us for specific location inquiries.'
    },
    {
      question: 'Are your rates negotiable?',
      answer: 'Our rates are fixed for standard routes and are already competitively priced. However, for long-distance journeys, corporate accounts, or regular bookings, we may offer special rates. Please contact us to discuss your specific requirements.'
    },
    {
      question: 'How early should I book before my flight?',
      answer: 'We recommend booking at least 24 hours in advance to ensure availability. For airport pickups, we track your flight status and adjust for any delays, so you don\'t need to worry about flight changes.'
    },
    {
      question: 'Do you charge for waiting time?',
      answer: 'We offer complimentary waiting time of 30-45 minutes for airport pickups (depending on the service level). After that, additional waiting time is charged at KES 500 per hour or part thereof.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash payments in Kenyan Shillings, mobile money transfers (M-Pesa), and major credit/debit cards. For corporate clients, we also offer invoicing options with pre-agreed payment terms.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our taxi service. If you don't see what you're looking for, please contact us directly.
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
            Have more questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+254745667165" 
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              Call Us: 0745 667 165
            </a>
            <a 
              href="#contact" 
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;