import React from "react"
import Button from 'react-bootstrap/Button'

const PaginationComponent = ({ values }) => {

    const { currentPage, setCurrentPage, totalPages } = values

    return (
        <div className='mb-5'>
            <Button
                variant="secondary"
                className='mx-2'
                onClick={() => setCurrentPage((currentPage) => currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previous
            </Button>

            <span className='mx-5'>Current page: {currentPage}</span>

            <Button
                variant="secondary"
                className='mx-2'
                onClick={() => setCurrentPage((currentPage) => currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </Button>

        </div>
    );
};

export default PaginationComponent;
