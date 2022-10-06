import CategoryItemContainer from '../category-item/category-item.container';

import './category-directory.styles.scss';


const CategoryDirectoryComponent = ({ categories }) => {
    return <section className='section'>
        <div className='container'>
            <div className='categories-container'>
                { categories.map(category => <CategoryItemContainer key={ category.id } category={ category }/>) }
            </div>
        </div>
    </section>;
};

export default CategoryDirectoryComponent;