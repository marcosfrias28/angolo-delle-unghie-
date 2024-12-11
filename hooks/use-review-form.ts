import { useReducer } from "react";

interface ReviewFormState {
    rating: number;
    isAnonymous: boolean;
    name: string;
    body: string;
    isSubmitting: boolean;
    error: string | null;
}

interface Action {
    type:
    | "SET_IS_SUBMITTING"
    | "SET_ERROR"
    | "SET_RATING"
    | "SET_IS_ANONYMOUS"
    | "SET_NAME"
    | "SET_BODY";
    payload: any;
}

const initialState: ReviewFormState = {
    rating: 0,
    isAnonymous: false,
    name: "",
    body: "",
    isSubmitting: false,
    error: null,
};

const reducer = (state: ReviewFormState, action: Action): ReviewFormState => {
    switch (action.type) {
        case "SET_IS_SUBMITTING":
            return { ...state, isSubmitting: action.payload };
        case "SET_ERROR":
            return { ...state, error: action.payload };
        case "SET_RATING":
            return { ...state, rating: action.payload };
        case "SET_IS_ANONYMOUS":
            return { ...state, isAnonymous: action.payload };
        case "SET_NAME":
            return { ...state, name: action.payload };
        case "SET_BODY":
            return { ...state, body: action.payload };
        default:
            throw new Error("Unknown action type");
    }
};

function useReviewForm() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const setBody = (body: string) => dispatch({ type: "SET_BODY", payload: body });
    const setName = (name: string) => dispatch({ type: "SET_NAME", payload: name });
    const setRating = (rating: number) =>
        dispatch({ type: "SET_RATING", payload: rating });
    const setIsAnonymous = (isAnonymous: boolean) =>
        dispatch({ type: "SET_IS_ANONYMOUS", payload: isAnonymous });
    const setIsSubmitting = (isSubmitting: boolean) =>
        dispatch({ type: "SET_IS_SUBMITTING", payload: isSubmitting });
    const setError = (error: string | null) =>
        dispatch({ type: "SET_ERROR", payload: error });

    return {
        state,
        setBody,
        setName,
        setRating,
        setIsAnonymous,
        setIsSubmitting,
        setError,
    };
}

export default useReviewForm;