
const toggleBtn=()=>{
    $('.bodys').classList.toggle('bg-dark')
$('.btn-sun').classList.toggle('d-none')
 $('.btn-moon').classList.toggle('d-none')
}

const localMode=localStorage.getItem('mode')

if(localMode){
    $('.bodys').classList.remove('bg-dark')
    $('.btn-moon').classList.remove('d-none')
    $('.btn-sun').classList.add('d-none')
    
}

$('.btn-sun').addEventListener('click',()=>{
toggleBtn()
localStorage.setItem('mode','dark-mod')
})
$('.btn-moon').addEventListener('click',()=>{
    toggleBtn()
    localStorage.setItem('mode',[])
    })

fetch ('https://randomuser.me/api/?results=40').then((data)=>{
    return data.json()
}).then((completed)=>{
  return  completed.results
 
})
.then((salom)=>{ 
   
    
    $('#update').addEventListener('click',()=>{
        $('#clear').classList.remove('d-none')
        $('#update').classList.add('d-none')
          localStorage.setItem('docs','indexs')
        renderallUsers();
        
    })
    $('#clear').addEventListener('click',()=>{
        $('.cards').innerHTML=""
        $('#update').classList.remove('d-none')
        $('#clear').classList.add('d-none')
      localStorage.setItem('docs',null)
        
    })


 


   

   
    const AllUsers = salom.map((movies) => {
        return {
        id:movies.login.username,
          gender: movies.gender,
          name: movies.name.first,
          last: movies.name.last,
          email: movies.email,
          title: movies.name.title,
          phone: movies.phone,
          dob: movies.dob.age,
          country: movies.location.country,
          photos: movies.picture.medium,
        };
      });

      function renderallUsers() {
        AllUsers.forEach((el) => {
            
          const card = document.createElement("div");
          card.classList.add("cars", "position-releative", "col-12", "col-md-6", "col-lg-6", "col-xl-4" );
          card.innerHTML = `
          <div class="card  bg-secondary  p-1 my-2" >
          <button class="btns btn btn-danger">X</button>
          
           <div class=" mx-auto">
               <img src="${el.photos}" alt="" width="150px" class="mx-auto my-5 rounded-circle align-items-center">
           
           </div>
           
           <div class=" text-light text-center">
        
               <h3 class="names">${el.name} ${el.last}</h3>
               <hr>
               <h3>Country: ${el.country}</h3>
               <hr>
               <h3>Phone: + ${el.phone}</h3>
               <hr>
               <h3>Email: ${el.last}***.gmail.com</h3>
               <hr>
               <h3>Age: ${el.dob}</h3>
               
           </div>
            
           </div>
       </div>
      
          `;
          $(".cards").appendChild(card);
        });
      }




      renderallUsers();

      
})

document.addEventListener('click',(e)=>{
  if(e.target.classList[0]==="btns"){
    e.target.parentElement.parentElement.remove()
  }
})

