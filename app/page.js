// pages/index.js
"use client";
import { LanguageSelector } from "@/components/LanguageSelector";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import ReactPlayer from "react-player";
import ProductGrid from "./products/ProductGrid";
import ContactForm from './contanct.js';


export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <div className="font-sans">
        <Head>
          <title>Kisan Ka Haq - Empowering Farmers, Connecting Directly</title>
          <meta
            name="description"
            content="A platform for direct farm-to-market connections"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Hero Section */}

        <section className="relative h-screen overflow-hidden ">
          {/* Background Video with Overlay */}
          <div className="relative inset-0 z-0 hidden md:block">
            <ReactPlayer
              url="https://cdn.pixabay.com/video/2021/10/17/92372-636709406_large.mp4"
              width="100%"
              height="100%"
              style={{ objectFit: "cover" }}
              playing={true}
              loop={true}
              muted={true}
              playsinline
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-emerald-900/50"></div>
          </div>
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-emerald-800 via-emerald-900 to-black md:hidden"></div>

          {/* Content Container */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">
            <div className="transform -rotate-2">
              <div className="inline-block px-6 py-3 mb-6 bg-yellow-400 rounded-lg rotate-2 shadow-lg">
                <h1 className="font-bold text-emerald-800 text-5xl md:text-7xl font-display tracking-tight">
                  Kisan Ka Haq!
                </h1>
              </div>
            </div>

            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl drop-shadow-lg">
              From Farm to Table,{" "}
              <span className="text-yellow-400">Without the Drama</span> 🚜
            </h2>

            <p className="max-w-2xl mb-8 text-xl text-white drop-shadow-md">
              We're cutting out the middlemen so farmers get what they deserve!
              Fresh produce, fair prices, and friendly faces all around.
            </p>

            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-4 text-lg font-bold text-emerald-800 transition-all duration-300 bg-yellow-400 rounded-full hover:bg-yellow-300 hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center">
                <span>Start Growing</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
              <button className="px-8 py-4 text-lg font-bold text-white transition-all duration-300 border-2 border-white rounded-full hover:bg-white hover:text-emerald-800 hover:shadow-xl transform hover:-translate-y-1">
                See How It Works
              </button>
            </div>

            {/* <div className="flex items-center mt-12 space-x-1 text-white">
              <span className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</span>
              <span className="text-lg font-medium">
                Trusted by 10,000+ farmers across India
              </span>
            </div> */}
          </div>
        </section>

        {/* About Us Section */}

        <section className="py-20 bg-gradient-to-b from-emerald-50 to-yellow-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
            <img
              src="/api/placeholder/100/100"
              alt="placeholder"
              className="absolute w-16 h-16 transform rotate-12 top-12 left-12"
            />
            <img
              src="/api/placeholder/100/100"
              alt="placeholder"
              className="absolute w-24 h-24 transform -rotate-12 bottom-24 right-36"
            />
            <img
              src="/api/placeholder/100/100"
              alt="placeholder"
              className="absolute w-20 h-20 transform rotate-45 top-1/4 right-1/4"
            />
          </div>

          <div className="container px-4 mx-auto relative z-10">
            <div className="mb-12 text-center">
              <div className="inline-block px-6 py-2 mb-4 bg-yellow-400 rounded-full transform -rotate-2">
                <h2 className="text-4xl font-bold text-emerald-800 font-display tracking-tight">
                  The Dirt on Us
                </h2>
              </div>
              <p className="text-emerald-700 text-xl max-w-2xl mx-auto">
                We're growing something special here (and it's not just crops!)
              </p>
            </div>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-102 transition-all duration-300 border-4 border-white">
                <ReactPlayer
                  url="./aboutus.mp4"
                  width="100%"
                  height="100%"
                  style={{ objectFit: "cover" }}
                  playing={true}
                  loop={true}
                  muted={true}
                  playsinline
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-emerald-900/80 to-transparent p-6">
                  <p className="text-white text-lg font-medium">
                    Real farmers, real stories
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-lg transform hover:-rotate-1 transition-all hover:shadow-xl">
                  <div className="flex items-center mb-3">
                    <span className="text-4xl mr-3">🌱</span>
                    <h3 className="text-2xl font-bold text-emerald-700">
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-gray-700 text-lg">
                    We're kicking middlemen to the curb and putting farmers in
                    the driver's seat! Our platform connects farmers directly
                    with buyers, ensuring they get fair prices for their amazing
                    produce.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg transform hover:rotate-1 transition-all hover:shadow-xl">
                  <div className="flex items-center mb-3">
                    <span className="text-4xl mr-3">🚜</span>
                    <h3 className="text-2xl font-bold text-emerald-700">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-gray-700 text-lg">
                    Picture this: Every farmer with a smartphone in one hand and
                    the keys to the market in the other. We're bringing
                    tech-powered solutions to traditional farming, creating
                    prosperity one crop at a time!
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg transform hover:-rotate-1 transition-all hover:shadow-xl">
                  <div className="flex items-center mb-3">
                    <span className="text-4xl mr-3">🌾</span>
                    <h3 className="text-2xl font-bold text-emerald-700">
                      Our Roots
                    </h3>
                  </div>
                  <p className="text-gray-700 text-lg">
                    Born in the fertile fields of Jaunpur, Uttar Pradesh, Kisan
                    Ka Haq sprouted from watching too many hardworking farmers
                    get the short end of the stick. We're homegrown and proud of
                    it!
                  </p>
                </div>

                <div className="mt-8 text-center">
                  <button className="px-8 py-4 text-lg font-bold text-white bg-emerald-600 rounded-full hover:bg-emerald-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                    Join Our Growing Family
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-16 p-6 bg-yellow-100 rounded-2xl text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <span className="text-2xl">⭐</span>
                <span className="text-2xl font-bold text-emerald-800">
                  Fun Fact!
                </span>
                <span className="text-2xl">⭐</span>
              </div>
              <p className="text-lg text-emerald-700">
                Our team has collectively harvested over 10,000 kilograms of
                produce before starting this company! We know our onions (and
                our potatoes, and our cauliflower...)
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold text-gray-800 font-serif">
                How It Works
              </h2>
              <div className="w-24 h-1 mx-auto mb-6 bg-emerald-600"></div>
              <p className="max-w-2xl mx-auto text-gray-600">
                Our simple four-step process ensures seamless transactions
                between farmers and buyers.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="p-6 text-center bg-gray-50 rounded-lg shadow-md">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white bg-emerald-600 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold">Register</h3>
                <p className="text-gray-600">
                  Farmers register and list their available crops with details
                  and photos.
                </p>
              </div>
              <div className="p-6 text-center bg-gray-50 rounded-lg shadow-md">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white bg-emerald-600 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold">Browse</h3>
                <p className="text-gray-600">
                  Buyers browse available produce and place orders directly with
                  farmers.
                </p>
              </div>
              <div className="p-6 text-center bg-gray-50 rounded-lg shadow-md">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white bg-emerald-600 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold">Transaction</h3>
                <p className="text-gray-600">
                  Secure transactions and smooth logistics are facilitated
                  through our platform.
                </p>
              </div>
              <div className="p-6 text-center bg-gray-50 rounded-lg shadow-md">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white bg-emerald-600 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold">Payment</h3>
                <p className="text-gray-600">
                  Farmers receive payments directly, eliminating middlemen and
                  maximizing profits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <ProductGrid />

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-100 w-full">
          <div className="px-4 mx-auto max-w-screen-xl w-full">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold text-gray-800 font-serif">
                Problem in Current Market
              </h2>
              <div className="w-24 h-1 mx-auto mb-6 bg-emerald-600"></div>
              <p className="max-w-2xl mx-auto text-gray-600">
                Farmers face several challenges, from unfair payments to long
                waiting times in government mandis. Here's a glimpse of the
                struggles they go through.
              </p>
            </div>

            {/* Single full-width card */}
            <div className="w-full">
              <div className="p-6 bg-white rounded-lg shadow-md w-full">
                <div className="mb-4">
                  <Image
                    src="/problem.png"
                    alt="Farmers transport crops"
                    width={800}
                    height={400}
                    className="rounded-lg w-full object-cover h-64"
                  />
                </div>
                <h4 className="text-lg font-bold text-gray-800">
                  Long and Costly Transport
                </h4>
                <p className="text-gray-600">
                  Farmers transport their crops after months of labor, facing
                  high costs and delays.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        {/* <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold text-gray-800 font-serif">
                Contact Us
              </h2>
              <div className="w-24 h-1 mx-auto mb-6 bg-emerald-600"></div>
              <p className="max-w-2xl mx-auto text-gray-600">
                Have questions or need assistance? We're here to help you.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mt-1 text-white bg-emerald-600 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Call Us</h3>
                    <p className="mt-1 text-gray-600">+91 9876543210</p>
                    <p className="mt-1 text-gray-600">
                      Monday to Saturday, 9AM to 6PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mt-1 text-white bg-emerald-600 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Email Us
                    </h3>
                    <p className="mt-1 text-gray-600">support@kisankahaq.com</p>
                    <p className="mt-1 text-gray-600">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mt-1 text-white bg-emerald-600 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Office Address
                    </h3>
                    <p className="mt-1 text-gray-600">
                      123 Farmer's Market, Sector 21
                    </p>
                    <p className="mt-1 text-gray-600">
                      Jaunpur, Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mt-1 text-white bg-emerald-600 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      WhatsApp Support
                    </h3>
                    <p className="mt-1 text-gray-600">+91 9876543210</p>
                    <p className="mt-1 text-gray-600">
                      Get instant assistance via WhatsApp
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                <h3 className="mb-4 text-2xl font-bold text-gray-800">
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="subject"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                      required
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section> */}
        <section className="py-20 bg-gradient-to-b from-emerald-100 to-yellow-100 relative overflow-hidden">
          {/* Animated farm elements in background */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-15 pointer-events-none">
            <div className="absolute top-10 left-10 animate-bounce-slow">
              <span className="text-6xl">🌽</span>
            </div>
            <div className="absolute bottom-20 right-20 animate-pulse">
              <span className="text-6xl">🍅</span>
            </div>
            <div className="absolute top-1/3 right-1/4 animate-bounce-slow">
              <span className="text-6xl">🥕</span>
            </div>
            <div className="absolute bottom-1/3 left-1/4 animate-pulse">
              <span className="text-6xl">🍎</span>
            </div>
          </div>

          <div className="container px-4 mx-auto relative z-10">
            {/* Playful header with tractor */}
            <div className="mb-12 text-center relative">
              <div className="inline-block px-8 py-3 mb-6 bg-yellow-300 rounded-full transform -rotate-2 shadow-lg border-4 border-white">
                <div className="flex items-center space-x-3">
                  <span className="text-5xl animate-wiggle">🚜</span>
                  <h2 className="text-4xl font-bold text-emerald-800 font-display tracking-tight">
                    Let's Talk Crops!
                  </h2>
                </div>
              </div>
              <p className="text-emerald-700 text-xl max-w-2xl mx-auto">
                Our team of farm-fresh experts is ready to harvest your
                questions!
              </p>

              {/* Decorative soil line */}
              <div className="w-full max-w-4xl mx-auto mt-8 h-6 bg-gradient-to-b from-brown-600 to-brown-800 rounded-t-3xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full">
                  <div className="flex justify-between px-4">
                    <span className="text-lg translate-y-[-50%]">🌱</span>
                    <span className="text-lg translate-y-[-50%]">🌱</span>
                    <span className="text-lg translate-y-[-50%]">🌱</span>
                    <span className="text-lg translate-y-[-50%]">🌱</span>
                    <span className="text-lg translate-y-[-50%]">🌱</span>
                    <span className="text-lg translate-y-[-50%]">🌱</span>
                    <span className="text-lg translate-y-[-50%]">🌱</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              {/* Contact cards with produce-themed design */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg transform hover:-rotate-2 transition-all hover:shadow-xl border-l-8 border-red-500 overflow-hidden relative">
                  <div className="absolute right-0 top-0 w-24 h-24 bg-red-100 rounded-bl-full opacity-40"></div>
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 text-white bg-red-500 rounded-full">
                      <span className="text-3xl">🍎</span>
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-red-600">
                        Call Our Farmhouse
                      </h3>
                      <p className="mt-2 text-gray-700 text-lg">
                        +91 9594892642
                      </p>
                      <p className="mt-1 text-gray-600">
                        Harvest hours: Monday to Saturday, 9AM to 6PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg transform hover:rotate-2 transition-all hover:shadow-xl border-l-8 border-orange-500 overflow-hidden relative">
                  <div className="absolute right-0 top-0 w-24 h-24 bg-orange-100 rounded-bl-full opacity-40"></div>
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 text-white bg-orange-500 rounded-full">
                      <span className="text-3xl">🥕</span>
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-orange-600">
                        Email The Field
                      </h3>
                      <p className="mt-2 text-gray-700 text-lg">
                        singhshubham67867@gmail.com
                      </p>
                      <p className="mt-1 text-gray-600">
                        We plow through emails within 24 hours!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg transform hover:-rotate-2 transition-all hover:shadow-xl border-l-8 border-green-500 overflow-hidden relative">
                  <div className="absolute right-0 top-0 w-24 h-24 bg-green-100 rounded-bl-full opacity-40"></div>
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 text-white bg-green-500 rounded-full">
                      <span className="text-3xl">🌽</span>
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-green-600">
                        Visit Our Farm
                      </h3>
                      <p className="mt-2 text-gray-700 text-lg">
                        Kafurpur Near Primary School Pathna Road
                      </p>
                      <p className="mt-1 text-gray-600">
                        Jaunpur (222001), Uttar Pradesh, India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg transform hover:rotate-2 transition-all hover:shadow-xl border-l-8 border-purple-500 overflow-hidden relative">
                  <div className="absolute right-0 top-0 w-24 h-24 bg-purple-100 rounded-bl-full opacity-40"></div>
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 text-white bg-purple-500 rounded-full">
                      <span className="text-3xl">🍆</span>
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-purple-600">
                        WhatsApp Crop Talk
                      </h3>
                      <p className="mt-2 text-gray-700 text-lg">
                        +91 9594892642
                      </p>
                      <p className="mt-1 text-gray-600">
                        Instant field support via WhatsApp!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Farm-themed contact form */}
              {/* <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-emerald-500 relative overflow-hidden">
                <div className="absolute  -top-6 -right-6 w-32 h-32 ">
                  <div className="relative w-full h-full">
                    <div className="absolute top-6 right-6 bg-yellow-400 text-white w-20 h-20 rounded-full flex items-center justify-center transform rotate-12 border-4 border-white shadow-lg">
                      <span className="text-4xl">🧑‍🌾</span>
                    </div>
                  </div>
                </div>

                <div className="bg -mx-8 -mt-8 mb-8 py-4 px-8 rounded-t-3xl">
                  <h3 className="text-2xl font-bold text-emerald-800">
                    Plant Your Message Here!
                  </h3>
                  <p className="text-emerald-500">
                    We'll grow your ideas into solutions
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-base font-bold text-emerald-700"
                    >
                      Your Name 🌾
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-emerald-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 bg-emerald-50"
                      required
                      placeholder="John Deere"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-base font-bold text-emerald-700"
                    >
                      Your Email 📧
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-emerald-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 bg-emerald-50"
                      required
                      placeholder="farmer@example.com"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="subject"
                      className="block mb-2 text-base font-bold text-emerald-700"
                    >
                      Subject 🌿
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-emerald-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 bg-emerald-50"
                      required
                      placeholder="What's growing on?"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-base font-bold text-emerald-700"
                    >
                      Your Message 💬
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-3 border-2 border-emerald-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 bg-emerald-50"
                      required
                      placeholder="Tell us how we can help your farm thrive..."
                    ></textarea>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-base font-bold text-emerald-700"
                    >
                      Phone Number 📱 (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-emerald-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 bg-emerald-50"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 text-lg font-bold text-white bg-emerald-600 rounded-full hover:bg-emerald-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl relative overflow-hidden group"
                  >
                    <span className="relative z-10">
                      Send & Grow With Us! 🌱
                    </span>
                    <div className="absolute bottom-0 left-0 w-full h-0 bg-emerald-500 transition-all duration-300 group-hover:h-full z-0"></div>
                  </button>
                </form>
              </div> */}
               <ContactForm />
            </div>

            {/* Fun fact box with farmer theme */}
            {/* <div className="mt-16 p-6 bg-yellow-200 rounded-2xl text-center border-4 border-dashed border-yellow-400 transform -rotate-1">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <span className="text-3xl">🌟</span>
                <span className="text-3xl font-bold text-emerald-800">
                  Farmer's Almanac!
                </span>
                <span className="text-3xl">🌟</span>
              </div>
              <p className="text-xl text-emerald-700">
                Our support team has over 50 years of combined farming
                experience! We've walked the fields, driven the tractors, and
                know exactly what challenges you face every day.
              </p>
            </div> */}
          </div>
        </section>
      </div>
    </>
  );
}
