# **Fulltimeforce React Blog Application**

Blog application where you could create, read, edit and delete posts with your thoughts. 

Developed using React Create App, SCSS, Redux, Axios and React-hook-form.

## Installation

**Download:**

Please download the repository from dev branch, and don't fork the repository. Once you have the repository installed on your local, open the project and follow this instructions:

In the root project directory, you can run:

### `npm install`

Once all dependencies has been installed create a .env file at root of project and add the following environment variable:

**REACT_APP_API**=http://localhost:3002/api


Once you have your environment variable saved execute the following command: 
### `npm start`

And now you can use the application at http://localhost:3000.

## **USAGE** 

# **Register:**
First create and register a new user with email, username and password. Take on account that the sign up form has many different validations, please be sure to complete all the fields with the necessary information.

## **SIGN IN:**

Once you have registered, you can sign in with your email and password using the sign in form, if your credentials are invalid the application doesn't allows you continue to use the features.

## **BLOG POSTS LISTS:**

Once you are inside the application, you can watch a many different post cards, please choice any post an click on the Read more button to Read the entire post.

Also you have a pagination buttons at bottom of the page which you could navigate between the Blog posts list.


## **DELETE POST:**

Once you are into post detail you can click on delete post button and delete the current post.

## **EDIT POST:**

Into the Edit post section you could update a post title and content, if you don't want edit anything you can click on edit post button and send the same information as the original.

## **CREATE POST:** 

You could create a new blog post clicking on the create post button on navigation. Once you are inside the create post view you can type the title and content of your post, once your post is done, click on create post button.

## **SIGN OUT:**

If you want to get out of the application click on Sign out button on navigation.


# ***ATTENTION: The only way to use all the application features is creating an account and sign in, all the application routes are protected with a session credentials ***



