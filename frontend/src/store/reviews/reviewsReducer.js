import { actionType } from "./reviewsActions";
import { StateObservable } from "redux-observable";

const initialState = {
    name: null,
    rating: null,
    comments: "",
    review: null,
    error: null,
    loading: false,
};

/**
 * The reducer gets called whenever an action has been made
 * The reviewsReducer will apply the new state to whatever is in the reviews section
 * @param state
 * @param action
 */

 const reviewsReducer = (state, action) => {
    if (state == null){
        return initialState
    }

    switch (action.type){
        case actionType.ADD_REVIEW_NAME:
            return{
                ...state,
                name: action.name,
            };
        case actionType.ADD_REVIEW_RATING:
            return{
                ...state,
                rating: action.rating,
            };
        case actionType.ADD_REVIEW_COMMENTS:
            return{
                ...state,
                comments: action.comments,
            };
        case actionType.ADD_REVIEW_:
            return{
                ...state,
                loading:true,
            };
        case actionType.ADD_REVIEW_SUCCESS:
            return{
                ...state,
                review: action.review,
                loading:false,
            };
        case actionType.ADD_REVIEW_FAIL:
            return{
                ...state,
                review: action.statusText,
                loading:false,
            };
        case actionType.GET_REVIEW_NAME:
            return{
                ...state,
                review: action.review,
                loading:false,
            };
    }

 }