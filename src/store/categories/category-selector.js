import { createSelector } from 'reselect';

const selectCategoriesReducer = state => state.categories

export const selectCategories = createSelector(
    [selectCategoriesReducer],
    categoriesSlice => categoriesSlice.categories
)

export const selectCategoriesMap = createSelector(
    [selectCategoriesReducer],
    categories => categories.categories
    .reduce((acc, docSnapshot) => {
    const {title, items} = docSnapshot;
    acc[title.toLowerCase()] = items;
    return acc
}, {})
)

export const selectCategoriesIsLoading = createSelector(
    [selectCategoriesReducer],
    categoriesSlice => categoriesSlice.isLoading
)