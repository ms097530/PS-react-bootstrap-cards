import CardBody from "./CardBody";
import CardImage from "./CardImage";
//create the component
const Card1 = (props) =>
{
    return (
        <div className="card" style={{ width: "18rem" }}>
            <CardImage />
            <CardBody title="Santorini" />
        </div>
    );
};

//export the component
export default Card1;