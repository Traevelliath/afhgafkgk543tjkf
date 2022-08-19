import CategoryItemContainer from "../category-item/category-item.container";
import './category-directory.styles.scss'

const CategoryDirectoryComponent = ({categories}) => {
    return <div>
        <div className='categories-container'>
            {categories.map(category => <CategoryItemContainer key={category.id} category={category}/>)}
        </div>
    </div>
}

export default CategoryDirectoryComponent