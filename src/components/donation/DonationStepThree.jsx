import React from "react";
import FAQ from "../Contribute/FAQ";
import donate from "../../assets/donate.png";

export default function DonationStepThree({ data, update, onNext, onBack }) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-white">
      <div className="flex flex-col md:flex-row gap-10">

        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img
            src={donate}
            alt="Donation"
            className="rounded-xl w-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2">

          {/* Progress bar */}
          <div className="h-1 bg-gray-700 rounded-full mb-6">
            <div className="h-full w-full bg-white rounded-full"></div>
          </div>

          <h2 className="text-xl font-semibold mb-6">Step 3 of 3</h2>

          {/* PAYMENT METHOD */}
          <div className="mb-5">
            <label className="block mb-1 text-sm text-gray-300">
              Payment Method
            </label>

            <select
              value={data.paymentMethod}
              onChange={(e) => update({ paymentMethod: e.target.value })}
              className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg outline-none focus:border-blue-500"
            >
              <option value="bank-transfer">Bank Transfer</option>
              <option value="card">Credit / Debit Card</option>
              <option value="ussd">USSD</option>
            </select>
          </div>

          {/* BANK NAME */}
          <div className="mb-5">
            <label className="block mb-1 text-sm text-gray-300">
              Bank Name
            </label>

            <input
              type="text"
              value={data.bankName}
              onChange={(e) => update({ bankName: e.target.value })}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg outline-none text-gray-200 focus:border-blue-500"
              placeholder="Enter bank name"
            />
          </div>

          {/* ACCOUNT NUMBER */}
          <div className="mb-5">
            <label className="block mb-1 text-sm text-gray-300">
              Account Number
            </label>

            <input
              type="text"
              value={data.accountNumber}
              onChange={(e) => update({ accountNumber: e.target.value })}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg outline-none text-gray-200 focus:border-blue-500"
              placeholder="Enter account number"
            />
          </div>

          {/* AGREEMENT */}
          <label className="flex items-center gap-2 cursor-pointer mb-6">
            <input
              type="checkbox"
              checked={data.agree}
              onChange={(e) => update({ agree: e.target.checked })}
              className="form-checkbox text-blue-500"
            />
            <span>I agree to the privacy policy and terms</span>
          </label>

          {/* BUTTONS */}
          <div className="flex gap-3">
            <button
              onClick={onBack}
              className="px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
            >
              Back
            </button>

            <button
              onClick={onNext}
              disabled={!data.agree}
              className={`ml-auto px-6 py-3 rounded-lg flex items-center gap-2 transition ${
                data.agree
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-700 cursor-not-allowed"
              }`}
            >
              Done <span>↗</span>
            </button>
          </div>

        </div>
      </div>

      {/* FAQ */}
      <div className="mt-12">
        <FAQ />
      </div>
    </div>
  );
}
