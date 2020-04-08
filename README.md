Frameworks Bootstrap

Template from Start Bootstrap https://startbootstrap.com/templates/modern-business/ David T. Miller

Python libraries flask flask_pymongo bson

Content from https://www.jamieoliver.com/recipes/category/books/keep-cooking-and-carry-on/ https://fiveminutemum.com/ https://www.youtube.com/channel/UC295-Dw_tDNtZXFeAPAW6Aw


Add_recipes:

The ability to add ingredients in a one-at-a-time fashion was effected by making the form interactive: the 'add ingredoent' button was included in the form and it generated a new input field on user's demand. Thus allowing the inputing of data to be made easy; enhancing the user's experience. Initial development using JQuery's 'append' method furnished the correct effect on the webpage; however, the new input fields failed to acheive uniqueness i.e. failed to increment in numerical value within the 'name' attribute. This led to MongoDB Atlas' failure to pick up the entered data; a solution was sought. The JQuery was revised to include the 'clone' method but this returned the same outcome as previously described. It was then on review of the Python3 code within the app.py file, that it was noticed that the 'ingredient.insert_one(request.form.to_dict())' command did not allow the addition of multiple data objects to MongoDB Atlas. Once this was updated to produce an array the problem was solved: see code snippet 'submit = {"ingredients": request.form.getlist("ingredients"),}' in the app.py file.   

To compliment the 'add ingredient' button a 'delete ingredient' button was also sought to improve users' UX. This was far more rapidly constructed by employment of JQuery's remove() method. However the original design was of little practical use as it resulted in the stepwise deletion of input fields including the original. To remedy this an if statement was introduced: see code snipet 'if (div.length > 1)'. This stopped deletion of the original input field. 

The add and delete button feature was then implemented for the 'procedures' field in both the 'add recipe' and 'edit recipe' pages.
  

Edit recipes:
A webpage to enable the editing of existing records was made possible by recycling most of the 'all records' page. Input of Jinja code allowed for the records held on MngoDB Atlas to be iterated through and displayed as required.











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
