# `psych_hhc_family`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_hhc_family_id | int(11) | NO | PRI | 0 |  |  |
| psych_hhc_family_name | varchar(100) | YES |  | NULL |  |  |
| psych_hhc_id | int(11) | YES | MUL | NULL |  |  |
| patient_relation_type_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_patient_relation_type_id | patient_relation_type_id | no | 1 |
| ix_Refpsych_hhc1 | psych_hhc_id | no | 1 |
| PRIMARY | psych_hhc_family_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
