let a=document.getElementById("sub1")
a.addEventListener("click",function ()
{
   getdata1()
});

function getdata1()
{
    let input=document.getElementById("txt1").value
    fetch("https://api.github.com/users/"+input).
    // fetch("https://api.github.com/users/Leelavathichandu1/repos").
    // fetch("https://api.github.com/users/LeelavathiChandu1/repos").
    then(response=>response.json()).
    then(data=>handledata1(data))
}
function handledata1(data)
{
    
    let t1=document.getElementById("tab1")
    let img=document.getElementById("image").src=data.avatar_url

   
    let row=
       `<tr>
       <td>id:</td>
       <td>${data.id}</td>
       </tr>
       <tr>
        <td>login:</td>
        <td>${data.login}</td>
        </tr>
        <tr>
       <td>public repos</td>
       <td>${data.public_repos}</td>
       </tr>
       <tr>
       <td>repos_url</td>
       <td>${data.repos_url}</td>
       </tr>
       <tr>
       <td>avatar_url</td>
       <td>${data.avatar_url}</td>
       </tr>`
        t1.innerHTML+=row
}

