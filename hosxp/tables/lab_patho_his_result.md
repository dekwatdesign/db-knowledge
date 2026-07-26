# `lab_patho_his_result`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_patho_his_result_id | int(11) | NO | PRI | 0 |  |  |
| lab_patho_id | int(11) | YES |  | NULL |  |  |
| doctor | varchar(5) | YES |  | NULL |  |  |
| entry_datetime | datetime | YES |  | NULL |  |  |
| lab_patho_result | longtext | YES |  | NULL |  |  |
| lab_patho_head_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | lab_patho_his_result_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
