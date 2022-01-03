/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
      pseudonym
      birthdate
      isPublisher
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
      pseudonym
      birthdate
      isPublisher
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
      pseudonym
      birthdate
      isPublisher
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFollowingConn = /* GraphQL */ `
  subscription OnCreateFollowingConn {
    onCreateFollowingConn {
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
        pseudonym
        birthdate
        isPublisher
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
        pseudonym
        birthdate
        isPublisher
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
export const onUpdateFollowingConn = /* GraphQL */ `
  subscription OnUpdateFollowingConn {
    onUpdateFollowingConn {
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
        pseudonym
        birthdate
        isPublisher
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
        pseudonym
        birthdate
        isPublisher
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
export const onDeleteFollowingConn = /* GraphQL */ `
  subscription OnDeleteFollowingConn {
    onDeleteFollowingConn {
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
        pseudonym
        birthdate
        isPublisher
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
        pseudonym
        birthdate
        isPublisher
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
export const onCreateStory = /* GraphQL */ `
  subscription OnCreateStory {
    onCreateStory {
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
        pseudonym
        birthdate
        isPublisher
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
export const onUpdateStory = /* GraphQL */ `
  subscription OnUpdateStory {
    onUpdateStory {
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
        pseudonym
        birthdate
        isPublisher
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
export const onDeleteStory = /* GraphQL */ `
  subscription OnDeleteStory {
    onDeleteStory {
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
        pseudonym
        birthdate
        isPublisher
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
          pseudonym
          birthdate
          isPublisher
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
          pseudonym
          birthdate
          isPublisher
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
          pseudonym
          birthdate
          isPublisher
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
