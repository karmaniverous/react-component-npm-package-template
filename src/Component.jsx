// npm imports
import PropTypes from 'prop-types';

const Component = ({ testid }) => {
  return <h1 data-testid={testid}>Component</h1>;
};

Component.propTypes = {
  testid: PropTypes.string,
};

export default Component;
