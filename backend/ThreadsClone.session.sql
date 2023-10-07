

CREATE TABLE users(
    userid serial PRIMARY KEY,
    username varchar(80) not null,
    email varchar(200) ,
    password varchar(250)CREATE TABLE users(
        userid serial PRIMARY KEY,
        username varchar(80) not null,
        email varchar(200) ,
        password varchar(250)
    )
)


-- Adding the follower 


CREATE TABLE followers(
    id serial PRIMARY KEY,
    userid INTEGER REFERENCES users(userid) NOT NULL,
    follower INTEGER REFERENCES users(userid) NOT NULL);



    



