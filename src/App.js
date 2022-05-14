import React, { useEffect } from 'react';
import {  Row, Col, Container } from 'react-bootstrap'
import './App.css';
import axios from 'axios'
import Cards from './Components/Cards/Cards';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  Pagination,
  Button,
  Dialog,
  DialogActions, 
  DialogContent,
  DialogTitle,
  DialogContentText,
  useMediaQuery,
  Checkbox
} from '@mui/material'
import { useTheme } from '@mui/material/styles';

const tags_list = ["Interview Preparation","Contest Solutions","Competitive Programming","Futuristic Tech","Coding Concepts","Career Guidance","Web Development","Android","Machine Learning","Campus Event","Online Coding Event","Hackathon","Women Who Code","GSoC","Placement","Aptitude Preparation","Efficient Coding","Programming Contest","Coding Marathon","All Night Coding","Code Wars","Scholarship Test"];


function App() {
  
  const [category, setCategory] = React.useState('ALL_EVENTS');
  const [subCategory, setSubCategory] = React.useState('Upcoming');
  const [responsedata, setResponsedata] = React.useState('');
  const [eventlist, setEventlist] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [open, setOpen] = React.useState(false);
  const [tags, setTags] = React.useState([]);
  const [tagsQuery, setTagsQuery] = React.useState([]);

  const theme = useTheme();

  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTagsList = (event) => {
    if(event.target.checked){
      setTags([
        ...tags,
        event.target.name,
      ]);
    }else{
      let filteredArray = tags.filter(item => item !== event.target.name)
      setTags(filteredArray);
    }
  }

  const handleRadioChange =  (event) => {
    setCategory((event.target).value);
  }; 
  const handleRadioChangePage =  (event, page) => {
    setPage(page);
  }; 
  const handleRadioChange2 =  (event) => {
    setSubCategory((event.target).value);
  };

  useEffect(
    () => {
      getData()
      console.log(tags)
      
  }, [category, subCategory, page,tags, tagsQuery])
  


  const getData = () => {
    const tagqueryitems = "";
    const url =   `https://api.codingninjas.com/api/v3/events?event_category=${category}&event_sub_category=${subCategory}&tag_list=${tags.join(',')}&offset=${page-1}`;

    axios.get(url).then( function(response) {
      if(response.data.data != null)
      setResponsedata(response.data.data);
      setEventlist(response.data.data.events);
    })
  }

  return (
    <div className="App">
      <div className="SideBar">
        <h2 className="sub-heading center white">Events & News</h2>
        <hr style={{ color: "whitesmoke" }} />
        <Row>
          <Col>
            <div className="fixed">
              <h2
                className="sub-heading white"
                style={{ color: "whitesmoke", fontSize: "20px" }}
              >
                Category
              </h2>
              <div className="Box-f">
                <RadioGroup
                  aria-labelledby="demo-error-radios"
                  name="categoryFilter"
                  value={category}
                  onChange={handleRadioChange}
                >
                  <FormControlLabel
                    value="ALL_EVENTS"
                    control={<Radio />}
                    checked={category === "ALL_EVENTS"}
                    className="RadioCategory"
                    label="All Events"
                  />
                  <FormControlLabel
                    value="WEBINAR"
                    control={<Radio />}
                    className="RadioCategory"
                    label="Webinar"
                  />
                  <FormControlLabel
                    value="WORKSHOP"
                    control={<Radio />}
                    className="RadioCategory"
                    label="Workshops"
                  />
                  <FormControlLabel
                    value="BOOTCAMP_EVENT"
                    control={<Radio />}
                    className="RadioCategory"
                    label="Bootcamp Events"
                  />
                  <FormControlLabel
                    value="CODING_EVENT"
                    control={<Radio />}
                    className="RadioCategory"
                    label="Coding Events"
                  />
                </RadioGroup>
              </div>
              <hr />
              <h2
                className="sub-heading white"
                style={{ color: "whitesmoke", fontSize: "20px" }}
              >
                {" "}
                Chosse tags
              </h2>

              <Button variant="outlined" onClick={handleClickOpen}>
                Show All Tags
              </Button>
              <hr />
              <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="tags-list"
              >
                <DialogTitle id="responsive-dialog-title">
                  {"Choose the tags for filtering?"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Choose The Tags to filter.
                  </DialogContentText>
                  <Container fluid="md">
                    <Row>
                      {tags_list.map((elem) => {
                        return(
                        <Col><FormControlLabel
                        control={
                          <Checkbox
                          checked= {tags.includes(elem)}
                            onChange={handleTagsList}
                            name={elem}
                          />
                        }
                        label={elem}
                      /></Col>);
                      })}
                    </Row>
                  </Container>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} autoFocus>
                    Done
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </Col>

          <Col md={9}>
            <div className="Box-f">
              <RadioGroup
                aria-labelledby="demo-error-radios"
                name="categoryFilter"
                value={subCategory}
                onChange={handleRadioChange2}
                style={{
                  display: "flex !important",
                  flexFlow: "row",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >
                <FormControlLabel
                  value="Upcoming"
                  control={<Radio />}
                  checked={subCategory === "Upcoming"}
                  className="RadioCategory inline"
                  label="Upcoming"
                />
                <FormControlLabel
                  value="Archived"
                  control={<Radio />}
                  className="RadioCategory inline"
                  label="Archived"
                />
                <FormControlLabel
                  value="All Time Favorites"
                  control={<Radio />}
                  className="RadioCategory inline"
                  label="All Time Favorites"
                />
              </RadioGroup>
            </div>
            <Row style={{justifyContent: "space-between"}}>
              {eventlist.map((elem) => {
                return (
                  <Col sm={6} style={{ padding: "16px", justifySelf: "space-beetween" }}>
                    <Cards props={elem} />
                  </Col>
                );
              })}

              {() => {
                if(eventlist.length <1){
                  return(<h1>No {category} is under {subCategory} State.</h1>)
                }
              }}
            </Row>
          </Col>
          <Pagination
            count={responsedata.page_count}
            variant="outlined"
            page={page}
            onChange={handleRadioChangePage}
          />
        </Row>
      </div>
    </div>
  );
}

export default App;
