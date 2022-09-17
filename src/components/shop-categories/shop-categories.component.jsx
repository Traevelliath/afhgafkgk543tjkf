import {Fragment, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import ProductCardComponent from '../product-card/product-card.component';
import {useDispatch, useSelector} from 'react-redux';
import {selectCategoriesMap} from '../../store/categories/category-selector';
import {getCollectionAndDocuments} from '../../utils/firebase/firebase.utils';
import {setCategories} from '../../store/categories/category-action';



const ShopCategoriesComponent = ({ title, target }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesArray = await getCollectionAndDocuments();
            dispatch(setCategories(categoriesArray));
        }

        getCategoriesMap();
    }, [])

    const categoriesMap = useSelector(selectCategoriesMap)
    const navigate = useNavigate();


    return (
        <Fragment>
            <h2 onClick={() => navigate(`/shop/${title}`)} className={`category-title ${target}-header`}>{title}</h2>
            <div className={`products-container ${target}`} >
                {categoriesMap[title] &&
                    categoriesMap[title].map(product => (
                    <ProductCardComponent key={ product.id } product={ product } />))}
            </div>
        </Fragment>
    )
}

export default ShopCategoriesComponent