
function Home() {

  return (
    <>
      <div className="min-h-screen flex items-center justify-center text-white scroll-smooth">
        <div className="flex flex-col md:flex-row max-w-5xl mx-auto items-center px-8 lg:px-12">
          <section className="flex flex-col text-center md:text-left py-10">
            <h1 className="text-[#ff6ea2] text-[20px] md:text-[24px] font-['Archivo_Black'] leading-tight">
              Vocapraya
            </h1>
            <h1 className="text-[#ff6ea2] text-[48px] md:text-[68px] font-['Archivo_Black'] leading-tight">
            CIRCLE VOCALOID OR VOICE SYNTHERSIZER MUSIC
            </h1>
          </section>

          <img className="w-1/2 md:w-1/3 hidden md:block" src="./assets/1.png" alt="Profile Image" />
        </div>
      </div>
    </>
  )
}

export default Home
