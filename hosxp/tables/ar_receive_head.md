# `ar_receive_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ar_receive_head_id | int(11) | NO | PRI | 0 |  |  |
| ar_id | int(11) | YES |  | NULL |  |  |
| receive_date | date | YES |  | NULL |  |  |
| receive_staff | varchar(100) | YES |  | NULL |  |  |
| receive_type_id | int(11) | YES |  | NULL |  |  |
| total_amount | double(15,3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ar_receive_head_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
