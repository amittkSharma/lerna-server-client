import { GraphQLSchema,
         GraphQLObjectType,
         GraphQLString,
         GraphQLID,
         GraphQLInt,
         GraphQLNonNull,
         GraphQLList,
         GraphQLInputObjectType } from 'graphql'
import { videoSampleData } from '../sampleData/video'

// // GraphQL schema
// export const schema = buildSchema(`
//     type Query {
//         message: String
//     }
// `);

// // Root resolver
// export const resolvers = {
//     message: () => 'Hello Jane'
// };

const videoType = new GraphQLObjectType({
    name: 'Video',
    description: 'Object for the video',
    fields: {
       id: {
           type: GraphQLID,
           description: 'Video Id',
       },
       name: {
           type: GraphQLString,
           description: 'Name of the video',
       },
       watched: {
           type: GraphQLInt,
           description: 'Number of time video is watched',
       },

    },
})

const messageType = new GraphQLObjectType({
    name: 'Message',
    description: '',
    fields: {
        id: {
            type: GraphQLID,
            description: 'Id of the message',
        },
        messageText: {
            type: GraphQLString,
            description: 'Message string',
        },
    },
})

const queryType = new GraphQLObjectType({
    name: 'QueryType',
    description: 'The root query type',
    fields: {
        videos: {
            type: new GraphQLList(videoType),
            resolve: () => {
                return videoSampleData.getVideos()
            },
        },
        videoById: {
            type: videoType,
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLID),
                    description: 'Id of the video',
                },
            },
            resolve: (_, args) => {
                return videoSampleData.getVideoById(args.id)
            },
        },
        videoByName: {
            type: videoType,
            args: {
                name: {
                    type: new GraphQLNonNull(GraphQLString),
                    description: 'Name of the video',
                },
            },
            resolve: (_, args) => {
                return videoSampleData.getVideoByName(args.name)
            },
        },
        message: {
            type: messageType,
            resolve: () => new Promise(resolve => {
                resolve({
                    id: 'Message 1',
                    messageText: 'hello message world',
                })
            }),
        },
    },
})

const videoInputType = new GraphQLInputObjectType({
    name: 'videoInputType',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
            description: 'Id of the video',
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'Name of the video',
        },
        watched: {
            type: new GraphQLNonNull(GraphQLInt),
            description: 'Whether video is watched or not',
        },
    },
})

const mutationType = new GraphQLObjectType({
    name: 'MutationType',
    description: 'The root mutation type',
    fields: {
        createVideo: {
            type: videoType,
            description: 'Creating a new video',
            args: {
                videoInput: {
                    type: new GraphQLNonNull(videoInputType),
                },
            },
            resolve: (_, args) => {
                return videoSampleData.createVideo(args.videoInput)
            },
        },
    },
})

// defines the capability of graphql server, whether query, mutation or subscription is allowed.
export const schema = new GraphQLSchema({
    query: queryType,
    mutation: mutationType,
})
