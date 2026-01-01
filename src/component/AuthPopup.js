import { useState } from 'react';

// ============================================
// FILE 1: AuthPopup.jsx (Separate Component)
// ============================================
 export default function AuthPopup({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    phone: '',
    name: '',
    email: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert(`${isLogin ? 'Login' : 'Sign up'} submitted with phone: ${formData.phone}`);
    // Add your API call here
    // Example: await fetch('/api/auth/login', { method: 'POST', body: JSON.stringify(formData) })
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0  bg-opacity-50 backdrop-blur-sm  z-40 transition-all"
        onClick={onClose}
      />

      {/* Sliding Popup */}
      <div 
        className={`fixed top-0 right-0 h-full w-full md:w-[500px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translte-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-600 hover:text-gray-900 transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-10">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {isLogin ? 'Login' : 'Sign up'}
              </h2>
              <p className="text-sm text-gray-600">
                or{' '}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-orange-600 font-semibold hover:text-orange-700"
                >
                  {isLogin ? 'create an account' : 'login to your account'}
                </button>
              </p>
            </div>

            <div className="space-y-6">
              {!isLogin && (
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border text-2xl text-center border-gray-300 focus:border-orange-600 focus:outline-none transition"
                  />
                </div>
              )}

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border text-2xl text-center border-gray-300 focus:border-orange-600 focus:outline-none transition"
                />
              </div>

              {!isLogin && (
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3  text-2xl text-center border border-gray-300 focus:border-orange-600 focus:outline-none transition"
                  />
                </div>
              )}

              <button
                onClick={handleSubmit}
                className="w-full bg-orange-600 text-3xl text-white font-bold py-3 px-4 hover:bg-orange-700 transition shadow-lg uppercase tracking-wide"
              >
                {isLogin ? 'Login' : 'Continue'}
              </button>
            </div>

            <div className="mt-6 text-xs text-gray-500">
              By {isLogin ? 'clicking on Login' : 'creating an account'}, I accept the{' '}
              <span className="text-gray-900 underline cursor-pointer">Terms & Conditions</span> &{' '}
              <span className="text-gray-900 underline cursor-pointer">Privacy Policy</span>
            </div>
          </div>

          
          
        </div>
      </div>
    </>
  );
}