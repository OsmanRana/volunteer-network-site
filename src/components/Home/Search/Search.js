import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const Search = () => {
    return (
        <div>
             <div className="text-center my-5">
                <h1 className=" fw-bolder">I GROW BY HELPING PEOPLE IN NEED</h1>
            </div>
            <div className="container my-5">
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="primary">Search</Button>
                </Form>
            </div>
        </div>
    );
};

export default Search;