# `ptnote_depcode`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ptnote_depcode_id | int(11) | NO | PRI | 0 |  |  |
| ptnote_id | int(11) | YES | MUL | NULL |  |  |
| depcode | varchar(3) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_key1 | ptnote_id | no | 1 |
| ix_key1 | depcode | no | 2 |
| ix_key1_index | depcode | no | 1 |
| ix_key1_index | ptnote_id | no | 2 |
| ix_ptnote_id | ptnote_id | no | 1 |
| PRIMARY | ptnote_depcode_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
