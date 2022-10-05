import { Fragment, useEffect } from 'react';
import ShopCategoriesComponent from '../../components/shop-categories/shop-categories.component';
import { useDispatch, useSelector } from 'react-redux';
import SpinnerComponent from '../../components/spinner/spinner.component';
import { fetchCategoriesStart } from '../../store/categories/category-action';
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/category-selector';


const ShopComponent = () => {
    const dispatch = useDispatch();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const target = 'shop'

    useEffect(() => {
        dispatch(fetchCategoriesStart())
    }, [])

    return (
        <Fragment>
            {
                isLoading ?
                    <SpinnerComponent/> :
                    Object.keys(categoriesMap).map(title =>
                        <ShopCategoriesComponent key={ title } title={ title } target={ target }/>
                    )
            }
        </Fragment>
    )
}

export default ShopComponent