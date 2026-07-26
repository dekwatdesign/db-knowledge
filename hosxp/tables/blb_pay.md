# `blb_pay`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_pay_id | int(11) | NO | PRI | 0 |  |  |
| blb_pay_approve | char(1) | YES |  | NULL |  |  |
| blb_pay_date | date | YES |  | NULL |  |  |
| blb_pay_time | time | YES |  | NULL |  |  |
| blb_request_id | int(11) | YES | MUL | NULL |  |  |
| staff | varchar(100) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| blb_pay_doctor | varchar(6) | YES |  | NULL |  |  |
| blb_pay_crossmatch_reporter | varchar(6) | YES |  | NULL |  |  |
| blb_pay_crossmatch_approve | char(1) | YES |  | NULL |  |  |
| blb_pay_note | varchar(250) | YES |  | NULL |  |  |
| blb_pay_crossmatch_note | varchar(250) | YES |  | NULL |  |  |
| blb_pay_requisition | char(1) | YES |  | NULL |  |  |
| blb_pay_requisition_date | date | YES |  | NULL |  |  |
| blb_pay_requisition_time | time | YES |  | NULL |  |  |
| blb_pay_requisition_depcode | char(3) | YES |  | NULL |  |  |
| blb_pay_requisition_doctor | char(6) | YES |  | NULL |  |  |
| blb_pay_requisition_approve | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_blb_request_id | blb_request_id | no | 1 |
| PRIMARY | blb_pay_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
