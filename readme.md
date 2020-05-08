# Azure Cove

The aim of the website is to provide information on cloud computing and how one can benefit from it.

## Demo

Live demo can be found [here](https://misza80.github.io/AzureCove/).

![](https://github.com/misza80/AzureCove/blob/master/assets/images/thumbnail1.png)

## UX

### User stories

As a novice user I expect to find information on benefits of cloud computing and how to use it.

![](https://github.com/misza80/AzureCOve/blob/master/images/screenshot.png)

As a developer I expect to find information on how I can use Azure for my work.

### Strategy

My goal in the design was to create a simple,easy to navigate website that will provide novice users with basic knowledge on cloud computing.

### Structure

In the categories section I wanted to provide a list of main categories the information falls into,and in news section the latest informations on cloud computing,in the tutorials section links to video tutorials.

### Skeleton

[Landing wireframe](https://github.com/misza80/AzureCove/blob/master/wireframes/main.jpg).\
[Categories wireframe](https://github.com/misza80/AzureCove/blob/master/wireframes/categories.jpg).\
[Tutorials wireframe](https://github.com/misza80/AzureCove/blob/master/wireframes/tutorials.jpg).

### Surface

For the landing a image background with text and image animation.
For the dynamic content a plain white background to prevent distractions from the content.

## Technologies

1.HTML\
2.CSS\
3.Bootstrap (4.3.1)\
4.JavaScript\
5.jQuery\
6.AJAX\
7.Google Chrome Developer tools

## Features

This site uses collapsible navbar to manage the navigation list on smaller screens.
Content is dynamically rewritten allowing for faster transitions between the subpages.
In responses to users actions content is added to the page as necessary.
User can select categories of tutorials by using a dropdown menu that will filter the content.
In the future I would like to move the cards content to JSON file.

In the future I would like update the information on the website on a regular basis with new articles and videos .I would also like to add a ability to comment on articles to allow for more user interaction.

## Testing

Aim of the test was to verify that the webiste works correctly across different operating systems,browsers and devices.
Website was tested on Google Chrome,Firefox and Opera browsers in their latest versions.Website was tested on multiple mobile device (iPhone 5,6,XR Samsung Galaxy s5,Apple Ipad) to ensure compatibility and responsivness.Chrome developer tools were also used to check for compatibility and responsiveness.Collapsible navbar works correctly on mobile devices. Code was validated using W3C and JsHint validation service.All links were tested manually and will open within same browser tab.I used a lot of console.log() to see if my code us running correctly.

#### Errors

Current Errors: 1.**NOT FIXED YET** On the tutorials page the cards will not load untill user will pick a category from the dropdown menu.The script for loading cards finishes before the navigation script.
Currently working on a fix utilising promises,to allow for the navigation function to finish and then trigger cards function.

## Deployment

This site is hosted using GitHub pages, deployed directly from the master branch. The deployed site will update automatically upon new commits to the master branch.
In order to setup github pages I did the following:

- **Created a new repository:**
  From the main page I clicked on "New repository" button,gave it a name and clicked "Create a repository" button.

- **Published my website:**
  While on the repository main page clicked on "Settings" tab, scrolled down to "Github pages" section.From the dropdown menu chose "master branch" and clicked "Save" button.

- **VS Code Setup:**
  For writing code I've used VisualStudio Code (VS Code).
  To get VS Code working correctly with GitHub,you need to install latest version of Git first,after that you can install VS Code.
  When installation finished I have cloned my repository,first by copying to clipboard the link to repository from the github page and then pasting it after `git clone` command into VS Code terminal.
  After selecting the save folder, proceded to creating files and folders for my project.
  From the source control tab I could stage and commit changes to the repository.
  After entering the commit message I was able to push the commited changes.

To run locally, you can clone this repository directly into the editor of your choice by pasting `git clone https://github.com/misza80/AzureCove.git` into your terminal. To cut ties with this GitHub repository, type `git remote rm origin` into the terminal.

## Credits

For the typing script I have used the library by Matt Boldt which can be found [here](https://github.com/mattboldt/typed.js/).

### Content

All content was written by me.

### Media

The top background image was made by me.
Images in home and categories page were purchased from www.vecteezy.com

### Acknowledgements

Wireframes were made using www.draw.io

Favicon were made using www.favicon.io

**This is for educational use.**
