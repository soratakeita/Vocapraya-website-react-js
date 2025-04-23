import React from "react";

const Discord = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText("https://yumelive.id/discord");
    alert("Link copied!");
  };

  return (
<>
<section className="text-center py-8 flex items-center justify-center">
        <div className="border-t-4 border-pink-400 w-16 mr-2"></div>
        <h1 className="font-bold text-[25px]">TENTANG</h1>
        <div className="border-t-4 border-pink-400 w-16 ml-2"></div>
</section>
    <div className="flex flex-col w-full max-w-4xl justify-center items-center mx-auto px-4 sm:px-6 md:px-8">
  <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl">
    Vocapraya merupakan circle musik vocaloid atau voice synthesizer yang berasal dari Indonesia.
    Vocapraya didirikan secara resmi pada bulan Desember 2020 yang di dirikan oleh sekumpulan produser dan penikmat musik vocaloid dari berbagai daerah.
    Kata Vocapraya berasal dari penggabungan 2 (Dua) kata yaitu Vocaloid dan Adhipraya yang artinya Harapan, dengan demikian nama Vocapraya dapat memberikan harapan untuk semua pendengar dan penggemar musik vocaloid yang ada di Indonesia agar musik Vocaloid di Indonesia akan terus ada dan berkembang mengikuti zaman.
  </p>
</div>

</>

  );
};

export default Discord;
