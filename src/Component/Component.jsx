// npm imports
import _ from 'lodash';
import PropTypes from 'prop-types';

const Component = ({ testid }) => {
  return <h1 data-testid={_.isNil(testid) ? 'nil' : testid}>Component</h1>;
};

Component.propTypes = {
  testid: PropTypes.string,
};

export default Component;
