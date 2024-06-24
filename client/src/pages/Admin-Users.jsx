import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import {Link} from 'react-router-dom';

export const AdminUsers=()=>{
    const [users,setUsers]=useState([]);
    const {authorizationToken}=useAuth();
    
    const getAllUsersData= async()=>{
        try {
            const respose = await fetch("http://localhost:5001/api/admin/users",{
                method: "GET",
                headers:{
                    Authorization: authorizationToken,
                },
            });
            const data=await respose.json();
            console.log(`users ${data}`);
            setUsers(data);

        } catch (error) {
            console.log(error);
        }
    };

// DELETE USERS
const deleteUser= async(id)=>{
    try {
    const respose = await fetch(`http://localhost:5001/api/admin/users/delete/${id}`,{
        method: "DELETE",
        headers:{
            Authorization: authorizationToken,
        },
    });
    const data=await respose.json();
        console.log(`users after delete: ${data}`);
    if(respose.ok){
        getAllUsersData();
    }

    } catch (error) {
        console.log(error)
    }
    
}
//----------------------------------

    useEffect(()=>{
        getAllUsersData();
    },[]);
    return(
    <>
    <section  className="admin-user-section">
        <div className="container">
            <h2>User's data for Admin</h2>
        </div>
        <div className="container admin-users">
         <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            {Array.isArray(users) && users.map((curUser, index)=>{
                return( 
                    <tr key={index}>
                    <td>{curUser.username}</td>
                    <td>{curUser.email}</td>
                    <td>{curUser.phone}</td>
                    <td><Link to={`/admin/users/${curUser._id}/edit`} className="userbtm">Edit</Link></td>
                    <td><button className="userbtm" onClick={()=>deleteUser(curUser._id)}>Delete</button></td>
                </tr>)
            })}
            </tbody>
         </table>
        </div>
    </section>
    </>
    )
};