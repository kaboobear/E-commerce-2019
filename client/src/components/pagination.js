import React, {Component} from 'react';


class Pagination extends Component {
    createPag = () => {
        const pagination = this.props.pagination
        let paginationElemnt = [];
        let paginationInnerElement = [];
        let isBackDots = false;
    


        for (let x = 0; x < pagination.pagesCount; x++) {
            if (pagination.pagesCount > 4) {
                if (((x + 1) - pagination.currentPage) > (pagination.currentPage > 1
                    ? 1
                    : 2) && pagination.currentPage + 2 < pagination.pagesCount) {
                    x = pagination.pagesCount - 1;
                    paginationInnerElement.push(
                        <li className="dots" key={-1}>...</li>
                    )
                }
    
                while (pagination.currentPage - (x + 1) > (pagination.currentPage === pagination.pagesCount
                    ? 2
                    : 1) && (x + 1) > 1) {
                    if (!isBackDots) {
                        paginationInnerElement.push(
                            <li className="dots" key={-2}>...</li>
                        )
                        isBackDots = true;
                    }
                    x++;
                }
            }
    
            paginationInnerElement.push(
                <li
                    key={x + 1}
                    onClick={() => {
                    this
                        .props
                        .getItems(x + 1, pagination.limit)
                }}
                    className={`pag-item${ (pagination.currentPage !== x + 1)
                    ? ''
                    : ' active'}`}>{x + 1}</li>
            )
        }
    



        paginationElemnt.push(
            <ul className="pagination">
                {(pagination.pagesCount > 4) && (
                    <li
                        key={-3}
                        onClick={() => (pagination.currentPage > 1) && this.props.getItems(pagination.prev.page, pagination.limit)}
                        className={`pag-prev${ (pagination.currentPage > 1)
                        ? ''
                        : ' unactive'}`}>
                        <div className="pag-btn-img"></div>
                    </li>
                )}
    
                {paginationInnerElement}
    
                {(pagination.pagesCount > 4) && (
                    <li
                        key={-4}
                        onClick={() => (pagination.currentPage < pagination.pagesCount) && this.props.getItems(pagination.next.page, pagination.limit)}
                        className={`pag-next${ (pagination.currentPage < pagination.pagesCount)
                        ? ''
                        : ' unactive'}`}>
                        <div className="pag-btn-img"></div>
                    </li>
                )}
            </ul>
        )
    
        return paginationElemnt;
    }




    render() {
        return (
            <div>
                {this.createPag()}
            </div>
        )
    }
}

export default (Pagination);