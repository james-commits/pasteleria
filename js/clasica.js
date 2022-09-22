/* array de objetos de la clasica.json */
/* let myData = [];
fetch("js/clasica.json")
.then(response => {
   return response.json();
})
.then(jsondata => console.log(jsondata));

console.log(jsondata);
 */

/* import json into myData */
fetch ("js/clasica.json")
.then(response => {
    return response.json();
    }
)
.then(jsondata => {
    myData = jsondata;
    console.log(myData.clasica[0].Name);
    html = "";
    for (let i = 0; i < myData.clasica.length; i++) {
        html += `<div class="col-lg-4 col-md-4 col-6">
                  <div class="cake_feature_item">
                  <div class="cake_img">
                  <img src="${myData.clasica[i].img}" alt="" width="270" height="226">
                  </div>
                  <div class="cake_text">
                 
                  <h3>${myData.clasica[i].Name}</h3>
                  <a class="pest_btn" href="product-details.html?id=${myData.clasica[i].id}">Mas detalles</a>
                  </div>
                         </div>
                       </div>`;
    }
    document.getElementById("clasica").innerHTML = html;

}
)
.catch(error => console.log(error));
