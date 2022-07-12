// npm imports
import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';

// subject imports
import { decodeReducerData, encodeReducerData } from '../../src';

const TestForm = ({ initDecodedState, render }) => {
  const [encodedState, setEncodedState] = useState(
    encodeReducerData(initDecodedState ?? {})
  );

  const decodedState = useMemo(
    () => decodeReducerData(encodedState),
    [encodedState]
  );

  return (
    <>
      {render({ decodedState, encodedState, setEncodedState })}

      <div data-testid="encodedStateDiv">{JSON.stringify(encodedState)}</div>

      <div data-testid="decodedStateDiv">{JSON.stringify(decodedState)}</div>
    </>
  );
};

TestForm.propTypes = {
  initDecodedState: PropTypes.object,
  render: PropTypes.func.isRequired,
};

export default TestForm;
