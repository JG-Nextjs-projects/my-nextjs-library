import db from "../../../../../connect"

export default function handler(req, res) {
  const sql = 'SELECT * FROM Book WHERE authorId = ?'
  const params = [req.query.id]

  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }

    res.json(rows)
  })
}
