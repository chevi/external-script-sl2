function createHelloSquare() {

    const square = document.createElement('div');
    square.textContent = 'Привет'; 
  
    square.style.width = '50%'; 
    square.style.height = '50%'; 
    square.style.backgroundColor = 'lightblue'; 
    square.style.position = 'absolute'; 
    square.style.top = '25%'; 
    square.style.left = '25%'; 
    square.style.display = 'flex'; 
    square.style.alignItems = 'center'; 
    square.style.justifyContent = 'center'; 
  
    document.body.appendChild(square);
  }