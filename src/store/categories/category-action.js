import {createAction} from '../../utils/create-action.utils';
import {CATEGORIES_ACTION_TYPES} from './category-types';

export const setCategories = (categories) =>
    createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);