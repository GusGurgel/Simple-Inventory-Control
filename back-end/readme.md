# About

The "src/" contains all the source code for the backend of the project.

# Endpoins Documentation

### POST: `/products`
Insert product

request body type: `application/json`  
response body type: `application/json`  

### request body variables
| key               | type      | variables                          | description                                                                     |
|:------------------|:----------|:-----------------------------------|:--------------------------------------------------------------------------------|
| `pName`           | `string`  | `Name of the product`              | **must** be included in every request.                                          |
| `pCategory`       | `string`  | `Category of the product`          | **must** be included in every request.                                          |
| `pQuantidy`       | `string`  | `Quantidy of the category`         | **must** be included in every request.                                          |

---

### PUT: `/products/:id`
Update product whit :id

request body type: `application/json`  

### request body variables
| key               | type      | variables                          | description                                                                     |
|:------------------|:----------|:-----------------------------------|:--------------------------------------------------------------------------------|
| `pName`           | `string`  | `Name of the product`              | **must** be included in every request.                                          |
| `pCategory`       | `string`  | `Category of the product`          | **must** be included in every request.                                          |
| `pQuantidy`       | `string`  | `Quantidy of the category`         | **must** be included in every request.                                          |

---

### GET: `/products`
Get all products product

request body type: `application/json`  
response body type: `application/json`  

### response body variables
| key               | type      | variables                          |
|:------------------|:----------|:-----------------------------------|
| `[*]`             | `array`   | `Array with all products`          |

---

### GET: `/products?category=$1`
Get all products product

request body type: `application/json`  
response body type: `application/json`  

### response body variables
| key               | type      | variables                          |
|:------------------|:----------|:------------------------------------------------------|
| `[*]`             | `array`   | `Array with all products of the category $1` |

---

### GET: `/products?category=$1`
Get all products of category

request body type: `application/json`  
response body type: `application/json`  

### response body variables
| key               | type      | variables                          |
|:------------------|:----------|:------------------------------------------------------|
| `[*]`             | `array`   | `Array with all products of category $1` |


---

### DELETE: `/products?/:id`
Delete product whit :id

