import axios from 'axios';

const apiKey = '19969795-0e842fcefe638df843a1829e0';

  const fetchService = ({ searchQuery = "", currentPage = 1, pageSize = 12 }) => {
    return (axios
        .get(`https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${pageSize}`,)
        .then(response => response.data.hits));
};


export default fetchService;