const idName = document.querySelector("#name")
const bio = document.querySelector("#bio")
const avatar = document.querySelector("#avatar")



// const url = "https://api.github.com/users/vickysawant19"

document.querySelector("#searchButton").addEventListener('click',()=>{

  const username = document.querySelector("#searchUser").value
  
  const url = `https://api.github.com/users/${username}`;

  showProfile (url)


})


function showProfile(url = "https://api.github.com/users/vickysawant19"){

   const xhr = new XMLHttpRequest();
   xhr.open('GET', url);

      xhr.onreadystatechange = function(){
        //  console.log(xhr.readyState)
        if(xhr.readyState === 4){
          const data = JSON.parse(xhr.responseText)
          console.log(data);

          idName.innerHTML = data.name
          avatar.setAttribute("src",data.avatar_url)
          bio.innerHTML = data.bio

        }
    }

  xhr.send();

}


showProfile();
