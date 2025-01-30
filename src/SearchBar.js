import React from 'react';
const SearchBar = ({ query, setQuery, searchVideos }) => {
return (
<div className="flex justify-center mb-6">
<input
type="text"
className="p-3 w-2/3 bg-gray-800 border-gray-700"
placeholder="Search"
value={query}
onChange={(e) => setQuery(e.target.value)}
/>
=<button
className="bg-blue-600 ml-2"
onClick={searchVideos}
>
Search
</button>
</div>
);
};
export default SearchBar;
