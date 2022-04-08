import React from "react";
import MyInput from "./UI/inpit/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})} 
                placeholder="Пошук..."
            />
            <MySelect 
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Сортування за.."
                option={[
                    {value: 'title', name: "По назві"},
                    {value: 'body', name: "По опису"},
                ]}
            />
        </div>
    );
};

export default PostFilter;
