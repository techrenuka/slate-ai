"use client";

import React, { FormEvent, useState } from "react";
import Link from "next/link";

interface ScheduleCallPopUpProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ScheduleCallPopUp({ isOpen, onClose }: ScheduleCallPopUpProps) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/schedule', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to schedule call');
      }

      alert('Thank you! Your call has been scheduled. You will receive a confirmation email shortly.');
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM",
    "05:00 PM"
  ];
    
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
              Schedule a Call
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-[#222] border-none rounded-lg p-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-[#222] border-none rounded-lg p-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="date"
                  className="w-full bg-[#222] border-none rounded-lg p-4 text-gray-400 focus:ring-2 focus:ring-blue-500 transition-all"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                  required
                  placeholder="Select Date"
                />
                <select
                  className="w-full bg-[#222] border-none rounded-lg p-4 text-gray-400 focus:ring-2 focus:ring-blue-500 transition-all appearance-none cursor-pointer"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  required
                  style={{
                    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '1.5em'
                  }}
                >
                  <option value="" disabled>Select Time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time} className="bg-[#222] text-white">
                      {time}
                    </option>
                  ))}
                </select>
              </div>

              <textarea
                placeholder="Any specific topics you'd like to discuss?"
                rows={4}
                className="w-full bg-[#222] border-none rounded-lg p-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full text-white font-medium hover:opacity-90 transition-all duration-300 hover:scale-105"
              >
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
