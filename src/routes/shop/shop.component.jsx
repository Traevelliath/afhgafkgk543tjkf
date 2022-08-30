import { Fragment, useContext } from 'react';

import { CategoriesContext } from '../../context/categories.context';
import ShopCategoriesComponent from '../../components/shop-categories/shop-categories.component';

const ShopComponent = () => {
    const { categoriesMap } = useContext(CategoriesContext);
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