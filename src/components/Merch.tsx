import img1 from '../assets/gitamCapN.png';
import img2 from '../assets/gitamShirtN.png';
import img3 from '../assets/gitamBookN.png';

export default function Merch() {
  return (
    <div id="merch" className="flex flex-col items-center lg:flex-row justify-between p-4 lg:p-8 gap-8">
      {/* Title: Display First in Mobile View */}
      <h2 className="text-[50px] pt-10 sm:text-[50px] font-bold text-left mb-4 lg:hidden" style={{ color: '#4D9BD3', fontSize: '50px' }}>
  Carry Gitam with You
</h2>


      {/* Images: Stacked in Mobile, Horizontal in Desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-6">
        <div className="group w-[208px] h-[276px] bg-white rounded-lg flex items-center justify-center overflow-hidden transition-all duration-300 hover:bg-red-500">
          <img
            src={img1}
            alt="GITAM Cap"
            className="w-[130px] h-[110px] transition-transform duration-300 group-hover:animate-linearSpin" style={{
              animationFillMode: "forwards",
            }}
          />
        </div>
        <div className="group w-[208px] h-[276px] bg-white rounded-lg flex items-center justify-center overflow-hidden transition-all duration-300 hover:bg-blue-500">
          <img
            src={img2}
            alt="GITAM Shirt"
            className="w-[120px] h-[160px] transition-transform duration-300 group-hover:animate-enlarge" style={{
              animationFillMode: "forwards",
            }}
          />
        </div>
        <div className="group w-[208px] h-[276px] bg-white rounded-lg flex items-center justify-center overflow-hidden transition-all duration-300 hover:bg-[#808080]">
          <img
            src={img3}
            alt="GITAM Notebook"
            className="w-[104px] h-[157px] transition-transform duration-300 group-hover:animate-nonLinearSpin rotate-[-26deg]" style={{
              animationFillMode: "forwards",
            }}
          />
        </div>
      </div>

      {/* Right Side: Text and Button */}
      <div className="max-w-md text-center lg:text-left px-4">
        {/* Title: Hidden on Mobile, Shown on Desktop */}
        <h2 className="hidden lg:block text-4xl font-bold mb-4" style={{ color: '#4D9BD3' }}>
          Carry Gitam with You
        </h2>
        <p className="text-gray-700 mb-6 font-semibold text-lg">
          From hoodies to stationery and everything in between, our merchandise lets you carry a
          piece of Gitam wherever you go. Wear it, use it, and keep the memories close!
        </p>
        <div className="flex w-full justify-center lg:justify-start">
  <button className="w-[120px] h-[38px] bg-[#007069] text-white flex justify-center items-center px-4 py-2 rounded-full text-[16px] font-semibold hover:bg-[#005f50] transition duration-300">
    <a href="https://shop.gitam.edu/" target="_blank" className="mb-1">
      Shop Now
    </a>
  </button>
</div>

      </div>
    </div>
  );
}
