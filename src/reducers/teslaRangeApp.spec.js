import appReducer from './teslaRangeApp';
import {
  climateChangeState,
  initialState,
  speedDownState,
  speedUpState,
  temperatureDownState,
  temperatureUpState,
  wheelChangeState
} from './testData';

describe('test our lovely reducer', () => {
  it('should handle initial stat', () => {
    expect(appReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SPEED_UP', () => {
    expect(
      appReducer(climateChangeState, {
        type: 'SPEED_UP',
        value: 55,
        step: 5,
        maxValue: 70
      })
    ).toEqual(speedUpState);
  });

  it('should handle SPEED_DOWN', () => {
    expect(
      appReducer(speedUpState, {
        type: 'SPEED_DOWN',
        value: 60,
        step: 5,
        minValue: 45
      })
    ).toEqual(speedDownState);
  });

  it('should handle CHANGE_WHEEL', () => {
    expect(
      appReducer(speedDownState, {
        type: 'CHANGE_WHEEL',
        value: 21
      })
    ).toEqual(wheelChangeState);
  });

  it('should handle TEMPERATURE_UP', () => {
    expect(
      appReducer(wheelChangeState, {
        type: 'TEMPERATURE_UP',
        value: 20,
        step: 10,
        maxValue: 40
      })
    ).toEqual(temperatureUpState);
  });

  it('should handle CHANGE_CLIMATE', () => {
    expect(
      appReducer(initialState, {
        type: 'CHANGE_CLIMATE'
      })
    ).toEqual(climateChangeState);
  });

  it('should handle TEMPERATURE_DOWN', () => {
    expect(
      appReducer(temperatureUpState, {
        type: 'TEMPERATURE_DOWN',
        value: 30,
        step: 10,
        minValue: -10
      })
    ).toEqual(temperatureDownState);
  });
});
