/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      email
      imageUri
      bio
      following
      authored {
        items {
          id
          title
          imageUri
          audioUri
          genre
          userID
          author
          narrator
          time
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      numAuthored
      pseudonym
      birthdate
      isPublisher
      followers {
        items {
          id
          followerID
          authorID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      email
      imageUri
      bio
      following
      authored {
        items {
          id
          title
          imageUri
          audioUri
          genre
          userID
          author
          narrator
          time
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      numAuthored
      pseudonym
      birthdate
      isPublisher
      followers {
        items {
          id
          followerID
          authorID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      email
      imageUri
      bio
      following
      authored {
        items {
          id
          title
          imageUri
          audioUri
          genre
          userID
          author
          narrator
          time
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      numAuthored
      pseudonym
      birthdate
      isPublisher
      followers {
        items {
          id
          followerID
          authorID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createFollowingConn = /* GraphQL */ `
  mutation CreateFollowingConn(
    $input: CreateFollowingConnInput!
    $condition: ModelFollowingConnConditionInput
  ) {
    createFollowingConn(input: $input, condition: $condition) {
      id
      followerID
      authorID
      author {
        id
        name
        email
        imageUri
        bio
        following
        authored {
          nextToken
        }
        numAuthored
        pseudonym
        birthdate
        isPublisher
        followers {
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
        following
        authored {
          nextToken
        }
        numAuthored
        pseudonym
        birthdate
        isPublisher
        followers {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateFollowingConn = /* GraphQL */ `
  mutation UpdateFollowingConn(
    $input: UpdateFollowingConnInput!
    $condition: ModelFollowingConnConditionInput
  ) {
    updateFollowingConn(input: $input, condition: $condition) {
      id
      followerID
      authorID
      author {
        id
        name
        email
        imageUri
        bio
        following
        authored {
          nextToken
        }
        numAuthored
        pseudonym
        birthdate
        isPublisher
        followers {
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
        following
        authored {
          nextToken
        }
        numAuthored
        pseudonym
        birthdate
        isPublisher
        followers {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteFollowingConn = /* GraphQL */ `
  mutation DeleteFollowingConn(
    $input: DeleteFollowingConnInput!
    $condition: ModelFollowingConnConditionInput
  ) {
    deleteFollowingConn(input: $input, condition: $condition) {
      id
      followerID
      authorID
      author {
        id
        name
        email
        imageUri
        bio
        following
        authored {
          nextToken
        }
        numAuthored
        pseudonym
        birthdate
        isPublisher
        followers {
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
        following
        authored {
          nextToken
        }
        numAuthored
        pseudonym
        birthdate
        isPublisher
        followers {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createStory = /* GraphQL */ `
  mutation CreateStory(
    $input: CreateStoryInput!
    $condition: ModelStoryConditionInput
  ) {
    createStory(input: $input, condition: $condition) {
      id
      title
      imageUri
      audioUri
      genre
      user {
        id
        name
        email
        imageUri
        bio
        following
        authored {
          nextToken
        }
        numAuthored
        pseudonym
        birthdate
        isPublisher
        followers {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      author
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
    }
  }
`;
export const updateStory = /* GraphQL */ `
  mutation UpdateStory(
    $input: UpdateStoryInput!
    $condition: ModelStoryConditionInput
  ) {
    updateStory(input: $input, condition: $condition) {
      id
      title
      imageUri
      audioUri
      genre
      user {
        id
        name
        email
        imageUri
        bio
        following
        authored {
          nextToken
        }
        numAuthored
        pseudonym
        birthdate
        isPublisher
        followers {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      author
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
    }
  }
`;
export const deleteStory = /* GraphQL */ `
  mutation DeleteStory(
    $input: DeleteStoryInput!
    $condition: ModelStoryConditionInput
  ) {
    deleteStory(input: $input, condition: $condition) {
      id
      title
      imageUri
      audioUri
      genre
      user {
        id
        name
        email
        imageUri
        bio
        following
        authored {
          nextToken
        }
        numAuthored
        pseudonym
        birthdate
        isPublisher
        followers {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      author
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
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      storyID
      story {
        id
        title
        imageUri
        audioUri
        genre
        user {
          id
          name
          email
          imageUri
          bio
          following
          numAuthored
          pseudonym
          birthdate
          isPublisher
          createdAt
          updatedAt
        }
        userID
        author
        narrator
        time
        description
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
      storyCommentsId
      commentStoryId
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      storyID
      story {
        id
        title
        imageUri
        audioUri
        genre
        user {
          id
          name
          email
          imageUri
          bio
          following
          numAuthored
          pseudonym
          birthdate
          isPublisher
          createdAt
          updatedAt
        }
        userID
        author
        narrator
        time
        description
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
      storyCommentsId
      commentStoryId
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      storyID
      story {
        id
        title
        imageUri
        audioUri
        genre
        user {
          id
          name
          email
          imageUri
          bio
          following
          numAuthored
          pseudonym
          birthdate
          isPublisher
          createdAt
          updatedAt
        }
        userID
        author
        narrator
        time
        description
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
      storyCommentsId
      commentStoryId
    }
  }
`;
