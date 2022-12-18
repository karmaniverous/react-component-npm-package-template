/* eslint-env mocha */

// npm imports
import { render } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';

// mocha imports
import chai from 'chai';
chai.should();

// subject imports
import Component from './Component';

let getByTestId;
let user;
let myComponent;

describe('Component', function () {
  describe('missing testid', function () {
    beforeEach(function () {
      ({ getByTestId } = render(<Component />));

      user = UserEvent.setup();

      myComponent = getByTestId('nil');
    });

    it('renders', function () {
      myComponent.innerHTML.should.equal('Component');
    });
  });

  describe('with testid', function () {
    beforeEach(function () {
      ({ getByTestId } = render(<Component testid="myComponent" />));

      user = UserEvent.setup();

      myComponent = getByTestId('myComponent');
    });

    it('renders', function () {
      myComponent.innerHTML.should.equal('Component');
    });

    it('is unaffected by click', function () {
      user.click(myComponent);

      myComponent.innerHTML.should.equal('Component');
    });
  });
});
