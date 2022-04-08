import {SET_FAV_HOTELS, SET_HOTELS, TOGGLE_SELECTED} from './types';

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
    default:
      return state;
  }
};
