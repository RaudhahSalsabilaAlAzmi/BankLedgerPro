import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "reactstrap";

const Back = () => {
  return (
    <div>
      <Row className="mb-2">
        <Col>
          <Link to={"/list"}>
            <Button color="dark">
              <FontAwesomeIcon icon={faArrowLeft}> </FontAwesomeIcon>
              Back
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Back;
