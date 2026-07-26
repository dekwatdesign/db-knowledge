# `psych_offences`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_offences_id | int(11) | NO | PRI | 0 |  |  |
| psych_offences_name | varchar(255) | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |
| psych_case_id | int(11) | YES |  | NULL |  |  |
| psych_guilt_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refpsych_guilt2 | psych_guilt_id | no | 1 |
| PRIMARY | psych_offences_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
