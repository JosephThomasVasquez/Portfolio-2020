const sendFormData = (data) => {

    console.log(data)
  
    fetch("https://bq3bjzr5e4.execute-api.us-west-2.amazonaws.com/test/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log("Error", error);
    });

};

export default sendFormData;
