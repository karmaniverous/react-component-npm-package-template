// npm imports
import PropTypes from 'prop-types';

// subject imports
import { useReducer } from '../../../../src';

const TestHtmlInput = ({ id, type }) => {
  const { context, getValue, reduce } = useReducer();

  return (
    <input
      data-testid={id}
      disabled={context.disabled}
      type={type}
      value={getValue()}
      onChange={(e) => reduce(e.target.value)}
    />
  );
};

TestHtmlInput.propTypes = {
  disabled: PropTypes.bool,
  id: PropTypes.string,
  type: PropTypes.string,
};

export default TestHtmlInput;
