import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <div className="bg-white text-black font-sans">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-52" style={{ backgroundImage: "url('/images/background.png')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold font-poppins uppercase">Technical Product Market Fit Consulting</h1>
            <p className="text-xl font-open-sans mt-4">Specializing in DevOps, DevTools, and Cloud Infrastructure Startups</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <img src="/images/headshot.jpg" alt="Chris Matteson" className="w-1/3 rounded-full mx-auto md:mx-0" />
          <div className="md:ml-8 mt-8 md:mt-0 text-center md:text-left">
            <h2 className="text-3xl font-bold font-poppins uppercase text-[#8C52FF]">About Chris Matteson</h2>
            <p className="text-lg font-open-sans mt-4">
              With over a decade of startup experience at companies like Puppet, HashiCorp, Prisma, Fermyon, and aisle.ID, Chris has held roles such as Founder/CEO, Head of Solutions Engineering and Head of Sales. He has personally written early versions of features that became the underpinnings of enterprise offerings, guiding technical open-source startups toward achieving measurable growth and scalable processes.
            </p>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold font-poppins uppercase text-[#8C52FF] text-center">Our Approach</h2>
          <div className="flex flex-col md:flex-row mt-8">
            <div className="md:w-1/2">
              <h3 className="text-xl font-bold font-poppins uppercase text-[#8C52FF]">Levels of Engagement</h3>
              <ul className="list-disc list-inside mt-4">
                <li>Purely Passive: Review call notes and provide feedback.</li>
                <li>Semi-Active: Participate in select customer calls as an advisor.</li>
                <li>Active: Co-run sales calls and assist in coordinating PoCs.</li>
              </ul>
            </div>
            <img src="/images/actionshot.png" alt="Approach" className="md:w-1/2 mt-8 md:mt-0" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold font-poppins uppercase text-[#8C52FF] text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-100 text-black p-6 rounded-lg">
              <h3 className="text-xl font-bold font-poppins uppercase text-[#8C52FF]">Product and Feature Evaluation</h3>
              <p className="mt-2 font-open-sans">Reviewing training, experimentation, and discovery interviews with the internal team.</p>
            </div>
            <div className="bg-gray-100 text-black p-6 rounded-lg">
              <h3 className="text-xl font-bold font-poppins uppercase text-[#8C52FF]">Customer Sales Support</h3>
              <p className="mt-2 font-open-sans">Attending meetings, reviewing notes/calls, and providing documentation and feedback.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold font-poppins uppercase text-[#8C52FF]">Testimonials</h2>
          <p className="text-lg font-open-sans mt-4">"As Head of Solutions Sales, Chris jumpstarted all aspects of our go-to-market function. He was a member of the leadership team, managed customer success engineering, and bootstrapped our sales process. Chris is an excellent leader. He inspires confidence, and is a good strategic thinker. As part of our leadership team, he reasoned through many gnarly startup issues with a clear head and an openness to a variety of solutions. As a people manager, Chris leads with empathy and clarity. And in the sales role, Chris was articulate, technically focused, and listened attentively to the needs of the customer." - Matt Butcher - CEO Fermyon</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold font-poppins uppercase text-[#8C52FF]">Get in Touch</h2>
          <p className="text-lg font-open-sans mt-4">Ready to take your startup to the next level? Reach out to Chris today to start your product-market fit journey.</p>
          <a href="mailto:chris@chrismatteson.com" className="inline-block mt-6 bg-[#8C52FF] text-white py-3 px-6 rounded-lg font-bold font-poppins uppercase">Email Chris</a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#8C52FF] py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white font-open-sans text-sm">&copy; {new Date().getFullYear()} Chris Matteson. All Rights Reserved.</p>
        </div>
      </footer>
      <Analytics />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
  