import React, { useState, useEffect } from "react";
import locate from "../../assets/locate.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import comment from "../../assets/comment.png";
import linkedIn from "../../assets/linkedin-line.png";

// Import from @vis.gl/react-google-maps (do not import Marker)
import { APIProvider, Map } from "@vis.gl/react-google-maps";

// Custom AdvancedMarker component using AdvancedMarkerElement
const AdvancedMarker = ({ position, map }) => {
  useEffect(() => {
    if (!map) return;
    // Ensure the AdvancedMarkerElement API is available
    if (
      window.google &&
      window.google.maps &&
      window.google.maps.marker &&
      window.google.maps.marker.AdvancedMarkerElement
    ) {
      const advancedMarker = new window.google.maps.marker.AdvancedMarkerElement({
        position,
        map,
      });
      return () => {
        advancedMarker.setMap(null);
      };
    }
  }, [position, map]);
  return null;
};

const ContactUs = () => {
  // =========================
  // EXISTING FORM CODE
  // =========================
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const tempErrors = {};

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required.";
    }
    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        tempErrors.email = "Please enter a valid email address.";
      }
    }
    if (formData.phone && !/^\d+$/.test(formData.phone)) {
      tempErrors.phone = "Phone number should be numeric.";
    }
    if (!formData.message.trim()) {
      tempErrors.message = "Message is required.";
    }
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    alert("Form is valid! Here you can integrate your email sending logic.");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setErrors({});
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // =========================
  // LOCATION MAP COMPONENT
  // =========================
  function LocationMap() {
    const center = { lat: 6.3398, lng: 5.6257 };
    const [mapInstance, setMapInstance] = useState(null);

    const handleLoad = (map) => {
      setMapInstance(map);
    };

    return (
      <APIProvider apiKey="AIzaSyDmxjOe-E3-71HqOXlzNeV0gXIuZDhI8ts">
        {/* Replace "YOUR_GOOGLE_MAPS_API_KEY" with a valid API key */}
        <Map
          center={center}
          zoom={15}
          style={{ width: "100%", height: "100%" }}
          onLoad={handleLoad}
        >
          {mapInstance && <AdvancedMarker position={center} map={mapInstance} />}
        </Map>
      </APIProvider>
    );
  }

  return (
    <div>
      <div>
        <div className="px-20 py-26">
          <h1 className="font-bold text-[40px] text-start">CONTACT US</h1>
          <section>
            <div className="flex text-start justify-between gap-10">
              <div className="w-1/2">
                <p className="font-[400] text-[28px] my-8">
                  Please do not hesitate to give us a call to chat through your
                  requirements. We would be delighted to speak to you.
                </p>
                <div className="font-[400] text-[24px] my-8">
                  <div className="flex my-4 gap-2">
                    <img src={comment} alt="" />
                    <p className="font-bold text-[28px]">Contact Us</p>
                  </div>
                  <p className="my-4">
                    <span className="font-semibold">Email:</span>{" "}
                    Info@beninglobalshapers.com
                  </p>
                  <p>
                    <span className="Font-semibold">Phone:</span>+234 782 2342 332
                  </p>
                </div>
                <div className="h-[1px] w-[80px] bg-[#7BC5FE] my-4"></div>
                <div className="my-8">
                  <div className="flex my-4 gap-2">
                    <img src={locate} alt="" />
                    <p className="font-bold text-[28px]">Our Location</p>
                  </div>
                  <p className="text-[24px] font-[400]">
                    234 Ihama road, off Airport road, Benin city, Edo state.
                  </p>
                </div>
                <div className="my-8 p-4 flex justify-between items-center bg-[#00529B]">
                  <p>Follow us:</p>
                  <div className="flex gap-4">
                    <img src={instagram} alt="" />
                    <img src={linkedIn} alt="" />
                    <img src={twitter} alt="" />
                  </div>
                </div>
              </div>
              {/* Form Section */}
              <div className="mt-8 max-w-lg w-full bg-[#F0F7FF] text-start p-10 shadow-md">
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your name"
                      className="mt-2 block w-full bg-white placeholder:text-gray-300 rounded-md border border-gray-300 p-4"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email address"
                      className="mt-2 block w-full bg-white placeholder:text-gray-300 rounded-md border border-gray-300 p-4"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Enter your phone number"
                      className="mt-2 block w-full bg-white placeholder:text-gray-300 rounded-md border border-gray-300 p-4"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      placeholder="Write your message here..."
                      className="mt-1 block w-full bg-white placeholder:text-gray-300 rounded-md border border-gray-300 p-2"
                      value={formData.message}
                      onChange={handleChange}
                    />
                    {errors.message && (
                      <p className="text-red-600 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white font-medium px-4 py-2 rounded-4xl hover:bg-blue-700 transition-colors"
                  >
                    Send message
                  </button>
                </form>
              </div>
              {/* End of form */}
            </div>
          </section>
        </div>
        {/* MAP SECTION BELOW (Black background, white text) */}
        <div className="bg-[#1A1A1A] px-20 py-18 text-start">
          <h2 className="text-white font-bold text-[32px] mb-2">Our Location</h2>
          <p className="text-white text-[20px] mb-4">
            234 Ihama road, off Airport road, Benin city, Edo state. V90 5342
          </p>
          {/* Map Container */}
          <div className="w-full h-[600px] mb-6">
            <LocationMap />
          </div>
          {/* Get Directions Link */}
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=234+Ihama+road,+off+Airport+road,+Benin+city,+Edo+state"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-4xl hover:bg-blue-700 transition-colors"
          >
            Get Directions
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
