const http = require("http");

const handleAllRequest = (requestObject, responseObject) => {
     console.log("Hi I just receive a request");

     const url = requestObject.url;
     if (url === "/") {
          responseObject.write("<h1>Welcome to the home page</h1>");
     } else if (url === "/login") {
          responseObject.write("<h1>Welcome to the login page</h1>");
     } else if (url === "/signup") {
          responseObject.write("<h1>Welcome to the signup page</h1>");
     } else {
          responseObject.write("<h1>Page not found</h1>");
     }
     responseObject.end();
};
const server = http.createServer(handleAllRequest);

server.listen(3000, "127.0.0.1", () =>
     console.log("Server is ready to accept request")
);
