import {useParams} from 'react-router-dom';

import ShopCategoriesComponent from '../../components/shop-categories/shop-categories.component';


const DynamicProductPageComponent = () => {
    const { category } = useParams();
    const target = 'category';

    return (
        <ShopCategoriesComponent title={ category } target={ target }/>
    )
}

export default DynamicProductPageComponent