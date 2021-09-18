import React from "react"
import Button from 'react-bootstrap/Button'

const PaginationComponent = ({ values }) => {

    const { currentPage, setCurrentPage, totalPages } = values

    return (
        <div className='my-3'>
            <Button
                variant="secondary"
                className='mx-2'
                onClick={() => setCurrentPage((currentPage) => currentPage - 1)}
                disabled={currentPage === 1}
                style={{ width: 85 }}
            >
                Previous
            </Button>

            <span className='mx-md-5'>Current page: {currentPage}</span>

            <Button
                variant="secondary"
                className='mx-2'
                onClick={() => setCurrentPage((currentPage) => currentPage + 1)}
                disabled={currentPage === totalPages}
                style={{ width: 85 }}
            >
                Next
            </Button>

        </div>
    );
};

export default PaginationComponent;
