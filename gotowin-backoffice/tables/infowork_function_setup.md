# `infowork_function_setup`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| FUNTION_SET_ID | int | NO | PRI | NULL | auto_increment |  |
| FUNTION_SET_YEAR | varchar(20) | YES |  | NULL |  |  |
| FUNTION_SET_PERSON_ID | int | YES |  | NULL |  |  |
| FUNTION_SET_LEVEL_ID | varchar(600) | YES |  | NULL |  |  |
| FUNTION_SET_LEVEL_SUB_MAX | varchar(10) | YES |  | True |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | FUNTION_SET_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "FUNTION_SET_ID": 1,
    "FUNTION_SET_YEAR": "2563",
    "FUNTION_SET_PERSON_ID": 2,
    "FUNTION_SET_LEVEL_ID": "6",
    "FUNTION_SET_LEVEL_SUB_MAX": "1",
    "updated_at": "2021-05-12 14:50:35",
    "created_at": "2021-05-12 14:50:35"
  }
]
```
