# `diagnosis_notify`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| diagnosis_notify_id | int(11) | NO | PRI | 0 |  |  |
| icd10 | varchar(10) | YES | MUL | NULL |  |  |
| token | varchar(250) | YES |  | NULL |  |  |
| notify_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_icd10 | icd10 | no | 1 |
| PRIMARY | diagnosis_notify_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
