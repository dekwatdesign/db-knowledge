# `blood_request_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blood_request_detail_id | int(11) | NO | PRI | 0 |  |  |
| blood_request_id | int(11) | YES |  | NULL |  |  |
| blood_request_item_id | int(11) | YES |  | NULL |  |  |
| rh_id | int(11) | YES |  | NULL |  |  |
| request_qty | int(11) | YES |  | NULL |  |  |
| response_qty | int(11) | YES |  | NULL |  |  |
| opi_guid | char(38) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | blood_request_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
