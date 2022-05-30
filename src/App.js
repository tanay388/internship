import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./App.css";
import axios from "axios";
import Cards from "./Components/Cards/Cards";

import {
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  useMediaQuery,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
import RadioButtonGroup from "./Components/SideBar/RadioButtonGroup";
import DialogBox from "./Components/SideBar/DialogBox";
import BottomPagination from "./Components/Pagination/BottomPagination";
import HeadersSubCategory from "./Components/Headers/HeadersSubCategory";

function App() {
  const [category, setCategory] = React.useState("ALL_EVENTS");
  const [subCategory, setSubCategory] = React.useState("Upcoming");
  const [responsedata, setResponsedata] = React.useState("");
  const [eventlist, setEventlist] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [open, setOpen] = React.useState(false);
  const [tags, setTags] = React.useState([]);

  const theme = useTheme();

  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTagsList = (event) => {
    if (event.target.checked) {
      setTags([...tags, event.target.name]);
    } else {
      let filteredArray = tags.filter((item) => item !== event.target.name);
      setTags(filteredArray);
    }
  };

  const handleRadioChange = (event) => {
    setCategory(event.target.value);
  };
  const handleRadioChangePage = (event, page) => {
    setPage(page);
  };
  const handleRadioChange2 = (event) => {
    setSubCategory(event.target.value);
  };

  useEffect(() => {
    getData();
    console.log(tags);
  }, [category, subCategory, page, tags]);

  const getData = () => {
    const url = `https://api.codingninjas.com/api/v3/events?event_category=${category}&event_sub_category=${subCategory}&tag_list=${tags.join(
      ","
    )}&offset=${page - 1}`;

    axios.get(url).then(function (response) {
      if (response.data.data != null) setResponsedata(response.data.data);
      setEventlist(response.data.data.events);
    });
  };

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
              <RadioButtonGroup
                handleRadioChange={handleRadioChange}
                category={category}
              />

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
              <DialogBox
                fullScreen={fullScreen}
                tags={tags}
                open={open}
                handleClose={handleClose}
                handleTagsList={handleTagsList}
              />
            </div>
          </Col>

          <Col md={9}>
            <HeadersSubCategory
              subCategory={subCategory}
              handleRadioChange2={handleRadioChange2}
            />

            <Row style={{ justifyContent: "space-between" }}>
              {eventlist.map((elem) => {
                return (
                  <Col
                    sm={6}
                    style={{ padding: "16px", justifySelf: "space-beetween" }}
                  >
                    <Cards props={elem} />
                  </Col>
                );
              })}
            </Row>
          </Col>
          <BottomPagination
            handleRadioChangePage={handleRadioChangePage}
            page={page}
            responsedata={responsedata}
          />
        </Row>
      </div>
    </div>
  );
}

export default App;
