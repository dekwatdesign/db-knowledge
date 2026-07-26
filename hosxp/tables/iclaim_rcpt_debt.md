# `iclaim_rcpt_debt`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| iclaim_rcpt_debt_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| debt_date | date | YES | MUL | NULL |  |  |
| debt_time | time | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| amount | decimal(10,0) | YES |  | NULL |  |  |
| paid | char(1) | YES |  | NULL |  |  |
| pt_type | char(3) | YES |  | NULL |  |  |
| computer | varchar(25) | YES |  | NULL |  |  |
| finance_number | varchar(7) | YES |  | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| discount_amount | decimal(10,0) | YES |  | NULL |  |  |
| total_amount | decimal(10,0) | YES |  | NULL |  |  |
| debt_date_time | time | YES |  | NULL |  |  |
| ar_transfer | char(1) | YES |  | NULL |  |  |
| ar_transfer_datetime | datetime | YES |  | NULL |  |  |
| ar_transfer_staff | varchar(25) | YES |  | NULL |  |  |
| remark | varchar(50) | YES |  | NULL |  |  |
| debt_doc_id | varchar(50) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |
| department | char(3) | YES |  | NULL |  |  |
| status | varchar(10) | YES |  | NULL |  |  |
| iclaim_ipd_discharge_id | int(11) | YES |  | NULL |  |  |
| batch_number | varchar(100) | YES |  | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_an | an | no | 1 |
| ix_idx_debt_date | debt_date | no | 1 |
| ix_idx_hn | hn | no | 1 |
| ix_idx_vn | vn | no | 1 |
| PRIMARY | iclaim_rcpt_debt_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
