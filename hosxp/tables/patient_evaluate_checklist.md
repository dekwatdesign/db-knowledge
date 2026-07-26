# `patient_evaluate_checklist`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_evaluate_checklist_id | int(11) | NO | PRI | 0 |  |  |
| patient_evaluate_id | int(11) | YES |  | NULL |  |  |
| evaluate_form_list_id | int(11) | YES |  | NULL |  |  |
| evaluate_check | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | patient_evaluate_checklist_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
