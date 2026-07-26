# `openform_car`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| OPENFORMCAR_ID | bigint unsigned | NO | PRI | NULL | auto_increment |  |
| OPENFORMCAR_CODE | varchar(255) | YES |  | NULL |  |  |
| OPENFORMCAR_NAME | varchar(255) | YES |  | NULL |  |  |
| OPENFORMCAR_STATUS | enum('True','False') | NO |  | NULL |  |  |
| updated_at | datetime | NO |  | NULL |  |  |
| created_at | datetime | NO |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | OPENFORMCAR_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "OPENFORMCAR_ID": 1,
    "OPENFORMCAR_CODE": "12251",
    "OPENFORMCAR_NAME": "12251",
    "OPENFORMCAR_STATUS": "True",
    "updated_at": "2022-07-01 16:18:43",
    "created_at": "2022-02-22 11:11:44"
  }
]
```
