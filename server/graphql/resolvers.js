  import {Users} from '../models/Users' 
   
   // Provide resolver functions for the schema fields
    export const resolvers = {
        Query: {
          users: () => Users.find()
        },
        Mutation: {
            createUser: async (_, {name, message, email}) => {
                const user = new Users({
                    name, message, email
                })
                await user.save()
                console.log('chaching!', user)
                return user
            }
        }
      };