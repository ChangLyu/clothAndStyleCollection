import React, { useState } from "react";
import { Button, Input } from 'antd';

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue("")
    }

    const callSearchFunction = (e) => {
        if (searchValue) {
            e.preventDefault();
            props.search(searchValue);
            resetInputField();
        }
    }

    return (
        <div className="search-container">
            <Input
                value={searchValue}
                onChange={handleSearchInputChanges}
                onPressEnter={callSearchFunction}
            ></Input>
            <Button onClick={callSearchFunction} >Search</Button>
        </div>
    );
}

export default Search;