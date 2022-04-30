# Atelier Products API

This is a node/express application that provides a REST API for the Atelier ecommerce frontend.

The database schema are contained in `/etl`

The node server is contained entirely in `/server` and enters on `index.js`

`npm test` runs the tests inside of the `/test` folder with jest

## Install

Ensure the database is prepared - [ETL](https://github.com/yoshi-sdc/atelier-products/blob/f11541e809aee0693ea8338361b2b97e467098d0/etl/README.md)

```
npm install
```

copy `example.env` to `.env` and configure the variables within.

## Run the App

```
npm start
```

## Run the Tests

```
npm test
```

# API Endpoints

### `GET /products`
Retrieve a list of products

#### Query Parameters
| Parameter | Type    | Description                                               |
|-----------|---------|-----------------------------------------------------------|
| page      | Integer | Selects the page of results to return. Default 1.         |
| page_size | Integer | Specifies how many results per page to return. Default 10.|

#### Response
```
[
    {
        "id": 1,
        "name": "Camo Onesie",
        "slogan": "Blend in to your crowd",
        "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
        "category": "Jackets",
        "default_price": 140
    },
    {
        "id": 2,
        "name": "Bright Future Sunglasses",
        "slogan": "You've got to wear shades",
        "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
        "category": "Accessories",
        "default_price": 69
    },
    {
        "id": 3,
        "name": "Morning Joggers",
        "slogan": "Make yourself a morning person",
        "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
        "category": "Pants",
        "default_price": 40
    },
    // ...
]
```


