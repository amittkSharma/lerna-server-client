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
    // Basic information about the video
    description: string | null,
    // Information about the download link
    url: string | null,
  } | null > | null,
};
