USE id8288583_vcc_website;

CREATE TABLE Users
(UserId CHAR(23) NOT NULL,
First VARCHAR(50),
Last VARCHAR(100),
PicId CHAR(23),
PRIMARY KEY (UserId));

CREATE TABLE Accounts
(AccountId CHAR(23) NOT NULL,
UserName VARCHAR(64) NOT NULL,
PasswordHash VARCHAR(64) NOT NULL, 
UserId CHAR(23),
PRIMARY KEY (AccountId),
FOREIGN KEY (UserId) REFERENCES Users(UserId));

CREATE TABLE UserPictures
(PicId CHAR(23) NOT NULL,
PicMime VARCHAR(255) NOT NULL,
PicBlob BLOB NOT NULL,
UserId CHAR(23),
PRIMARY KEY (PicId),
FOREIGN KEY (UserId) REFERENCES Users(UserId));

CREATE TABLE AccountInfo
(AccountId CHAR(23) NOT NULL,
LastLogin DATE,
Email VARCHAR(64),
ChatName VARCHAR(32),
Phone VARCHAR(15),
PRIMARY KEY (AccountId),
FOREIGN KEY (AccountId) REFERENCES Accounts(AccountId));

CREATE TABLE Events
(EventId CHAR(23) NOT NULL,
EventName VARCHAR(100) NOT NULL,
EventDate DATE NOT NULL,
EventLocation VARCHAR(100),
EventHostId CHAR(23),
EventDuration VARCHAR(20),
EventDescription VARCHAR(2048),
PRIMARY KEY (EventId),
FOREIGN KEY (EventHostId) REFERENCES Accounts(AccountId));

CREATE TABLE NewsFeed
(NewsId CHAR(23) NOT NULL,
NewsContent VARCHAR(2048) NOT NULL,
PosterId CHAR(23) NOT NULL,
NewsDate DATE NOT NULL,
NewsTitle VARCHAR(128),
PRIMARY KEY (NewsId),
FOREIGN KEY (PosterId) REFERENCES Accounts(AccountId));

CREATE TABLE Projects
(ProjectId CHAR(23) NOT NULL,
ProjectName VARCHAR(64),
IsArchived BOOLEAN,
CreationDate DATE,
Link VARCHAR(1024),
PRIMARY KEY (ProjectId));

CREATE TABLE Categories
(CategoryId CHAR(23) NOT NULL,
CategoryName VARCHAR(256) NOT NULL,
Active BOOLEAN,
PRIMARY KEY (CategoryId));

CREATE TABLE Topic
(TopicId CHAR(23) NOT NULL,
TopicTitle VARCHAR(256) NOT NULL,
TopicSubtitle VARCHAR(256),
UserId CHAR(23),
CreatedOn DATE,
Active BOOLEAN,
CategoryId CHAR(23),
PRIMARY KEY (TopicId),
FOREIGN KEY (CategoryId) REFERENCES Categories(CategoryId));

CREATE TABLE Posts
(PostId CHAR(23) NOT NULL,
PostContent VARCHAR(2048) NOT NULL,
UserId CHAR(23),
PostDate DATE,
TopicId CHAR(23),
PRIMARY KEY (PostId),
FOREIGN KEY (UserId) REFERENCES Users(UserId),
FOREIGN KEY (TopicId) REFERENCES Topic(TopicId));