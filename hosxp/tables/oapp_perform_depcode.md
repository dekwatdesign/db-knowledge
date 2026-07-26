# `oapp_perform_depcode`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| oapp_perform_depcode_id | int(11) | NO | PRI | 0 |  |  |
| depcode | char(3) | YES | MUL | NULL |  |  |
| perform_name | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_depcode | depcode | no | 1 |
| PRIMARY | oapp_perform_depcode_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
