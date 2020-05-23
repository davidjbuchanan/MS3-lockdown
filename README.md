Frameworks Bootstrap

Template from Start Bootstrap https://startbootstrap.com/templates/modern-business/ David T. Miller

Python libraries flask flask_pymongo bson



Add_recipes:

The ability to add ingredients in a one-at-a-time fashion was effected by making the form interactive: the 'add ingredoent' button was included in the form and it generated a new input field on user's demand. Thus allowing the inputing of data to be made easy; enhancing the user's experience. Initial development using JQuery's 'append' method furnished the correct effect on the webpage; however, the new input fields failed to acheive uniqueness i.e. failed to increment in numerical value within the 'name' attribute. This led to MongoDB Atlas' failure to pick up the entered data; a solution was sought. The JQuery was revised to include the 'clone' method but this returned the same outcome as previously described. It was then on review of the Python3 code within the app.py file, that it was noticed that the 'ingredient.insert_one(request.form.to_dict())' command did not allow the addition of multiple data objects to MongoDB Atlas. Once this was updated to produce an array the problem was solved: see code snippet 'submit = {"ingredients": request.form.getlist("ingredients"),}' in the app.py file.   

To compliment the 'add ingredient' button a 'delete ingredient' button was also sought to improve users' UX. This was far more rapidly constructed by employment of JQuery's remove() method. However the original design was of little practical use as it resulted in the stepwise deletion of input fields including the original. To remedy this an if statement was introduced: see code snipet 'if (div.length > 1)'. This stopped deletion of the original input field. 

The add and delete button feature was then implemented for the 'procedures' field in both the 'add recipe' and 'edit recipe' pages.
  

Edit recipes:
A webpage to enable the editing of existing records was made possible by recycling most of the 'all records' page. Input of Jinja code allowed for the records held on MngoDB Atlas to be iterated through and displayed as required.



# [Lockdown and Thrive](https://herokuapp.com)

<img src="" alt="Lockdown and Thrive images on multiple viewports" width="800">

Whilst we are in this time of uncertainty let us look after ourselves and our loved ones with this helpful website! [Lockdown and Thrive](https://herokuapp.com) is a place to find simple recipes; find ways to entertain younger ones and how to look after oneselves mental wellbeing. You can access the resources and contribute any number of resources to share with the world! 

This website was produced to forfill a coursework assignment for the [Code Institute](https://codeinstitute.net/) Full Stack Software Development course, specifically the **Data Centric Development** module. The objective for this milestone project is to "*Create a web application that allows users to store and easily access cooking recipes*", using the **CRUD** operations of **C**reate, **R**ead, **U**pdate, and **D**elete for their recipes. As such the recipes presented within should not be followed without referring to the source site [**Credits**](#Credits).

---

## Table of Contents
1. [**UX**](#ux)
    - [**User Stories**](#user-stories)
    - [**Design**](#design)
        - [**Framework**](#framework)
        - [**Color Scheme**](#color-scheme)
        - [**Icons**](#icons)
        - [**Typography**](#typography)
    - [**Wireframes**](#wireframes)

2. [**Features**](#features)
    - [**Existing Features**](#existing-features)
    - [**Features Left to Implement**](#features-left-to-implement)

3. [**Technologies Used**](#technologies-used)
    - [**Front-End Technologies**](#front-end-technologies)
    - [**Back-End Technologies**](#back-end-technologies)

4. [**Testing**](#testing)
    - [**Validators**](#validators)
    - [**Compatibility**](#compatibility)
    - [**Known Issues**](#known-issues)

5. [**Deployment**](#deployment)
    - [**Local Deployment**](#local-deployment)
    - [**Remote Deployment**](#remote-deployment)

6. [**Credits**](#credits)
    - [**Content**](#content)
    - [**Media**](#media)
    - [**Code**](#code)
    - [**Acknowledgements**](#acknowledgements)

---

## UX

I decided to build a website that had a utility for helping people cope with the current Covid-19 lockdown. As such it is presented respectfully but is intended to be welcoming and uplifting whilst spaceous and easy to navigate. 

The commercial aspect is minimal with a link to a 'store' (which is under construction) but has been included to indicate that the site could be used commercially. Similarly the home page's 'call-out' is primarily to enable users to subscribe to the site's **CRUD** operations, this could also be commercialised to enable a subscription fee to be collected.

As it contains three topics (feeding, playing and mindfulness) it was important to partition these topics clearly for ease of use. To acheive this the navbar displayed each of these topics in its own discrete, but essentially identical, dropdown menus. Likewise the homepage's body presents three uniform rows, one for each topic. Please note that the 'Eat and Feed' topic is the only topic which has been elaborated, the other two are for future development.

Each page displays an identical navbar and footer and similar body for each page, this was deliberate to aid users' navigation of the site. The navbar is elaborated for the pages where you add or edit a recipe . This was to allow the user to have rapid access to buttons that allow you to add and delete input fields; as this is a floating navbar this is a useful tool for the author/editor of recipes.  

### User Stories

"**_As a user, I would like to_** _____________________________"

:white_check_mark: *denotes items that have been successfully implemented*

- :white_check_mark: *view the site* from **any device** *(mobile, tablet, desktop)*.
- :white_check_mark: *view all recipes* as an **authenticated user**.
- :white_check_mark: *search recipes* by **recipe name**.
- :white_check_mark: *search recipes* by **partial recipe name**.
- :white_check_mark: *add* a **recipe**.
- :white_check_mark: *edit* a **recipe**.
- :white_check_mark: *delete* a **recipe**.
- :white_check_mark: *add* a **category**.
- :white_check_mark: *delete* a **category**.
- :white_check_mark: *sign-up* to **subscription service**.

### Design

A modern business design was chosen for this site. Inspired by the Sky.com website bootstrap cards were used to comparmentalise each unit of information wether that be a call-out or a specific recipe. Each card was styled with subtle shadow attributes and muted colours to draw focus to the card contents and not the background. As such Bootstrap components were utilised heavily due to their simplistic muted styling which were elaborated upon during development.

#### Framework

- [Bootstrap Grid v4.3.1](https://getbootstrap.com/)
- [jQuery 3.4.1](https://code.jquery.com/jquery/)
- [Flask 1.1.1](http://flask.pocoo.org/)

#### Color Scheme

In keeping with the overall *sweet* theme, I have opted for a bright and colorful color scheme. These standard [Materialize Colors](https://materializecss.com/color.html) work quite well for my project.
  
- ![#089191](https://placehold.it/15/089191/089191) `#089191` **dark cyan** - navbar, footer and button background
- ![#ffffff](https://placehold.it/15/ffffff/ffffff) `#ffffff` **white** - text colour
- ![#212529](https://placehold.it/15/212529/212529) `#212529` **dark shade of cyan-blue** - text colour
- ![#910808](https://placehold.it/15/910808/910808) `#910808` **dark red** - text colour (on hover)
- ![#b54484](https://placehold.it/15/b54484/b54484) `#b54484` **mystic maroon** - background colour (sign-up alert)
- ![#e9ecef](https://placehold.it/15/e9ecef/e9ecef) `#e9ecef` **Light grayish blue** - jumbotron, footer and breadcrumb colour
- ![#66b2b2](https://placehold.it/15/66b2b2/66b2b2) `#66b2b2` **light cyan** - navbar dropdown background colour


#### Icons

- **Social Links** : [Font Awesome Icons](https://fontawesome.com/icons?d=gallery)
    - The icons for social media are well complimented for in Font Awesome.
- **Contact Details** : [Material Design Icons](https://material.io/resources/icons/?style=baseline)
    - These were harvested from Material Design purely out of preference.

#### Typography

- [Google Fonts](https://fonts.google.com/)
- [Roboto](https://fonts.google.com/specimen/Roboto)

### Wireframes

[Balsamiq Wireframes](https://balsamiq.com/) have been used due to their eases of use:

All of my wireframes for this project can be found [here](https://github.com/) in the *wireframes* sub-directory.

##### back to [top](#table-of-contents)

---

## Features

### Existing Features

**Dashboard page**
- Page presents a full overview of the site's content enabling rapid movement around site. Here the user can find featured recipes which they can access for scrutiny.

**View all recipes**
- On the *All Recipes* page, all recipes are displayed in the chronological order of production. Each record has a photo, dish name and a timestamp for the date of production.

**Search the database**
- If a user would like to search for a particular dish or by the name of a particular chef, then they can acces the *Search Recipe* page from the navbar. This results in the display of a 'Found Recipes' page to the user, this is a truncated version of the 'All Recipes' page.

**Add a Recipe**
- **C**RUD Create a new recipe. The 'Add Recipe' page has an adapted navbar that allows the addition of extra input fields for ingredients and procedures. This was installed to assist the user when systematically additing lists and is particularly beneficial whilst working on small viewports. This list is enumerated to aid the recipe author.
The addition of a timestamp that records the date of the record's creation.

**Update a Recipe**
- CR**U**D Update an existing recipe. The 'Edit Recipe' page has the same features as the 'Add Recipe' page and is pre-populated with existing values. Again the adapted navbar has great utility allowing individual ingredients and procedures to be deleted without impact to the rest of the document. The list has also been enumerated with the ability to add further fields.

**View a Recipe**
- C**R**UD Read recipes, either from the main page, the 'Found Recipes' or the 'All Recipes' pages. From here, users also have additional options:
    - CR**U**D Update the recipe.
    - CRU**D** Delete the recipe.
    - Strikethrough completed recipe steps i.e. an onclick event has been added to enable the user to score-off completed tasks.

**Delete a Recipe**
- CRU**D** Delete a recipe. 

**View all categories**
- Similar to *All Recipes* there is an *All Categories* page, where users can view all food categories e.g. lunch, dinner, snack etc. From this page they can also:
    - **C**RUD Create a new category
    - CRU**D** Delete a category

### Features Left to Implement

**Pagination**
- In the event of the database becoming larger than 10/11 entries then a multipage arrangement will be required for the 'All Recipes' page.

**Authentication**
- login and account details will be required to render this website useful as it is currently defensless to malicious attack i.e. complete deletion of the database or indedd inclusion of unvetted information.

**Content Elaboration**
- Of the other two other main topics (Play & Learn and Rest & Relax) and the store page to add a commercial element.

**Confirmation modals**
- An essential addition for inadvertant deletion of records

##### back to [top](#table-of-contents)

## Technologies Used

- [Gitpod](https://www.gitpod.io/) - Used as my primary IDE for coding.
- [GitHub](https://github.com/) - Used as remote storage of my code online.

### Front-End Technologies

- [HTML](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) - Used as the base for markup text.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3) - Used as the base for cascading styles.
- [jQuery 3.4.1](https://code.jquery.com/jquery/) - Used as the primary JavaScript functionality.
- [Bootstrap Grid v4.3.1](https://getbootstrap.com/) - Used as the overall design framework.

### Back-End Technologies

- **Flask**
    - [Flask 1.1.1](http://flask.pocoo.org/) - Used as a microframework.
    - [Werkzeug 1.0.1](https://werkzeug.palletsprojects.com/en/0.16.x/) 
    - [Jinja 2.11.1](http://jinja.pocoo.org/docs/2.10/) - Used for templating with Flask.
    - [Flask-PyMongo 2.3.0](https://flask-pymongo.readthedocs.io/en/latest/) - an open source database that stores flexible JSON-like “documents”.
<!-- Note: to check for which version of Jinja you are using type 'pip3 show jinja2; into cli -->
- **Heroku**
    - [Heroku](https://www.heroku.com) - Used for app hosting.
- **Python**    
    - [PyMongo 3.10.1](https://api.mongodb.com/python/current/) - Used as the Python API for MongoDB.
    - [MongoDB Atlas](https://www.mongodb.com/) - Used to store my database in the 'cloud'.
    - [Python 3.7.7](https://www.python.org/) - Used as the back-end programming language.

##### back to [top](#table-of-contents)
---

# Testing

:white_check_mark: *denotes items that have been successfully implemented*

**Basic navigation**
- :white_check_mark: Links tested on navbar (& navbar toggle button), footer and breadcrumb
- :white_check_mark: Links tested on carousel
- :white_check_mark: Links tested on 'under construction page'
- :white_check_mark: Links tested on under construction
- :white_check_mark: Alert dismiss
- :white_check_mark: Alert link to subscribe page
- :white_check_mark: Footer's Social icons openning to link in a new webpage

**Responsiveness** 
Tested on portrait and landscape viewport for the following viewports
- :white_check_mark: Apple iPad pro
- :white_check_mark: Apple iPad
- :white_check_mark: Apple iPhone 5/SE/6/7/8/X/6 plus/7 plus/8 plus
    
Note: when tested on actual iPhone 6 the background-attachment: fixed was not compatible with iOS - browsers. On Chrome and Safari in iOS, the background photos appeared zoomed-in and blurry. To fix this, the .background-attachment: scroll property - value was added in a media query.
    
- :white_check_mark:Samsung Galaxy S5
- :white_check_mark:Pixel 2/2 XL

Responsiveness tested on landscape viewport for the following viewports
- :white_check_mark: Microsoft Surface 2 laptop  (1504 x 892 px)
- :white_check_mark: Dell XPS laptop (13.4 inch, 1920 x 1080 px)
- :white_check_mark: Desktop (1680 x 939 px)
- :white_check_mark: iMac 27 inch (5120 X 2880 px)

**Sign up form validation**
- **Required input fields include:**
    - :white_check_mark: Full name
    - :white_check_mark: Occupation
    - :white_check_mark: Phone number
    - :white_check_mark: Email address: input field requires an '@' character
- **:white_check_mark: The esential worker checkbox is not a required**
- **:white_check_mark: On successful completion of the form the user is presented by a 'flash' feedback banner**

**Search page / functionality:**
    - :white_check_mark: case sensitive searches of full dish names, partial dish names and usernames (i.e. recipe authors)

**Add category page / functionality:**
    - :white_check_mark: add categories and render to 'all categories' page

**Add recipe page / functionality:**
    - :white_check_mark: add recipes and render to 'all recipes' page. 

**Edit recipe page / functionality:**
    - :white_check_mark:  edit recipes and render to 'all recipes' page. 

**Compatability**
    - :white_check_mark: Internet Explorer (version 11.0.185):  Images within cards were found to be distorted on initial tsting, i.e. not in width but in height, where the height reverted to that of the original image. To rectify the distortion a .d-block class was added to the parent div i.e. div class="card d-block h-100 shadow". Credit jeroendesloovere @ https://github.com/twbs/bootstrap/issues/21885. 
    - :white_check_mark: Mozilla (76.0.1):
    - :white_check_mark: Safari (xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx):
    - :white_check_mark: Microsoft Edge ( 44.18362.449.0):
    - :white_check_mark: Google Chrome (Version 81.0.4044.138):


### Validators

**HTML**
- [W3C HTML Validator](https://validator.w3.org) - Unfortunately the W3C Validator for HTML does not understand the Jinja templating syntax, so it therefore shows a lot of errors with regards to `{{ variables }}`, e.g.:
    -   img class="img-fluid rounded" src="{{item.picture}}" alt="image of food"        (from all_recipes.html)
    -   value="{{cat.category_name}}">{{cat.category_name}}                             (from recipe.html)

IO Error: HTTP resource not retrievable. The HTTP status from the remote server was: 405.           from found_recipe.html

Aside from these errors, all of the remaining code is perfectly validating. 

**CSS**
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) - I am using `:root{}` variables in my CSS, which isn't [yet?] recognized by the validator. This is causing several **Parsing Errors**, when in fact they are not errors, and work perfectly fine.
- **Property Errors**
    -   *abbr[data-original-title], abbr[title]* - Property text-decoration-skip-ink doesn't exist : none
    -   *.toast* - Property backdrop-filter doesn't exist : blur(10px) 

These errors incurred no impact on the rendered pages and were therefore ignored.

**JavaScript**
- [JShint](https://jshint.com/)
    - "There are **11** functions in this file.
    Function with the largest signature take **1** arguments, while the median is **0**.
    Largest function has **21** statements in it, while the median is **2**.
    The most complex function has a cyclomatic complexity value of **2** while the median is **1**."
    One undefined variables:
        - `$` (12 times - this is for jQuery)
        - line 155	'validation' is defined but never used.
- [JSesprima](http://esprima.org/demo/validate.html)
    - "Code is syntactically valid."
- [Beautify Tools](http://beautifytools.com/javascript-validator.php)
    - line 155	'validation' is defined but never used.

**Python**
- [PEP8 Online](http://pep8online.com/)

    -  E402 errors (module level import not at top of file) did not impact the functionality of the app. They were left in place due to the app comprising a single py file and listing the imports at the top seemed tidy.  
        -   line 4, from flask_pymongo import PyMongo
        -   line 5, from bson.objectid import ObjectId
        -   line 6, from datetime import datetime
        -   line 7, from os import path
Other than the list above the app.py file was PEP8 compliant

### Known Issues

During development, I discovered two issues after committing to GitHub. For both of these bugs, I opened and *issue* on GitHub so I could come back and properly fix them.

- **Flaw with cross-site resources for images and icons**
    - http://fontawesome.com cookie is set with sameSite attribute.
    - Images from http://itv.com and http://bbcgoodfood.com have cookies set with sameSite attribute.
- **404 error**
    - DevTools failed to load SourceMap: Could not load content for chrome-extension://dodmmooeoklaejobgleioelladacbeki/dist/gitpodify.bundle.js.map.

##### back to [top](#table-of-contents)

---

## Deployment

### Local Deployment

Please note - in order to run this project locally on your own system, you will need the following installed:
- [Python3](https://www.python.org/downloads) to run the application.
- [PIP](https://pip.pypa.io/en/stable/installing) to install all app requirements.
- Any IDE such as [Gitpod](https://www.gitpod.io/) or [Microsoft Visual Studio Code](https://code.visualstudio.com).
- [GIT](https://www.atlassian.com/git/tutorials/install-git) for cloning and version control.
- [MongoDB](https://www.mongodb.com) to develop your own database either locally or remotely on MongoDB Atlas.

Next, there's a series of steps to take in order to proceed with local deployment:

- Clone this GitHub repository by either clicking the green *Clone or download* button and downloading the project as a zip-file (remember to unzip it first), or by entering the following into the Git CLI terminal:
    - `git clone https://github.com/davidjbuchanan/lockdownagain.git'.
- Navigate to the correct file location after unpacking the files.
    - `cd <path to folder>`
- Create a `.env` file with your credentials. Be sure to include your *MONGO_URI* and *SECRET_KEY* values.
- Create a `Procfile` :
    - `echo web:python app.py > Procfile`
- Install all requirements from the [requirements.txt](https://github.com/davidjbuchanan/lockdownagain/blob/master/requirements.txt) file using this command:
    - `sudo -H pip3 -r requirements.txt`
- Sign up for a free account on [MongoDB](https://www.mongodb.com) and create a new Database called **lockdownDB**. The *Collections* in that database should be as follows:

**CATEGORIES**
```
_id: <ObjectId>
username: <string>
category_name: <string>
timestamp: <string>
```

**KEY_INFORMATION**
```
_id: <ObjectId>
dietry_name: <string>
```

**RECIPE**
```
_id: <ObjectId>
feature: <string>
picture: <string>
category_name:
dish_name: <string>
description: <string>
ingredients: <array>
procedures: <array>
dietry_name: <string>
is_gluten_free: <null>
is_nut_free: <null>
is_dairy_free: <null>
calories: <string>
fat: <string>
saturates: <string>
sugar: <string>
salt: <string>
protein: <string>
carbs: <string>
fibre: <string>
timestamp: <string>
edit_timestamp: <string>
```
Note: that even after adding these fields they will not be populated with any recipes; as such, the app will be voide of content.

- You should now be able to launch your app using the following command on the Werzeug development server:
    - `python3 app.py`
- The app should now be running on *localhost* and, when using Gitpod IDE, render an address similar to `https://8080-bce9ad25-9922-4648-b249-d83204aa0bf4.ws-eu01.gitpod.io/`.

### Remote Deployment

This site is currently deployed on [Heroku](https://www.heroku.com/) using the **master** branch on GitHub. To implement this project on Heroku, the following steps were taken:

1. Create a **requirements.txt** file so Heroku can install the required dependencies to run the app.
    - `sudo pip3 freeze --local > requirements.txt`
    - My file can be found [here](https://github.com/davidjbuchanan/lockdownagain/blob/master/requirements.txt).
2. Create a **Procfile** to tell Heroku what type of application is being deployed, and how to run it.
    - `echo web: python run.py > Procfile`
    - My file can be found [here](https://github.com/davidjbuchanan/lockdownagain/blob/master/Procfile).
4. Sign up for a free Github account, create your project repository. From your IDE ommit and push to your Github repository.
4. Sign up for a free Heroku account, create your project app.
5. Push the code from your IDE to Heroku via Github. In Heroku click the **Deploy** tab, at which point you can *Connect GitHub* as the *Deployment Method*, and select *Enable Automatic Deployment*.
6. In the Heroku **Settings** tab, click on the *Reveal Config Vars* button to configure environmental variables as follows:
    - **IP** : `0.0.0.0`
    - **PORT** : `5000`
    - **MONGO_URI** : `<link to your Mongo DB>`
    - **SECRET_KEY** : `<your own secret key>`
    - **MONGO_DBNAME** : `<your Mongo DB's name>`
7. Your app should be successfully deployed to Heroku at this point.

##### back to [top](#table-of-contents)

---

## Credits

### Content

- **Recipe - description, ingredients and preparation** 
    - [Jamie Oliver - A cracking burger](https://www.jamieoliver.com/recipes/beef-recipes/a-cracking-burger/)
    - [Sara Buenfeld - Beetroot & halloumi salad with pomegranate and dill](https://www.bbcgoodfood.com/recipes/beetroot-halloumi-salad-pomegranate-dill)
    - [Anonymous - Cafe Style Grilled Chicken Sandwiches](https://www.allrecipes.com/recipe/223091/cafe-style-grilled-chicken-sandwiches/)
    - [Jennifer Joyce - Baked piri-piri tilapia with crushed potatoes](https://www.bbcgoodfood.com/recipes/baked-piri-piri-tilapia-crushed-potatoes)
    - [Simon Hopkinson - Steak and perfectly cooked chips](https://www.bbc.co.uk/food/recipes/steak_and_perfectly_77968)
    - [Mary Berry - Rack of lamb with salsa verde](https://www.bbc.co.uk/food/recipes/rack_of_lamb_with_salsa_86126)
    - [John Torode - Cheat Pizzas](https://www.itv.com/thismorning/food/john-torodes-cheats-pizzas)
    - [James Martin - Mussels-in-a-cob](https://www.jamesmartinchef.co.uk/recipes/mussels-in-a-cob/)
    - [James Martin - Chocolate and walnut fondant](https://www.jamesmartinchef.co.uk/recipes/chocolate-and-walnut-fondant/)
- **Play - description** 
    - [Hasbro - Boardgames](https://www.amazon.co.uk/Hasbro-Gaming-Monopoly-Classic-Game/dp/B073FTR5VV)
    - [Apple - Augmented Reality](https://developer.apple.com/augmented-reality/)
    - [SWGFL - Gaming](https://swgfl.org.uk/magazine/what-is-gaming/)
- **Rest - description**
    - [Britannica - Pottery](https://www.britannica.com/art/pottery)
    - [Crayola - Colouring](https://www.crayola.com/featured/free-coloring-pages/)
    - [Saga - Crafting](https://www.saga.co.uk/magazine/home-garden/craft-hobbies/crafting)

### Media

Sources of the images used on this site:

- **Photographic Images** : [Pexels.com](https://www.pexels.com/)
    - [Pixabay - page not found](https://www.pexels.com/photo/building-construction-site-work-38293/)
    - [Pixabay - crayons](https://www.pexels.com/photo/arts-and-crafts-child-close-up-color-159579/)
    - [Pixabay - pottery](https://www.pexels.com/photo/adult-arts-and-crafts-clay-dirty-357428/)
    - [Nathan Cowley - subscription](https://www.pexels.com/photo/adult-cutting-daylight-facial-expression-1153369/)
    - [cottonbro - egg painting](https://www.pexels.com/photo/childred-decorating-eggs-3972178/)
    - [Julia M Cameron - VR girl](https://www.pexels.com/photo/girl-in-white-and-pink-shirt-wearing-white-vr-goggles-4144041/)
    - [Julia M Cameron - iMac child](https://www.pexels.com/photo/photo-of-child-watching-through-imac-4145038/)
    - [Suzy Hazelwood - Monopoly](https://www.pexels.com/photo/hotrod-die-cast-model-on-board-1422673/)
    - [Jessica Lewis - gaming](https://www.pexels.com/photo/two-boy-and-girl-holding-game-controllers-1103563/)
    - [Valeria Boltneva - fish dish](https://www.pexels.com/photo/fried-fish-with-vegetables-dish-on-teal-plate-1516415/)
    - [Valeria Boltneva - burger](https://www.pexels.com/photo/fried-fish-with-vegetables-dish-on-teal-plate-1516415/)
    - [Anton Porsche - sandwhich](https://www.pexels.com/photo/vegetale-and-meat-sandwhich-133578/)
    - [Sharon McCutcheon - painted hands](https://www.pexels.com/photo/4k-wallpaper-adorable-blur-boy-1148998/)
    - [Daria Obymaha - girl cooking](https://www.pexels.com/photo/little-girl-cooking-1684032/)
- **mockup image in README** : [techsini](https://techsini.com/multi-mockup/)

### Code

- **HTML template**
    - [David T. Miller - Start Bootstrap](https://startbootstrap.com/templates/modern-business/)

### README
- **Template and content**
    - [TravelTimN](https://github.com/TravelTimN/ci-milestone04-dcd)

### Acknowledgements
- Victor Miclovich
    - My Code Institute mentor.
- Code Institute Tutors

##### back to [top](#table-of-contents)













<img src="https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png" style="margin: 0;">

Welcome davidjbuchanan,

This is the Code Institute student template for Gitpod. We have preinstalled all of the tools you need to get started. You can safely delete this README.md file, or change it for your own project.

## Gitpod Reminders

To run a frontend (HTML, CSS, Javascript only) application in Gitpod, in the terminal, type:

`python3 -m http.server`

A blue button should appear to click: *Make Public*,

Another blue button should appear to click: *Open Browser*.

To run a backend Python file, type `python3 app.py`, if your Python file is named `app.py` of course.

A blue button should appear to click: *Make Public*,

Another blue button should appear to click: *Open Browser*.

In Gitpod you have superuser security privileges by default. Therefore you do not need to use the `sudo` (superuser do) command in the bash terminal in any of the backend lessons.

## Updates Since The Instructional Video

We continually tweak and adjust this template to help give you the best experience. Here are the updates since the original video was made:

**February 2020:** The initialisation files now _do not_ auto-delete. They will remain in your project. You can safely ignore them. They just make sure that your workspace is configured correctly each time you open it. It will also prevent the Gitpod configuration popup from appearing.

**December 2019:** Added Eventyret's Bootstrap 4 extension. Type `!bscdn` in a HTML file to add the Bootstrap boilerplate. Check out the <a href="https://github.com/Eventyret/vscode-bcdn" target="_blank">README.md file at the official repo</a> for more options.

--------

Happy coding!
