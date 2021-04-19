const sendFormData = (email, subject, message) => {
  fetch("https://bq3bjzr5e4.execute-api.us-west-2.amazonaws.com/test/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      email: {email},
      subject: {subject},
      message: {message},
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log("Error", error);
    });
};

export default sendFormData;