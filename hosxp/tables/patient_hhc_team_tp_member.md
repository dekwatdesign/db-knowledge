# `patient_hhc_team_tp_member`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_hhc_team_tp_member_id | int(11) | NO | PRI | 0 |  |  |
| patient_hhc_team_tp_id | int(11) | YES | MUL | NULL |  |  |
| doctor_code | varchar(15) | YES | MUL | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_hhc_team_template_member_doctor_code | doctor_code | no | 1 |
| ix_idx_hhc_team_template_member_template_id | patient_hhc_team_tp_id | no | 1 |
| PRIMARY | patient_hhc_team_tp_member_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
