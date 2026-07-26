# `dt_lab_quality_chk`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_lab_quality_chk_id | int(11) | NO | PRI | 0 |  |  |
| dt_lab_quality_chk_doctor | varchar(6) | YES |  | NULL |  |  |
| dt_lab_quality_chk_date | date | YES |  | NULL |  |  |
| dt_lab_quality_chk_time | time | YES |  | NULL |  |  |
| dt_lab_quality_chk_note | text | YES |  | NULL |  |  |
| dt_lab_order_id | int(11) | YES |  | NULL |  |  |
| dt_lab_quality_type_id | int(11) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_lab_quality_chk_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
