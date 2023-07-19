import React from 'react';
import { FaCheck, FaLock } from "react-icons/fa";
import HeaderInfo from './HeaderInfo';
import SearchBar from './SearchBar';

const Header = () => {
    return (
        <div>
            <HeaderInfo></HeaderInfo>
            <SearchBar></SearchBar>
        </div>
    );
};

export default Header;