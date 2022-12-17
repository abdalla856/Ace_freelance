import * as api from '../api/index'

export const getAllBills =() =>async(disptach) =>{


    try {
        const {data} = await api.getAllBills()
        console.log(data)
        disptach({type :'FETCH_ALL_BILLS' , payload : data})
        
    }catch(err){
        console.log(err.message)
    }
}



export const addBill = (bill) => async (disptach) =>{



    try {
        const {data}= await api.createBill(bill)
        disptach({type: "CREATE" , payload :data})

    }catch (err){
        console.log(err.message)}
    
}


export const deleteBill =(id) =>async (disptach) =>{
    try {
      const res=  await api.deleteBill(id)
    // if (res.status === 202) {

        disptach({type :"DELETE_BILL" , payload : id})
    // }
    }catch (err){
        console.log(err.message)
    }
}



export const updateBill = (bill )=> async (dispatch)=>{
try {
    const {data} = await api.udapteBills(bill)
    dispatch({ type: "UPDATE_Bill", payload: data.bill  });

}catch (err) {
    console.log(err.message)
}
}