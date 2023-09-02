export const careerDetailsLoader = async ({ params })=>{
    const { id } = params
    const careerDetails = await fetch('http://localhost:4000/careers/'+ id);
    return careerDetails.json();
}