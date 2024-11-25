import PropTypes from 'prop-types';
import './GlobalsStyles.scss';
function GlobalsStyles({ children }) {
  return children;
}

GlobalsStyles.propTypes = {
  children: PropTypes.node.isRequired,
};
export default GlobalsStyles;
