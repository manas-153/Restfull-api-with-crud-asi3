Project's Title

   Restfull api with Crud Node js

Project Description

  In this project, I have developed a  RESTful API using Node.js that allows users to manage product data effectively. The API supports CRUD (Create, Read, Update, Delete) operations for products, which enable users to add, update, retrieve, and delete product information from the Backend server.it also provides the functionality to handle both single product operations and multiple product operations (like add mutiple product or update multiple products).

  Features:

  1. Create single Product : Users can create a single product by sending a POST request with some product details, such as name, description, price etc. Aftre successful Insertion, the API will return the success message with all product data.

  2. Create Multiple Products : This Restfull api allow the user to add mutiple products simultaneously in a single request by providing an array of product objects containing relevant details for each product.

  3. Get List of all Products : User can Make the get request to get the list os all Products avalaible in the "Product" schems.The API will return product details, including name, description, price, Offer, color,size etc.

  4. Get a single Product : sometimes user need to get a single product information rather than a list of all products, so To get info of a single product user can pass the unique key or id of the product so if it matches with any of the context in databse, it will returned to the user as a response from the server.

  5. Update a Single Product : To modify an existing product, users can send a PUT request with the product's unique id and the updated attributes they wants to change in with the body of Api. if the unique identifier will matches any of the product it it will be replaced with the content/data provided by the user.The user will also recieve the proiper acknowledment of updation.

  6. Update Multiple Product : It can be used to update data of multiple products in a single request, which is used to manage multiple or group of products having some common attributes.User need to provide the attrbiutes as a request parameters and data in the body of the request.

  7. Delete a Single Product : User have the access to delete any product from the database by just providing the Unique product id as a parameter in the request, Once product is deleted user will receive the acknowledgement.

  8. totalProducts : This functionality helps you to get the idea of total quanity of products avalaible.

  9. filterProductsByMfgDate : user can access the list of products based upon their manufacturing date to get the clear idea of products marketing.

  10. productWithLowQuanity : user can also check for the products with low quanitity so that demand can meet up without interruptions.

  11. calculateAvergareQuanity : This will give you the average of total quantity.

  12. highAndLowQuantity : this function will perform both functionality to get the list of products with high and low quality by passing a 1 and -1 parameter.

  13. getSortProducts : This will sort the products based on the parameters used decide.

  14. filterAndReviewEndpoints : This will filter the products on the basis of parameters user decided and show only the product information user needed.

  15. recentProducts : This functionality helps the user to get the list of products was recently launched by differentiating in their manufacturing date.


How to Install and Run the Api 

Step 1: Vist the Repository link (https://github.com/manas-153/Restfull-api-with-crud-asi3.git) and download the zip file from the code section or you can clone the repository by running the (git clone https://github.com/manas-153/Restfull-api-with-crud-asi3.git) comannd.

Step 2: After succesfull cloning of the project Run the command (npm install), this will install all the packages and modules to your system which is required to run the project.

Step3: Once all the pacakges will be successfully intsalled you will see the node_modules folder has been created.

Step 4: Create a .env file and set up the enviroment variables for PORT .you can choose your own PORT where server will hostem in your local system.

Step 5: The final step is to run the project using (npm start) command, This will host your Api project locally on your system on the Defined Port number.


Important Prerequisites:

1. You must have node js installed in your system, if not you can download it from the link 
(https://nodejs.org/en/download).

2. MongoDb must be installed in system and hosted in your system, if not you can dowanload the Mongodb from the link (https://www.mongodb.com/try/download/community).

3. To test the api You can download either "Postman (https://www.postman.com/downloads/)" or just install the Visual studio code Extention "Thunderclient".