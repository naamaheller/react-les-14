import Product from './Product'
const ProductList = ({ arr, deleteFromArr }) => {

    return (
        <>
            {arr.length == 0 ? <h1>no product</h1> :
                <ul>
                    {arr.map(item => <li key={item._id}><Product deleteFromArr={deleteFromArr} product={item}/></li>)}
                </ul>}

        </>
    );

}

export default ProductList;