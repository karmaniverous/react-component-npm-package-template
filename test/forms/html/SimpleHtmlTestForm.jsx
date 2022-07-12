// subject imports
import { Reducer, REDUCERS } from '../../../src/index';

// fixture imports
import TestForm from '../../fixtures/TestForm';

const SimpleHtmlTestForm = ({ ...testFormProps }) => {
  return (
    <TestForm
      {...testFormProps}
      render={({ encodedState, setEncodedState }) => (
        <Reducer
          active
          name="form"
          state={encodedState}
          updater={setEncodedState}
          reductions={{
            isValid: {
              default: true,
              test: false,
              reducers: [REDUCERS.ALL_CHILDREN_VALID],
            },
          }}
          render={() => (
            <>
              <form>
                <Reducer
                  name="textInput"
                  reductions={{
                    isValid: {
                      default: true,
                      test: false,
                      reducers: [REDUCERS.REQUIRED],
                    },
                  }}
                  render={({ getValue, reduce }) => (
                    <input
                      data-testid="textInput"
                      type="text"
                      value={getValue()}
                      onChange={(e) => reduce(e.target.value)}
                    />
                  )}
                />

                <Reducer
                  name="numberInput"
                  reductions={{
                    isValid: {
                      default: true,
                      test: false,
                      reducers: [REDUCERS.REQUIRED, REDUCERS.GREATER_THAN_ZERO],
                    },
                  }}
                  render={({ getValue, reduce }) => (
                    <input
                      data-testid="numberInput"
                      type="number"
                      value={getValue()}
                      onChange={(e) => reduce(e.target.value)}
                    />
                  )}
                />
              </form>
            </>
          )}
        />
      )}
    />
  );
};

export default SimpleHtmlTestForm;
