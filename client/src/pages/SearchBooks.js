import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

import logo from '../../src/assets/images/logowhatsgood_brown.svg'
import Auth from '../utils/auth';
import { searchBusinesses} from '../utils/API';
import { saveBusinessIds, getSavedBusinessIds } from '../utils/localStorage';
import { SAVE_BOOK } from "../utils/mutations";
import { useMutation } from "@apollo/client";

const SearchBusinesses = () => {
  // create state for holding returned google api data
  const [searchedBusinesses, setSearchedBusinesses] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');

  // create state to hold saved businessId values
  const [savedBusinessIds, setSavedBusinessIds] = useState(getSavedBusinessIds());

  // set up useEffect hook to save `savedBusinessIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  useEffect(() => {
    return () => saveBusinessIds(savedBusinessIds);
  });

  // added use mutation for the error and saveBook
  const [saveBook] = useMutation(SAVE_BOOK);

  // create method to search for Businesses and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await searchBusinesses(searchInput);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { items } = await response.json();

      const bookData = items.map((businesses) => ({
        businessId: businesses.id,
        authors: businesses.name || ['No author to display'],
        title: businesses.alias,
        description: businesses.city,
        image: businesses.image_url || '',
      }));

      setSearchedBusinesses(bookData);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

  // create function to handle saving a book to our database
  const handleSaveBook = async (businessId) => {
    // find the book in `searchedBusinesses` state by the matching id
    const bookToSave = searchedBusinesses.find((book) => book.businessId === businessId);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await saveBook({
        variables: { 
          input: bookToSave,
        },
      });

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      // if book successfully saves to user's account, save book id to state
      setSavedBusinessIds([...savedBusinessIds, bookToSave.businessId]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      
        <Container className='container animate__animated animate__fadeIn'  >
          <img className='mt-5 mb-5' src={logo} style={{ width: "65%" }} />
          <Form onSubmit={handleFormSubmit}>
            <Form.Row>
              <Col className='mb-2' xs={12} md={8}>
                <Form.Control
                  name='searchInput'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='search unapologetic experiences'
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type='submit' className='btn-wg btn'>
                  SEARCH
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>
      

      <Container className='container animate__animated animate__fadeIn'>
        <h2 className='mt-5' >
          {searchedBusinesses.length
            ? `Viewing ${searchedBusinesses.length} results:`
            : '“WE NEED MORE LIGHT ABOUT EACH OTHER. LIGHT CREATES UNDERSTANDING, UNDERSTANDING CREATES LOVE, LOVE CREATES PATIENCE, AND PATIENCE CREATES UNITY.” -Malcom X'}
        </h2>
        <CardColumns>
          {searchedBusinesses.map((book) => {
            return (
              <Card key={book.businessId} border='dark'>
                {book.image ? (
                  <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' />
                ) : null}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className='small'>Authors: {book.authors}</p>
                  <Card.Text>{book.description}</Card.Text>
                  {Auth.loggedIn() && (
                    <Button
                      disabled={savedBusinessIds?.some((savedbusinessId) => savedbusinessId === book.businessId)}
                      className='btn-block btn-info'
                      onClick={() => handleSaveBook(book.businessId)}>
                      {savedBusinessIds?.some((savedbusinessId) => savedbusinessId === book.businessId)
                        ? 'This book has already been saved!'
                        : 'Save this Book!'}
                    </Button>
                  )}
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SearchBusinesses;
