
function getData()
{
    
axios
  .get("http://localhost:3000/users")
        .then(response => {
            // var myData = [];
            // myData.push(response.datas);
            // var count = myData.length;
            // var temp = '' + '<span>{{count}}</span>';
            // var r = Mustache.render(temp, myData.length);
            // document.getElementById("total").innerHTML = r;

            for(let x=0; x < response.data.length; x++) {
                var board = document.createElement('div');
                board.className = "col-12 col-md-6 col-lg-4 col-xl-3 card-col";
                document.getElementById('cards-row').appendChild(board);
            }
            
            for (let i = 0; i < response.data.length; i++)
            {
                
                var html = '' + '<div class="card align-items-center">' +
                    '<img src="images/{{id}}.png" alt="" class="card-img-top img-fluid rounded-circle client-img">' +
                    '<div class="card-body">' +
                    '<div class="name">{{firstName}} {{lastName}}</div>' +
                    '<div class="email">{{email}}</div>' +
                    '<div class="info-button">' +
                    '<a class="btn btn-sm btn-outline-secondary btn-prof" href="tel:{{contact}}"><i class="fa fa-user"></i> Profile</a>' +
                    '<a class="btn btn-sm btn-outline-secondary btn-contact" href="mailto:{{email}}"><i class="fa fa-envelope"></i> Contact</a>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
                var rendered = Mustache.render(html, response.data[i]);
                document.querySelectorAll(".card-col")[i].innerHTML = rendered;  
                
                
            }
            
        })
        
        .catch(err => console.error(err));
 
    
    

    
}

