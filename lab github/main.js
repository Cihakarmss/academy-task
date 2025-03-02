const username=document.querySelector('.Username')
const Description=document.querySelector('.Description')
const search=document.querySelector('button')
const input=document.querySelector('input')
const myprofile=document.querySelector('.myprofile img')


async function githubfetch(username) {
    try{
        const response= await fetch(`https://api.github.com/users/${username}`);
        const data=await response.json();
        
        Description.textContent=data.bio
        myprofile.src=data.avatar_url 
        console.log("ishledi");
        
    }
    catch(error){
        console.error("Error");
        
    }
    

}


search.addEventListener('click', function (){
    let inputvalue=input.value.trim()
    username.textContent=inputvalue
    githubfetch(inputvalue)
    input.textContent=""
})

