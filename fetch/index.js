/*
function getAnimal(){
    fetch("https://fakerapi.it/api/v1/persons")
    .then((response)=>{
        response.json()
        .then((finalData)=>{
            console.log(finalData);
        })
        
    })
    
}  
*/
// same as above but by using async await 
async function getAnimal(){
    const response = await fetch("https://fakerapi.it/api/v1/persons")
    const finalData = await response.json()
        console.log(finalData);
} 