import { useState } from "react";
import DonationStepOne from "./DonationStepOne";
import DonationStepTwo from "./DonationStepTwo";
import DonationStepThree from "./DonationStepThree";
import SuccessModal from "./SuccessModal";

export default function DonationFlow() {
  const [step, setStep] = useState(1);
  // keep the whole donation object centrally so data persists across steps
  const [donationData, setDonationData] = useState({
    type: "one-time",
    amount: "",
    name: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    zip: "",
    comment: "",
    anonymous: false,
    paymentMethod: "bank-transfer",
    agree: false,
  });

  const update = (patch) => setDonationData((d) => ({ ...d, ...patch }));

  const goNext = () => setStep((s) => Math.min(3, s + 1));
  const goBack = () => setStep((s) => Math.max(1, s - 1));
  const [successOpen, setSuccessOpen] = useState(false);

  const handleFinish = () => {
    // your submission logic here (API call)
    // show success modal after successful submission
    setSuccessOpen(true);
  };

  return (
    <div className="min-h-screen bg-inherit py-32">
      {step === 1 && (
        <DonationStepOne
          data={donationData}
          update={update}
          onNext={goNext}
          onBack={goBack}
        />
      )}

      {step === 2 && (
        <DonationStepTwo
          data={donationData}
          update={update}
          onNext={goNext}
          onBack={goBack}
        />
      )}

      {step === 3 && (
        <DonationStepThree
          data={donationData}
          update={update}
          onNext={handleFinish}
          onBack={goBack}
        />
      )}

      <SuccessModal
        open={successOpen}
        onClose={() => setSuccessOpen(false)}
        redirectTo="/"
      />
    </div>
  );
}
