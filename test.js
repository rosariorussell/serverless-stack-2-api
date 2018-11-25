'use strict'

const AWS = require('aws-sdk')
AWS.config.region = 'us-east-1'
const cognito = new AWS.CognitoIdentityServiceProvider()

let AuthenticateUser = async function () {
  let userpoolId = 'us-east-1_xDwhDxCW7'
  let clientId = "65ejcion7c7nhnb7l0abilprjb"

  let username = 'rosariorussell+prod@gmail.com'
  let password = '1!Pdaswdfhhhg'
  let params = {
    UserPoolId: userpoolId,
    Username: username
  }

  let user = await cognito.adminGetUser(params)

  console.log(user)

  // let req = {
  //   AuthFlow: 'ADMIN_NO_SRP_AUTH',
  //   UserPoolId: userpoolId,
  //   ClientId: clientId,
  //   AuthParameters: {
  //     USERNAME: username,
  //     PASSWORD: password
  //   }
  // }

  // const identity = await cognito.adminInitiateAuth(req)

  // console.log(`initialised auth flow`, identity)
}

AuthenticateUser()

//   let challengeReq = {
//     UserPoolId: userpoolId,
//     ClientId: clientId,
//     ChallengeName: resp.ChallengeName,
//     Session: resp.Session,
//     ChallengeResponses: {
//       USERNAME: username,
//       NEW_PASSWORD: random_password()
//     }
//   }
//   let challengeResp = yield cognito.adminRespondToAuthChallenge(challengeReq).promise()

//   console.log(`[${username}] - responded to auth challenge`)

//   return {
//     username,
//     firstName,
//     lastName,
//     idToken: challengeResp.AuthenticationResult.IdToken
//   }
// };

// module.exports = {
//   an_authenticated_user
// }
