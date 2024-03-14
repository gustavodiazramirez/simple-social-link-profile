import React from 'react';

// Componente para la mini card
export const MiniCard = ({ nombre, enlace }) => {
  return (
    <div className="bg-neutral-grey rounded-md p-2 text-center mt-4 mx-8 cursor-pointer hover:bg-primary-green">
      <a href={enlace} className="text-white font-semibold cursor-pointer hover:text-neutral-dark-gray">{nombre}</a>
    </div>
  );
};
export default MiniCard;