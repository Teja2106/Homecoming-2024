import { useState } from "react";

import bharatImage from "../assets/Screenshot 2024-12-01 115259.png";
import bharatBackground from "../assets/Screenshot 2024-12-01 140019.png";
import classroom from "../assets/Screenshot 2024-12-01 120618.png";
import alumni from "../assets/Screenshot 2024-12-01 120827.png";
import friendsInCarnival from "../assets/Screenshot 2024-12-01 120955.png";
import carnival from "../assets/Screenshot 2024-12-01 143029.png";
import racingCar from "../assets/Screenshot 2024-12-01 140444.png";
import vrHeadSet from "../assets/Screenshot 2024-12-01 140824.png"
import singer from "../assets/Screenshot 2024-12-01 115808.png";
import musicBand from "../assets/Screenshot 2024-12-01 120233.png"
import beerParty from "../assets/Screenshot 2024-12-01 141232.png"
import groupPic from "../assets/Screenshot 2024-12-01 141028.png"
import registrationDesk from "../assets/Screenshot 2024-12-02 123104.png"
import registerSpeaker from "../assets/Screenshot 2024-12-02 123722.png"
import cricketMatch from "../assets/Screenshot 2024-11-30 175043.png"
import football from "../assets/Screenshot 2024-12-02 122342.png"
import saikiran from "../assets/standup.jpg"
import backstage from "../assets/standup_background.jpg"

const Events = () => {
  const slides = [
    {
      displayUrl: registerSpeaker,
      backgroundUrl: registrationDesk,
      title: "Registrations",
      description: "Registration will begin at Bhima’s from 2:30pm, where we’ll ensure you’re all set for the day. You’ll receive a detailed event plan, a handy water bottle, a felt bag, your exclusive boarding pass, and an ID card to keep you organized and ready to explore. It’s the perfect start to an unforgettable experience.",
      timeAndVenue: "Starts 2:30pm @Bhima's",
      venuBgColor:"#436D67"
    },
    
    {
      displayUrl: classroom,
      backgroundUrl: alumni,
      title: "CAMPUS TOUR",
      description: "Join us for an engaging campus tour that showcases the heart of GITAM University! ",
      timeAndVenue: "3:00 to 5:00 pm @Your Department",
      venuBgColor:"#65594B"
    },
    {
      displayUrl: friendsInCarnival,
      backgroundUrl: carnival,
      title: "Carnival",
      description: "Dive into pure fun with our vibrant carnival, featuring almost 10 exciting stalls just for you! Bounce around in the inflatable castle, showcase your skills at inflatable bowling alley, or get creative with pottery and tote bag painting. Don’t miss the classic treats—popcorn and cotton candy to keep the festive spirit alive!",
      timeAndVenue: "5:00 to 6:30 pm @Coke Station Road",
      venuBgColor:"#962E3D"
    },
    {
      displayUrl: racingCar,
      backgroundUrl: vrHeadSet,
      title: "Innovation Expo",
      description: "Prepare to be wowed by a spectacular display of F1 cars, VR, Autonomous Obstacle Avoidance Drones that display highlight the incredible creativity and technological strides of GITAM clubs and students. For alumni, it’s a chance to relive the thrill of building your own ambitious projects and the pride of seeing ideas come to life. The future of technology is here, and it’s a nod to the foundation you helped create.",
      timeAndVenue: "5:00 to 6:30 pm @Mother Teresa Road",
      venuBgColor:"#6A5133"
    },
    {
      displayUrl: football,
      backgroundUrl: cricketMatch,
      title: "Sports",
      description: "Get competitive with games like tug of war, badminton, table tennis, basketball, and a unique twist—a blindfolded cricket! There’s something for everyone to enjoy and participate in .Whether you're a seasoned athlete or just looking for some light-hearted fun, these activities offer the perfect opportunity to bond, compete, and create lasting memories.",
      timeAndVenue: "5:00 to 6:30 pm @Cricket Stadium",
      venuBgColor:"#6E524B"
    },
    {
      displayUrl: bharatImage,
      backgroundUrl: bharatBackground,
      title: "Inaugural",
      description: "Thrilled to have some of GITAM’s most accomplished alumni joining us to celebrate this grand occasion. From the Class of 1991, Shri. Naresh Kumar Oruganti will grace the event. Representing the Class of 1994, we welcome Smt. Sireesha Gouthu. Adding to the star lineup is Shri. Girish Gadamsetty from the Class of 1997. Finally, the creative genius Shri. Ameet Mirpuri, Class of 1999 will also be part of the celebrations. Their stories promise to inspire, amaze, and make this event truly memorable.",
      timeAndVenue: "6:30 to 7:30 pm @Open Auditorium",
      venuBgColor:"#223E83"
    },
    {
      displayUrl: singer,
      backgroundUrl: musicBand,
      title: "Culturals",
      description: "Groove to electrifying group dances by the Starbursts who have come specially from Bangalore and have already delivered sensational performances at the HomeComing’24 at the Bangalore campus",
      timeAndVenue: "7:30 to 8:00 pm @Open Auditorium",
      venuBgColor:"#022970"
    },
    {
      displayUrl: saikiran,
      backgroundUrl: backstage,
      title: "Stand-up Comedy",
      description: "Laugh out loud as talented comedians take the stage for a night of fun and nostalgia. Sit back, relax, and enjoy an evening filled with humor that brings back the lighthearted spirit of campus life!",
      timeAndVenue: "8:00 to 8:30 pm @Open Auditorium",
      venuBgColor:"#64597C"
    },{
      displayUrl: beerParty,
      backgroundUrl: groupPic,
      title: "Dinner + Live Music",
      description: "Enjoy a delightful dinner accompanied by live music, creating the perfect atmosphere to engage with friends, seniors, and new acquaintances. It’s a night of laughter, stories, and bonding that you won't want to miss!",
      timeAndVenue: "8:30 to 9:30 pm @Mother Teresa Road",
      venuBgColor:"#593318"
    }
  ];

  const length = slides.length;
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div id="events" className="relative flex flex-col-reverse lg:flex-row justify-between items-center w-full h-auto lg:h-[500px] overflow-hidden top-[20px]">
      {/* Left Section: Text Content */}
      <div className="lg:w-[50%] text-white mb-6 lg:pl-[20px]">
        <div className="w-[300px] mx-auto text-left m-3">
          <h1 className="text-3xl m-4 text-[45px] font-amarante">{slides[activeIndex].title}</h1>
          <p className="m-4">{slides[activeIndex].description}</p>
          <p
            className="rounded-full inline-block mt-2 px-4 py-1 text-white m-4 whitespace-nowrap"
            style={{ backgroundColor: slides[activeIndex].venuBgColor }}
          >
            {slides[activeIndex].timeAndVenue}
          </p>
        </div>
      </div>

      {/* Right Section: Image Elements */}
      <div className="w-[50%] flex flex-row justify-around items-end gap-5 left-[200px] m-[10px]">
        {/* Main Image */}
        <div>
          <img
            src={slides[activeIndex].displayUrl}
            alt="slide-1"
            className="w-[302px] h-[310px] object-cover object-center rounded-[20px] border-2 border-white"
          />
        </div>
        {/* Additional Images (Visible Only on Large Screens) */}
        <div className="hidden lg:block">
          <img
            src={slides[(activeIndex + 1) % length].displayUrl}
            alt="slide-2"
            className="w-[210px] h-[242px] object-cover object-center rounded-[20px] border-white"
          />
        </div>
        <div className="hidden lg:block">
          <img
            src={slides[(activeIndex + 2) % length].displayUrl}
            alt="slide-3"
            className="w-[210px] h-[242px] object-cover object-center rounded-[20px] border-white"
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrevClick}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white text-black p-4 rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
      >
        &lt;
      </button>
      <button
        onClick={handleNextClick}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white text-black p-4 rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
      >
        &gt;
      </button>

      {/* Background Image and Gradient Overlay */}
      <img
  src={slides[activeIndex].backgroundUrl}
  alt="Background"
  className="absolute top-0 left-0 w-full h-full object-cover -z-10 "
/>

<div className="absolute top-0 left-0 w-full h-full -z-10 sm:block lg:hidden" 
  style={{
    background: `linear-gradient(to top, black, ${slides[activeIndex].venuBgColor})`,
  }} ></div>


      
      
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 -z-10"></div>
</div>

  );
};

export default Events