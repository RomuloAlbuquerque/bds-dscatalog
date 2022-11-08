import ProductPrice from 'components/ProductPrice';
import { Product } from 'types/product';
import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import './styles.css';

type Props = {
  product: Product;
};

const ProductDetails = ({ product }: Props) => {
  return (
    <div className="product-details-container">
      <div className="product-details-card base-card">
        <div className="goback-container">
          <ArrowIcon />
          <h6>Voltar</h6>
        </div>
        <div className="row">
          <div className="col-xl-6">
            <div className="img-container">
              <img src={product.imgUrl} alt="product" />
            </div>
            <div className="name-price-container">
              <h2>{product.name}</h2>
              <ProductPrice price={product.price} />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="description-container">
              <h2>Descrição do Produto</h2>
              <p>
                Projetado para garantir a produtividade no seu dia a dia O
                desempenho que você precisa para uma jornada eficiente é
                garantido pelos processadores Intel da família Core
                Conectividade ao seu alcance Saídas de áudio com qualidade HD e
                conexões USB estão dipooníveis na frontal do seu CorPc Baixo
                consumo Mesmo trabalhando todos os dias, você não tera sustos na
                conta de energia. Fizemos tudo bem feito, para o seu CorPC seja
                eficiente, silencioso e econômico no consumo de energia elétrica
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
