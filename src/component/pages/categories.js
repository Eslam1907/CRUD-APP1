import { useEffect, useState } from "react"
//import './categories.css'
function Categories(){
    const [category,setCategory] = useState([''])
    useEffect(()=>{
        fetch ("http://localhost:7000/categories")
        .then((res)=>res.json())
        .then((cat)=>setCategory(cat))
    },[])
    return(
        <>

  {category.map((cat) => {
    return(<div class="card w-75 mb-3">
  <div class="card-body">
   <h5 class="card-title">{cat.id} </h5>
    <p class="card-text">{cat.type}</p>
    <a href="#" class="btn btn-primary">Button</a>
  </div>
</div>)

  })}
   

        </>
    )
}
export default Categories