# `ipt_labour_child_med`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_labour_child_med_id | int(11) | NO | PRI | 0 |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ipt_labour_child_med_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
