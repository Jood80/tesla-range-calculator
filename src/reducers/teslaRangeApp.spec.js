import appReducer from "./teslaRangeApp";
import {climateChangeState, initialState} from "./testData";

describe('test our lovely reducer', () => {
	it('should handle initial stat', () => {
		expect(
			appReducer(undefined, {})
		).toEqual(initialState)
	})

	it('should handle CHANGE_CLIMATE', () => {
		expect(
			appReducer(initialState, {
				type: 'CHANGE_CLIMATE'
			})
		).toEqual(climateChangeState)
	})
})

