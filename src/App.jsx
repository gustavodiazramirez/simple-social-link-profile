import React from 'react'
import ImagenPerfil from './components/imagenPerfil';
import MiniCard from './components/miniCard';

export const App = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-black">
        <div className="mx-4 my-8 bg-neutral-dark-grey shadow-md rounded-md overflow-hidden">
          <div className="sm:flex">
            <div className="w-80 h-[490px] mt-6">
              <ImagenPerfil />
              <div className='text-center text-white font-semibold mt-3 text-xl'>
                Jessica Randall
              </div>
              <div className='text-center text-primary-green mt-3 text-xs'>
                London, United Kingdom
              </div>
              <div className='text-center text-white text-xs mt-8 mb-6'>
                "Front-end developer and avid reader."
              </div>
              {/* Mini cards */}
              <MiniCard nombre="GitHub" enlace="https://github.com/gustavodiazramirez" />
              <MiniCard nombre="Frontend Mentor" enlace="https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ" />
              <MiniCard nombre="LinkedIn" enlace="/link-3" />
              <MiniCard nombre="Twitter" enlace="/link-4" />
              <MiniCard nombre="Instagram" enlace="/link-5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;