import { useState } from "react";
import { Header } from "../components/Header";



export function RegisterPage() {

    const [login, setLogin] = useState({email: "", password: "", name: ""});
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    function handlechange(e) {
        const type = e.target.name;
        const value = e.target.value;
        setLogin({...login, [type]: value })
    }


    async function handleSubmit(e) {
        e.preventDefault();
        const res = await fetch('')
    }


    return (
        <div className="min-h-screen relative flex flex-col items-center justify-center">
            <header className="absolute top-0 left-0 right-0">
                <Header />
            </header>
            <div>                
                <h2 className="mb-3 text-2xl font-semibold ml-1.5">Login</h2>  
                <div className="bg-amber-400 p-3 rounded-2xl">                 
                    <form onSubmit={handleSubmit}>

                        <div className="flex flex-col mt-2">
                            <label>Name</label>
                            <input value={login.name} 
                                id="name" 
                                type="text" 
                                name="name" 
                                className="bg-amber-50 rounded-sm p-1 mt-1" 
                                onChange={handlechange}    
                            />
                        </div>

                        <div className="flex flex-col">
                            <label>email</label>
                            <input 
                                value={login.email} 
                                id="email"
                                name="email" 
                                type="email" 
                                className="bg-amber-50 rounded-sm p-1 mt-1 w-70" 
                                onChange={handlechange}  
                            />
                        </div>
                         
                        <div className="flex flex-col mt-2">
                            <label>Password</label>
                            <input value={login.password} 
                                id="password" 
                                type="password" 
                                name="password" 
                                className="bg-amber-50 rounded-sm p-1 mt-1" 
                                onChange={handlechange}    
                            />
                        </div>

                        {error && <p>{error}</p>}
                        {isLoading && <p>Loading....</p>}

                        <button type="submit" className="bg-amber-100 p-1 rounded-sm mt-3">
                            register
                        </button>

                    </form>
                </div>
            </div>                
        </div> 
    )
}