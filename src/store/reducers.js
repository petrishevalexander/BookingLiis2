import {SET_HOTELS, SORT_SELECTED, TOGGLE_SELECTED} from './types';

const initialState = {
  data: [],
  favourite: [],
};

export const hotelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOTELS:
      return {
        ...state,
        data: [...action.payload],
      };
    case TOGGLE_SELECTED:
      const favList = state.favourite;
      let updateFavList = [];
      const updatedHotelList = state.data.map(hotel => {
        if (hotel.hotelId === action.payload) {
          if (hotel.selected) {
            hotel.selected = false;
            updateFavList = favList.filter(h => h.hotelId !== action.payload);
          } else if (!hotel.selected) {
            hotel.selected = true;
            updateFavList = [...favList, hotel];
          }
        }
        return hotel;
      });
      return {
        ...state,
        data: updatedHotelList,
        favourite: updateFavList,
      };
    case SORT_SELECTED:
      const newArray = JSON.parse(JSON.stringify(state.favourite));
      newArray.sort((a, b) => {
        if (action.payload === 'price') {
          return a.priceAvg > b.priceAvg ? 1 : -1;
        } else if (action.payload === 'rating') {
          return a.stars < b.stars ? 1 : -1;
        }
      });
      return {
        ...state,
        favourite: newArray,
      };
    default:
      return state;
  }
};
