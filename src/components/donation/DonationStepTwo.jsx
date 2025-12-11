import FAQ from "../Contribute/FAQ";
import donate from "../../assets/donate.png";

export default function DonationStepTwo({ data, update, onNext, onBack }) {
  const handleChange = (field) => (e) =>
    update({
      [field]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-white">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2">
          <img
            src={donate}
            alt="Donation"
            className="rounded-xl w-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2">
          <div className="h-1 bg-gray-700 rounded-full mb-6">
            <div className="h-full w-2/3 bg-white rounded-full"></div>
          </div>

          <h2 className="text-xl font-semibold mb-6">Step 2 of 3</h2>

          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="Enter your name"
              value={data.name}
              onChange={handleChange("name")}
              className="px-4 py-3 bg-transparent border border-gray-600 rounded-lg outline-none focus:border-blue-500"
            />

            <input
              type="email"
              placeholder="Enter your email address"
              value={data.email}
              onChange={handleChange("email")}
              className="px-4 py-3 bg-transparent border border-gray-600 rounded-lg outline-none focus:border-blue-500"
            />

            <input
              type="text"
              placeholder="Enter your phone number"
              value={data.phone}
              onChange={handleChange("phone")}
              className="px-4 py-3 bg-transparent border border-gray-600 rounded-lg outline-none focus:border-blue-500"
            />

            <div className="grid grid-cols-2 gap-4">
              <select
                value={data.country}
                onChange={handleChange("country")}
                className="px-4 py-3 bg-transparent border border-gray-600 rounded-lg outline-none focus:border-blue-500"
              >
                <option value="">Select</option>
                <option value="Nigeria">Nigeria</option>
              </select>

              <select
                value={data.state}
                onChange={handleChange("state")}
                className="px-4 py-3 bg-transparent border border-gray-600 rounded-lg outline-none focus:border-blue-500"
              >
                <option value="">Select</option>
                <option value="Lagos">Lagos</option>
              </select>
            </div>

            <input
              type="text"
              placeholder="Enter your zip code"
              value={data.zip}
              onChange={handleChange("zip")}
              className="px-4 py-3 bg-transparent border border-gray-600 rounded-lg outline-none focus:border-blue-500"
            />

            <textarea
              placeholder="Write your message here..."
              value={data.comment}
              onChange={handleChange("comment")}
              className="px-4 py-3 bg-transparent border border-gray-600 rounded-lg outline-none focus:border-blue-500 min-h-[120px]"
            />

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={data.anonymous}
                onChange={handleChange("anonymous")}
                className="form-checkbox text-blue-500"
              />
              I want to be anonymous
            </label>
          </div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={onBack}
              className="px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
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

      <div className="mt-12">
        <FAQ />
      </div>
    </div>
  );
}
