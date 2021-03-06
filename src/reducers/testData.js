export const initialState = {
  carstats: [
    { miles: 246, model: '60' },
    { miles: 250, model: '60D' },
    { miles: 297, model: '75' },
    { miles: 306, model: '75D' },
    { miles: 336, model: '90D' },
    { miles: 376, model: 'P100D' }
  ],
  config: {
    speed: 55,
    temperature: 20,
    climate: true,
    wheels: 19
  }
};

export const speedUpState = {
  carstats: [
    { miles: 242, model: '60' },
    { miles: 248, model: '60D' },
    { miles: 292, model: '75' },
    { miles: 303, model: '75D' },
    { miles: 332, model: '90D' },
    { miles: 371, model: 'P100D' }
  ],
  config: {
    speed: 60,
    temperature: 20,
    climate: false,
    wheels: 19
  }
};

export const speedDownState = {
  carstats: [
    { miles: 267, model: '60' },
    { miles: 273, model: '60D' },
    { miles: 323, model: '75' },
    { miles: 334, model: '75D' },
    { miles: 366, model: '90D' },
    { miles: 409, model: 'P100D' }
  ],
  config: {
    speed: 55,
    temperature: 20,
    climate: false,
    wheels: 19
  }
};

export const temperatureUpState = {
  carstats: [
    { miles: 264, model: '60' },
    { miles: 272, model: '60D' },
    { miles: 319, model: '75' },
    { miles: 333, model: '75D' },
    { miles: 367, model: '90D' },
    { miles: 398, model: 'P100D' }
  ],
  config: {
    speed: 55,
    temperature: 30,
    climate: false,
    wheels: 21
  }
};

export const temperatureDownState = {
  carstats: [
    { miles: 261, model: '60' },
    { miles: 268, model: '60D' },
    { miles: 316, model: '75' },
    { miles: 327, model: '75D' },
    { miles: 359, model: '90D' },
    { miles: 389, model: 'P100D' }
  ],
  config: {
    speed: 55,
    temperature: 20,
    climate: false,
    wheels: 21
  }
};

export const climateChangeState = {
  carstats: [
    { miles: 267, model: '60' },
    { miles: 273, model: '60D' },
    { miles: 323, model: '75' },
    { miles: 334, model: '75D' },
    { miles: 366, model: '90D' },
    { miles: 409, model: 'P100D' }
  ],
  config: {
    speed: 55,
    temperature: 20,
    climate: false,
    wheels: 19
  }
};

export const wheelChangeState = {
  carstats: [
    { miles: 261, model: '60' },
    { miles: 268, model: '60D' },
    { miles: 316, model: '75' },
    { miles: 327, model: '75D' },
    { miles: 359, model: '90D' },
    { miles: 389, model: 'P100D' }
  ],
  config: {
    speed: 55,
    temperature: 20,
    climate: false,
    wheels: 21
  }
};
