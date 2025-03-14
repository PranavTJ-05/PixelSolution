'use client'
import Image from 'next/image';
import React from 'react';
import { useSearchParams } from 'next/navigation';

const MaintenancePage = () => {
  const searchParams = useSearchParams();
  const device = searchParams.get('device');

  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:shrink-0">
              <Image
                className="h-48 w-full object-cover md:h-full md:w-48"
                src="/path/to/maintenance-image.jpg" // Replace with a compelling image
                alt="Maintenance & Repair"
                width={384}
                height={512}
              />
            </div>
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Maintenance & Repair for {device}
              </h1>
              <p className="mt-2 text-gray-500">
                Keep your {device} running smoothly with our maintenance and
                repair services.
              </p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Get Started
              </button>

              <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">
                  Benefits
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li>Regular {device} Maintenance Helps To</li>
                      <li>Improve Cooling</li>
                      <li>Reduce Electricity Bills</li>
                      <li>Increase {device}&#39;s Lifespan</li>
                      <li>Minimize Breakdowns</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li>High-Quality AC Repairs</li>
                      <li>Experienced AC Service Engineers</li>
                      <li>90-day warranty on spare parts</li>
                      <li>AC AMC (Annual Maintenance) Plans Available</li>
                      <li>30-day warranty on service</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    Basic Cleaning
                  </h3>
                  <p className="text-gray-600">
                    Thorough cleaning of {device} filters and coils.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-800">$49</span>
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Add to Cart
                  </button>
                </div>
              </div>

              <div className="rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    Full Service
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive service including cleaning, inspection, and
                    tune-up.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-800">$99</span>
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Add to Cart
                  </button>
                </div>
              </div>

              <div className="rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    Repair Service
                  </h3>
                  <p className="text-gray-600">
                    Diagnosis and repair of {device} malfunctions.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-800">
                    Starting at $79
                  </span>
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;
