# `operation_clinical_term`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_clinical_term_id | int(11) | NO | PRI | 0 |  |  |
| clinical_term_name | varchar(200) | YES | UNI | NULL |  |  |
| icd9_code | varchar(10) | YES |  | NULL |  |  |
| operation_item_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_clinical_term_name | clinical_term_name | yes | 1 |
| PRIMARY | operation_clinical_term_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
