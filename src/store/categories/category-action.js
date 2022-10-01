import {createAction} from '../../utils/create-action.utils';
import { getCollectionAndDocuments } from '../../utils/firebase/firebase.utils';
import {CATEGORIES_ACTION_TYPES} from './category-types';

export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = categories =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories);

export const fetchCategoriesFailed = error =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => async dispatch => {
    dispatch(fetchCategoriesStart())

    try {
        const categoriesArray = await getCollectionAndDocuments();
        dispatch(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
        dispatch(fetchCategoriesFailed(error))
    }
}