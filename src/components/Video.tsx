import headerVideo from '../assets/mainVdo HD.mp4';

export default function Video() {
  return (
    <div>
      <div className="mt-14 min-h-auto">
        <div className="container m-auto">
          <div className="w-full relative py-10">
            <div className="w-full h-full lg:mx-4 relative rounded-xl">
              {/* Main Video */}
              <video
                className="relative z-[1] w-full h-full object-center object-cover rounded-2xl"
                preload="metadata"
                loop
                playsInline
                autoPlay
                muted
                aria-hidden="false"
                src={headerVideo}
              ></video>

              {/* Blurred Background Video */}
              <video
                className="absolute top-0 left-0 w-full h-full transform-gpu translate-x-0 translate-y-0 z-0 object-center object-cover rounded-3xl blur-2xl"
                preload="none"
                loop
                playsInline
                autoPlay
                muted
                aria-hidden="true"
                src={headerVideo}
              ></video>

              {/* Text Overlay */}
              <div className="absolute inset-0 flex-col justify-center items-center left-[50vw] top-[40vw] hidden md:flex">
  <h1 className="text-[10vw] font-[700] text-[#4194D0] z-10">28</h1>
  <p className="text-[2.5vw] font-[700] text-[#4194D0] z-10 -mt-[3vw]">Dec 2024</p>
</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
