import React, { useState, useEffect } from 'react';

const calculateTimeLeft = () => {
  const targetDate = new Date('2024-12-28T00:00:00');
  const currentDate = new Date();
  const difference = targetDate.getTime() - currentDate.getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // Return zero for all units
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth < 768); // Small device: screen width < 768px
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="about">
      <div className="relative w-full">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          <div className="p-4">
            <h1 className="text-5xl text-left my-8 font-bold text-[#4194D0]">
              Welcome Back to Where It All Began!
            </h1>
            {isSmallDevice ? (
              <div className="text-left mt-4">
                <p className="text-4xl font-bold">
                  <span className="text-black">28</span>{' '}
                  <span className="text-[#007069]">December 2024</span>
                </p>
              </div>
            ) : (
              <div className="flex flex-col space-y-4">
                <div className="flex space-x-2 md:space-x-4">
                  <div className="text-center">
                    <p className="text-3xl md:text-5xl ">{timeLeft.days}<span className="text-[#007069]">:</span></p>
                    <p className="text-sm md:text-lg text-[#007069]">Days</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl md:text-5xl ">
                      {timeLeft.hours.toString().padStart(2, '0')}
                      <span className="text-[#007069]">:</span>
                    </p>
                    <p className="text-sm md:text-lg text-[#007069]">Hours</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl md:text-5xl ">
                      {timeLeft.minutes.toString().padStart(2, '0')}
                      <span className="text-[#007069]">:</span>
                    </p>
                    <p className="text-sm md:text-lg text-[#007069]">Min</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl md:text-5xl ">
                      {timeLeft.seconds.toString().padStart(2, '0')}
                    </p>
                    <p className="text-sm md:text-lg text-[#007069]">Sec</p>
                  </div>
                </div>
                {timeLeft.days === 0 &&
                  timeLeft.hours === 0 &&
                  timeLeft.minutes === 0 &&
                  timeLeft.seconds === 0 ? (
                  <p className="text-xl md:text-2xl font-bold text-[#007069] mt-4 flex justify-start">And, It's A Wrap!</p>
                ) : null}
              </div>
            )}
          </div>

          <div className="p-4">
            <p className="my-8 text-lg text-left">
              GITAM isn’t just a campus; it’s a collection of stories—your stories. From late-night canteen chats to
              last-minute exam prep, from friendships that felt like family to moments that shaped your future, every
              corner of this place holds a memory. Our Homecoming is carefully curated to strengthen and engage the
              vibrant alumni community. It’s a chance to reconnect with old friends, relive cherished memories, and forge
              new connections that inspire future journeys. Come back, walk those familiar paths, and remember—you never
              really left. <p className="font-bold text-xl text-emerald-800">Once a GITAMITE, Always a Dynamite!</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;