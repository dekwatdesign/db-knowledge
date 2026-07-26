# `patient_history_hpi`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_history_hpi_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| entry_date | date | YES |  | NULL |  |  |
| entry_time | time | YES |  | NULL |  |  |
| doctor_code | varchar(20) | YES |  | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| hpi_text | text | YES |  | NULL |  |  |
| depcode | char(3) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | patient_history_hpi_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
