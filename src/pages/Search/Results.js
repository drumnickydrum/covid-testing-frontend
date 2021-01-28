import React, { useContext } from 'react';
import { App } from '../../Providers/Context.js';
import LocationPreview from './Results/LocationPreview.js';
import { ReactComponent as ArrowCircleIcon } from '../../icons/ArrowCircle.svg';
import { SearchResultsSkeleton } from '../../components/Skeletons.js';

const SearchResults = ({
  searchResults,
  date,
  handleSortBy,
  handleChangeDate,
  handleSelection,
}) => {
  const { loading } = useContext(App);
  return loading ? (
    <SearchResultsSkeleton />
  ) : (
    <div id='search-results'>
      <div className='date-picker'>
        <ArrowCircleIcon
          className='icon deg180'
          onClick={() => handleChangeDate('dec')}
        />
        <p>{date}</p>
        <ArrowCircleIcon
          className='icon'
          onClick={() => handleChangeDate('inc')}
        />
      </div>
      <div className='sort'>
        <p className='bold'>Sort by:</p>
        <p className='small' onClick={() => handleSortBy('time')}>
          Time
        </p>
        <p className='small' onClick={() => handleSortBy('distance')}>
          Distance
        </p>
      </div>
      <div>
        {searchResults.map((location, index) => {
          return (
            <LocationPreview
              key={index}
              location={location}
              handleSelection={handleSelection}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchResults;
