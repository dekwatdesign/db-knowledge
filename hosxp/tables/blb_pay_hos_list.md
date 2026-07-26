# `blb_pay_hos_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_pay_hos_list_id | int(11) | NO | PRI | 0 |  |  |
| blb_pay_hos_id | int(11) | YES | MUL | NULL |  |  |
| blb_bag_id | int(11) | YES | MUL | NULL |  |  |
| blb_pay_hos_list_appr | varchar(50) | YES |  | NULL |  |  |
| blb_pay_hos_list_appr_datetime | datetime | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| pay_hos_list_note | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_blb_bag_id | blb_bag_id | no | 1 |
| ix_blb_pay_hos_id | blb_pay_hos_id | no | 1 |
| PRIMARY | blb_pay_hos_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
