import React from "react";
import { connect } from "react-redux";
import { getPhotos } from "./action";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Figure from "react-bootstrap/Figure";
import FigureImage from "react-bootstrap/FigureImage";
import FigureCaption from "react-bootstrap/FigureCaption";

class Photoslist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoslist: [],
    };
  }

  componentDidMount() {
    this.props.getPhotos();
  }
  render() {
    console.log(this.props.photos);
    return (
      <div>
        <h1>Photoslist</h1>
        <Container>
          {this.props.photos.length > 0 ? (
            this.props.photos.map((photo) => (
              <Row key={photo.id}>
                <Col xs={6} md={4}>
                  <Figure>
                    <Figure.Image
                      width={171}
                      height={180}
                      alt='171x180'
                      src={photo.urls.raw}
                    />
                    <Figure.Caption>
                      {photo.description
                        ? photo.description
                        : photo.alt_description}
                    </Figure.Caption>
                  </Figure>
                </Col>
              </Row>
            ))
          ) : (
            <div>no photos</div>
          )}
        </Container>
      </div>
    );
  }
}
const mapSTateToProps = (state) => ({
  photos: state.photoslist.photos,
});

export default connect(mapSTateToProps, { getPhotos })(Photoslist);
