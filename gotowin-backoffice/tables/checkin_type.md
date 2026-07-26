# `checkin_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| CHECKIN_TYPE_ID | int | NO | PRI | NULL | auto_increment |  |
| CHECKIN_TYPE_NAME | varchar(50) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | CHECKIN_TYPE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "CHECKIN_TYPE_ID": 1,
    "CHECKIN_TYPE_NAME": "บันทึกเข้า",
    "updated_at": null,
    "created_at": null
  },
  {
    "CHECKIN_TYPE_ID": 2,
    "CHECKIN_TYPE_NAME": "บันทึกออก",
    "updated_at": null,
    "created_at": null
  }
]
```
