import React from 'react'
import {Button, Row, Col} from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


function Cards(props) {
  return (
    <div>
      <Card
        style={{
          width: "100%",
          minWidth: "16rem",
          minHeight: "80vh",
          marginBottom: "16px !important",
          margin: "10px !impoertant",
        }}
      >
        <Card.Img variant="top" src={props.props.cover_picture} />
        <Card.Body>
          <Card.Title style={{ color: "black", fontSize: "24px" }}>
            {props.props.name}
          </Card.Title>
          <div className="badgedeadline">
            Registration is open till{" "}
            {Date(props.props.registration_end_time).toLocaleString("en-GB")}
          </div>
          <div>
            <div style={{ display: "inline-block" }}>
              Starts On:
              <br />
              {Date(props.props.event_start_time).toLocaleString("en-GB")}
            </div>
            <div style={{ display: "inline-block" }}>
              Entry Fee:
              <br />
              INR. {props.props.fees}
            </div>
            <div style={{ display: "inline-block" }}>
              Venue:
              <br />
              {props.props.venue}
            </div>
          </div>
          <Card.Text>{props.props.short_desc}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Row>
            <Col xs={8}>
              <Stack direction="row" spacing={2}>
                  {props.props.registered_users.top_users.map( (elem) => {
                      return(
                        <Avatar alt={elem.name} src={elem.image_url}                       
                            sx={{ width: 24, height: 24 }}
                            style={{margin: '1px'}}/>
                      )
                  })}
              </Stack>
              And <strong>{props.props.registered_users.other_users_count}</strong> other are participating
            </Col>
            <Col>
              <Button variant="primary">Register Now</Button>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Cards