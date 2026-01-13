import { useState } from 'react';
import './MultiStepForm.css';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zip: '',
  });

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    alert(JSON.stringify(formData, null, 2));
    setStep(1); // Reset
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      city: '',
      zip: '',
    });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="form-step">
            <h3>Step 1: Personal Info</h3>
            <input
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange('firstName')}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange('lastName')}
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange('email')}
            />
            <button className="next-btn" onClick={nextStep}>
              Next
            </button>
          </div>
        );
      case 2:
        return (
          <div className="form-step">
            <h3>Step 2: Address Info</h3>
            <input
              type="text"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange('address')}
            />
            <input
              type="text"
              placeholder="City"
              value={formData.city}
              onChange={handleChange('city')}
            />
            <input
              type="text"
              placeholder="Zip Code"
              value={formData.zip}
              onChange={handleChange('zip')}
            />
            <div className="btn-group">
              <button className="prev-btn" onClick={prevStep}>
                Back
              </button>
              <button className="next-btn" onClick={nextStep}>
                Next
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="form-step confirmation">
            <h3>Step 3: Confirmation</h3>
            <ul>
              <li>
                <strong>Name:</strong> {formData.firstName} {formData.lastName}
              </li>
              <li>
                <strong>Email:</strong> {formData.email}
              </li>
              <li>
                <strong>Address:</strong> {formData.address}, {formData.city}{' '}
                {formData.zip}
              </li>
            </ul>
            <div className="btn-group">
              <button className="prev-btn" onClick={prevStep}>
                Back
              </button>
              <button className="submit-btn" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="multistep-container">
      <h2>Multi-step Form</h2>
      <div className="progress-bar-container">
        <div className={`step-indicator ${step >= 1 ? 'active' : ''}`}>1</div>
        <div className={`line ${step >= 2 ? 'active' : ''}`}></div>
        <div className={`step-indicator ${step >= 2 ? 'active' : ''}`}>2</div>
        <div className={`line ${step >= 3 ? 'active' : ''}`}></div>
        <div className={`step-indicator ${step >= 3 ? 'active' : ''}`}>3</div>
      </div>

      <div className="form-card">{renderStep()}</div>
    </div>
  );
};

export default MultiStepForm;
