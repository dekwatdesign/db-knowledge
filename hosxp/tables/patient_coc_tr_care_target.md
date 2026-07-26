# `patient_coc_tr_care_target`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_coc_tr_care_target_id | int(11) | NO | PRI | 0 |  |  |
| patient_coc_transfer_regist_id | int(11) | YES | MUL | NULL |  |  |
| patient_coc_care_type_id | int(11) | YES |  | NULL |  |  |
| target_note | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_tri | patient_coc_transfer_regist_id | no | 1 |
| PRIMARY | patient_coc_tr_care_target_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
