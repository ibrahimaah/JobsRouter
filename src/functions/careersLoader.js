export const careersLoader = async ()=>{
    const careers = await fetch('http://localhost:4000/careers');
    if (!careers.ok) {
        throw Error('could not fetch the careers')
    }
    return careers.json();
}

