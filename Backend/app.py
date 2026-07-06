from flask import Flask, request, jsonify
from flask_cors import CORS
from db import get_connection

app = Flask(__name__)
CORS(app)

# ---------- GET ALL TASKS ----------
@app.get("/api/tasks")
def get_tasks():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM tasks ORDER BY id DESC")
    rows = cur.fetchall()
    conn.close()
    return jsonify(rows)

# ---------- ADD TASK ----------
@app.post("/api/tasks")
def add_task():
    title = request.form.get("title")
    description = request.form.get("description")

    conn = get_connection()
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO tasks (title, description) VALUES (%s, %s)",
        (title, description)
    )
    conn.commit()
    conn.close()

    return jsonify({"message": "Task added"})

# ---------- UPDATE TASK ----------
@app.post("/api/tasks/update")
def update_task():
    id = request.form.get("id")
    title = request.form.get("title")
    description = request.form.get("description")
    status = request.form.get("status")

    conn = get_connection()
    cur = conn.cursor()
    cur.execute(
        """
        UPDATE tasks
        SET title=%s, description=%s, status=%s
        WHERE id=%s
        """,
        (title, description, status, id)
    )
    conn.commit()
    conn.close()

    return jsonify({"message": "Task updated"})

# ---------- DELETE TASK ----------
@app.post("/api/tasks/delete")
def delete_task():
    id = request.form.get("id")

    conn = get_connection()
    cur = conn.cursor()
    cur.execute("DELETE FROM tasks WHERE id=%s", (id,))
    conn.commit()
    conn.close()

    return jsonify({"message": "Task deleted"})

if __name__ == "__main__":
    app.run(debug=True)