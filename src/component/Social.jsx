

function Social() {

    return (
      <>
        <section className="text-center py-8 flex items-center justify-center mt-40">
                <div className="border-t-4 border-pink-400 w-16 mr-2"></div>
                <h1 className="font-bold text-[25px]">SOCIAL MEDIA</h1>
                <div className="border-t-4 border-pink-400 w-16 ml-2"></div>
        </section>
        <div className="flex flex-col items-center w-full px-4">
  <ul className="flex flex-col md:flex-row items-center mt-7 gap-5 md:gap-10 justify-center w-full max-w-6xl">
    {/* X / Twitter */}
    <li className="flex flex-row bg-white px-4 py-3 rounded-md gap-x-5 md:gap-x-8 items-center h-20 w-full shadow-lg max-w-[600px]">
      <img className="w-10 h-10" src="assets/x.svg" alt="Twitter" />
      <div className="flex flex-col text-left flex-grow">
        <span className="mt-1">X / Twitter</span>
      </div>
      <a className="bg-black text-white px-6 py-2 rounded-full hover:bg-cyan-500 transition-all duration-300" href="https://x.com/vocapraya">Follow</a>
    </li>

    {/* Instagram */}
    <li className="flex flex-row bg-[#EB459F] px-4 py-3 rounded-md gap-x-5 md:gap-x-8 items-center h-20 w-full shadow-lg max-w-[600px] text-white">
      <img className="w-10 h-10" src="assets/ig.svg" alt="Instagram" />
      <div className="flex flex-col text-left flex-grow">
        <span className="mt-1">Instagram</span>
      </div>
      <a className="bg-black text-white px-6 py-2 rounded-full hover:bg-[#BF0F76] transition-all duration-300" href="https://www.instagram.com/vocapraya.music/">Follow</a>
    </li>
  </ul>

  <ul className="flex flex-col md:flex-row items-center mt-7 gap-5 md:gap-10 justify-center w-full max-w-6xl">
    {/* YouTube */}
    <li className="flex flex-row bg-[#FF3C3F] px-4 py-3 rounded-md gap-x-5 md:gap-x-8 items-center h-20 w-full shadow-lg max-w-[600px] text-white">
      <img className="w-10 h-10" src="assets/yt.svg" alt="YouTube" />
      <div className="flex flex-col text-left flex-grow">
        <span className="mt-1">YouTube</span>
      </div>
      <a className="bg-white text-[#FF3C3F] px-6 py-2 rounded-full hover:bg-black transition-all duration-300" href="https://www.youtube.com/@vocapraya">Subscribe</a>
    </li>

    {/* Facebook */}
    <li className="flex flex-row bg-[#295BFF] px-4 py-3 rounded-md gap-x-5 md:gap-x-8 items-center h-20 w-full shadow-lg max-w-[600px] text-white">
      <img className="w-10 h-10" src="assets/fb.svg" alt="Facebook" />
      <div className="flex flex-col text-left flex-grow">
        <span className="mt-1">Facebook</span>
      </div>
      <a className="bg-black text-white px-6 py-2 rounded-full hover:bg-cyan-500 transition-all duration-300" href="https://www.facebook.com/vocapraya.music">Like</a>
    </li>
  </ul>
</div>

        
      </>
    )
  }
  
  export default Social
  