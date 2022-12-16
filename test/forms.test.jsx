/* eslint-env mocha */

// npm imports
import { render } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';

// mocha imports
import chai from 'chai';
chai.should();

// subject imports
import { Component } from '../src';

let getByTestId;
let user;
let myComponent;

describe('component', async () => {
  describe('missing testid', async () => {
    beforeEach(async () => {
      ({ getByTestId } = render(<Component />));

      user = UserEvent.setup();

      myComponent = getByTestId('nil');
    });

    it('renders', async () => {
      myComponent.innerHTML.should.equal('Component');
    });
  });

  describe('with testid', async () => {
    beforeEach(async () => {
      ({ getByTestId } = render(<Component testid="myComponent" />));

      user = UserEvent.setup();

      myComponent = getByTestId('myComponent');
    });

    it('renders', async () => {
      myComponent.innerHTML.should.equal('Component');
    });

    it('is unaffected by click', async () => {
      user.click(myComponent);

      myComponent.innerHTML.should.equal('Component');
    });
  });
});
