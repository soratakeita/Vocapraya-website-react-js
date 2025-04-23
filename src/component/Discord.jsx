import React from "react";

const Discord = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText("https://discord.gg/gDpEtK9KNu");
    alert("Link copied!");
  };

  return (
<>
<section className="text-center py-8 flex items-center justify-center mt-40">
        <div className="border-t-4 border-pink-400 w-16 mr-2"></div>
        <h1 className="font-bold text-[25px]">KOMUNITAS</h1>
        <div className="border-t-4 border-pink-400 w-16 ml-2"></div>
</section>
<div className="w-full bg-gradient-to-t flex items-center justify-center mt-5">

  {/* Background Card yang besar dan rounded */}
  <div className="relative w-[90%] max-w-6xl h-[400px] bg-[#404eed] rounded-3xl overflow-hidden flex items-center justify-center shadow-2xl">

    {/* Ilustrasi Background */}
    <img src="discordbg.svg" alt="BG" className="absolute inset-0 w-full h-full object-cover z-0" />

    {/* Invite Card */}
    <div className="z-10 bg-[#1e1f22] rounded-xl p-6 sm:p-10 max-w-md text-white text-center shadow-lg">
      
      <h2 className="text-xs sm:text-sm text-gray-300 mb-1">You've been invited to join</h2>
      <h1 className="text-xl sm:text-3xl font-bold mb-5">Vocapraya</h1>

      <div className="flex justify-center gap-2 text-xs sm:text-sm mb-5">
        <span className="bg-[#2c2f33] px-3 py-1 rounded-full">193 Members</span>
      </div>

      <a href="https://discord.gg/gDpEtK9KNu">
        <button className="p-4 sm:p-2 sm:px-4 bg-[#5865F2] hover:bg-[#4752c4] py-2 rounded-md font-medium mb-5 transition-all duration-200">
          View Invite
        </button>
      </a>

      <div className="flex bg-black rounded-md overflow-hidden w-full">
        <input
          type="text"
          readOnly
          value="https://discord.gg/gDpEtK9KNu"
          className="flex-1 px-3 py-2 bg-black text-white text-sm outline-none"
        />
        <button
          onClick={handleCopy}
          className="bg-[#5865F2] hover:bg-[#4752c4] px-4 text-sm"
        >
          Copy
        </button>
      </div>
    </div>
  </div>
</div>

</>

  );
};

export default Discord;
