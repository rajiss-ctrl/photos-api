

function req1() {
  fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => {
      let output ='';
      data.slice(0,20).forEach((res)=>{
        output += `
                <div class="photo_api--card1">
                <img src="${res.url} alt="">
                  <p>The image from jsonplaceholder api</p>
                </div>
                `
      })
      
    
      
     document.querySelector(".photo_api").innerHTML = output;
      // document.getElementById("printBody").innerHTML = body;
    });
}

req1();

