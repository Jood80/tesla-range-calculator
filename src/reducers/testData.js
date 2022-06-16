export const initialState={
  carstats: [
    {miles: 246, model: "60"},
    {miles: 250, model: "60D"},
    {miles: 297, model: "75"},
    {miles: 306, model: "75D"},
    {miles: 336, model: "90D"},
    {miles: 376, model: "P100D"}
  ],
  config: {
    speed: 55,
    temperature: 20,
    climate: true,
    wheels: 19
  }
}

export const climateChangeState={
  carstats: [
    {miles: 267, model: "60"},
    {miles: 273, model: "60D"},
    {miles: 323, model: "75"},
    {miles: 334, model: "75D"},
    {miles: 366, model: "90D"},
    {miles: 409, model: "P100D"}
  ],
  config: {
    speed: 55,
    temperature: 20,
    climate: false,
    wheels: 19
  }
}