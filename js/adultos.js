function myFunction() {
    fetch ("js/adultos.json")
    .then(response => {
        return response.json();
        }
    )
    .then(jsondata => {
        myData = jsondata;
        console.log(myData.comunion[0].name);
        html = "";
        for (let i = 0; i < myData.comunion.length; i++) {
            html += `
            <div class="col-md-4 col-6 cake bakery bread">
            <div class="portfolio_item">
                <div class="portfolio_img">
                    <a class="light" href="${myData.comunion[i].img}">
                        <img class="img-fluid" src="${myData.comunion[i].img}" alt="">
                    </a>
                </div>
                <div class="portfolio_text">
                    <a href="#"><h4>${myData.comunion[i].name}</h4></a>
                </div>
            </div>
        </div>`;
                    
        }
        document.getElementById("comunion").innerHTML = html;
        
    
    }
    )
    .catch(error => console.log(error));
    

};

myFunction();