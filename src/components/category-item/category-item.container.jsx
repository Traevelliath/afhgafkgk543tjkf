import './category-item.styles.scss'
import {useNavigate} from 'react-router-dom';

const CategoryItemContainer = ({category}) => {
    const navigate = useNavigate();
    const { imageUrl, title } = category;

    return (
        <div className='category-container'
             onClick={() => navigate(`/shop/${title}`)}
        >
            <div className='background-image'
                 style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className='category-body-container'>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    );
}

export default CategoryItemContainer