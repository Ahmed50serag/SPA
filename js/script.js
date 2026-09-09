// connection
// var xhr=new XMLHttpRequest()
// xhr.open("Get","https://jsonplaceholder.typicode.com/posts");
//  xhr.addEventListener("readystatechange",function(){
//   if(xhr.readyState==4){
//     console.log(JSON.parse(xhr.response));
//   }
//  })
// xhr.send()



// function getPasta(callback){
//     var httpRequest=new XMLHttpRequest();
//     httpRequest.open("GET",`https://forkify-api.herokuapp.com/api/v2/recipes?search=pasta`);

//     httpRequest.send();

//     httpRequest.addEventListener("readystatechange",function(){
//         if(httpRequest.readyState==4){
//     recipes=JSON.parse(httpRequest.response).data.recipes;
//     console.log("pasta",recipes);
//     callback();
//     }
//     })
// }

// =======================================================================================================
// three control Call sync or async function ::
// 1-callback
// 2- promise >> ecs6+
// 3-async await fetch  >>ecs6+
// ==================================================================================================
// var  content=[]
// 1 ==>callback  ::function تستني فانكشن تانيه علشان تتنفذ
//  function getPizza(callback){
//   var xhr=new XMLHttpRequest();
//   xhr.open("GET","https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza");
//   xhr.send();
//   xhr.addEventListener("readystatechange",function(){
//     if(xhr.readyState==4 && xhr.status >= 200 && xhr.status < 300){
//     content=JSON.parse(xhr.response).data.recipes;
//     console.log("Pizza",content);
//     callback();
//     }
//   })
//  }
//   function getpasta(callback){
//   var xhr=new XMLHttpRequest();
//   xhr.open("GET","https://forkify-api.herokuapp.com/api/v2/recipes?search=pasta");
//   xhr.send();
//   xhr.addEventListener("readystatechange",function(){
//     if(xhr.readyState==4 && xhr.status >= 200 && xhr.status < 300){
//     content=JSON.parse(xhr.response).data.recipes;
//     console.log("pasta",content);
//     callback();
//     }
//   })
//  }
//   function getsalad(callback){
//   var xhr=new XMLHttpRequest();
//   xhr.open("GET","https://forkify-api.herokuapp.com/api/v2/recipes?search=salad");
//   xhr.send();
//   xhr.addEventListener("readystatechange",function(){
//     if(xhr.readyState==4 && xhr.status >= 200 && xhr.status < 300){
//     content=JSON.parse(xhr.response).data.recipes;
//     console.log("salad",content);
//     callback();
//     }
//   })
//  }
//   function getseafood(callback){
//   var xhr=new XMLHttpRequest();
//   xhr.open("GET","https://forkify-api.herokuapp.com/api/v2/recipes?search=seafood");
//   xhr.send();
//   xhr.addEventListener("readystatechange",function(){
//     if(xhr.readyState==4 && xhr.status >= 200 && xhr.status < 300){
//     content=JSON.parse(xhr.response).data.recipes;
//     console.log("seafood",content);
//     callback();
//     }
//   })
//  }
//  function test1(){
//     console.log("Testttttttt1"); 
//  }
//  function test2(){
//     console.log("Testttt2");  
//  }
//   getPizza(function(){
//        getpasta(function(){
//         getseafood(function(){
//         getsalad(function(){
//             test2();
//             test1();
//         })
//         })
//        });
//   })
//   callback >> callback Hell   ==>عيوبه 

// ----------------------------------------------------------------------
// 2::=> promise >> ecs6+
// states promise:
// 1:pending
// 2:fulfilled
// 3:rejected

// let promise = new Promise(function(resolve, reject) {
//     // function
// });
//  لو العمليه نجحت :==>resolve    + لو العمليه فشلت:=> reject
// var recipes = [];
// function getPizza() {
//     return new Promise(function(resolve, reject) {
//         var httpRequest = new XMLHttpRequest();
//         httpRequest.open(
//             "GET",
//             "https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza"
//         );
//         httpRequest.send();
//         httpRequest.addEventListener("readystatechange", function() {
//             if (httpRequest.readyState == 4) {
//                 if (httpRequest.status >= 200 && httpRequest.status < 300) {
//                     recipes = JSON.parse(httpRequest.response).data.recipes;
//                     console.log("Pizza", recipes);
//                     resolve();
//                 } else {
//                     reject("Connection Failed");
//                 }
//             }
//         });
//     });
// }

// --------------------------------------------````````````````````````````````

// var  content=[]
// function getpizza(){
//     return new Promise(function(callback){
//    var xhr=new XMLHttpRequest();
// xhr.open("GET",`https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza`)
// xhr.send()
// xhr.addEventListener("readystatechange",function(){
//     if(xhr.readyState==4 && xhr.status >= 200 && xhr.status < 300){
//         content=JSON.parse(xhr.response).data.recipes;
//         console.log("Pizza",content);
//         callback();
//     }
//    })
//    })
// }
// function getpasta(){
//  return new Promise(function(callback){
//     var xhr=new XMLHttpRequest()
//     xhr.open("GET","https://forkify-api.herokuapp.com/api/v2/recipes?search=pasta")
//     xhr.send()
//     xhr.addEventListener("readystatechange",function(){
//         if(xhr.readyState==4){
//           content=JSON.parse(xhr.response).data.recipes;
//           console.log("Pasta",content);
//           callback()
//         }
//     })
//  })   
// }
// function test(){
//     console.log("Hello");
    
// }
// getpasta().then(function(){
//       getpizza().then(function(){
//       test();
// })
// })// pasta  ===>   pizza ====> test. 
// promise disadvantages >>> then chaining

// --------------------------------------------------------------------------------------
// 3-async await fetch  >>ecs6+

// async function getpasta(){
//     var response= await fetch("https://forkify-api.herokuapp.com/api/v2/recipes?search=pasta")
//     var result=await response.json();
//     console.log("Pasta",result.data.recipes);
// }

// async function getpizza(){
//     var result=await fetch("https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza")
//     var response=await result.json();
//     console.log("Pizaaa",response.data.recipes);
// }
// async function final_result(){
// await getpizza();
// await getpasta();
// }
// final_result();

// ---------------------------------------------------------------------------
// start project.

// spa ===>single page  App  using async & await fetch
var posts=[];
   var pizzabtn =document.getElementById("pizza_btn");
   var pastabtn =document.getElementById("pasta_btn");
   var saladbtn =document.getElementById("salad_btn");
   var seafoodbtn =document.getElementById("seafood_btn");
   pizzabtn.onclick= async  function(){
    // getpizza()
    // connection("https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza")
    await  getpizza();
   }
   pastabtn.onclick=async function(){
    // getpasta()
    // connection("https://forkify-api.herokuapp.com/api/v2/recipes?search=pasta")
    await getpasta();
   }
   saladbtn.onclick=async function(){
    // getsalad()
    // connection("https://forkify-api.herokuapp.com/api/v2/recipes?search=salad")
    await getsalad();
   }
   seafoodbtn.onclick=async function(){
    // getseafood()
    // connection("https://forkify-api.herokuapp.com/api/v2/recipes?search=seafood")
    await getseafood()
   }
async function getpizza(){
    var response=await fetch("https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza")
    var result=await response.json();
    posts = result.data.recipes;
    console.log("Pizza", posts);
    display();
}
async function getpasta(){
    var response=await fetch("https://forkify-api.herokuapp.com/api/v2/recipes?search=pasta")
    var result=await response.json();
    posts = result.data.recipes;
    console.log("Pizza",posts);
    display();
}
async function getsalad(){
    var response=await fetch("https://forkify-api.herokuapp.com/api/v2/recipes?search=salad")
    var result=await response.json();
    posts = result.data.recipes;
    console.log("Pizza", posts);
    display();
}
async function getseafood(){
    var response=await fetch("https://forkify-api.herokuapp.com/api/v2/recipes?search=seafood")
    var result=await response.json();
    posts = result.data.recipes;
    console.log("Pizza", posts);
    display();
}
function display(){
    var divhtml='';
    for(let i=0;i<posts.length;i++){
     divhtml += `
    <div class="col-12 col-sm-6 col-lg-4 p-3">
                <div class="card h-100 shadow-sm border-0 text-center">
                    <img class="w-100 img" src="${posts[i].image_url}" alt="${posts[i].title}">
                    <div class="card-body">
                        <h2 class="fs-4 fw-bold">${posts[i].title}</h2>
                        <p class="text-muted mb-0">ID: ${posts[i].id}</p>
                    </div>
                </div>
            </div>
    `;
    }
     document.getElementById("demo").innerHTML=divhtml;
    }
    pizzabtn.click();  //default show in webset
// End project











// start project single page app simple
//    function getpizza(){
//     var httprequest=new XMLHttpRequest();
// httprequest.open("GET","https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza");
// httprequest.send();
// httprequest.addEventListener("readystatechange",function(){
//      if (httprequest.readyState==4) {
//              posts= JSON.parse(httprequest.response).data.recipes;
//             console.log("Pizaa",posts);
//  }
// })
//    }
// //     function getpasta(){
// //     var httprequest=new XMLHttpRequest();
// // httprequest.open("GET","https://forkify-api.herokuapp.com/api/v2/recipes?search=pasta");
// // httprequest.send();
// // httprequest.addEventListener("readystatechange",function(){
// //      if (httprequest.readyState==4) {
// //              posts= JSON.parse(httprequest.response).data.recipes;
// //             console.log("pasta",posts);
// //  }
// // })
// //    }



// //     function test1(){
// //     }
// //     function test2(){
// //     }
// //     test1()
// //     test2()
// //     getpizza()
// //     getpasta()




    
// //  function getpizza(){
// //     // alert("Hello Pizza")
// //  }
// //  function getpasta(){
// //     alert("Hello pasta")
// //  }
// //  function getsalad(){
// //     alert("Hello salad")
// //  }
// //  function getseafood(){
// //     alert("Hello seafood ")
// //  }

// //  var posts=[];
// //  function connection(link){
// // var httprequest = new XMLHttpRequest();
// // httprequest.open("GET",`${link}`);
// // httprequest.send();
// // httprequest.addEventListener("readystatechange",function(){
// //      if (httprequest.readyState==4) {
// //              posts= JSON.parse(httprequest.response).data.recipes;
// //             console.log(posts);
// //             display();
// //         }
// //  });
// // }

// var httprequest=new XMLHttpRequest();
// httprequest.open("GET","https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza");
// httprequest.send();
// httprequest.addEventListener("readystatechange",function(){
//      if (httprequest.readyState==4) {
//              posts= JSON.parse(httprequest.response).data.recipes;
//             console.log(posts);
//             display();
//         }
//     })



// function display(){
//     var divhtml='';
//     for(let i=0;i<posts.length;i++){
//      divhtml += `
//     <div class="col-12 col-sm-6 col-lg-4 p-3">
//                 <div class="card h-100 shadow-sm border-0 text-center">
//                     <img class="w-100 img" src="${posts[i].image_url}" alt="${posts[i].title}">
//                     <div class="card-body">
//                         <h2 class="fs-4 fw-bold">${posts[i].title}</h2>
//                         <p class="text-muted mb-0">ID: ${posts[i].id}</p>
//                     </div>
//                 </div>
//             </div>
//     `;
//     }
//      document.getElementById("demo").innerHTML=divhtml;
//     }
//     pizzabtn.click();  //default show in webset







// (function(){
//     connection()   //serach
// })
// End project
 


























// free fake api
//     <div class="card mb-4 shadow-sm border-0">
//     <div class="row g-0 align-items-center">
//         <!-- Image -->
//         <div class="col-md-4">
//             <img src="${posts[i].image_url}"
//                  class="img-fluid rounded-start w-100"
//                  alt="${posts[i].title}">
//         </div>
//         <!-- Content -->
//         <div class="col-md-8">
//             <div class="card-body">
//                 <h2 class="card-title">
//                     ${posts[i].title}
//                 </h2>
//                 <p class="card-text">
//                     ID: ${posts[i].id}
//                 </p>
//             </div>
//         </div>
//     </div>
// </div>



////////////////////////////////////

// var loadbtn = document.getElementById("loaddata");
// loadbtn.addEventListener("click", function () {
//     var listdata = document.getElementById("listData");
//     var httprequest = new XMLHttpRequest();
//     // Connection with Api
//     httprequest.open(
//         "GET",
//         "https://jsonplaceholder.typicode.com/posts"
//     );
//     httprequest.onload = function () {
//         if (httprequest.status >= 200 && httprequest.status < 400) {
//             var ourdata = JSON.parse(httprequest.response);
//             console.log(ourdata);
//             display(ourdata);
//         } else {
//             console.log("Connection failed");
//         }
//     };
//     function display(data){
//     var listhtml='';
//     for(let i=0;i<data.length;i++){
//      listhtml += `
//     <li>
//         User ID: ${data[i].userId}
//         <br>
//         Title: ${data[i].title}
//     </li>
//     `;
//     }
//     listdata.innerHTML=listhtml;
//     }
//     // Send request
//     httprequest.send();
// });




