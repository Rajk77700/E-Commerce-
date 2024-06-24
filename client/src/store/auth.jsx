import { createContext, useContext,useEffect,useState } from "react";

export const AuthContext=createContext()

export const AuthProvider=({children})=>{
    const [token, setToken]=useState(localStorage.getItem("token"));
    const [user, setUser]=useState("");
    const [isloading, setIsLoading]=useState(true)
    const [services, setServices]=useState([]);
    const authorizationToken=`Bearer ${token}`;

    

    const storetokenInLocalStorage=(serverToken)=>{
        setToken(serverToken);
        return localStorage.setItem("token", serverToken);
    }
    let isLogin=!!token;
    console.log("isLogin", isLogin);

    // Using Logout Functionality
    const LogoutUser=()=>{
        setToken("");
        return localStorage.removeItem("token");
    };

    // JWT Authentication-to get the user data

    const userAuthentication = async()=>{
        try {
            setIsLoading(true);
            const response= await fetch("http://localhost:5001/api/auth/user",{
                method:"GET",
                headers:{
                    Authorization: authorizationToken,
                },
            });

            if(response.ok){
                const data=await response.json();
                console.log("user data", data.userData)
                setUser(data.userData);
                setIsLoading(false);
            }else{
                console.error("Error fetching user data")
                setIsLoading(false);
            }

        } catch (error) {
            console.error("Error fetching user data");
        }
    }


    //TO FETCH THE SERVICE PAGE FROM THE DATA BASE.
    const getServices= async()=>{
        try {
            const response=await fetch("http://localhost:5001/api/data/service",{
            method: "GET",
            });
            if(response.ok){
                const data= await response.json();
                console.log(data.Services);
                setServices(data.Services)
            }
        } catch (error) {
            console.log(`services frontend error: ${error}`);
        }
    }
    useEffect(() => {
        getServices();
        if (token) {
          userAuthentication();
        } else {
          setUser(user);
        }
      }, [token]);


    return(
    <AuthContext.Provider value={{isLogin, storetokenInLocalStorage, LogoutUser, user,services,authorizationToken,isloading,}}>
            {children}
    </AuthContext.Provider>
    )
}
export const useAuth=()=>{
    const autoCompleteValue=useContext(AuthContext);
    if(!autoCompleteValue)
    throw new Error("useAuth used outside of the provider");
    return autoCompleteValue;
};