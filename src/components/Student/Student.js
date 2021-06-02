import {
  Button,
  withStyles,
  TextField,
  InputAdornment,
  Card,
  Paper,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import SearchBar from "material-ui-search-bar";
import { useState, useEffect } from "react";
import axios from "axios";
import DisplayStudent from "./DisplayStudent";
export default function Student() {
  const [student, setStudent] = useState([]);

  const call = () => {
    fetch("http://localhost:8080/dhruv/students")
      .then((res) => {
        return res.json();
      })
      .then((obj) => {
        if (obj != null) {
          console.log("API CALL", obj);
          if (obj.length === 0) {
            obj = [{ volumeInfo: { title: "Book not found.", authors: [""] } }];
          }
          setStudent(obj);
        } else {
          console.log("Oops.");
        }
      });
  };

  useEffect(() => {
    call();
  }, []);

  const StyledButton = withStyles({
    root: {
      background: "#003c6c", // gradient color l -> r
      borderRadius: 3,
      border: 0,
      color: "#FDC700", // text color
      height: 40,
      width: 250,
      padding: "0 30px",
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    },
    label: {
      fontSize: "18px",
    },
  })(Button);

  //   const handleStudentSearch = (e) => {
  //     setStudent(e.target.value);
  //   };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "lightgray",
        }}
      >
        <h1>Student Directory</h1>
      </div>
      <div
        className="add-button-container"
        style={{ position: "absolute", left: "81.5%", top: "30%" }}
      >
        <StyledButton variant="contained" color="primary">
          Add Student
        </StyledButton>
      </div>

      <div
        className="search-button-container"
        style={{ position: "absolute", left: "25%", top: "26%" }}
      >
        {/* <SearchBar
          placeholder="Search Student"
          onChange={() => console.log("onChange")}
          onRequestSearch={() => console.log("onRequestSearch")}
          style={
            {
              // margin: "0 auto",
              // maxWidth: 800,
            }
          }
        /> */}

        {/* <div>
          <DisplayStudent student={student} />
        </div> */}
      </div>
      <div
        style={{
          top: "40%",
          position: "absolute",
          alignItems: "left",
          marginLeft: "20px",
        }}
      >
        <DisplayStudent student={student} />
      </div>
    </div>
  );
}
