import React, { useEffect, useState } from "react";
import axios from "axios";

const Item = (props) => {
  const styles = {
    employeePhoto: {
      maxHeight: 50,
      maxWidth: 50,
    },
  };

  const [employeeImageUrl, setEmployeeImageUrl] = useState(
    "https://images.dog.ceo/breeds/mountain-bernese/n02107683_3034.jpg"
  );

  useEffect(() => {
    //TODO: Query the dog api: https://dog.ceo/api/breeds/image/random
    axios
			.get("https://randomuser.me/api/?inc=picture")
			.then((response) => {
				setEmployeeImageUrl(response.data.results[0].picture.thumbnail);
			})
			.catch((err) => {
				console.log(err);
			});
  }, []);

  return (
    <tr>
           <td><img src={employeeImageUrl} alt="Employee avatar" style={styles.employeePhoto}></img></td>
           <td>{props.employee_name}</td>
           <td>{props.employee_salary}</td>
           <td>{props.employee_age}</td>
    </tr>
	);
};

export default Item;
