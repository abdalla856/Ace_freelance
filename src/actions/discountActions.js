import * as api from "../api/index";

export const getReviews = () => async (dispatch) => {
  try {
    const { data } = await api.getAllDiscounts();
    dispatch({ type: "FETCH_ALL_Discount", payload: data.discounts });
  } catch (err) {
    console.log(err.message);
  }
};

export const resetReviewData = (id) => async (dispatch) => {
  try {
    const { data } = await api.resetDiscount(id);
    console.log(data)
    dispatch({ type: "UPDATE_Discount", payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteDiscount = (id) => async (dispatch) => {
  try {
    const res = await api.deleteDiscount(id);
    dispatch({ type: "DELETE_Discount", payload: id });
  } catch (err) {
    console.log(err.message);
  }
};


export const addnewDiscount =(reviews) =>async (dispatch)=>{
  try {
    const {data} = await api.addDiscount(reviews);
    dispatch({ type: "CREATE_Discount", payload: data });
  }catch(err){
    console.log(err.message);

  }
}