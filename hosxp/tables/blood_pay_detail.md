# `blood_pay_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blood_pay_detail_id | int(11) | NO | PRI | 0 |  |  |
| blood_request_detail_id | int(11) | YES | MUL | NULL |  |  |
| blood_lotno | varchar(30) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| staff | varchar(15) | YES |  | NULL |  |  |
| approve_staff | varchar(15) | YES |  | NULL |  |  |
| blood_detail_type_id | int(11) | YES |  | NULL |  |  |
| service_price | double(15,3) | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_blood_request_detail_id | blood_request_detail_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | blood_pay_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
