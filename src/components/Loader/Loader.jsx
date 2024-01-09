import PropTypes from 'prop-types';
import styles from './Loader.module.css';

export const Loader = ({ children }) => {
  return <div className={styles.LoaderContainer}>{children}</div>;
};

Loader.propTypes = {
  children: PropTypes.node.isRequired,
};
