# `psych_instr_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_instr_detail_id | int(11) | NO | PRI | 0 |  |  |
| psych_instr_id | int(11) | YES | MUL | NULL |  |  |
| psych_instr_type_id | int(11) | YES | MUL | NULL |  |  |
| psych_instr_result_type_id | int(11) | YES | MUL | NULL |  |  |
| psych_instr_detail_note | text | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_psych_instr_id | psych_instr_id | no | 1 |
| ix_psych_instr_result_type_id | psych_instr_result_type_id | no | 1 |
| ix_psych_instr_type_id | psych_instr_type_id | no | 1 |
| PRIMARY | psych_instr_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
