import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import ProductCardComponent from '../product-card/product-card.component';
import { useSelector } from 'react-redux';
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/category-selector';
import SpinnerComponent from '../spinner/spinner.component';


const ShopCategoriesComponent = ({ title, target }) => {
    const isLoading = useSelector(selectCategoriesIsLoading)
    const categoriesMap = useSelector(selectCategoriesMap)
    const navigate = useNavigate();

    return (
        <Fragment>
            <h2 onClick={ () => navigate(`/shop/${ title }`) }
                className={ `category-title ${ target }-header` }>{ title }</h2>
            {
                isLoading ?
                    <SpinnerComponent/> :
                    <div className={ `products-container ${ target }` }>
                        { categoriesMap[title] &&
                            categoriesMap[title].map(product => (
                                <ProductCardComponent key={ product.id } product={ product }/>)) }
                    </div>
            }

        </Fragment>
    )
}

export default ShopCategoriesComponent