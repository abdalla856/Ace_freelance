import * as api from "../api";

export const AddToCart = (product_id, user_id) => async (dispatch) => {
  try {
    const {data} = await api.addToCart(product_id , user_id);

  
    dispatch({ type: "FETCH", payload: data });
  } catch (err) {
    console.log(err.message);
  }
};



export const finishOrderCart = (order)=>async (dispatch)=>{
  try {
    console.log(order);
    const { data } = await api.addNewOrder(order);
    const sold = await api.updateProductsSold(order.product_id ,order.sold);
    const user = await api.updateUserCart2( order.user_id, order.cart_id ,order.product_id);
    const deleteCart = api.deleteCart(order.cart_id)
    dispatch({ type: "CREATE_ORDER", payload: data });
    dispatch({ type: "FETCH", payload: user.data });
  } catch (err) {
    console.log(err.message);
  }
}