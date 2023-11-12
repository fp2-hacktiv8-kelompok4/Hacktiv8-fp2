import styles from "./style.module.css";

const SectionHeader = ({ title }) => {
    return (
        <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl pt-16 font-bold sm:text-3xl lg:text-4xl  ">{title}</h2>
        </div>
    );
};

export default SectionHeader;