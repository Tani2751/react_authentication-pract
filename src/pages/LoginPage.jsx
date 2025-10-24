import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { useNavigate } from "react-router";




export function LoginPage() {

    const [login, setLogin] = useState({email: "", password: ""});
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
 
    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                setError('')
            }, 4000);
            return () => clearTimeout(timer)
        }
    }, [error])


    function handlechange(e) {
        const type = e.target.name;
        const value = e.target.value;
        setLogin({...login, [type]: value })
    }


    async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            const res = await fetch('http://localhost:3001/api/auth/login', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(login)
            })
            const resObj = await res.json();
            if (resObj.success) {
                setError('');
                navigate("/dashboard", {replace: true})
            } else {
                setError(resObj.message)
            }
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false)
            setLogin({email: "", password: ""})
        }     
    }


    return (
        <div className="min-h-screen relative flex flex-col items-center justify-center">
            <header className="absolute top-0 left-0 right-0">
                <Header />
            </header>
            <div>                
                <h2 className="mb-3 text-2xl font-semibold ml-1.5">Login</h2>  
                <div className="bg-zinc-100 p-3 rounded-2xl">                 
                    <form onSubmit={handleSubmit} method="post">
                        <div className="flex flex-col">
                            <label>email</label>
                            <input 
                                value={login.email} 
                                id="email"
                                name="email" 
                                type="email" 
                                className="bg-blue-200 rounded-sm p-1 mt-1 w-70" 
                                onChange={handlechange}  
                            />
                        </div> 
                        <div className="flex flex-col mt-2">
                            <label>Password</label>
                            <input value={login.password} 
                                id="password" 
                                type="password" 
                                name="password" 
                                className="bg-blue-200 rounded-sm p-1 mt-1" 
                                onChange={handlechange}    
                            />
                        </div>

                        <button disabled={isLoading} type="submit" className="bg-blue-400 text-white p-1 rounded-sm mt-3">
                            {isLoading ? "loading..." : "login"}
                        </button>

                        <p className="text-red-500 text-sm mt-2 transition-opacity duration-500 ease-in-out opacity-100">{error}</p> 

                    </form>
                </div>
            </div>
            
            
        </div> 
    )
}