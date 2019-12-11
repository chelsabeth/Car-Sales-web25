import { REMOVE_FEATURE, ADD_FEATURE } from "../actions.js/action";

export const initialState = {
  // I moved this from App.js so that I could set state = initialState
  // code was a bit wonky because of doing this so I am just going to rename everything in 
  // App.js to props.whatever instead of state.whatever
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};


export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_FEATURE:
        console.log("It's working, it's working!", action.payload);
        return {
          ...state,
          additionalPrice: state.additionalPrice + action.payload.price,
          car: {
            ...state.car,
            features: [...state.car.features, action.payload]
          },
          additionalFeatures: state.additionalFeatures.filter(feature => {
            return feature.id !== action.payload.id;
          })
        };
      case REMOVE_FEATURE:
        console.log(`REMOVE FEATURE: `, action.payload);
        return {
          ...state,
          additionalPrice: state.additionalPrice - action.payload.price,
          car: {
            ...state.car,
            features: state.car.features.filter(feature => {
              return feature.id !== action.payload.id;
            })
          },
          additionalFeatures: [...state.additionalFeatures, action.payload]
        };
      default:
        return state;
    }
  };
