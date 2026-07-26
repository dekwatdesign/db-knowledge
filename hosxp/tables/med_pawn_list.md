# `med_pawn_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| med_pawn_list_id | int(11) | NO | PRI | 0 |  |  |
| med_pawn_id | int(11) | YES | MUL | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |
| order_qty | int(11) | YES |  | NULL |  |  |
| pay_qty | int(11) | YES |  | NULL |  |  |
| remain_qty | int(11) | YES |  | NULL |  |  |
| remark_text | text | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES |  | NULL |  |  |
| drugusage | varchar(10) | YES |  | NULL |  |  |
| rcv_guid | varchar(38) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | med_pawn_id | no | 1 |
| PRIMARY | med_pawn_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
