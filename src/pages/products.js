import { connect } from 'dva';
import ContentLayout from '@layouts/contentLayout';
import ProductList from '../components/productList';

const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  return (
    <ContentLayout>
      <div>
        <h2>List of Products</h2>
        <ProductList onDelete={handleDelete} products={products} />
      </div>
    </ContentLayout>
  );
};

export default connect(({ products }) => ({
  products,
}))(Products);
