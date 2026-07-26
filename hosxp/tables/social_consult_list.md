# `social_consult_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| social_consult_list_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| social_consult_list_date | date | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refpatient34 | hn | no | 1 |
| PRIMARY | social_consult_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "social_consult_list_id": 1,
    "vn": "671224103014",
    "social_consult_list_date": "2024-12-24",
    "hn": "670000667"
  }
]
```
