# `diagnosis_cc_map`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| diagnosis_cc_map_id | int(11) | NO | PRI | 0 |  |  |
| cc_code_id | int(11) | YES |  | NULL |  |  |
| group_code | varchar(100) | YES |  | NULL |  |  |
| dx_code_map | varchar(250) | YES |  | NULL |  |  |
| icd10 | varchar(7) | YES |  | NULL |  |  |
| note | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | diagnosis_cc_map_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
