import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate a network request
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setStatus('success');
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-4">
            Ready to Create Your Legacy Garden?
            </h2>
            <p className="text-lg text-gray-300 mb-10">
            We partner with a select number of clients each year to ensure our highest standards are met on every project. Reach out to begin the conversation about your property.
            </p>
        </div>

        {status === 'success' ? (
          <div className="text-center max-w-xl mx-auto bg-green-900/50 border border-green-700 text-green-200 px-6 py-8 rounded-lg">
            <h3 className="text-2xl font-bold font-serif mb-2">Thank You!</h3>
            <p>Your message has been sent successfully. We will be in touch with you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-400 text-sm font-bold mb-2 text-left">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition duration-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-400 text-sm font-bold mb-2 text-left">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition duration-300"
                />
              </div>
            </div>
             <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-400 text-sm font-bold mb-2 text-left">
                  Phone Number <span className="text-xs font-normal text-gray-500">(Optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition duration-300"
                />
              </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-400 text-sm font-bold mb-2 text-left">
                Tell us about your project
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition duration-300"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="bg-green-800 text-white font-bold py-3 px-10 rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Sending...' : 'Book a Consultation'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;