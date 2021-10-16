import configureStore from 'redux-mock-store';
import { INCREMENT } from './index.action.type';
import * as actions from './main.actions';

const mockStore = configureStore();
const store = mockStore({
    count: 0
});

describe('Main actions', () => {
    beforeEach(() => {
        store.clearActions();
    });

    test('should return empty array of action initially', () => {
        expect(store.getActions().length).toEqual(0);
        expect(store.getState()).toEqual({count: 0});
      });
    test('should dispatch increment action', () => {
        store.dispatch(actions.increment());
        expect(store.getActions().length).toEqual(1);
        expect(store.getActions()).toEqual([{type: INCREMENT, payload: undefined}]);
        expect(store.getState()).toEqual({count: 0});
      });
});