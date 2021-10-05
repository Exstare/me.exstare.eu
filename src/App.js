function App() {
  return (
    <div className="bg-background h-screen w-screen p-10">
      {/* Me card */}
      <div className="flex bg-secondary w-10/12 content-center place-items-center p-10 rounded-card">
        {/* Left */}
        <div className="flex">
          <img src="https://media.discordapp.net/attachments/869479978515959879/894546333170548746/image0_1.jpg" className="w-52 ml-5 rounded-2xl" alt="pf" />
          <div className="text-white ml-7">
            <h1 className="font-bold text-3xl">Exstare</h1>
            <div className="text-lg">Professional idiot, gamer, coder</div>
          </div>
        </div>

        {/* Right */}
        <div></div>
      </div>

    </div>
  );
}

export default App;
