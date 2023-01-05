import * as api from "../api";


export const getAllReviews = () => async (dispatch) => {
  try {
    const { data } = await api.getAllReveiws();
    dispatch({
      type: "FETCH_ALL_Review",
      payload: data.reviews,
    });
  } catch (err) {
    console.log(err.message);
  }
};


export const updateReviewAction = (action , id) =>async (dispatch) =>{
  try{
    const { data } = await api.updateReviewAction(action, id);
    dispatch({
      type: "UPDATE_Review",
      payload: data,
    });
  }catch(err){
    console.log(err.message);
  }
}