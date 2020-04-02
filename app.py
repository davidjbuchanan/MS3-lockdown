import os
from flask import Flask, render_template, request, flash

from os import path

if path.exists('env.py'):
    import env

app = Flask(__name__)
app.secret_key = os.environ.get("flash_secret")
#app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
#app.config["MONGO_URI"] = os.environ.get("MONGO_URI")


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/about')
def about():
    return render_template("about.html")


@app.route('/recipes')
def recipes():
    return render_template("recipes.html")


@app.route('/nutrition')
def nutrition():
    return render_template("nutrition.html")

@app.route('/calm')
def calm():
    return render_template("calm.html")

@app.route('/play')
def play():
    return render_template("play.html")

@app.route('/contact', methods=["GET", "POST"])
def contact():
    if request.method == "POST":
        flash("Thank-you {}, we will be in contact shortly".format(
            request.form["name"]
        ))
    return render_template("contact.html", page_title="Contact")

if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
            port=int(os.environ.get('PORT')),
            debug=True)