import { useEffect, useState } from "react"
import { useAuth } from "../store/auth"
import {toast} from 'react-toastify'


export const AdminContacts=()=>{
    const [contactData, setContactData]=useState([])
const {authorizationToken}= useAuth()
const getContactsData=async()=>{
    try {
        const response = await fetch("http://localhost:5001/api/admin/contacts",{
            method:"GET",
            headers:{
                Authorization:authorizationToken
            }
        });
        const data =await response.json()
        console.log("contact data", data);
        if (response.ok){
            setContactData(data);

        }


    } catch (error) {
        console.log(error);
    }
};
// define function for deleting contact
const deleteContactById= async(id)=>{
  try {
    const response= await fetch(`http://localhost:5001/api/admin/contacts/delete/${id}`,{
        method:"DELETE",
        headers:{
            Authorization:authorizationToken,
        },
    });
if(response.ok){
    getContactsData();
    toast.success("Contact deleted successfull")
}else{
    toast.error("contact not deleted")
}

  } catch (error) {
    console.log(error)
  }
}

    useEffect(()=>{
        getContactsData();
    },[])
    return <>
    <section className="admncontact">
        <h1 className="main-heading">contact admin</h1>
        <div>
        {
            contactData.map((curContactData, index)=>{
                const {username, email, message, _id}=curContactData;
                return (
                    <div>
                    <p>{username}</p>
                    <p>{email}</p>
                    <p>{message}</p>
                    <button className="userbtm" onClick={()=>deleteContactById(_id)}>delete</button>
                    </div>
                )
            })
        }
        </div>
        </section>
    </>
}