import * as api from "../api";

export const AddNewProduct = (formdata) => async (dispatch) => {
  try {
    const { data } = await api.addNewProduct(formdata);
    dispatch({ type: "CREATE_Product", payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const getAllWebProducts = () => async (dispatch) => {
  try {
    const { data } = await api.getAllWebProduct();
    dispatch({ type: "FETCH_ALL_Product", payload: data.products });
  } catch (err) {
    console.log(err.message);
  }
};
export const getAllGarphicProducts = () => async (dispatch) => {
  try {
    const { data } = await api.getAllGraphicProduct();
    dispatch({ type: "FETCH_ALL_Product", payload: data.products });
  } catch (err) {
    console.log(err.message);
  }
};
export const getAllMarketingProducts = () => async (dispatch) => {
  try {
    const { data } = await api.getAllMarketingProduct();
    dispatch({ type: "FETCH_ALL_Product", payload: data.products });
  } catch (err) {
    console.log(err.message);
  }
};
export const getAllMechanicalProducts = () => async (dispatch) => {
  try {
    const { data } = await api.getAllMechanicalProduct();
    dispatch({ type: "FETCH_ALL_Product", payload: data.products });
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    const res = await api.deleteProductById(id);
    dispatch({ type: "DELETE_Product", payload: id });
    console.log("Deleted Product Successfully");
  } catch (err) {
    console.log(err.message);
  }
};

export const getProductById = (id) => async (dispatch) => {
  try {
    const { data } = await api.getProductById(id);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};


export const UpdateProduct = (formdata) => async (dispatch) => {
  try {
    const { data } = await api.updateProductByAdmin(formdata);
    console.log(data)
    dispatch({ type: "UPDATE_Product", payload: data });
  } catch (err) {
    console.log(err.message);
  }
};



export const AllProuductsAndBlogs =() =>async (dispatch) =>{
  try {

    const {data} =await api.getAllProducts()
    console.log(data)
    var blogs = await api.getRecentBlogs();
    blogs = blogs.data
    dispatch({type :"FETCH_ALL_Product" , payload :data})
    dispatch({ type: "FETCH_ALL_BLOGS", payload: blogs });
  }catch(err){
    console.log(err.message)
  }

}