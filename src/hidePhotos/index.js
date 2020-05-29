import React from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { removeHidden } from "./action";

class Hidephotos extends React.Component {
  // function to remove photo from unliked list
  removefromhiddenlist = (photo) => {
    this.props.removeHidden(photo);
  };

  render() {
    return (
      <div className='main'>
        <div
          style={{ display: "flex", justifyContent: "center", width: "90%" }}
        >
          <h2> Unliked Photos</h2>
        </div>
        <Container className='container-grid' style={{ width: "90%" }}>
          {this.props.unlikephotos.length > 0 ? (
            this.props.unlikephotos.map((photo) => (
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
                  <Card.Title></Card.Title>
                  <Card.Text>
                    {photo.description
                      ? photo.description
                      : photo.alt_description}
                  </Card.Text>
                  <Button
                    variant='secondary'
                    onClick={() => this.removefromhiddenlist(photo)}
                  >
                    Remove
                  </Button>
                </Card.Body>
              </Card>
            ))
          ) : (
            <div>No Unliked Photos</div>
          )}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  unlikephotos: state.searchphotoslist.unlikephotos,
});
export default connect(mapStateToProps, { removeHidden })(Hidephotos);
