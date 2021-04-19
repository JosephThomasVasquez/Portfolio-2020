



const sendFormData = () => {
  fetch("https://bq3bjzr5e4.execute-api.us-west-2.amazonaws.com/test/contact", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: {
      email: "rando@email.com",
      subject: "This is the subject",
      message: "Did you get this message bro?",
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log("Error", error);
    });
};
