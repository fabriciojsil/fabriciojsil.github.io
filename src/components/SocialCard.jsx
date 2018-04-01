import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import style from './SocialCard.css';

const cx = classNames.bind(style);
const classes = cx(style.animated, style.slideInUp, style.socialImg);

const SocialCard = ({ url, alt, image }) => (
  <a href={url} rel="noopener noreferrer" target="_blank">
    <img alt={alt} className={classes} src={image} />
  </a>
);

SocialCard.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default SocialCard;
