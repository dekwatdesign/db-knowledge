# `patient_covid19_hi`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_covid19_hi_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| vn | varchar(12) | YES | UNI | NULL |  |  |
| cid | char(13) | YES | MUL | NULL |  |  |
| doctor_code | varchar(20) | YES |  | NULL |  |  |
| confirm_discharge | char(1) | YES |  | NULL |  |  |
| discharge_date | date | YES |  | NULL |  |  |
| discharge_time | time | YES |  | NULL |  |  |
| register_date | date | YES | MUL | NULL |  |  |
| followup_food_qty | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cid | cid | no | 1 |
| ix_hn | hn | no | 1 |
| ix_register_date | register_date | no | 1 |
| ix_vn | vn | yes | 1 |
| PRIMARY | patient_covid19_hi_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
