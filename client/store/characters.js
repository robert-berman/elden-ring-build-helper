import axios from 'axios';

//action type

const GET_CHARACTERS = 'GET_CHARACTERS';
const GET_CHARACTER = 'GET_CHARACTER';
const POST_CHARACTER = 'POST_CHARACTER';
const EDIT_CHARACTER = 'EDIT_CHARACTER';
//action creator

//get all characters
const _getCharacters = (characters) => {
  return {
    type: GET_CHARACTERS,
    characters,
  };
};
//get a character
const _getCharacter = (character) => {
  return {
    type: GET_CHARACTER,
    character,
  };
};
//create a character
const _postCharacter = (character) => {
  return {
    type: POST_CHARACTER,
    character,
  };
};
//edit a character
const _editCharacter = (character) => {
  return {
    type: EDIT_CHARACTER,
    character,
  };
};
//thunks

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

export const editCharacter = (character) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(
        `/api/characters/${character.id}`,
        character
      );
      dispatch(_editCharacter(data));
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
    case EDIT_CHARACTER:
      return action.character;
    default:
      return state;
  }
}
