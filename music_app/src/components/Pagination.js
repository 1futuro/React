import React from "react";
import './Pagination.css'

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage, prevPage, nextPage, pageCount }) => {
    // const pageNumbers = []; 
    const pageGroup = Math.ceil(currentPage/postsPerPage);
    const totalPage = Math.ceil(totalPosts/pageCount); // 원조 for문
    console.log('total',totalPage)

    const last = pageGroup * postsPerPage; // 화면에 보여질 마지막 페이지 번호
    // const [first,setFirst] = useState(last - (postsPerPage - 1));
    const first = last - (postsPerPage - 1);
    
    // for (let i = 1; i <= totalPage; i++) {
    //     pageNumbers.push(i); // 배열에 값 추가하여 원본 변경
    // }
    
    const getPaginationGroup = () => {
        return new Array(postsPerPage).fill().map((_,idx) => first +idx );
    }

    // const handlePrevPageGroup = () => {
    //     setFirst(first -5);
    // }
    
    console.log('currentPage',currentPage); 

    return (
        <div>
        <nav>
            <ul className="pagination">
                <li onClick={prevPage} className={currentPage === 1 || currentPage !== first ? "disabled" : "abled"}> {'<'} </li>
                {getPaginationGroup().map((number,index) => (
                    <li key={number} onClick={()=> paginate(number)} 
                    className={currentPage === number ? "page-item-active" : "page-item"}>
                    <span className="page-link">
                        {number}
                    </span>
                </li>
                ))}
                {/* {pageNumbers.map((number) => ( 
                    <li key={number} onClick={()=> paginate(number)} 
                        className={currentPage === number ? "page-item-active" : "page-item"}>
                        <span className="page-link">
                            {number}
                        </span>
                    </li>
                ))} */}
                <li onClick={nextPage} className={currentPage === totalPage || currentPage !== last ? "disabled" : "abled"}> {'>'} </li>    
            </ul>
        </nav>
        </div>
    );
};

export default Pagination;
