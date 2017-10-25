import expect from 'expect';
import {createStore} from 'redux';
import rootReducer from '../reducers/index';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseAction';

describe('Store', function () {
  it('Should Handle creating courses', function () {
    //arrange
    const store = createStore(rootReducer, initialState);
    const course = {title: "Clean Code"};

    //act
    const action = courseActions.createCourseSuccess(course);
    store.dispatch(action);

    //assert
    const actual = store.getState().courses[0];
    const expected = {title: "Clean Code"};

    expect(actual).toEqual(expected);
  });
});
