import axios from 'axios';

//action type

const GET_WEAPONS = 'GET_WEAPONS';
const GET_WEAPON = 'GET_WEAPON';
//action creator

const _getWeapons = (weapons) => {
  return {
    type: GET_WEAPONS,
    weapons,
  };
};

const _getWeapon = (weapon) => {
  return {
    type: GET_WEAPON,
    weapon,
  };
};
//thunk

export const getWeapons = () => {
  return async (dispatch) => {
    try {
      const { data: weapons } = await axios.get('/api/weapons');
      dispatch(_getWeapons(weapons));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchSingleWeapon = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/weapons/${id}`);
      dispatch(_getWeapon(data));
    } catch (err) {
      console.log(err);
    }
  };
};
//reducer

let initialState = [];

export default function weaponsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_WEAPONS:
      return action.weapons;
    case GET_WEAPON:
      return action.weapon;
    default:
      return state;
  }
}
