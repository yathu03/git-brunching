export const actionType = {
    ADD_REVIEW_NAME: "ADD_REVIEW_NAME",
    ADD_REVIEW_RATING: "ADD_REVIEW_RATING",
    ADD_REVIEW_COMMENTS: "ADD_REVIEW_COMMENTS",
    ADD_REVIEW: "ADD_REVIEW",
    ADD_REVIEW_SUCCESS: "ADD_REVIEW_SUCCESS",
    ADD_REVIEW_FAIL: "ADD_REVIEW_FAIL",
    GET_REVIEW_NAME: "ADD_REVIEW_NAME",
    GET_REVIEW_RATING: "GET_REVIEW_RATING",
    GET_REVIEW_COMMENTS: "ADD_REVIEW_COMMENTS",
    GET_REVIEW_SUCCESS: "GET_REVIEW_SUCCESS",
    GET_REVIEW_FAIL: "GET_REVIEW_FAIL"
};

const addReviewName = (name) => ({
    type: actionType.ADD_REVIEW_NAME,
     name,
});

const addReviewRating = (value) => ({
    type: actionType.ADD_REVIEW_RATING,
    value,
});

const addReviewComments = (comments) => ({
    type: actionType.ADD_REVIEW_COMMENTS,
    comments,
});

const createReview = () => ({
    type: actionType.ADD_REVIEW,
});

const getReviewName = () => ({
    type: actionType.GET_REVIEW_NAME,
});

const getReviewRating = () => ({
    type: actionType.GET_REVIEW_RATING,
});

const getReviewComment = () => ({
    type: actionType.GET_REVIEW_COMMENTS,
});

export {
    addReviewName,
    addReviewRating,
    addReviewComments,
    getReviewName,
    getReviewRating,
    getReviewComment,
};