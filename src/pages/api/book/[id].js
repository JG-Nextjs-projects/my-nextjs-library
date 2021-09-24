import db from "../../../../connect"

export default function handler(req, res) {
  const sql = 'SELECT * FROM Book WHERE id = ?'
  const params = [req.query.id]

  db.get(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }

    res.json(row)
  })
}
