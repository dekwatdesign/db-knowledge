# `psych_judgment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_judgment_id | int(11) | NO | PRI | 0 |  |  |
| psych_judgment_result | varchar(255) | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |
| psych_case_id | int(11) | YES | MUL | NULL |  |  |
| psych_offences_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refpsych_case3 | psych_case_id | no | 1 |
| PRIMARY | psych_judgment_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
