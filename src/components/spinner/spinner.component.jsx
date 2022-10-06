import './spinner.styles.scss';


const SpinnerComponent = ({ props }) =>
    <div className='spinner-overlay'>
        <div className={ props || 'spinner' }></div>
    </div>;

export default SpinnerComponent;