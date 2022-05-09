import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

export const ListingDetails = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  const getListingDetails = () => {
    axios.get(`http://localhost:8080/data/${id}`).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  };

  useEffect(() => {
    getListingDetails();
  }, []);
  return (
    <>
      {
        <div style={{ textAlign: "center" }}>
          <Typography variant="h5" style={{ color: "dodgerblue" }}>
            {data.name}
          </Typography>
          <Typography variant="h6">Address: {data.address}</Typography>
          <Typography variant="h6">City: {data.city}</Typography>
          <Typography variant="h6">Capacity: {data.capacity}</Typography>
          <Typography variant="h6">Cost: {data.cost}</Typography>
          <Typography variant="h6">Verified: {data.selectVerify}</Typography>
          <Typography variant="h6">Rating: {data.rating}</Typography>
          <Typography variant="h6">Accepted: {data.Accepted_Pet_type}</Typography>
          <Typography variant="h6">Size: {data.Accepted_Pet_size}</Typography>
          <Typography variant="h6">Supervision: {data.adult_supervision}</Typography>
          <Typography variant="h6">Sleep: {data.sleep_place}</Typography>
          <Typography variant="h6">Potty: {data.potty}</Typography>
          <Typography variant="h6">Walks: {data.walks}</Typography>
          <Typography variant="h6">Home Type: {data.type_of_home}</Typography>
          <Typography variant="h6">Outdoor:{data.outdoor_size}</Typography>
        </div>
      }
    </>
  );
};
