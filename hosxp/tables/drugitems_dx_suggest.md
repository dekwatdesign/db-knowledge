# `drugitems_dx_suggest`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drugitems_dx_suggest_id | int(11) | NO | PRI | 0 |  |  |
| icode | varchar(7) | YES | MUL | NULL |  |  |
| dx_text | varchar(250) | YES | MUL | NULL |  |  |
| suggest_rtf_note | varchar(4000) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_code_text | dx_text | yes | 1 |
| ix_code_text | icode | yes | 2 |
| ix_dx_text | dx_text | no | 1 |
| ix_icode | icode | no | 1 |
| PRIMARY | drugitems_dx_suggest_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
