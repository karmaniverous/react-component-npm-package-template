// subject imports
import { Reducer, REDUCERS } from '../../../../src/index';

// fixture imports
import TestForm from '../../../fixtures/TestForm';
import TestHtmlInput from './TestHtmlInput';

const CompositeHtmlTestForm = ({ ...testFormProps }) => {
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
                  render={() => <TestHtmlInput id="textInput" type="text" />}
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
                  render={() => (
                    <TestHtmlInput id="numberInput" type="number" />
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

export default CompositeHtmlTestForm;
