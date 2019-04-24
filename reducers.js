const OPEN_MENU = "OPEN_MENU";
const CLOSE_MENU = "CLOSE_MENU";

let state = {};

const initialMenuState = {
  isOpen: false
};

const menuReducer = (state, action) => {
  switch (action.type) {
    case OPEN_MENU: {
      return { ...state, isOpen: true };
    }
    case CLOSE_MENU: {
      return { ...state, isOpen: false };
    }
    default: {
      return state;
    }
  }
};

const openMenuAction = {
  type: OPEN_MENU
};

const closeMenuAction = {
  type: CLOSE_MENU
};

// E0
state = initialMenuState;
console.log("E0 : ", state);

// E1 -- menu ouvert
state = menuReducer(state, openMenuAction);
console.log("E1 : ", state);

// E2 -- menu ferme
state = menuReducer(state, closeMenuAction);
console.log("E2 : ", state);
