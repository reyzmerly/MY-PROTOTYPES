import pymysql
import os

def get_connection():
    return pymysql.connect(
        host=os.getenv("hayabusa.proxy.rlwy.net"),
        user=os.getenv("root"),
        password=os.getenv("gcfzImRXSJzmtjfplbPsoWuotsXEOjhL"),
        db=os.getenv("railway"),
        port=int(os.getenv("58615")),
        cursorclass=pymysql.cursors.DictCursor
    )
