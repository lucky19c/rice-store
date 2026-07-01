import mysql.connector

connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Luckyboy.19",
    database="rice_business"
)

if connection.is_connected():
    print("Database connected!")