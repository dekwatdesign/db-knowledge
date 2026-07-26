# `medico_scan_user_input`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(255) | NO | PRI | 0 |  |  |
| his_user | varchar(255) | YES |  | NULL |  |  |
| is_allow | enum('0','1') | YES |  | NULL |  |  |
| note1 | varchar(255) | YES |  | NULL |  |  |
| note2 | varchar(255) | YES |  | NULL |  |  |
| note3 | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
