# `edoc_send_note`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| edoc_send_note_id | int(11) | NO | PRI | 0 |  |  |
| edoc_send_note_name | varchar(150) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | edoc_send_note_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "edoc_send_note_id": 1,
    "edoc_send_note_name": "เพื่อทราบ"
  },
  {
    "edoc_send_note_id": 2,
    "edoc_send_note_name": "ถือปฏิบัติ"
  },
  {
    "edoc_send_note_id": 3,
    "edoc_send_note_name": "ดำเนินการในส่วนที่เกี่ยวข้อง"
  }
]
```
