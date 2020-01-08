export default function manageRestaurants(state = {
  restaurants: []
}, action) {
  console.log(action)
  switch (action.type) {

    case 'ADD_RESTAURANT':
      console.log(state.restaurants.concat(state.restaurants.length))
      return {
        ...state,
        restaurants: [...state.restaurants, action.restaurant]
      }

    default:
      console.log(state)
      return state;

  }
};
