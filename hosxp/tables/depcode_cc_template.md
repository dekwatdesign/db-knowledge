# `depcode_cc_template`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| depcode_cc_template_id | int(11) | NO | PRI | 0 |  |  |
| depcode | varchar(3) | YES | MUL | NULL |  |  |
| cc_text | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_depcode | depcode | no | 1 |
| PRIMARY | depcode_cc_template_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
