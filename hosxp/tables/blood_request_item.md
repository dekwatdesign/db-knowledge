# `blood_request_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blood_request_item_id | int(11) | NO | PRI | 0 |  |  |
| blood_request_name | varchar(50) | YES | UNI | NULL |  |  |
| icode | char(7) | YES |  | NULL |  |  |
| service_price1 | double(15,3) | YES |  | NULL |  |  |
| service_price2 | double(15,3) | YES |  | NULL |  |  |
| service_price3 | double(15,3) | YES |  | NULL |  |  |
| service_ipd_price1 | double(15,3) | YES |  | NULL |  |  |
| service_ipd_price2 | double(15,3) | YES |  | NULL |  |  |
| service_ipd_price3 | double(15,3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_blood_request_name | blood_request_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | blood_request_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
