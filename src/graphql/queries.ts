/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      imageUri
      bio
      following {
        items {
          id
          createdAt
          updatedAt
          userFollowingId
          followingConnUserId
          followingConnFollowerId
        }
        nextToken
      }
      authored {
        items {
          id
          title
          imageUri
          audioUri
          genre
          userID
          writer
          narrator
          time
          description
          createdAt
          updatedAt
          userAuthoredId
          storyAuthorId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        imageUri
        bio
        following {
          nextToken
        }
        authored {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFollowingConn = /* GraphQL */ `
  query GetFollowingConn($id: ID!) {
    getFollowingConn(id: $id) {
      id
      user {
        id
        name
        email
        imageUri
        bio
        following {
          nextToken
        }
        authored {
          nextToken
        }
        createdAt
        updatedAt
      }
      follower {
        id
        name
        email
        imageUri
        bio
        following {
          nextToken
        }
        authored {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userFollowingId
      followingConnUserId
      followingConnFollowerId
    }
  }
`;
export const listFollowingConns = /* GraphQL */ `
  query ListFollowingConns(
    $filter: ModelFollowingConnFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowingConns(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          name
          email
          imageUri
          bio
          createdAt
          updatedAt
        }
        follower {
          id
          name
          email
          imageUri
          bio
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userFollowingId
        followingConnUserId
        followingConnFollowerId
      }
      nextToken
    }
  }
`;
export const getStory = /* GraphQL */ `
  query GetStory($id: ID!) {
    getStory(id: $id) {
      id
      title
      imageUri
      audioUri
      genre
      userID
      author {
        id
        name
        email
        imageUri
        bio
        following {
          nextToken
        }
        authored {
          nextToken
        }
        createdAt
        updatedAt
      }
      writer
      narrator
      time
      description
      comments {
        items {
          id
          storyID
          content
          createdAt
          updatedAt
          storyCommentsId
          commentStoryId
        }
        nextToken
      }
      createdAt
      updatedAt
      userAuthoredId
      storyAuthorId
    }
  }
`;
export const listStories = /* GraphQL */ `
  query ListStories(
    $filter: ModelStoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        imageUri
        audioUri
        genre
        userID
        author {
          id
          name
          email
          imageUri
          bio
          createdAt
          updatedAt
        }
        writer
        narrator
        time
        description
        comments {
          nextToken
        }
        createdAt
        updatedAt
        userAuthoredId
        storyAuthorId
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      storyID
      story {
        id
        title
        imageUri
        audioUri
        genre
        userID
        author {
          id
          name
          email
          imageUri
          bio
          createdAt
          updatedAt
        }
        writer
        narrator
        time
        description
        comments {
          nextToken
        }
        createdAt
        updatedAt
        userAuthoredId
        storyAuthorId
      }
      content
      createdAt
      updatedAt
      storyCommentsId
      commentStoryId
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        storyID
        story {
          id
          title
          imageUri
          audioUri
          genre
          userID
          writer
          narrator
          time
          description
          createdAt
          updatedAt
          userAuthoredId
          storyAuthorId
        }
        content
        createdAt
        updatedAt
        storyCommentsId
        commentStoryId
      }
      nextToken
    }
  }
`;
