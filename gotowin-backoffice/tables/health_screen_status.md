# `health_screen_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | NULL | auto_increment |  |
| HEALTH_SCREEN_CODE | varchar(255) | YES |  | NULL |  |  |
| HEALTH_SCREEN_NAME | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "ID": 1,
    "HEALTH_SCREEN_CODE": "SCREEN",
    "HEALTH_SCREEN_NAME": "คัดกรอง"
  },
  {
    "ID": 2,
    "HEALTH_SCREEN_CODE": "CONFIRM",
    "HEALTH_SCREEN_NAME": "ยืนยันการตรวจ"
  },
  {
    "ID": 3,
    "HEALTH_SCREEN_CODE": "SUCCESS",
    "HEALTH_SCREEN_NAME": "ตรวจแล้ว"
  }
]
```
