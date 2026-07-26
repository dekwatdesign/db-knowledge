# `openformperdev`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| OPENFORMDEV_ID | bigint unsigned | NO | PRI | NULL | auto_increment |  |
| OPENFORMDEV_CODE | varchar(255) | YES |  | NULL |  |  |
| OPENFORMDEV_NAME | varchar(255) | YES |  | NULL |  |  |
| OPENFORMDEV_STATUS | enum('True','False') | NO |  | NULL |  |  |
| updated_at | datetime | NO |  | NULL |  |  |
| created_at | datetime | NO |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | OPENFORMDEV_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "OPENFORMDEV_ID": 1,
    "OPENFORMDEV_CODE": "10999",
    "OPENFORMDEV_NAME": "โรงพยาบาลสีชมพู",
    "OPENFORMDEV_STATUS": "False",
    "updated_at": "2021-10-19 03:44:54",
    "created_at": "2021-09-06 10:46:07"
  }
]
```
