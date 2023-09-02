export const careersLoader = async ()=>{
    const careers = await fetch('http://localhost:4000/careers');
    return careers.json();
}

