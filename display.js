var carrinho = "aqui deve estar atrelado os produtos do carrinho"
//pratos:
var opcao = document.getElementById('op1')
var opcao2 = document.getElementById('op2')
//bebidas:
var opcao3 = document.getElementById('op3')
var opcao4 = document.getElementById('op4')
//sobremesas:
var opcao5 = document.getElementById('op5')
var opcao6 = document.getElementById('op6')
//adicionar ao carrinho:
var s1 = document.getElementById('s1')
var s2 = document.getElementById('s2')
var s3 = document.getElementById('s3')
var s4 = document.getElementById('s4')
var s5 = document.getElementById('s5')
var s6 = document.getElementById('s6')
var produto_1 = document.getElementById('produto_1')
var produto_2 = document.getElementById('produto_2')
var produto_3 = document.getElementById('produto_3')

// Add mouseover and mouseout events for each option
opcao.addEventListener('mouseover', function() {
    this.style.border = "1px solid #cf2b2a"
})
opcao.addEventListener('mouseout', function() {
    this.style.border = "none"
})

opcao2.addEventListener('mouseover', function() {
    this.style.border = "1px solid #cf2b2a"
})
opcao2.addEventListener('mouseout', function() {
    this.style.border = "none"
})

opcao3.addEventListener('mouseover', function() {
    this.style.border = "1px solid #cf2b2a"
})
opcao3.addEventListener('mouseout', function() {
    this.style.border = "none"
})

opcao4.addEventListener('mouseover', function() {
    this.style.border = "1px solid #cf2b2a"
})
opcao4.addEventListener('mouseout', function() {
    this.style.border = "none"
})

opcao5.addEventListener('mouseover', function() {
    this.style.border = "1px solid #cf2b2a"
})
opcao5.addEventListener('mouseout', function() {
    this.style.border = "none"
})

opcao6.addEventListener('mouseover', function() {
    this.style.border = "1px solid #cf2b2a"
})
opcao6.addEventListener('mouseout', function() {
    this.style.border = "none"
})
//adicionar ao carrinho
// Change the adicionar function to:
function adicionar(event) {
    // Get the clicked button
    const clickedButton = event.currentTarget
    
    // Get the parent element (product container)
    const productContainer = clickedButton.parentElement
    
    // Get product name and price from the container
    const productName = productContainer.querySelector('h1').textContent
    const productPrice = productContainer.querySelector('h3').textContent
    
    // Determine which produto to update based on the button clicked
    if (clickedButton === s1 || clickedButton === s2) {
        produto_1.innerHTML = `${productName} - ${productPrice}`
    } else if (clickedButton === s3 || clickedButton === s4) {
        produto_2.innerHTML = `${productName} - ${productPrice}`
    } else if (clickedButton === s5 || clickedButton === s6) {
        produto_3.innerHTML = `${productName} - ${productPrice}`
    }
    
    // Add visual feedback for selected item
    productContainer.style.border = "3px solid #32B72F"
}
// Then add click events to your add to cart buttons
s1.addEventListener('click', adicionar)
s2.addEventListener('click', adicionar)
s3.addEventListener('click', adicionar)
s4.addEventListener('click', adicionar)
s5.addEventListener('click', adicionar)
s6.addEventListener('click', adicionar)






//comprar
function comprar(){
    // Your purchase logic here

}

