# `ipt_prefer_drg`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_prefer_drg_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| drg | varchar(5) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_an_drg | an | yes | 1 |
| ix_an_drg | drg | yes | 2 |
| PRIMARY | ipt_prefer_drg_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
