# `emp_picture`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_picture_id | int(11) | NO | PRI | 0 |  |  |
| emp_picture_name | varchar(150) | YES |  | NULL |  |  |
| emp_id | int(11) | YES |  | NULL |  |  |
| emp_picture_year | char(4) | YES |  | NULL |  |  |
| emp_picture | longblob | YES |  | NULL |  |  |
| emp_picture_profile | char(2) | YES |  | NULL |  |  |
| emp_picture_lastupdate | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_picture_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
