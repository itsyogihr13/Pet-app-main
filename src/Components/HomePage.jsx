import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { getData } from "./Redux/action";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const Home = () => {
  const { petData } = useSelector((store) => store.petData);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const getPetData = () => {
    axios.get("http://localhost:8080/data").then((res) => {
      console.log(res.data);
      dispatch(getData(res.data));
    });
  };

  useEffect(() => {
    getPetData();
  }, []);

  let counter = 1;

  const handleSortByCost = (e) => {
    const { id, value } = e.target;
    if (id == "sortByCost" && value == "low") {
      alert("Sorting");
      petData.sort((a, b) => Number(a.cost) - Number(b.cost));
      console.log(petData);
      dispatch(getPetData);
    }
    if (id == "sortByCost" && value == "high") {
      petData.sort((a, b) => b.cost - a.cost);
      console.log(petData);
      dispatch(getPetData);
    }
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", margin: "10px" }}>
        <select name="" id="sortByCost" onChange={handleSortByCost} style={{backgroundColor: "tomato", border: "none", padding: "5px 10px", borderRadius: "5px"}}>
          <option value="">Sort By Cost</option>
          <option value="high">high to low</option>
          <option value="low">low to high</option>
        </select>
      </div>

      <div className="homeContainer">
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650 }}
            style={{ border: "none" }}
            aria-label="simple table"
          >
            <TableHead
              style={{
                backgroundColor: "teal",
                color: "white",
                fontWeight: "bold",
              }}
            >
              <TableRow
                style={{ fontWeight: "bold", border: "1px solid black" }}
              >
                <TableCell align="right">Id</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">City</TableCell>
                <TableCell align="right">Address</TableCell>
                <TableCell align="right">Capacity</TableCell>
                <TableCell align="right">Cost Per Day</TableCell>
                <TableCell align="right">Verified</TableCell>
                <TableCell align="right">Rating</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {petData.map((pet) => {
                return (
                  <TableRow
                    key={pet.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    onClick={() => navigate(`/listing/${pet.id}`)}
                  >
                    <TableCell align="right">{counter++}</TableCell>
                    <TableCell align="right">{pet.name}</TableCell>
                    <TableCell align="right">{pet.city}</TableCell>
                    <TableCell align="right">{pet.address}</TableCell>
                    <TableCell align="right">{pet.capacity}</TableCell>
                    <TableCell align="right">{pet.cost}</TableCell>
                    <TableCell align="right">{pet.selectVerify}</TableCell>
                    <TableCell align="right">{pet.rating}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};
