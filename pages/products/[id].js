import Head from "next/head";
import Image from "next/image";

export async function getServerSideProps(context) {
    const { id } = context.params;

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
            {product && product.id ? (
                <div>
                    <Head>
                        <title>{product.title}</title>
                        <meta name="description" content={product.description} />
                        <meta property="og:title" content={product.title} />
                        <meta property="og:description" content={product.description} />
                        <meta property="og:image" content={product.thumbnail} />
                        <meta property="og:url" content={productUrl} />
                        {/* <meta property="og:type" content="product" /> */}
                        {/* <meta property="og:site_name" content="Your Site Name" /> */}
                        {/* <meta property="og:price:amount" content={product.price} /> */}
                    </Head>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <div>
                        {product.thumbnail && (
                            <Image
                                src={product.thumbnail}
                                alt="product img"
                                width={300}
                                height={300}
                                style={{ objectFit: 'contain' }}
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
