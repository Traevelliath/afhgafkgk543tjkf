import {Fragment} from 'react';
import ShopCategoriesComponent from '../../components/shop-categories/shop-categories.component';
import {useSelector} from 'react-redux';
import {selectCategoriesMap} from '../../store/categories/category-selector';

const ShopComponent = () => {
    const categoriesMap = useSelector(selectCategoriesMap)
    const target = 'shop'

    return (
        <Fragment>
            {Object.keys(categoriesMap).map(title => (
                <ShopCategoriesComponent key={ title } title={ title } target={ target }/>
            ))}
        </Fragment>
    )
}

export default ShopComponent