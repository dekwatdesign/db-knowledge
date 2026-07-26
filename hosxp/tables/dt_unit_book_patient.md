# `dt_unit_book_patient`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_unit_book_patient_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| oapp_id | int(11) | YES | MUL | NULL |  |  |
| dt_unit_book_reg_id | int(11) | YES | MUL | NULL |  |  |
| staff | varchar(100) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dt_unit_book_reg_id | dt_unit_book_reg_id | no | 1 |
| ix_oapp_id | oapp_id | no | 1 |
| PRIMARY | dt_unit_book_patient_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
