import Button from './Button'

const CardBody = ({ title, text, url }) =>
{
    return (
        <div className="card-body">
            <h5 className="card-title">
                {title}
            </h5>
            <p className="card-text">
                {text}
            </p>
            <Button url={url} />
        </div>
    );
};

//export the component
export default CardBody