import React from "react";
import axios from "axios";


const MyData = () =>{

    const UpdateData = () =>{
        const data = {
            userId: "1044",
            id: "1",
            title: "Raghav",
            body: "Attractive"
        }
            axios.put("https://jsonplaceholder.typicode.com/posts/1", data)
            .then((data)=>{
                console.log(data);
            })
        .catch((err)=>{
            console.log(err);
        });
    };

    const DeleteData = () =>{

        const data = {
            userId: "1044",
            id: "1",
            title: "Raghav",
            body: "Attractive"
        }
            axios.delete("https://jsonplaceholder.typicode.com/posts/1", data)
            .then((data)=>{
                console.log(data);
            })
        .catch((err)=>{
            console.log(err);
        });
    };

    return(
        <div>
            <button onClick={UpdateData}>UPDATE</button>
            <button onClick={DeleteData}>DELETE</button>
        </div>
    )
}
export default MyData;