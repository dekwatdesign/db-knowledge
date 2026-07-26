# `bb_blood_request_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bb_blood_request_detail_id | int(11) | NO | PRI | 0 |  |  |
| bb_blood_request_id | int(11) | YES | MUL | NULL |  |  |
| bb_product_group_id | int(11) | YES |  | NULL |  |  |
| bb_blood_request_qty | int(11) | YES |  | NULL |  |  |
| bb_blood_request_pay | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_bb_blood_request_id | bb_blood_request_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | bb_blood_request_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
