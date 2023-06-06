## Written HW

1. Explain what a REST API is. What makes an API "RESTful"?

   A RESTful API is an architectural style for an application program interface (API) that uses HTTP requests to access and use data. This data can be used to GET, PUT, POST and DELETE data types.

   To make an API RESTful, it should adhere to the Representational State Transfer principles:

   - Resource-Based Architecture
   - Stateless Communication
   - Uniform Interface
   - Self-Descriptive Messages
   - Hypermedia-Driven

2. What is Node.js and why is it often used when building server-side applications?

   Node.js is an open-sourve JS runtime environment that allows developers to run JS code on the server-side. Node.js is very popular among developers because of the following:

   - Asyncrhonous and Non-Blocking: it is designed to handle async operations efficiently. This make it highly scalable and suitable for apps that require high throughput and real-time interactions.
   - NPM Ecosystem: it has a vast ecosystem of open-source libraries and packages available through the Node Package Manager.
   - Lighweight and Fast: it is built on the V8 JS engine and it consumes fewer system resources compared to traditional server-side technologies.

3. Express.js is a popular framework used in conjunction with Node.js. What are some of the key features of Express.js that make it useful for building web servers?

   Express.js simplifies the process of building web servers in Node.js by providing a flexible framework with essential features like routing, middleware and template engine support and error handling. These features along with an extensive ecosystem and community make Express.js a very useful tool for building web servers with Node.js

4. In Express.js, what is middleware and how is it used?

   Middleware referers to a set of functions that are executed in the request-response cycle of an application. These functions can perform taks such as parsing request bodies, handling authentication and authorization, loggind, error handling and more. They are designed to be modular and reusable.

5. In terms of HTTP verbs, what is the difference between GET, POST, PUT, PATCH, and DELETE? When would you use each in the context of a RESTful API?

   These verbs are also known as methods and perform the following operations:

   - GET: is used to retrieve a representation of a resource or a collection of resources. For example, user information, a list of products, etc.
   - POST: is used to submit data to be processed by the server. For example, creating a new user, uploading a file.
   - PUT: is used to update or replace a resource on the server. For example, updating a server's profile with new information, or updating a product's details.
   - DELET: is used to remove a specific resource from the server. It requests the server to delete the resource identified by the given URI. For example, deleting a user account.

6. How would you handle parameters in the URL with Express.js? Provide an example.

   We can handle parameter in the URL using route parameters or placeholders. These placeholders can be accessed in the request object and used for processing or responding to the request.

   ```
   app.get('/product/:category/:id', (req, res) => {
      const category = req.params.category;
      const productId = req.params.id;

      res.send(`${category} and ${id}`)
   })
   ```

7. How can you handle error situations when building an Express.js API?

   There are a few ways of handling errors when building an app with Express.js. Firstly, we can use a middleware function to catch errors and handle them in a consistent way. Secondly, we can use a try-catch block that allows us to execute code that might throw an error and handle the error if it happens. Lastly, we should log the errors to a file so we can track them down and fix them.

8. When building a RESTful API with Express.js, how would you structure your routes for a resource like items? What would the endpoints look like for performing CRUD (Create, Read, Update, Delete) operations?

   It is important fo structure our routes in a way that follows the REST architectural style. Meaning that we should use the HTTP methods to perform operations on our resources. In the case of a resource called _items_ we would use the following routes to perform CRUD operations on it:

   - GET/items - to return all the items in the database
   - POST/items - to create a new item in the database
   - PUT/items/:id - to update an existing item in the database
   - DELETE/items/:id - to delete an existing item from the database

9. How would you parse incoming request bodies in Express.js? Provide an example of how you might handle a JSON payload.

   Express.js has a built in express.json() middleware that enables us to parse incoming requests bodies. For example:

   ```
   /* Middlewate to parse JSON payloads */
   app.use(express.json());

   /* POST route that will handle the JSON payload */
   app.post('/item', (req, res) => {
      const item = req.body
   })
   ```

   In this example the middleware add a _body_ property to the request object _req.body_ which can be accesed to get a hold of the JSON data sent in the request body.

10. How can testing be implemented for a RESTful API built with Node and Express? Provide an example of a test case for one of your API endpoints.

Testing can be implemented using Jest and Supertest. Jest is a testing framework and Supertest is used to make HTTP requests and simulate interactions with the API.

Here's an example of a test case for a GET API endpoint that shows a list of groceries in a cart:

```
const request = require('supertest');
const app = require('./app);

describe('GET/cart', () => {
   it('should return a list of groceries in the cart', async () => {
      <!-- make a get request to the /cart endpoint -->
      const response = await reques(app).get('/cart');

      <!-- make sure that the response is successful -->
      expect(response.status).toBe(200);
      expect(response.body).toEqual([
         {id: xxx, name: 'Potato', quantity: 4},
         {id: yyy, name: 'Lemon', quantity: 5}
      ])
   } )
})
```

The test case sends a GET request to the `/cart' endpoint using the _request_ function. Then we make sure that the response has a status of 200 and the body of the response matches the expected Schema.
