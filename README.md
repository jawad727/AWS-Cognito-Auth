# Cognito-Practice
Front end sign up and authentication process with AWS Cognito

--------
Data Model ResearchPal

User: {
    uid: str,
    Username: str,
    Email: str,
    PhoneNumber: num,
    Profpic: str,
    DisplayName: str,
    Bio: str,
}

Posts: {
    myId: foreign key from user.uid,
    postId: foreign key from post.id,
}

Liked: {
    myId: foreign key from user.id,
    postId: foreign key from post.id,
}


Post: {
    id: num,
    PostName: str,
    PostDescription: str,
    PostCategory: str,
    PostLikes: defaultTo(0),
    PostImage/S3Bucket: str,
    SiteURL: str,
    Username: str,
    Comments: array,
}

Comment: {
    id: num,
    postID: str,
    comment: str
}

---- USER FOR SECOND TEMPLATE ---

const user = {
    uid: reqBody.uid,
    createdAt: new Date().toISOString(),
    Username: reqBody.Username,
    Email: reqBody.Email,
    PhoneNumber: reqBody.PhoneNumber,
    Profpic: reqBody.Profpic,
    DisplayName: reqBody.DisplayName,
    Bio: reqBody.Bio
  }

-------

get all posts where postUID matches my path and uid matches my 

-------

Endpoints:

POST - /post -> User makes a post to this endpoint
POST - /post/{postID} -> User makes a comment on a post after specifying postID

GET - /posts -> Get all posts from this endpoint
GET - /posts/{postID} -> Get post by its ID
GET - /user/{id} -> Get a users posts from their ID

PUT - /post/{postID} -> Allows others to update a users post by incrementing the likes






function getExample() {
    // preprocessing
    return promiseA(…).then(makeAhandler(…));
}
function makeAhandler(…)
    return function(resultA) {
        // some processing
        return promiseB(…).then(makeBhandler(resultA, …));
    };
}
function makeBhandler(resultA, …) {
    return function(resultB) {
        // more processing
        return // anything that uses the variables in scope
    };
}



return db.scan(params)
  .promise()
  .then(res => {functionName})