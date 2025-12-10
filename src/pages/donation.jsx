import { useState } from "react";
import DonationStepOne from "../components/donation/DonationStepOne.jsx";
import DonationStepTwo from "../components/donation/DonationStepTwo.jsx";
import DonationStepThree from "../components/donation/DonationStepTwo.jsx";
import SuccessModal from "../components/donation/SuccessModal.jsx";

export default function DonationFlow() {
  const [step, setStep] = useState(1);
  const [successOpen, setSuccessOpen] = useState(false);

  const handleFinish = () => {
    setSuccessOpen(true);
  };

  return (
    <>
      {step === 1 && <DonationStepOne onNext={() => setStep(2)} />}
      {step === 2 && <DonationStepTwo onNext={() => setStep(3)} />}
      {step === 3 && <DonationStepThree onFinish={handleFinish} />}

      <SuccessModal open={successOpen} onClose={() => setSuccessOpen(false)} />
    </>
  );
}
