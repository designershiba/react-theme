import { SELECT_COLOUR } from "./constant"

export const selectColour = data => {
    return {
        type: SELECT_COLOUR,
        data
    }
}