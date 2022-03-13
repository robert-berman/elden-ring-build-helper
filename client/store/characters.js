import axios from 'axios';

//action type

const GET_CHARACTERS = 'GET_CHARACTERS';
const GET_CHARACTER = 'GET_CHARACTER';
const POST_CHARACTER = 'POST_CHARACTER';
//action creator

const _getCharacters = (characters) => {
  return {
    type: GET_CHARACTERS,
    characters,
  };
};

const _getCharacter = (character) => {
  return {
    type: GET_CHARACTER,
    character,
  };
};

const _postCharacter = (character) => {
  return {
    type: POST_CHARACTER,
    character,
  };
};
//thunk

export const getCharacters = () => {
  return async (dispatch) => {
    try {
      const { data: characters } = await axios.get('/api/characters');
      dispatch(_getCharacters(characters));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchSingleCharacter = (userId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/characters/${userId}`);
      dispatch(_getCharacter(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const postCharacter = (character) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/api/characters', character);
      dispatch(_postCharacter(data));
    } catch (err) {
      console.log(err);
    }
  };
};
//reducer

let initialState = [];

export default function characterReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return action.characters;
    case GET_CHARACTER:
      return action.character;
    case POST_CHARACTER:
      return action.character;
    default:
      return state;
  }
}
