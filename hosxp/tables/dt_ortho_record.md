# `dt_ortho_record`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_ortho_record_id | int(11) | NO | PRI | 0 |  |  |
| dt_ortho_record_date | date | YES |  | NULL |  |  |
| dt_ortho_record_list | varchar(255) | YES |  | NULL |  |  |
| dt_ortho_record_fee | double(15,2) | YES |  | NULL |  |  |
| dt_ortho_record_instructor | varchar(100) | YES |  | NULL |  |  |
| dt_ortho_main_id | int(11) | YES |  | NULL |  |  |
| dt_ortho_record_dentist_code | varchar(15) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_ortho_record_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
