# `patient_hhc_team_tp`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_hhc_team_tp_id | int(11) | NO | PRI | 0 |  |  |
| patient_hhc_team_tp_name | varchar(100) | YES |  | NULL |  |  |
| doctor_code | varchar(50) | YES | MUL | NULL |  |  |
| active_status | char(1) | YES | MUL | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_hhc_team_template_active | active_status | no | 1 |
| ix_idx_hhc_team_template_creator | doctor_code | no | 1 |
| PRIMARY | patient_hhc_team_tp_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
