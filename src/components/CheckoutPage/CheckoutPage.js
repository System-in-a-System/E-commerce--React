const CheckoutPage = () => {
    
    const cart = JSON.parse(sessionStorage.getItem("cart"));
    const products = cart.content || [];
    
    return(
      <div style={{backgroundColor: "white"}}>
        <h1>Checkout</h1>
        {products.map((product) => (
            <div>{product.name}</div>
        ))}
      </div>  
    );
}

export default CheckoutPage;
