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
    return render_template("index.html")

@app.route('/all_recipes')
def all_recipes():
    return render_template("all_recipes.html", recipe=mongo.db.recipe.find())

@app.route('/your_recipes')
def your_recipes():
    return render_template("your_recipes.html")
    
@app.route('/add_recipe')
def add_recipe():
    return render_template("add_recipe.html", categories=mongo.db.categories.find(), key_information=mongo.db.key_information.find())


#------------------------------Start search functionality---------------------------------------

@app.route('/search_recipes')
def search_recipes():
    return render_template("search_recipes.html")

@app.route('/found_recipes', methods=['POST'])
def found_recipes():
    
    coll = mongo.db.recipe
    sought = request.form.get("users_search_input")
    result = coll.find({"dish_name": {"$regex": sought}})
    return render_template("found_recipes.html", result=result)


#------------------------------End search functionality---------------------------------------






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
    return redirect(url_for('all_recipes'))

@app.route('/edit_recipe/<recipe_id>')
def edit_recipe(recipe_id):
    the_recipe = mongo.db.recipe.find_one({"_id": ObjectId(recipe_id)})
    all_categories = mongo.db.categories.find()
    all_key_information = mongo.db.key_information.find()
    return render_template("edit_recipe.html", recipe=the_recipe, categories=all_categories, key_information=all_key_information)
    
@app.route('/update_recipe/<recipe_id>', methods=["POST"])
def update_recipe(recipe_id):
    recipe = mongo.db.recipe
    recipe.update({'_id': ObjectId(recipe_id)},
    {
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
     
    })
    return redirect(url_for('all_recipes'))

@app.route('/delete_recipe/<recipe_id>')
def delete_recipe(recipe_id):
    mongo.db.recipe.remove({'_id': ObjectId(recipe_id)})
    return redirect(url_for('all_recipes'))

@app.route('/all_categories')
def all_categories():
    return render_template("all_categories.html", categories=mongo.db.categories.find())

@app.route('/add_category')
def add_category():
    return render_template("add_category.html")

@app.route('/insert_category', methods=['POST'])
def insert_category():
    now = datetime.now().strftime("%B %-d, %Y")
    category = mongo.db.categories
    submit = {
        "username": request.form.get("username"),
        "category_name": request.form.get("category_name"),
        "timestamp": now,
    }
    category.insert_one(submit)
    return redirect(url_for('all_categories'))

@app.route('/delete_category/<category_id>')
def delete_category(category_id):
    mongo.db.categories.remove({'_id': ObjectId(category_id)})
    return redirect(url_for('all_categories'))









@app.route('/subscribe', methods=["GET", "POST"])
def subscribe():
    if request.method == "POST":
        flash("Thank-you {}, we will be in contact shortly".format(
            request.form["name"]
        ))
    return render_template("subscribe.html", page_title="Subscribe")



@app.route('/about')
def about():
    return render_template("about.html")



if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
            port=int(os.environ.get('PORT')),
            debug=True)