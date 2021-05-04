import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';

import { advert } from '../propTypes';
import { capitalize } from '../../../utils/strings';

function Advert({ name, sale, price, tags }) {
  return (
    <div className="mx-auto cursor-pointer h-full hover:border-gray-400 transform transition-all duration-200 ease hover:-translate-y-1 shadow-sm w-72 max-w-full border border-gray-300 rounded-sm bg-white">
      <div className="w-full h-48 border-b border-gray-200">
        {sale ? 'Sell' : 'Buy'}
      </div>
      <div className="p-6">
        <div className="text-sm">
          <h3 className="font-bold text-base">{name}</h3>
          <div className="flex items-center text-green-400">{price} €</div>
          <p className="mt-1">{tags.map(capitalize).join(' · ')}</p>
        </div>
      </div>
    </div>
  );
}

Advert.propTypes = {
  ...advert,
};

function AdvertsList({ adverts }) {
  const renderAdvert = ({ id, ...advert }) => (
    <li key={id}>
      <Link to={`/adverts/${id}`}>
        <Advert {...advert} />
      </Link>
    </li>
  );

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
      {adverts.map(renderAdvert)}
    </ul>
  );
}

AdvertsList.propTypes = {
  adverts: T.arrayOf(T.shape({ id: T.string.isRequired }).isRequired)
    .isRequired,
};

export default AdvertsList;
