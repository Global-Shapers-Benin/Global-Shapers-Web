import React, { useState, useEffect } from "react";
import locate from "../../assets/locate.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import comment from "../../assets/comment.png";
import linkedIn from "../../assets/linkedin-line.png";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

// ------------------- AdvancedMarker -------------------
const AdvancedMarker = ({ position, map }) => {
  useEffect(() => {
    if (!map) return;

    const AdvancedMarkerElement =
      window.google?.maps?.marker?.AdvancedMarkerElement;

    if (AdvancedMarkerElement) {
      const marker = new AdvancedMarkerElement({ position, map });
      return () => marker.setMap(null);
    }
  }, [position, map]);

  return null;
};

// ------------------- LocationMap -------------------
const LocationMap = () => {
  const center = { lat: 6.3398, lng: 5.6257 };
  const [mapInstance, setMapInstance] = useState(null);

  return (
    <APIProvider apiKey="AIzaSyDmxjOe-E3-71HqOXlzNeV0gXIuZDhI8ts">
      <Map
        center={center}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
        onLoad={setMapInstance}
      >
        {mapInstance && <AdvancedMarker position={center} map={mapInstance} />}
      </Map>
    </APIProvider>
  );
};

// ------------------- FormInput -------------------
const FormInput = ({ label, type, name, value, onChange, error, rows }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    {type === "textarea" ? (
      <textarea
        name={name}
        rows={rows || 4}
        placeholder={`Enter your ${label.toLowerCase()}`}
        value={value}
        onChange={onChange}
        className="mt-2 block w-full bg-white placeholder-gray-300 rounded-md border border-gray-300 p-3 resize-none"
      />
    ) : (
      <input
        type={type}
        name={name}
        placeholder={`Enter your ${label.toLowerCase()}`}
        value={value}
        onChange={onChange}
        className="mt-2 block w-full bg-white placeholder-gray-300 rounded-md border border-gray-300 p-3"
      />
    )}
    {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
  </div>
);

// ------------------- ContactUs -------------------
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  // ------------------- Form Validation -------------------
  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    if (!formData.email.trim()) tempErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      tempErrors.email = "Invalid email address.";
    if (formData.phone && !/^\d+$/.test(formData.phone))
      tempErrors.phone = "Phone must be numeric.";
    if (!formData.message.trim()) tempErrors.message = "Message is required.";
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    alert("Form is valid! Integrate email logic here.");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setErrors({});
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="">
      {/* Header */}
      <div className="px-5 md:px-20 py-16">
        <h1 className="font-bold text-4xl md:text-5xl mb-8">CONTACT US</h1>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl">
          Please do not hesitate to give us a call to chat through your
          requirements. We would be delighted to speak to you.
        </p>

        {/* Info + Form */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Info Section */}
          <div className="md:w-1/2 flex flex-col gap-8">
            {/* Contact */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <img src={comment} alt="comment icon" />
                <p className="font-bold text-2xl">Contact Us</p>
              </div>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                info@beninglobalshapers.com
              </p>
              <p>
                <span className="font-semibold">Phone:</span> +234 782 2342 332
              </p>
            </div>

            <hr className="border-[#7BC5FE] w-20 my-4" />

            {/* Location */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <img src={locate} alt="location icon" />
                <p className="font-bold text-2xl">Our Location</p>
              </div>
              <p>234 Ihama road, off Airport road, Benin city, Edo state.</p>
            </div>

            {/* Social */}
            <div className="p-4 flex justify-between items-center bg-[#00529B] text-white rounded-md">
              <p>Follow us:</p>
              <div className="flex gap-4">
                <img src={instagram} alt="Instagram" />
                <img src={linkedIn} alt="LinkedIn" />
                <img src={twitter} alt="Twitter" />
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full md:w-1/2 bg-[#F0F7FF] p-8 md:p-10 shadow-md rounded-md">
            <form onSubmit={handleSubmit} noValidate>
              <FormInput
                label="Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
              />
              <FormInput
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
              <FormInput
                label="Phone"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
              />
              <FormInput
                label="Message"
                type="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
              />
              <button className="w-full bg-blue-600 text-white py-3 rounded-3xl hover:bg-blue-700 transition-colors mt-4">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className=" px-5 md:px-20 py-16 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Location</h2>
        <p className="text-lg md:text-xl mb-6">
          234 Ihama road, off Airport road, Benin city, Edo state. V90 5342
        </p>

        <div className="w-full h-72 md:h-[600px] mb-6 rounded-md overflow-hidden">
          <LocationMap />
        </div>

        <a
          href="https://www.google.com/maps/dir/?api=1&destination=234+Ihama+road,+off+Airport+road,+Benin+city,+Edo+state"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 px-6 py-3 rounded-3xl hover:bg-blue-700 transition-colors"
        >
          Get Directions
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
