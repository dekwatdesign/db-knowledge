# `sks_bill_tran`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sks_bill_tran_id | int(11) | NO | PRI | 0 |  |  |
| sks_bill_id | int(11) | YES | MUL | NULL |  |  |
| station | varchar(20) | YES |  | NULL |  |  |
| authcode | varchar(50) | YES |  | NULL |  |  |
| dttran | datetime | YES |  | NULL |  |  |
| hcode | varchar(5) | YES |  | NULL |  |  |
| invcode | varchar(20) | YES |  | NULL |  |  |
| billno | varchar(25) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| memberno | varchar(20) | YES |  | NULL |  |  |
| amount | double(15,3) | YES |  | NULL |  |  |
| paid | double(15,3) | YES |  | NULL |  |  |
| vercode | varchar(20) | YES |  | NULL |  |  |
| tflag | varchar(20) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| tr_complete | char(1) | YES |  | NULL |  |  |
| reply_datetime | datetime | YES |  | NULL |  |  |
| error_code | varchar(30) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_sks_bill_id | sks_bill_id | no | 1 |
| PRIMARY | sks_bill_tran_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
