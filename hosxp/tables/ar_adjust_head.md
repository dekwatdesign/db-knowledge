# `ar_adjust_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ar_adjust_head_id | int(11) | NO | PRI | 0 |  |  |
| ar_id | int(11) | YES | MUL | NULL |  |  |
| adjust_staff | varchar(50) | YES |  | NULL |  |  |
| adjust_reason | varchar(250) | YES |  | NULL |  |  |
| adjust_datetime | datetime | YES |  | NULL |  |  |
| adjust_amount | double(15,3) | YES |  | NULL |  |  |
| adjust_discount | double(15,3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_ix_ar_id | ar_id | no | 1 |
| PRIMARY | ar_adjust_head_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
