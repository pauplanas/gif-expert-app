import React, {useState} from 'react';
import AddCategory from "../components/AddCategory";
import GifGrid from "../components/GifGrid";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['X Files']);

    return(
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={setCategories}></AddCategory>
            <hr />

            {
                categories.map(category => (
                    <GifGrid
                        key={category.toLowerCase().replace(' ', '-')}
                        category={category}
                    />
                ))
            }
        </>
    );

};

export default GifExpertApp;
