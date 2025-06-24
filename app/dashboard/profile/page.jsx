"use client";
import * as React from 'react';

const ProfileForm = () => {
  const [formData, setFormData] = React.useState({
    nom: '',
    prenoms: '',
    email: '',
    mobileNumber: '',
    gender: '',
    id: '',
    taxIdentificationNumber: '',
    taxIdentificationCountry: '',
    residentialAddress: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour sauvegarder les changements
    console.log(formData);
  };

  return (
    <div className="p-4 w-full rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <button className="bg-black cursor-pointer text-white px-4 py-2 rounded">Nouvelle photo</button>
          {/* <button className="text-blue-500 ml-2">Delete avatar</button> */}
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Nom*</label>
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Prénoms*</label>
          <input
            type="text"
            name="prenoms"
            value={formData.prenoms}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Contact*</label>
          <div className="flex items-center">
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        {/* <div className="mb-4">
          <label className="block text-gray-700">Gender</label>
          <div className="flex items-center">
            <label className="mr-4"><input type="radio" name="gender" value="male" className="mr-1"/> Male</label>
            <label><input type="radio" name="gender" value="female" className="mr-1"/> Female</label>
          </div>
        </div> */}
        {/* <div className="mb-4">
          <label className="block text-gray-700">ID</label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div> */}
        {/* <div className="mb-4">
          <label className="block text-gray-700">Tax Identification Number</label>
          <input
            type="text"
            name="taxIdentificationNumber"
            value={formData.taxIdentificationNumber}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div> */}
        {/* <div className="mb-4">
          <label className="block text-gray-700">Tax Identification Country</label>
          <div className="flex items-center">
            <img
              src="https://flagcdn.com/w20/ng.png"
              srcSet="https://flagcdn.com/w40/ng.png 2x"
              alt="Nigeria Flag"
              className="w-6 h-4 mr-2"
            />
            <select
              name="taxIdentificationCountry"
              value={formData.taxIdentificationCountry}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select Country</option>
              <option value="Nigeria">Nigeria</option>
            </select>
          </div>
        </div> */}
        {/* <div className="mb-4">
          <label className="block text-gray-700">Residential Address</label>
          <input
            type="text"
            name="residentialAddress"
            value={formData.residentialAddress}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div> */}
        <button type="submit" className="w-100 bg-black text-white py-2 cursor-pointer rounded">Enregistrer</button>
      </form>
    </div>
  );
};

export default ProfileForm;
