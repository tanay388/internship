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
        <Card.Img variant="top" style={{height: "160px"}} src={props.props.cover_picture} />
        <Card.Body>
          <Card.Title style={{ color: "black", fontSize: "24px" }}>
            {props.props.name}
          </Card.Title>
          <div className="badgedeadline">
            Registration closes:{" "}
            <strong>{Date(props.props.registration_end_time).toLocaleString("en-GB")}
            </strong>
          </div>
          <div>
            <Row>
              <Col sm={4}>
              Starts On:
              <br />
              <strong>{Date(props.props.event_start_time).toLocaleString("en-GB")}</strong>
              </Col>
              <Col sm={4}>
              Entry Fee:
              <br />
              <strong>INR. {props.props.fees}</strong>
              </Col>
              <Col sm={4}>
              Venue:
              <br />
              <strong>{props.props.venue}</strong>
              </Col>
            </Row>
          </div>
          <hr style={{width: "100%"}}/>
          <Card.Text>{props.props.short_desc}</Card.Text>

          <div className='box-f' style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            {props.props.card_tags.map( (e) => {
              return(<div style={{margin: "10px", backgroundColor: "rgb(207, 207, 207)"}} className='badgedeadline inline'>
                {e}
              </div>);
            })}
          </div>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Row>
            <Col sm={8}>
              <Stack direction="row" spacing={2}>
                  {props.props.registered_users.top_users.map( (elem) => {
                      return(
                        <Avatar alt={elem.name} src={elem.image_url}                       
                            sx={{ width: 24, height: 24 }}
                            style={{margin: '1px'}}/>
                      )
                  })}
              </Stack>
              And <strong>{props.props.registered_users.other_users_count}</strong> other are participating.
            </Col>
            <Col>
                    <br />
                    <Button disabled={props.props.event_sub_category !== "Upcoming"} variant="primary">Register Now</Button>         
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Cards