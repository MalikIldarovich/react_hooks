type Types = "COMPLETE" | "UNCOMPLETE";

interface IState {
  name: string;
  isCompleted: boolean;
}

interface IAction {
  type: Types;
  payload: string;
}

export const initialState: IState[] = [
  { name: "Buy macbook", isCompleted: false },
  { name: "Shopping", isCompleted: false },
];

export const reducer = (state: IState[], action: IAction) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((i) => {
        if (i.name === action.payload) {
          i.isCompleted = true;
        }
        return i;
      });
    case "UNCOMPLETE":
      return state.map((i) => {
        if (i.name === action.payload) {
          i.isCompleted = false;
        }
        return i;
      });
    default:
      return state;
  }
};
