import { useState } from "react";
import { Link, Navigate, useLoaderData } from "react-router-dom"

const Careers = () => {

    const [user,setUser] = useState('Ibrahim');

    const careers = useLoaderData();
    
    if (!user) {
        return <Navigate to='/'/>
    }
    
  return (
        <div className="careers">
            {careers.map(career => (
            <Link to={career.id.toString()} key={career.id}>
                <p>{career.title}</p>
                <p>Based in {career.location}</p>
            </Link>
            ))}

            <button onClick={()=>setUser(null)}>LogOut</button>
        </div>
    )
}

export default Careers;