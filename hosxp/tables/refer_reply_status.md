# `refer_reply_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| refer_reply_status_id | int(11) | NO | PRI | 0 |  |  |
| refer_reply_status_name | varchar(200) | YES | UNI | NULL |  |  |
| export_code | varchar(5) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_refer_reply_status_name | refer_reply_status_name | yes | 1 |
| PRIMARY | refer_reply_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "refer_reply_status_id": 1,
    "refer_reply_status_name": "ตอบรับการส่งต่อ",
    "export_code": "1"
  },
  {
    "refer_reply_status_id": 2,
    "refer_reply_status_name": "ปฏิเสธการส่งต่อ",
    "export_code": "2"
  },
  {
    "refer_reply_status_id": 3,
    "refer_reply_status_name": "เสียชีวิตระหว่างการส่งต่อ",
    "export_code": "3"
  },
  {
    "refer_reply_status_id": 4,
    "refer_reply_status_name": "ไม่พบผู้ป่วย",
    "export_code": "4"
  },
  {
    "refer_reply_status_id": 5,
    "refer_reply_status_name": "อื่นๆ",
    "export_code": "5"
  }
]
```
