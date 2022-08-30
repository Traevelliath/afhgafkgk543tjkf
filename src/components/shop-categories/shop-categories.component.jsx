import ProductCardComponent from '../product-card/product-card.component';
import {Fragment, useContext} from 'react';
import {CategoriesContext} from '../../context/categories.context';
import {useNavigate} from 'react-router-dom';

import './shop-categories.styles.scss';


const ShopCategoriesComponent = ({ title, target }) => {
    const { categoriesMap } = useContext(CategoriesContext);
    const navigate = useNavigate();


    return (
        <Fragment>
            <h2 onClick={() => navigate(`/shop/${title}`)} className='category-title'>{title}</h2>
            <div className={`products-container ${target}`} >
                {categoriesMap[title].map(product => (
                    <ProductCardComponent key={ product.id } product={ product } />))}
            </div>
        </Fragment>
    )
}

export default ShopCategoriesComponent