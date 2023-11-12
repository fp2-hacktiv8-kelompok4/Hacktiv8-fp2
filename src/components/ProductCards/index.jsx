import Row from "react-bootstrap/Row";
import ProductCard from "../ProductCard";
import SectionHeader from "../SectionHeader";
import StockTable from "../StockTable";

const ProductCards = ({ data}) => {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 p-2">
            
            {
                data.map((item, itemIdx) => (<ProductCard data={item} key={itemIdx} />))
            }
            </div>
        </div>
    );
};

export default ProductCards;
