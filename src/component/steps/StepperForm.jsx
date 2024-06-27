import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import ProgressBar from '../prograssBar/PrograssBar';
import Navbar from '../navbar/Navbar';

const StepperForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  const onReturnHome = () => {
    setStep(0);
    setFormData({});
  };

  const steps = [
    <Step1 key="step1" formData={formData} setFormData={setFormData} nextStep={nextStep} />,
    <Step2 key="step2" formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />,
    <Step3 key="step3" onReturnHome={onReturnHome} />,
  ];

  const progress = (step / (steps.length - 1)) * 100;

  return (
    <div className="flex flex-col items-center w-full">
        <Navbar prevStep={prevStep} />
      <ProgressBar progress={progress} />
      {steps[step]}
    </div>
  );
};

export default StepperForm;

