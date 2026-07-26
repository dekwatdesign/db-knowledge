# `med_error`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| med_error_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| doctor_code | varchar(10) | YES |  | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| dep_type | char(3) | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| med_error_process_type_id | int(11) | YES |  | NULL |  |  |
| med_error_risk_type_id | int(11) | YES |  | NULL |  |  |
| officer_id | int(11) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| med_error_note_text | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | med_error_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
