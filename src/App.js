import dob from 'dob-to-age';
import socials from './data/socials.json';

import { FaGithub, FaYoutube, FaTwitch, FaInstagram, FaTwitter, FaExternalLinkAlt } from 'react-icons/fa';
import { BsDiscord } from 'react-icons/bs';

import stackImg from './data/stack.png';
import profileImg from './data/pf.jpg'

const icons = [FaGithub, BsDiscord, FaYoutube, FaTwitch, FaInstagram, FaTwitter];
const age = dob("2004-03-25")
const ageHref = `https://en.wikipedia.org/wiki/${age}_(number)`;

function App() {
  return (
    <div className="bg-background h-screen w-screen p-10">
      {/* Me card */}
      <div className="flex flex-row bg-secondary w-full content-center place-items-center p-10 rounded-card justify-between">
        {/* Left */}
        <div className="flex items-center justify-center">
          <img src={profileImg} className="w-44 ml-5 rounded-2xl" alt="pf" />
          <div className="text-white ml-7">
            <h1 className="font-bold text-3xl">Exstare</h1>
            <div className="text-lg italic">Professional idiot, gamer, coder, bug creator</div>
            <div className="text-gray-400 text-sm">I know this site is not responsive, will be coming soon I hope o.O</div>
          </div>
        </div>
        {/* Right */}
        <div className="text-white text-lg space-y-5 mr-16 hover:animate-bounce">
          <div><a href="https://pronoun.is/he" target="_blank" rel="noreferrer">👨 | He/him</a></div>
          <div><a href={ageHref} target="_blank" rel="noreferrer">🎂 | {age}</a></div>
          <div><a href="https://www.youtube.com/watch?v=ZXavgFHXj0g" target="_blank" rel="noreferrer">🌍 | The Netherlands</a></div>
        </div>
      </div>
      {/* Middle */}
      <div className="mt-5 text-white">
        <div className="grid grid-cols-3 space-x-5">
          {/* Discord */}
          <div className="bg-secondary flex justify-center rounded-xl">
            <img src="https://lanyard-profile-readme.vercel.app/api/462914535351779328?bg=1D2331&idleMessage=Not%20doing%20shit%20probably :D" alt="profile" />
          </div>
          {/* Some projects */}
          <div className="bg-secondary p-5 rounded-xl grid grid-rows-2">
            <div>
              <a href="https://myranks.netlify.app/" target="_blank" rel="noreferrer" className="flex flex-row items-center mt-2">
                <h3 className="font-bold text-lg mr-2">MyRanks</h3>
                <FaExternalLinkAlt />
              </a>
              <p className="">Share your game ranks with your personal link!</p>
              <p className="text-gray-400 italic text-sm">WIP | Only front-end | Still needs a logo</p>
            </div>
            <div>
              <a href="https://github.com/Exstare/KahootSpammer" target="_blank" rel="noreferrer" className="flex flex-row items-center">
                <h3 className="font-bold text-lg mr-2">KahootSpammer</h3>
                <FaExternalLinkAlt />
              </a>
              <p className="">Spam Kahoots with this little CLI tool!</p>
              <p className="text-gray-400 italic text-sm">Update coming... Eventually</p>
            </div>
          </div>
          {/* Stack */}
          <div className="bg-secondary flex items-center justify-start p-5 rounded-xl">
            <a href="https://stackshare.io/exstare/my-stack/main#stack" target="_blank" rel="noreferrer"><img src={stackImg} alt="stack" /></a>
          </div>
        </div>
      </div>
      {/* Socials */}
      <div className="mt-5 text-white">
        <div className="flex justify-between mt-2">
          {
            socials.map((item, idx) => {
              const Icon = icons[idx];
              const iconClass = `h-14 w-14 fill-current text-icons-white hover:animate-bounce`;
              const bgClass = `flex rounded-xl h-24 w-40 flex items-center justify-center bg-icons-${item.id}`

              return (
                <a href={item.link} target="_blank" rel="noreferrer" className={bgClass}>
                  <Icon className={iconClass} />
                </a>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
