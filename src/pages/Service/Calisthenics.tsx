import React from 'react';

const Calisthenics: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Calisthenics Training
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Exercise Cards */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="/images/pull-ups.jpg" 
              alt="Pull-ups exercise"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pull-ups</h3>
              <p className="text-gray-600">Master the fundamental upper body exercise for building strength and muscle.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="/images/push-ups.jpg" 
              alt="Push-ups exercise"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Push-ups</h3>
              <p className="text-gray-600">Develop chest, shoulder, and core strength with this classic exercise.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="/images/handstand.jpg" 
              alt="Handstand training"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Handstand</h3>
              <p className="text-gray-600">Learn the art of balance and build incredible shoulder strength.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl text-gray-700 mb-8">
            Transform your body using nothing but your own bodyweight
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calisthenics;
