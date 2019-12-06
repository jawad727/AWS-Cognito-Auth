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
    HeaderIMG: ,
    Likes: array,
    Following: array 
}

Post: {
    id: num,
    imgURL/S3Bucket: str,
    SiteURL: str,
    PostName: str,
    PostDescription: str,
    PostLikes: defaultTo(0),
    Username: str,
    Comments: array
}

Comment: {
    id: num,
    comment: str,
    likes: defaultTo(0)
}

-------

Endpoints:

POST - /post -> User makes a post to this endpoint
GET - /posts -> Get all posts from this endpoint

