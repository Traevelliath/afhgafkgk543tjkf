import { createSelector } from 'reselect';

const categoriesSelector = state => state.categories

export const selectCategories = createSelector(
    [categoriesSelector],
    categoriesSlice => categoriesSlice.categories
)

export const selectCategoriesMap = createSelector(
    [categoriesSelector],
    categories => categories.categories
    .reduce((acc, docSnapshot) => {
    const {title, items} = docSnapshot;
    acc[title.toLowerCase()] = items;
    return acc
}, {})
)