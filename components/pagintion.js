import ReactPaginate from 'react-paginate'
import style from './pagintion.module.css';
const Pagination = ({ pageNumber, info, setPageNumber }) => {
  const pageChange = (data) => {
    setPageNumber(data.selected + 1)
  }
  return (
    <div className={style.pagintion}>
      <ReactPaginate
        className={style.pagintion}
        nextLabel="Next"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="Prev"
        previousClassName={style.prevnex}
        nextClassName={style.prevnex}
        activeClassName={style.act}
        pageCount={info?.pages || 1}
        onPageChange={pageChange}
        pageClassName="border-2 border-gray-300 bg-white text-center w-[2.5rem] h-[2.5rem] rounded-[50%] flex justify-center items-center hover:bg-[gray]"
        pageLinkClassName="text-center w-[2.5rem] h-[2.5rem] rounded-[50%] flex justify-center items-center"
      />
    </div>
  )
}

export default Pagination