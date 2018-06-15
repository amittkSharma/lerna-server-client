/* tslint:disable */
//  This file was automatically generated and should not be edited.

export interface GetAllVideosQuery {
  videos:  Array< {
    __typename: "Video",
    // Video Id
    id: string | null,
    // Name of the video
    name: string | null,
    // Number of time video is watched
    watched: number | null,
  } | null > | null,
};
