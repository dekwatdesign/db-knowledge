# `patient_copd_scr_assmt`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_copd_scr_assmt_id | int(11) | NO | PRI | 0 |  |  |
| patient_copd_screen_id | int(11) | YES | MUL | NULL |  |  |
| score_1 | int(11) | YES |  | NULL |  |  |
| score_2 | int(11) | YES |  | NULL |  |  |
| score_3 | int(11) | YES |  | NULL |  |  |
| score_4 | int(11) | YES |  | NULL |  |  |
| score_5 | int(11) | YES |  | NULL |  |  |
| score_6 | int(11) | YES |  | NULL |  |  |
| score_7 | int(11) | YES |  | NULL |  |  |
| score_8 | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | patient_copd_screen_id | no | 1 |
| PRIMARY | patient_copd_scr_assmt_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
