
import React from 'react';
import { WiSunrise, WiSunset, WiHumidity, WiStrongWind } from 'react-icons/wi';

const WeatherApp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 p-4">
      <div className="max-w-4xl mx-auto bg-white/20 backdrop-blur-lg rounded-lg shadow-lg p-6">
        {/* Main Weather Display */}
        <div className="text-white mb-8">
          <h1 className="text-3xl font-bold mb-2">Weyauwega, US</h1>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-6xl font-bold">45°F</p>
              <p className="text-xl">Clear</p>
              <p className="text-sm">High: 70°F, Low: 68°F</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <WiHumidity className="text-2xl" />
                <span>98%</span>
              </div>
              <div className="flex items-center gap-2">
                <WiStrongWind className="text-2xl" />
                <span>2 mph</span>
              </div>
              <div className="flex items-center gap-2">
                <WiSunrise className="text-2xl" />
                <span>09:21 AM</span>
              </div>
              <div className="flex items-center gap-2">
                <WiSunset className="text-2xl" />
                <span>08:40 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hourly Forecast */}
        <div className="bg-white/10 rounded-lg p-4">
          <h2 className="text-white text-xl font-semibold mb-4">Hourly Forecast</h2>
          <div className="overflow-x-auto">
            <div className="flex gap-4">
              {[...Array(24)].map((_, i) => (
                <div key={i} className="flex-shrink-0 text-center text-white">
                  <p className="text-sm">{`${(i + 10) % 24}:00`}</p>
                  <p className="text-lg font-bold">{`${Math.floor(65 + Math.random() * 8)}°F`}</p>
                  <p className="text-xs">Clear</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;