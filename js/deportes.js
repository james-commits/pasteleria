function myFunction() {
    fetch ("js/deportes.json")
    .then(response => {
        return response.json();
        }
    )
    .then(jsondata => {
        myData = jsondata;
        console.log(myData[0].name);
        html = "";
        for (let i = 0; i < myData.length; i++) {
            html += `
            <div class="col-md-4 col-6 cake bakery bread">
            <div class="portfolio_item">
                <div class="portfolio_img">
                    <a class="light" href="${myData[i].img}">
                        <img class="img-fluid" src="${myData[i].img}" alt="">
                    </a>
                </div>
                <div class="portfolio_text">
                    <a href="#"><h4>${myData[i].name}</h4></a>
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