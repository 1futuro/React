import React from 'react';
import axios from "axios";
import Albums from "../components/Albums"
import './Home.css';
import Pagination from "../components/Pagination"


class Home extends React.Component {
    state = {
        albums: [],
        currentPage : 1,
        postsPerPage : 5, //1~5까지 페이지 노출
        pageCount :10,
    };
    
    setCurrentPage = page => {
        // this.setState({ currentPage : page });
        this.setState(() => ({
            currentPage : page
        }))
    };

    handlePrevPage = () => {
        this.setState({ currentPage : this.state.currentPage -1 });
    } 

    handleNextPage = () => {
        this.setState({ currentPage : this.state.currentPage+1 });
    } 

    handlePrevPageGroup = () => {
        // setFirst(first -5);
    }

    
    getAlbums = async () => {
        const { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/albums"
            );
            
            this.setState({ albums: data });
        };
        
        componentDidMount() {
            this.getAlbums();

    }
    

    render() {
        // const pageGroup =this.setState({ pageGroup : Math.ceil(currentPage/postsPerPage)});
        const { albums } = this.state;
        const currentPage  = this.state.currentPage;
        const postsPerPage = this.state.postsPerPage;
        const pageCount = this.state.pageCount;

        // const indexOfLast = currentPage * postsPerPage;
        const indexOfLast = currentPage * pageCount;
        // const indexOfFirst = indexOfLast - postsPerPage;
        const indexOfFirst = indexOfLast - pageCount;
        
        const currentPosts = (albums) => {
            let currentPosts = 0;
            currentPosts = albums.slice(indexOfFirst,indexOfLast); // 5개 게시글씩 노출
        
            return currentPosts;
        }
        
        return (
            <div className='albums'>
                {currentPosts(albums.map(album => (
                    <Albums 
                        key = {album.id}
                        title = {album.title}
                        id = {album.id}
                        img = {'https://images.saymedia-content.com/.image/t_share/MTc0NDkxNzgyMzYzNDg5NjQw/vinyl-to-paper-how-to-write-an-album-review.jpg'}
                    />
                )))}
                <Pagination 
                    postsPerPage ={postsPerPage}
                    totalPosts={albums.length}
                    paginate={this.setCurrentPage}
                    currentPage={currentPage}
                    prevPage={this.handlePrevPage}
                    nextPage={this.handleNextPage}
                    pageCount={pageCount}
                /> 
            </div>
            
            
        );
    }
    }

export default Home;
