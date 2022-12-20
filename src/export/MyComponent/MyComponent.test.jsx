/* eslint-env mocha */

// npm imports
import { render } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';

// mocha imports
import chai from 'chai';
chai.should();

// subject imports
import MyComponent from './MyComponent';

const content = 'Hello, World!';

let getByTestId;
let myComponent;
let user;

describe('MyComponent', function () {
  describe('missing testid', function () {
    beforeEach(function () {
      ({ getByTestId } = render(<MyComponent>{content}</MyComponent>));

      user = UserEvent.setup();

      myComponent = getByTestId('nil');
    });

    it('renders', function () {
      myComponent.innerHTML.should.equal(content);
    });
  });

  describe('with testid', function () {
    beforeEach(function () {
      ({ getByTestId } = render(
        <MyComponent testid="myComponent">{content}</MyComponent>
      ));

      user = UserEvent.setup();

      myComponent = getByTestId('myComponent');
    });

    it('renders', function () {
      myComponent.innerHTML.should.equal(content);
    });

    it('is unaffected by click', function () {
      user.click(myComponent);

      myComponent.innerHTML.should.equal(content);
    });
  });
});
