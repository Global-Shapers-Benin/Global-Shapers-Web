import React from "react";
import FAQ from "../Contribute/FAQ";
import donate from "../../assets/donate.png";


export default function DonationStepOne({ data, update, onNext, onBack }) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-white">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left image */}
        <div className="w-full md:w-1/2">
          <img
            src={donate}
            alt="Donation"
            className="rounded-xl w-full object-cover"
          />
        </div>

        {/* Right form */}
        <div className="w-full md:w-1/2">
          <div className="h-1 bg-gray-700 rounded-full mb-6">
            <div className="h-full w-1/3 bg-white rounded-full"></div>
          </div>

          <h2 className="text-xl font-semibold mb-6">Step 1 of 3</h2>

          <h1 className="text-3xl font-semibold mb-4">Choose Donation Type</h1>

          <div className="flex items-center gap-8 mb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                checked={data.type === "one-time"}
                onChange={() => update({ type: "one-time" })}
                className="form-radio text-blue-500"
              />
              One Time
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                checked={data.type === "recurring"}
                onChange={() => update({ type: "recurring" })}
                className="form-radio text-blue-500"
              />
              Reoccurring
            </label>
          </div>

          <input
            type="number"
            value={data.amount}
            onChange={(e) => update({ amount: e.target.value })}
            placeholder="₦ 0.00"
            className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg focus:border-blue-500 outline-none mb-6"
          />

          <div className="flex gap-3">
            <button
              onClick={onBack}
              disabled
              className="px-6 py-3 bg-gray-700 rounded-lg cursor-not-allowed opacity-60"
            >
              Back
            </button>

            <button
              type="button"
              onClick={onNext}
              className="px-6 py-3 bg-blue-600 rounded-lg"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* FAQ appears on every step */}
      <div className="mt-12">
        <FAQ />
      </div>
    </div>
  );
}
