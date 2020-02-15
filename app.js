class Product{

 constructor(name,price, year){
  
  this.name = name;
  this.price = price;
  this.year = year;

 }



}

class UI {
  addProduct(product) {
      const productList = document.getElementById('product-list');
      let name = document.getElementById('name');
      let price = document.getElementById('price');
      let year = document.getElementById('year');

      if ((name != "" )&&  (price != "") && (year != "")){
        const element = document.createElement('div');


        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product</strong>: ${product.name} -
                    <strong>Price</strong>: ${product.price} - 
                    <strong>Year</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete" >Delete</a>
                  
                </div>
            </div>
        `;
        productList.appendChild(element);



      }else{

        alert("DEBE LLLENAR TODOS LOS CAMPOS");

      }
      
     
      

  }

  resetform(){

    document.getElementById('product-form').reset();

  }

  deleteproduct(element){
    if (element.name == 'delete'){

      element.parentElement.parentElement.parentElement.remove();

    }


  }

  showmessage(message, cssClass){
    const div = document.createElement('div');
    div.className = `alert alert-${cssClass}`;
    div.appendChild(document.createTextNode(message));
    // mostrando en el DOM
    const container = document.querySelector('.container');
    



  }
}

// DOM events 


document.getElementById('product-form').addEventListener('submit',function(e){

  const name = document.getElementById('name').value;
  const price = document.getElementById('price').value;
  const year = document.getElementById('year').value;

  const product = new Product(name,price,year);
  const ui = new UI();

  ui.addProduct(product);
  ui.resetform();

  

  



  e.preventDefault();

  








  
})

document.getElementById('product-list').addEventListener('click', function(e){

  const ui= new UI();
  ui.deleteproduct(e.target);

})
