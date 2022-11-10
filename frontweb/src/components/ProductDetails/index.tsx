import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import ProductPrice from 'components/ProductPrice';
import { Product } from 'types/product';
import { BASE_URL } from 'util/requests';
import './styles.css';


type UrlParams = {
  productid: string;
};

const ProductDetails = () => {
  const { productid } = useParams<UrlParams>();

  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    axios.get(BASE_URL+"/products/"+productid).then((response) => {
      setProduct(response.data);
    });
  }, [productid]);

  return (
    <div className="product-details-container">
      <div className="product-details-card base-card">
        <Link to="/products">
          <div className="goback-container">
            <ArrowIcon />
            <h6>Voltar</h6>
          </div>
        </Link>
        <div className="row">
          <div className="col-xl-6">
            <div className="img-container">
              <img src={product?.imgUrl} alt={product?.name} />
            </div>
            <div className="name-price-container">
              <h2>{product?.name}</h2>
            {product && <ProductPrice price={product?.price} />}
            </div>
          </div>
          <div className="col-xl-6">
            <div className="description-container">
              <h2>Descrição do Produto</h2>
              <p>{product?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
