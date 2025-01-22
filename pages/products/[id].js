import Image from "next/image";

export async function getServerSideProps(context) {
    const { id } = context.params;

    // Fetch the product data from the API
    const res = await fetch(`https://dummyjson.com/products/${id}`);

    const data = await res.json();

    return {
        props: {
            product: data,
        },
    };
}

function Product({ product }) {
    return (
        <div>
            {product ? (
                <div>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <div>
                        {product.image && (
                            <Image
                                src={product.images}
                                alt={product.title}
                            />
                        )}
                    </div>
                    <p>Price: ${product.price}</p>
                </div>
            ) : (
                <p>No product found</p>
            )}
        </div>
    );
}

export default Product;
