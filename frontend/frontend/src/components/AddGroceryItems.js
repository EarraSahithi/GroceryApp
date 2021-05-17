import { useState } from 'react';
import axios from "axios";
export function AddGroceryItems({baseurl}){
    const [groceryInputText,updateGroceryInputText ]=useState("");
    //console.log(groceryInputText);
    async function handleAddingItems(){
        const createTask=await axios.post(`${baseurl}/grocery/add`,{
                groceryItem: groceryInputText,
                isPurchased: false
        });
        console.log(createTask);
        updateGroceryInputText(" ");
    }
    return(
        <div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control "
          placeholder="Add Grocery Item"
          aria-label="Grocery Item"
          value={groceryInputText}
          onChange={(e) => updateGroceryInputText(e.target.value)}
        />
        <button
          className="input-group-text btn btn-light"
          id="basic-addon2"
          onClick={() => handleAddingItems()}
        >
          Add Grocery Item
        </button>
      </div>
    </div>
    );
}