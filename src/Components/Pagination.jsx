import React from 'react'
import ReactPaginate from 'react-paginate';

export const Pagination = ({ itemsPerPage, items, currentItems, setCurrentItems }) => {
  // return (
  //   <div className='pagination_wrapper flex justify-center'>
  //       <div className='pagination w-[515px] h-[52px] bg-white mt-[49px] rounded-[10.4px] flex items-center'>
  //           <div className='pagination_left w-[75px]'>
  //             <img className='ml-[23px]' src='/icons/arrowLeft.png'></img>
  //             <img src='/icons/'></img>
  //           </div>
  //           <div className='pagination_mid w-[365px] mr-[30px]'>
                
  //           </div>
  //           <div className='pagination_right w-[75px]'>
  //           <img src='/icons/arrowRight.png'></img>
  //           </div>
  //       </div>
  //   </div>
  // )

    const [itemOffset, setItemOffset] = React.useState(0);
  
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    // setCurrentItems(items.slice(itemOffset, endOffset));
    const pageCount = Math.ceil(items.length / itemsPerPage);
  
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };
  
    return (
      <>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </>
    );
  }
// }
