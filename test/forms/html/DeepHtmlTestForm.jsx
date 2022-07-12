// subject imports
import { Reducer, REDUCERS } from '../../../src/index';

// fixture imports
import TestForm from '../../fixtures/TestForm';
import TestHtmlInput from './composite/TestHtmlInput';

const DeepHtmlTestForm = ({ ...testFormProps }) => {
  return (
    <TestForm
      {...testFormProps}
      render={({ encodedState, setEncodedState }) => (
        <Reducer
          active
          context={{ disabled: true }}
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
                  name="sectionA"
                  context={{ disabled: false }}
                  reductions={{
                    isValid: {
                      default: true,
                      test: false,
                      reducers: [REDUCERS.ALL_CHILDREN_VALID],
                    },
                  }}
                  render={() => (
                    <>
                      <Reducer
                        name="textInput"
                        reductions={{
                          isValid: {
                            default: true,
                            test: false,
                            reducers: [REDUCERS.REQUIRED],
                          },
                        }}
                        render={() => (
                          <TestHtmlInput id="textInputA" type="text" />
                        )}
                      />
                      <Reducer
                        name="numberInput"
                        reductions={{
                          isValid: {
                            default: true,
                            test: false,
                            reducers: [
                              REDUCERS.REQUIRED,
                              REDUCERS.GREATER_THAN_ZERO,
                            ],
                          },
                        }}
                        render={() => (
                          <TestHtmlInput id="numberInputA" type="number" />
                        )}
                      />
                    </>
                  )}
                />

                <Reducer
                  name="sectionB"
                  reductions={{
                    isValid: {
                      default: true,
                      test: false,
                      reducers: [REDUCERS.ALL_CHILDREN_VALID],
                    },
                  }}
                  render={() => (
                    <>
                      <Reducer
                        name="textInput"
                        reductions={{
                          isValid: {
                            default: true,
                            test: false,
                            reducers: [REDUCERS.REQUIRED],
                          },
                        }}
                        render={() => (
                          <TestHtmlInput id="textInputB" type="text" />
                        )}
                      />
                      <Reducer
                        name="numberInput"
                        reductions={{
                          isValid: {
                            default: true,
                            test: false,
                            reducers: [
                              REDUCERS.REQUIRED,
                              REDUCERS.GREATER_THAN_ZERO,
                            ],
                          },
                        }}
                        render={() => (
                          <TestHtmlInput id="numberInputB" type="number" />
                        )}
                      />
                    </>
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

export default DeepHtmlTestForm;
