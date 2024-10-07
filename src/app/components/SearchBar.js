const SearchBar = ({ setSearchTerm }) => (
    <input 
      type="text" 
      placeholder="Search by title" 
      onChange={(e) => setSearchTerm(e.target.value)}
      className="border border-gray-300 rounded text-black p-2 mb-4 w-full"
    />
  );
  
  export default SearchBar;
  