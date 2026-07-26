# `depcode_oapp_limit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| depcode_oapp_limit_id | int(11) | NO | PRI | 0 |  |  |
| depcode | varchar(3) | YES | MUL | NULL |  |  |
| oapp_date | date | YES |  | NULL |  |  |
| limit_qty | int(11) | YES |  | NULL |  |  |
| depcode_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_depcode | depcode | no | 1 |
| ix_unique | depcode | yes | 1 |
| ix_unique | oapp_date | yes | 2 |
| PRIMARY | depcode_oapp_limit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
