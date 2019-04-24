import React from "react";
import logo from "./logo.svg";
import "./App.css";

// import Switch from "./Switch";

const initialState = {
  title: "YO",
  inputTitleValue: "",
  card: {
    isFLipped: false
  }
};

// ACTION TYPES
const SET_TITLE = "SET_TITLE";
const RESET_TITLE = "RESET_TITLE";
const FLIP_CARD = "FLIP_CARD";

// ACTIONS
// flip card
const flipCardAction = {
  type: FLIP_CARD
};

// reset title Action
const resetTitleAction = {
  type: RESET_TITLE
};

// set title Action creator
const setTitleActionCreator = newTitle => {
  return {
    type: SET_TITLE,
    payload: newTitle
  };
};
// REDUCER
const appReducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case FLIP_CARD: {
      return { ...state, card: { isFLipped: true } };
    }
    case RESET_TITLE: {
      return { ...state, title: initialState.title, inputTitleValue: "" };
    }

    case SET_TITLE: {
      return {
        ...state,
        title: action.payload,
        inputTitleValue: action.payload
      };
    }

    default: {
      return state;
    }
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.resetTitle = this.resetTitle.bind(this);
    this.setTitle = this.setTitle.bind(this);
    this.flipCard = this.flipCard.bind(this);
  }

  resetTitle() {
    this.setState(prevState => appReducer(prevState, resetTitleAction));
  }

  setTitle(newTitle) {
    this.setState(prevState =>
      appReducer(prevState, setTitleActionCreator(newTitle))
    );
  }

  flipCard() {
    this.setState(prevState => appReducer(prevState, flipCardAction));
  }

  render() {
    const { title, inputTitleValue, card } = this.state;
    return (
      <div className="App">
        <h1>{title}</h1>
        <button onClick={() => this.resetTitle()}>
          reset the title please
        </button>

        <input
          placeholder="Entre ton titre ici"
          onChange={e => this.setTitle(e.target.value)}
          value={inputTitleValue}
        />
        <Card isFLipped={card.isFLipped} onClick={() => this.flipCard()} />

        {/* <Switch
          renderOff={setIsOn => (
            <input
              type="checkbox"
              onClick={() => setIsOn(true)}
              checked={false}
            />
          )}
          renderOn={setIsOn => (
            <div onClick={() => setIsOn(false)}>Je suis sur ON</div>
          )}
        /> */}
      </div>
    );
  }
}

function Card({ isFLipped, onClick }) {
  return (
    <div onClick={onClick}>
      {isFLipped ? "Carte Face visible" : "Carte face caché"}
    </div>
  );
}

export default App;
