import { SearchIcon } from "lucide-react";
import React from "react";

interface SearchProps {
  value: string;
  handleSearch: (e:React.ChangeEvent<HTMLInputElement>) => void;
}
const Search = ({ value, handleSearch }: SearchProps) => {
  return (
    <div className="relative">
      <SearchIcon className="absolute top-3 left-2" strokeWidth={1} />
      <input
        type="text"
        className="input-base"
        placeholder="search here..."
        value={value}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
