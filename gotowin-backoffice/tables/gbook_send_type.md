# `gbook_send_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| SEND_TYPE_ID | int | NO | PRI | NULL | auto_increment |  |
| SEND_TYPE_NAME | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | SEND_TYPE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "SEND_TYPE_ID": 1,
    "SEND_TYPE_NAME": "กลุ่มงาน"
  },
  {
    "SEND_TYPE_ID": 2,
    "SEND_TYPE_NAME": "ฝ่าย/แผนก"
  },
  {
    "SEND_TYPE_ID": 3,
    "SEND_TYPE_NAME": "หน่วยงาน"
  },
  {
    "SEND_TYPE_ID": 4,
    "SEND_TYPE_NAME": "บุคคล"
  }
]
```
