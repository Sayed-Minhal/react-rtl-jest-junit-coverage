import mainReducer from './main.reducer';
import { increment } from '../actions/main.actions';
import { INCREMENT } from '../actions/index.action.type';

describe('Initial state', () => {
    test('should return initialState', () => {
        const initialState = { count: 0};
        const action = {type: '', payload: undefined};
        expect(mainReducer(undefined, action)).toEqual(initialState);
    });
    
    test('should return incremented count', () => {
        const initialState = { count: 0};
        const action = {type: INCREMENT, payload: undefined};
        expect(mainReducer(initialState, action)).toEqual({count: 1});
    });
});
