import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import nanoid from 'nanoid';

const Toolbar = ({filters, selected, onSelectFilter}) => {
  return (
    <>
      {
        filters.map(filter => (
          <button key={nanoid()} className={clsx('btn', selected === filter && 'btn-selected')} onClick={() => onSelectFilter(filter)}>{filter}</button>
        ))
      }
    </>
  )
}

Toolbar.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string.isRequired),
  selected: PropTypes.string.isRequired,
  onSelectFilter: PropTypes.func.isRequired,
};

export default Toolbar;