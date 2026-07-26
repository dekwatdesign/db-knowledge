# `ipt_nurse_oper_cw`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nurse_oper_cw_id | int(11) | NO | PRI | 0 |  |  |
| nurse_oper_id | int(11) | YES |  | NULL |  |  |
| doctor | varchar(7) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| cw_oper_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | nurse_oper_cw_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
