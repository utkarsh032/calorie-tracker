import React, { useState } from "react";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    country: "",
    age: "",
    weight: "",
    height: "",
    goal: "",
    dailyPattern: "",
    agree: false,
    weightUnit: "kg",
    heightUnit: "cm",
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Validate the current step
  const validate = () => {
    let tempErrors = {};
    if (step === 1 && !formData.name) tempErrors.name = "Name is required!";
    if (step === 2 && !formData.gender) tempErrors.gender = "Gender is required!";
    if (step === 3 && !formData.country) tempErrors.country = "Country is required!";
    if (step === 4 && !formData.age) tempErrors.age = "Age is required!";
    if (step === 5 && !formData.weight) tempErrors.weight = "Weight is required!";
    if (step === 6 && !formData.height) tempErrors.height = "Height is required!";
    if (step === 7 && !formData.goal) tempErrors.goal = "Goal is required!";
    if (step === 8 && !formData.agree) tempErrors.agree = "You must agree to the terms!";

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  // Move to the next step
  const nextStep = () => {
    if (validate()) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  // Move to the previous step
  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  // Submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted:", formData);
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#7A2F83] via-[#B92F72] to-[#EE4043]">
      <div className="max-w-lg mx-auto p-6 h-screen flex justify-center">
        <div className="w-full">
          {/* Stepwise Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4 w-full">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                <div
                  key={index}
                  className={`w-1/8 h-2 rounded-full ${step >= index ? "bg-blue-500" : "bg-gray-300"}`}
                />
              ))}
            </div>

            {/* Full progress bar */}
            <div className="h-3 rounded-full bg-gray-500 w-full">
              <div
                className="h-3 rounded-full bg-gray-300"
                style={{ width: `${(step / 8) * 100}%` }}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Name */}
            {step === 1 && (
              <div>
                <label className="block mb-2 text-light text-2xl font-merienda font-bold tracking-wide">What can I call you?</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.name && <p className="text-highlight text-sm mt-1">{errors.name}</p>}
              </div>
            )}

            {/* Step 2: Gender */}
            {step === 2 && (
              <div>
                <label className="block mb-2 text-2xl font-merienda font-bold tracking-wide text-light">What's Your Gender</label>
                <div className="grid grid-cols-2 gap-8 mt-10">
                  {/* Gender Options */}
                  {["He", "She", "Can not say"].map((genderOption) => (
                    <div
                      key={genderOption}
                      onClick={() => handleChange({ target: { name: 'gender', value: genderOption } })}
                      className={`text-lg font-medium text-light border-2 border-dotted rounded-md px-4 py-2 cursor-pointer transition-all duration-300 ${formData.gender === genderOption
                        ? "bg-primary text-white border-primary"
                        : "hover:bg-gray-300 hover:text-gray-800"
                        }`}
                    >
                      {genderOption}
                    </div>
                  ))}
                </div>
                {errors.gender && <p className="text-highlight text-sm mt-1">{errors.gender}</p>}
              </div>
            )}

            {/* Step 3: Country */}
            {step === 3 && (
              <div>
                <label className="block mb-2 text-2xl font-merienda font-bold tracking-wide text-light">Your Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.country && <p className="text-highlight text-sm mt-1">{errors.country}</p>}
              </div>
            )}

            {/* Step 4: Age */}
            {step === 4 && (
              <div>
                <label className="block mb-2 text-2xl font-merienda font-bold tracking-wide text-light">
                  Your Age
                </label>
                <div className="grid grid-cols-2 gap-8 text-center mt-8">
                  {/* Age Range Options */}
                  {[
                    { label: "Less than 18", value: "Less than 18" },
                    { label: "18 < 24", value: "18 < 24" },
                    { label: "24 < 32", value: "24 < 32" },
                    { label: "32 < 36", value: "32 < 36" },
                    { label: "36 < 42", value: "36 < 42" },
                    { label: "42 and above", value: "42 and above" },
                  ].map((ageRange) => (
                    <div
                      key={ageRange.value}
                      onClick={() =>
                        handleChange({ target: { name: "age", value: ageRange.value } })
                      }
                      className={`text-lg font-medium text-light border-2 border-dotted rounded-md px-4 py-2 cursor-pointer transition-all duration-300 ${formData.age === ageRange.value
                        ? "bg-primary text-white border-primary"
                        : "hover:bg-gray-300 hover:text-gray-800"
                        }`}
                    >
                      {ageRange.label}
                    </div>
                  ))}
                </div>
                {errors.age && <p className="text-highlight text-sm mt-1">{errors.age}</p>}
              </div>
            )}

            {/* Step 5: Weight */}
            {step === 5 && (
              <div>
                <label className="block mb-2 text-2xl font-merienda font-bold tracking-wide text-light">Your Weight</label>
                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    placeholder="Enter weight"
                    className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <select
                    name="weightUnit"
                    value={formData.weightUnit}
                    onChange={handleChange}
                    className="w-1/4 px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="kg">kg</option>
                    <option value="lbs">lbs</option>
                  </select>
                </div>
                {errors.weight && <p className="text-highlight text-sm mt-1">{errors.weight}</p>}
              </div>
            )}

            {/* Step 6: Height */}
            {step === 6 && (
              <div>
                <label className="block mb-2 text-2xl font-merienda font-bold tracking-wide text-light">Your Height</label>
                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    placeholder="Enter height"
                    className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <select
                    name="heightUnit"
                    value={formData.heightUnit}
                    onChange={handleChange}
                    className="w-1/4 px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="cm">cm</option>
                    <option value="inches">inches</option>
                  </select>
                </div>
                {errors.height && <p className="text-highlight text-sm mt-1">{errors.height}</p>}
              </div>
            )}

            {/* Step 7: Goal */}
            {step === 7 && (
              <div>
                <label className="block mb-2 text-2xl font-merienda font-bold tracking-wide text-light">Your Goal</label>
                <textarea
                  name="goal"
                  value={formData.goal}
                  onChange={handleChange}
                  placeholder="Your fitness goal"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.goal && <p className="text-highlight text-sm mt-1">{errors.goal}</p>}
              </div>
            )}

            {/* Step 8: Agree */}
            {step === 8 && (
              <div>
                <label className="block mb-2 text-xl font-merienda font-bold tracking-wide text-light">Agree to terms</label>
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span className="text-light">I agree to the terms and conditions.</span>
                {errors.agree && <p className="text-highlight text-sm mt-1">{errors.agree}</p>}
              </div>
            )}

            <div className="flex justify-between mt-6">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-4 py-2 rounded-md text-white bg-primary hover:bg-primary-dark"
                >
                  Previous
                </button>
              )}

              {step < 8 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-4 py-2 rounded-md text-white bg-primary hover:bg-primary-dark"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md text-white bg-primary hover:bg-primary-dark"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
