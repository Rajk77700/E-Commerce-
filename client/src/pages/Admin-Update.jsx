import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import {toast} from 'react-toastify'



export const AdminUpdate = ()=>{
    const [data, setData]=useState({
        username:"",
        email:"",
        phone:"",
    });

    const params=useParams();
    console.log("params single user:", params);
    const {authorizationToken}=useAuth();

    // get single user data
    const getSingleUserData=async()=>{
        try {
            const respose=await fetch(`http://localhost:5001/api/admin/users/${params.id}`,{
                method:"GET",
                headers:{
                    Authorization:authorizationToken,
                },
            });
            const data= await respose.json();
            console.log(`users single data: ${data}`);
            setData(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        getSingleUserData();
    },[]);

    const handleInput=(e)=>{
        let name=e.target.name;
        let value =e.target.value;

        setData({
            ...data,[name]:value,
        });
    };

    //to update the data dynamically
    const handleSubmit= async(e)=>{
        e.preventDefault();
        try {
        const response = await fetch(`http://localhost:5001/api/admin/users/update/${params.id}`,{
        method: "PATCH",
        headers:{
            "Content-Type":"application/json",
           Authorization: authorizationToken,
        },
        body:JSON.stringify(data),
    });
    if(response.ok){
        toast.success("Updated successfully");
    }else{
        toast.error("Not Updated");
    }

        } catch (error) {
            console.log(error)
        }
    }


    return(
        <section className="section-contact">
            <div className="contact-content container">
                <h1 className="main-heading">Update User Data</h1>
            </div>

            {/* contact page main */}
            <div className="container grid grid-two-cols">
                {/* contact form contact actual */}
                <section>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username">username</label>
                            <input type="text" name="username" id="username" autoComplete="off" value={data.username} required ></input>
                        </div>

                        <div>
                            <label htmlFor="email">email</label>
                            <input type="email" name="email" id="email" autoComplete="off" value={data.email} onChange={handleInput} required ></input>
                        </div>

                        <div>
                            <label htmlFor="phone">phone</label>
                            <input type="phone" name="phone" id="phone" autoComplete="off" value={data.phone} onChange={handleInput} required ></input>
                        </div>
                        <div><button type="submit">Update</button></div>
                    </form>
                </section>
            </div>
        </section>
    )
}