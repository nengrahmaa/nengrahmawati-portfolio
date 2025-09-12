export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-gray-100 flex flex-col-reverse md:flex-row items-center justify-center p-15">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img src="photo-hero.jpg" alt="Profile" className="w-64 h-64 object-cover grayscale hover:grayscale-0 transition"/>
      </div>
      <div className="md:w-1/2 text-center md:text-left space-y-4">
        <h1 className="text-5xl font-bold text-black">Full Stack Developer</h1>
        <p className="text-gray-800">
          Hi! I'am Neng Rahmawati, Fullstack Developer exploring AI etc.
        </p>
        <div className="space-x-4">
          <button className="px-6 py-2 bg-gray-800 text-white rounded-md">Download CV</button>
          <button className="px-6 py-2 border border-gray-800 text-gray-800 rounded-md">Contact Me</button>
        </div>
      </div>
    </section>
  );
}
