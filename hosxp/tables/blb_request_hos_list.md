# `blb_request_hos_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_request_hos_list_id | int(11) | NO | PRI | 0 |  |  |
| blb_request_hos_id | int(11) | YES | MUL | NULL |  |  |
| blb_bag_id | int(11) | YES | MUL | NULL |  |  |
| blb_blood_type_id | int(11) | YES | MUL | NULL |  |  |
| blb_request_hos_order_date | date | YES |  | NULL |  |  |
| blb_request_hos_order_time | time | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_blb_bag_id | blb_bag_id | no | 1 |
| ix_blb_blood_type_id | blb_blood_type_id | no | 1 |
| ix_blb_request_hos_id | blb_request_hos_id | no | 1 |
| PRIMARY | blb_request_hos_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
