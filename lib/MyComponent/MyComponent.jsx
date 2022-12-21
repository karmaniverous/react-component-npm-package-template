// npm imports
import _ from 'lodash';
import PropTypes from 'prop-types';

/**
 * Wraps children in an `h1` tag with a specified `data-test-id` attribute.
 * Using lodash purely to demonstrate Babel cherry-picking.
 *
 * @component
 *
 * @example
 * <MyComponent testid="testid">Hello, world!</MyComponent>;
 *
 * // <h1 data-testid="testid">Hello, world!</h1>
 */
const MyComponent = ({ children, testid }) => {
  return <h1 data-testid={_.isNil(testid) ? 'nil' : testid}>{children}</h1>;
};

MyComponent.propTypes = {
  /**
   * Child components or content
   */
  children: PropTypes.node,

  /**
   * h1 data-test-id attribute, defaults to 'nil'.
   */
  testid: PropTypes.string,
};

export default MyComponent;
