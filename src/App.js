import dob from 'dob-to-age';
import projects from './data/projects.json';
import socials from './data/socials.json';

import { FaGithub, FaYoutube, FaTwitch, FaInstagram, FaTwitter } from 'react-icons/fa';
import { BsDiscord } from 'react-icons/bs';

const icons = [FaGithub, BsDiscord, FaYoutube, FaTwitch, FaInstagram, FaTwitter]

function App() {
  return (
    <div className="bg-background h-screen w-screen p-12">
      {/* Me card */}
      <div className="flex flex-row bg-secondary w-full content-center place-items-center p-10 rounded-card justify-between">

        {/* Left */}
        <div className="flex items-center justify-center">
          <img src="https://media.discordapp.net/attachments/869479978515959879/894546333170548746/image0_1.jpg" className="w-44 ml-5 rounded-2xl" alt="pf" />
          <div className="text-white ml-7">
            <h1 className="font-bold text-3xl">Exstare</h1>
            <div className="text-lg">Professional idiot, gamer, coder</div>
          </div>
        </div>

        {/* Right */}
        <div className="text-white text-lg space-y-5 mr-16">
          <div>👨 | He/him</div>
          <div>🎂 | {dob('2004-03-25')}</div>
          <div>🌍 | The Netherlands</div>
        </div>
      </div>

      {/* Projects */}
      <div className="mt-5 text-white">
        <div className="text-2xl font-bold mb-2">Projects</div>
        <div className="flex space-x-4 -2">
          {
            projects.map(item => {
              return (

                <div className="bg-secondary flex items-center justify-start p-5 rounded-xl">
                  <img src={item.img} className="w-1/5 rounded-2xl" alt={item.id} />
                  <div className="text-white ml-7">
                    <h1 className="font-bold text-xl">{item.name}</h1>
                    <div className="text-lg">{item.desc}</div>
                  </div>
                </div>

              )
            })
          }
        </div>
      </div>

      {/* Socals */}
      <div className="mt-5 text-white">
        <div className="text-2xl font-bold">Socials</div>
        <div className="flex justify-between mt-2">
          {
            socials.map((item, idx) => {
              const Icon = icons[idx];
              const iconClass = `h-14 w-14 fill-current text-icons-white`;
              const bgClass = `flex rounded-xl h-24 w-24 flex items-center justify-center bg-icons-${item.id}`

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
