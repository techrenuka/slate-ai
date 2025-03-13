"use client";

import React, { FormEvent, useState } from "react";
import Link from "next/link";

interface RequestPocPopUpProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RequestPocPopUp({ isOpen, onClose }: RequestPocPopUpProps) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    industry: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/poc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit PoC request');
      }

      alert('Thank you! Your PoC request has been submitted. We will get back to you shortly.');
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };
    
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95">
      <div className="bg-[#1a1a1a] w-full md:w-4/5 xl:w-3/5 rounded-2xl overflow-hidden relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white p-2"
        >
          ✕
        </button>
        <div className="flex flex-col w-full md:flex-row">
          <div className="w-full p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Request a Free PoC
            </h2>
            {error && (
              <div className="mb-6 p-4 text-red-500 bg-red-500/10 rounded-lg">
                {error}
              </div>
            )}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full bg-[#222] border-none rounded-lg p-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full bg-[#222] border-none rounded-lg p-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full bg-[#222] border-none rounded-lg p-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-[#222] border-none rounded-lg p-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="relative">
                <select
                  className="w-full bg-[#222] border-none rounded-lg p-4 text-gray-400 focus:ring-2 focus:ring-blue-500 transition-all appearance-none cursor-pointer"
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  required
                  style={{
                    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '1.5em'
                  }}
                >
                  <option value="" disabled className="text-gray-400">Select Industry</option>
                  <option value="technology" className="bg-[#222] text-white py-2">Technology</option>
                  <option value="healthcare" className="bg-[#222] text-white py-2">Healthcare</option>
                  <option value="finance" className="bg-[#222] text-white py-2">Finance</option>
                  <option value="retail" className="bg-[#222] text-white py-2">Retail</option>
                  <option value="manufacturing" className="bg-[#222] text-white py-2">Manufacturing</option>
                  <option value="education" className="bg-[#222] text-white py-2">Education</option>
                  <option value="real_estate" className="bg-[#222] text-white py-2">Real Estate</option>
                  <option value="energy" className="bg-[#222] text-white py-2">Energy</option>
                  <option value="construction" className="bg-[#222] text-white py-2">Construction</option>
                  <option value="telecommunication" className="bg-[#222] text-white py-2">Telecommunication</option>
                  <option value="transportation" className="bg-[#222] text-white py-2">Transportation & Logistics</option>
                  <option value="media" className="bg-[#222] text-white py-2">Media & Entertainment</option>
                  <option value="government" className="bg-[#222] text-white py-2">Government</option>
                  <option value="non_profit" className="bg-[#222] text-white py-2">Non-Profit</option>
                  <option value="hospitality" className="bg-[#222] text-white py-2">Hospitality & Travel</option>
                  <option value="other" className="bg-[#222] text-white py-2">Other</option>
                </select>
              </div>
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full bg-[#222] border-none rounded-lg p-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full text-white font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : "Let's Connect"}
              </button>   
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
