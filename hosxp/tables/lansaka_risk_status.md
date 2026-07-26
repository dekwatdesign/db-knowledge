# `lansaka_risk_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | char(1) | NO | PRI |  |  |  |
| name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "id": "1",
    "name": "รอเจ้าหน้าที่รับเรื่อง"
  },
  {
    "id": "2",
    "name": "เจ้าหน้าที่รับเรื่องแล้ว"
  },
  {
    "id": "3",
    "name": "ขอเวทีทบทวน"
  },
  {
    "id": "4",
    "name": "ทบทวนเหตุการณ์เรียบร้อยแล้ว"
  }
]
```
