//graphql express
import graphqlHTTP from 'express-graphql'
import gqlProvider from '../index'
import passport from 'passport'
import AppLogger from '../../core/logger/AppLogger'
import AuthUtils from '../authentication/utils/AuthUtils'
import MesssageProvider from '../../messages/MesssageProvider'
import Messages from '../../messages/Messages'
import { isEmpty } from 'lodash'


// init graphql authentication middleware
export default graphqlHTTP((req, res) => {
  return new Promise((resolve) => {
    const next = (user, info = {}) => {
      AppLogger.debug('graphqlHTTP user - ', user)
      AppLogger.debug('graphqlHTTP info - ', info)
      /**
       * GraphQL configuration
       * graphiql: process.env.NODE_ENV !== 'production'
       */
      resolve({
        schema: gqlProvider,
        graphiql: true,
        context: {
          user: user || null,
        },
        formatError: (gqlError) => {
          const error = gqlError.message
          const message = MesssageProvider
            .messageByKey(error) || gqlError.message
          const status = MesssageProvider
            .statusByKey(error)
          return ({ message: message, statusCode: status })
        }
      })
    }

    // passport proxy
    passport.authenticate(process.env.JWT_SCHEME, { session: false }, (error, user) => {

      // get request payload
      const body = req.body ? req.body.query : ''

      // if not body means main url
      if (isEmpty(body)) {
        next()
        return
      }

      // if is login or register skip token auth
      if (body && (body.includes('AuthLogin') || body.includes('AuthRegister'))) {
        next()
        return
      }

      // need auth for others endpoint
      const token = AuthUtils.retrieveToken(req.headers)
      if (AuthUtils.isValidToken(token)) {
        // valid token
        next(user)
      } else {
        // invalid token
        res
          .status(401)
          .send({
            success: false,
            message: MesssageProvider.messageByKey(Messages.KEYS.WRONG_SESSION)
          })
      }
    })(req, res, next)
  })
})
