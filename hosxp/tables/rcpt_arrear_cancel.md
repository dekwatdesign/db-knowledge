# `rcpt_arrear_cancel`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| arrear_cancel_id | int(11) | NO | PRI | 0 |  |  |
| arrear_id | int(11) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| arrear_date | date | YES |  | NULL |  |  |
| arrear_time | time | YES |  | NULL |  |  |
| cancel_datetime | datetime | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| cancel_staff | varchar(25) | YES | MUL | NULL |  |  |
| amount | double(15,3) | YES |  | NULL |  |  |
| pt_type | char(3) | YES |  | NULL |  |  |
| computer | varchar(25) | YES |  | NULL |  |  |
| cancel_computer | varchar(25) | YES |  | NULL |  |  |
| discount_amount | double(15,3) | YES |  | NULL |  |  |
| total_amount | double(15,3) | YES |  | NULL |  |  |
| reason | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cancel_staff | cancel_staff | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | arrear_cancel_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
