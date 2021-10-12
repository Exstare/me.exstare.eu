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
      <div className="flex flex-row bg-secondary w-full content-center place-items-center p-10 rounded-card">
        <img src="https://media.discordapp.net/attachments/869479978515959879/894546333170548746/image0_1.jpg" className="w-44 ml-5 rounded-2xl" alt="pf" />

        {/* Left */}
        <div className="flex">
          <div className="text-white ml-7">
            <h1 className="font-bold text-3xl">Exstare</h1>
            <div className="text-lg">Professional idiot, gamer, coder</div>
          </div>
        </div>

        {/* Right */}
        <div className="text-white">
          <div>👨 | He/him</div>
          <div>🎂 | {dob('2004-03-25')}</div>
          <div>🌍 | The Netherlands</div>
        </div>
      </div>

      {/* Projects */}
      <div className="mt-5 text-white">
        <div className="text-2xl font-bold">Projects</div>
        <div className="flex flex-row space-x-4 -2">
          {
            projects.map(item => {
              return (
                <div className="bg-secondary p-5 rounded-xl">
                  <img src={item.img} alt={item.id} className="w-1/12" />
                  <h2 className="text-xl font-bold">{item.name}</h2>
                  <div className="">{item.desc}</div>
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
              const iconClass = `h-14 w-14 fill-current text-icons-${item.id}`;

              return (
                <a href={item.link} target="_blank" rel="noreferrer" className="flex bg-secondary rounded-lg h-24 w-24 flex items-center justify-center">
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
