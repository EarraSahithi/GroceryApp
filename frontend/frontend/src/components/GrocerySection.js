import { useEffect,useState } from "react";
import axios from "axios";
import classNameModule from 'classnames';
import { AddGroceryItems } from './AddGroceryItems';
import {Month} from './Month';
const API_BASE_URL="http://localhost:8080";
export function GrocerySection(){
    const [groceryItems,updateGroceryItems]=useState([]);
    async function fetchGroceryItems(){
        const groceryData=await axios.get(`${API_BASE_URL}/grocery/getAll`);
        //console.log(groceryData.data.results);
        const dataFromAPI=groceryData.data.results;
        updateGroceryItems(dataFromAPI);
    }
    useEffect(()=>{
        fetchGroceryItems();
    },[]);
    async function handlePurchaseUpdate(item) {
        console.log(item);
        const updateData = await axios.put(
          `${API_BASE_URL}/grocery/updatePurchaseStatus`,
          {
            _id: item._id,
            isPurchased: true,
          }
        );
        console.log(updateData);
        alert("Item purchase status updated successfully");
        fetchGroceryItems();
    }

    async function handleDeleteOperation(item) {
        const deleteResponse = await axios.delete(
          `${API_BASE_URL}/grocery/deleteGroceryItem`,
          {
            data: {
              _id: item._id,
            },
          }
        );
        console.log(deleteResponse.data);
        alert("Data deleted successfully");
        fetchGroceryItems();
    }

    

    function renderGroceryItems(item){
        return groceryItems.map((item)=>{
            return (
            <div className={classNameModule("grocery-item d-flex",{
                'purchased':item.isPurchased===true
            })}>
                <div>{item.groceryItem}</div>
                <div className="grocery-actions d-flex ml-2 ">
                    
                    {renderDeleteButton(item)}
                    <button className="btn btn-light " onClick={()=>handlePurchaseUpdate(item)}> Purchased </button>
                </div>
            </div>);
        });
    }
   

    function renderDeleteButton(item) {
        return (
          <div>
            <button
              className="btn btn-light ml-2 "
              onClick={() => handleDeleteOperation(item)}
            >
              X
            </button>
          </div>
        );
    }

    return(
        <div className="d-flex justify-content-center align-items-center flex-column w-100 ">
            <h2 className="d-flex flex-verticle m-5 ">Plan for the Month of < Month/> </h2>
            <div className="w-50">
            <AddGroceryItems
            baseurl={API_BASE_URL}
            fetchGroceryItems={fetchGroceryItems}/>
            {renderGroceryItems()}
            
            
            </div>
        </div>
    );
}