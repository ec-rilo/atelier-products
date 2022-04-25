const request = require('supertest');

const { app, server } = require('../server/index.js');

afterEach(() => server && server.close());

test('GET /products', (done) => {
  request(app)
    .get('/products')
    .expect(200)
    .expect('Content-Type', /json/)
    .expect(res => {
      expect(res.body).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            slogan: expect.any(String),
            description: expect.any(String),
            category: expect.any(String),
            default_price: expect.any(Number),
          })
        ]))
      })
      .end(done);
});

test('GET /products/:product_id', (done) => {
  request(app)
    .get('/products/100001')
    .expect(200)
    .expect('Content-Type', /json/)
    .expect(res => {
      expect(res.body).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          slogan: expect.any(String),
          description: expect.any(String),
          category: expect.any(String),
          default_price: expect.any(Number),
          features: expect.arrayContaining([
            expect.objectContaining({
              feature: expect.any(String),
              value: expect.any(String),
            })
          ])
        }))
      })
      .end(done);
});

test('GET /products/:product_id/styles', (done) => {
  request(app)
    .get('/products/1/styles')
    .expect(200)
    .expect('Content-Type', /json/)
    .expect(res => {
      expect(res.body).toEqual(
        expect.objectContaining({
          product_id: expect.any(Number),
          results: expect.arrayContaining([
            expect.objectContaining({
              style_id: expect.any(Number),
              name: expect.any(String),
              original_price: expect.any(Number),
              sale_price: expect.any(Number),
              "default?": expect.any(Boolean),
              photos: expect.arrayContaining([
                expect.objectContaining({
                  thumbnail_url: expect.any(String),
                  url: expect.any(String),
                })
              ]),
              skus: expect.any(Object)
            })
          ])
        }))
      })
      .end(done);
});

test('GET /products/:product_id/related', (done) => {
  request(app)
    .get('/products/100001/related')
    .expect(200)
    .expect('Content-Type', /json/)
    .expect(res => {
      expect(res.body).toEqual(
        expect.arrayContaining([
          expect.any(Number)
        ]))
      })
      .end(done);
});
