import {useState} from "react";

function Categories() {

    const [activeIndex, setActiveIndex] = useState();

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

    const onClickCategory =(index) => {
        setActiveIndex(index)
    }

    return (<div className="categories">
        <ul>
            {
                categories.map((value,i) => (
                    <li key={i} onClick={() => onClickCategory(i)} className={activeIndex === i ? 'active' : ''}>
                        {value}</li>))
            }
        </ul>
    </div>);
}

export default Categories;