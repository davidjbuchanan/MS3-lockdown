import os
from flask import Flask, render_template, request, flash, render_template, url_for, redirect
from flask_pymongo import PyMongo
from bson.objectid import ObjectId 
from datetime import datetime
from os import path

if path.exists('env.py'):
    import env

app = Flask(__name__)
app.secret_key = os.environ.get("flash_secret")
app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")

mongo = PyMongo(app)

@app.route('/')
def index():
    return render_template("index.html", 
    #recipe=mongo.db.recipe.find()
    )


@app.route('/about')
def about():
    return render_template("about.html")

@app.route('/allRecipes')
def allRecipes():
    return render_template("allRecipes.html", recipe=mongo.db.recipe.find())

@app.route('/yourRecipes')
def yourRecipes():
    return render_template("yourRecipes.html")
    
@app.route('/addRecipes')
def addRecipes():
    return render_template("addRecipes.html", categories=mongo.db.categories.find(), key_information=mongo.db.key_information.find())





@app.route('/insert_recipe', methods=['POST'])
def insert_recipe():
    now = datetime.now().strftime("%B %-d, %Y")
    recipe = mongo.db.recipe
    submit = {
        "username": request.form.get("username"),
        "category_name": request.form.get("category_name"),
        "dish_name": request.form.get("dish_name"),
        "description": request.form.get("description"),
        "ingredients": request.form.getlist("ingredients"),
        "procedures": request.form.getlist("procedures"),
        "dietry_name": request.form.get("dietry_name"),
        "is_gluten_free": request.form.get("is_gluten_free"),
        "is_nut_free": request.form.get("is_nut_free"),
        "is_dairy_free": request.form.get("is_dairy_free"),
        "timestamp": now,
    }
    recipe.insert_one(submit)
    return redirect(url_for('allRecipes'))


"""@app.route('/insert_recipe', methods=['POST'])
def insert_recipe():
    recipe = mongo.db.recipe
    submit = {
        "category_name": request.form.get("category_name"),
        "name": request.form.get("name"),
        "description": request.form.get("description"),
        "ingredients": request.form.getlist("ingredients"),
        "procedures": request.form.getlist("procedures"),
        "dietry_name": request.form.get("dietry_name"),
        "is_gluten_free": request.form.get("is_gluten_free"),
        "is_nut_free": request.form.get("is_nut_free"),
        "is_dairy_free": request.form.get("is_nut_free"),
    }
    recipe.insert_one(submit)
    return redirect(url_for('allRecipes'))
"""
@app.route('/edit_recipe/<recipe_id>')
def edit_recipe(recipe_id):
    the_recipe = mongo.db.recipe.find_one({"_id": ObjectId(recipe_id)})
    all_categories = mongo.db.categories.find()
    all_key_information = mongo.db.key_information.find()
    return render_template("edit_recipe.html", recipe=the_recipe, categories=all_categories, key_information=all_key_information)
    


@app.route('/contact', methods=["GET", "POST"])
def contact():
    if request.method == "POST":
        flash("Thank-you {}, we will be in contact shortly".format(
            request.form["name"]
        ))
    return render_template("contact.html", page_title="Contact")




@app.route('/nutrition')
def nutrition():
    return render_template("nutrition.html")

@app.route('/calm')
def calm():
    return render_template("calm.html")

@app.route('/play')
def play():
    return render_template("play.html")





if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
            port=int(os.environ.get('PORT')),
            debug=True)