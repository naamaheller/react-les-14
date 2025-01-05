import axios from "axios";

const Product = ({ product, deleteFromArr }) => {
    return (<>

        <h2>{product.name}</h2>
        <h2>{product.description}</h2>
        <h2>{product.price}</h2>
        <ul>
            {product.ingredient.map(item =>
                <li key={item}>{item}</li>
            )}
        </ul>
        <input type="button" value="del" onClick={() => {
            axios.delete(`http://localhost:4040/api/product/${product._id}`).then(res => {
                console.log(res)
                alert("מוצר" + res.data.name + "  נמחק בהצלחה")
                deleteFromArr(product._id)
            }).catch(err => {
                alert("תקלה במחיקה \n" + err.message)
                console.log(err)
            })


        }} />

    </>);
}

export default Product;