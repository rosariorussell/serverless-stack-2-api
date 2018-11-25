import { calculateCost } from '../libs/billing-lib'

const AWS     = require('aws-sdk');
AWS.config.region = 'us-east-1';
const cognito = new AWS.CognitoIdentityServiceProvider();
const chance  = require('chance').Chance();

test('Lowest tier', () => {
  const storage = 10

  const cost = 4000
  const expectedCost = calculateCost(storage)

  expect(cost).toEqual(expectedCost)
})

test('Middle tier', () => {
  const storage = 100

  const cost = 20000
  const expectedCost = calculateCost(storage)

  expect(cost).toEqual(expectedCost)
})

test('Highest tier', () => {
  const storage = 101

  const cost = 10100
  const expectedCost = calculateCost(storage)

  expect(cost).toEqual(expectedCost)
})

test('Invoking function', () => {

})
