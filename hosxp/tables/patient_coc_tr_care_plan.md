# `patient_coc_tr_care_plan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_coc_tr_care_plan_id | int(11) | NO | PRI | 0 |  |  |
| patient_coc_transfer_regist_id | int(11) | YES | MUL | NULL |  |  |
| patient_coc_plan_type_id | int(11) | YES |  | NULL |  |  |
| is_register | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ctri | patient_coc_transfer_regist_id | no | 1 |
| PRIMARY | patient_coc_tr_care_plan_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
