import { SELECT_COLOUR } from "./constant";

export const changeTheme = (initialvalue = 'blue', action) => {
    switch (action.type) {
        case SELECT_COLOUR:
            return action.data;
        default: return initialvalue
    }
}