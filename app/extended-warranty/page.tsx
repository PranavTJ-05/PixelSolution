'use client'

import Image from 'next/image';
import React from 'react';
import { useSearchParams } from 'next/navigation';

const ExtendedWarrantyPage = () => {
  const searchParams = useSearchParams();
  const device = searchParams.get('device');

  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="md:flex items-center mx-5 px-12 py-12">
          <div className="md:w-1/2 px-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Extended Warranty Plans for Your {device}
            </h1>
            <p className="text-gray-600 mb-6">
              Protect your valuable {device} from unexpected breakdowns and
              malfunctions with our comprehensive extended warranty plans.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
              GET STARTED
            </button>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/doodle.jpg" // Replace with your image path
              alt="Smiling customer receiving extended warranty service for their device"
              width={500}
              height={300}
            />
          </div>
        </div>

        {/* Extended Warranty Features Section */}
        <div className="py-12">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Extended Warranty Features
                </h2>
                <ul className="list-none pl-0 text-gray-600">
                  <li className="flex items-center mb-2">
                    <svg
                      className="w-5 h-5 mr-2 text-teal-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Extends manufacturer&#39;s warranty
                  </li>
                  <li className="flex items-center mb-2">
                    <svg
                      className="w-5 h-5 mr-2 text-teal-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Covers malfunctions & breakdowns
                  </li>
                  <li className="flex items-center mb-2">
                    <svg
                      className="w-5 h-5 mr-2 text-teal-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Preventive maintenance services
                  </li>
                  {/* Add more features here */}
                </ul>
              </div>
              <div className="md:w-1/2 p-8 bg-gray-50">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  View Plans
                </h2>
                <input
                  type="text"
                  placeholder="Device Price"
                  className="w-full border border-gray-300 rounded-md py-2 px-4 mb-4"
                />
                <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-md w-full">
                  VIEW PLANS
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* How Does It Work? Section */}
        <div className="py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              How Does It Work?
            </h2>
            <div className="md:flex justify-between">
              <div className="text-center">
                <svg
                  className="w-12 h-12 mx-auto text-teal-500 mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
                <p className="text-gray-600">Book a Service Request</p>
              </div>
              <div className="text-center">
                <svg
                  className="w-12 h-12 mx-auto text-teal-500 mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
                <p className="text-gray-600">Repair & Maintenance</p>
              </div>
              <div className="text-center">
                <svg
                  className="w-12 h-12 mx-auto text-teal-500 mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <p className="text-gray-600">Enjoy Your Device</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us? Section */}
        <div className="py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Why Choose Us?
            </h2>
            <div className="md:grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <svg
                  className="w-12 h-12 mx-auto text-teal-500 mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
                <p className="text-gray-600">No Paperwork</p>
              </div>
              <div className="text-center">
                <svg
                  className="w-12 h-12 mx-auto text-teal-500 mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
                <p className="text-gray-600">High-Quality Repairs</p>
              </div>
              <div className="text-center">
                <svg
                  className="w-12 h-12 mx-auto text-teal-500 mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
                <p className="text-gray-600">Free Pick & Drop</p>
              </div>
              <div className="text-center">
                <svg
                  className="w-12 h-12 mx-auto text-teal-500 mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
                <p className="text-gray-600">Excellent Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions Section */}
        <div className="py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-2">
              <details className="bg-white rounded-md shadow-sm p-4">
                <summary className="font-semibold text-gray-700">
                  What is an extended warranty?
                </summary>
                <p className="text-gray-600 mt-2">
                  An extended warranty is a service contract that provides
                  coverage for repair or replacement of your device after the
                  original manufacturer&#39;s warranty has expired.
                </p>
              </details>
              <details className="bg-white rounded-md shadow-sm p-4">
                <summary className="font-semibold text-gray-700">
                  What does the extended warranty cover?
                </summary>
                <p className="text-gray-600 mt-2">
                  Our extended warranty covers mechanical and electrical
                  failures, as well as damage from normal use.
                </p>
              </details>
              {/* Add more FAQ items here */}
            </div>
          </div>
        </div>

        {/* Bottom Section: Not Sure What You’re Looking For? */}
        <div className="py-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600 mb-4">
              Not Sure What You’re Looking For?
            </p>
            <div className="flex items-center justify-center">
              <input
                type="text"
                placeholder="Search"
                className="w-full md:w-1/2 border border-gray-300 rounded-md py-2 px-4"
              />
              <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-md ml-2">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtendedWarrantyPage;
