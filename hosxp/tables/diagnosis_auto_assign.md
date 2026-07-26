# `diagnosis_auto_assign`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| diagnosis_auto_assign_id | int(11) | NO | PRI | 0 |  |  |
| diagnosis_auto_assign_name | varchar(255) | YES |  | NULL |  |  |
| diagnosis_auto_assign_formname | varchar(255) | YES | MUL | NULL |  |  |
| diagnosis_auto_assign_icd10 | varchar(10) | YES | MUL | NULL |  |  |
| diagnosis_auto_assign_active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_diagnosis_auto_assign_formname | diagnosis_auto_assign_formname | no | 1 |
| ix_idx_diagnosis_auto_assign_icd10 | diagnosis_auto_assign_icd10 | no | 1 |
| PRIMARY | diagnosis_auto_assign_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
