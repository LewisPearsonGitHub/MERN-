import { useState } from "react";



const Search =  () => {
    const completedata = ["ford", "bmw", "ferrari", "mercedes", "mclaren", "audi"];
    const [data, setData] = useState(completedata);

 

   

return (
    <>
    <label> Search</label>
    <input type="text"  onChange={ (e) => {
        setData(completedata.filter(n => n.startsWith(e.target.value)))}} />
    
        <p>{data.join(", ")}</p> 

</>
);
}

export default Search;

// <p>{array.join(", ")}</p> 
