import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { getsearchPhotos, unLike } from "./action";

import {
  Card,
  Container,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
class Searchphotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchquery: "",
    };
  }

  // to handle input change
  handleonChange = (e) => {
    this.setState({
      searchquery: e.target.value,
    });
  };

  //to handle search submit
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.getsearchPhotos(this.state.searchquery);
    this.setState({
      searchquery: "",
    });
  };

  //function to handle unlike
  unlike = (photo) => {
    this.props.unLike(photo);
  };

  /**
   * function to return short description
   * @param description sentence
   * @return shortDescription
   */
  shortDescription = (description) => {
    let shortDescription = "";
    let wordArray = description.split(" ");
    if (wordArray.length > 2) {
      shortDescription = wordArray[0] + " " + wordArray[1] + " ...";
    } else {
      wordArray.forEach((word) => {
        shortDescription = shortDescription + word + " ";
      });
    }
    return shortDescription;
  };

  render() {
    let searchPhotos = this.props.photos;

    let unlikedPhotos = this.props.unlikedPhotos;

    if (unlikedPhotos.length) {
      unlikedPhotos.forEach((unlikePhoto) => {
        searchPhotos = searchPhotos.filter(
          (photo) => photo.id !== unlikePhoto.id
        );
      });
    }

    console.log(searchPhotos);

    return (
      <div className='main'>
        <div
          className='search-container'
          style={{ display: "flex", justifyContent: "center", width: "90%" }}
        >
          <form
            onSubmit={this.handleSubmit}
            style={{
              display: "flex",
              justifyContent: "center",
              width: "50%",
              margin: "2rem",
            }}
          >
            <InputGroup className='mb-3'>
              <FormControl
                placeholder='Search pictures on unsplash...'
                aria-describedby='basic-addon2'
                name='searchquery'
                value={this.state.searchquery}
                onChange={(e) => this.handleonChange(e)}
              />
              <InputGroup.Append>
                <Button variant='info' type='submit'>
                  Search
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </form>
        </div>

        <Container className='container-grid' style={{ width: "90%" }}>
          {searchPhotos.length > 0 ? (
            searchPhotos.map((photo, i) => {
              return (
                <Card
                  border='dark'
                  className='text-center'
                  style={{ width: "18rem", padding: "5px" }}
                >
                  <Card.Img
                    variant='top'
                    style={{ width: "100%", height: "300px" }}
                    src={photo.urls.raw}
                  />
                  <Card.Body
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      fontSize: "16px",
                    }}
                  >
                    {photo.description
                      ? this.shortDescription(photo.description)
                      : this.shortDescription(photo.alt_description)}
                    <i
                      className='fas fa-thumbs-down'
                      style={{ paddingTop: "3px" }}
                      onClick={() => this.unlike(photo)}
                    ></i>
                  </Card.Body>
                </Card>
              );
            })
          ) : (
            <div>{this.props.msg}</div>
          )}
        </Container>
      </div>
    );
  }
}
const mapSTateToProps = (state) => ({
  photos: state.searchphotoslist.searchphotos,
  msg: state.searchphotoslist.msg,
  unlikedPhotos: state.searchphotoslist.unlikephotos,
});

export default connect(mapSTateToProps, { getsearchPhotos, unLike })(
  Searchphotos
);
