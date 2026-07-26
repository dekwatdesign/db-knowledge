# `blb_pay_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_pay_list_id | int(11) | NO | PRI | 0 |  |  |
| blb_pay_id | int(11) | YES | MUL | NULL |  |  |
| blb_bag_id | int(11) | YES | MUL | NULL |  |  |
| blb_pay_status_id | int(11) | YES | MUL | NULL |  |  |
| blb_pay_list_reporter | varchar(50) | YES |  | NULL |  |  |
| blb_pay_list_report_datetime | datetime | YES |  | NULL |  |  |
| blb_pay_list_confirm | char(1) | YES |  | NULL |  |  |
| blb_pay_list_approver | varchar(50) | YES |  | NULL |  |  |
| blb_pay_list_approve_datetime | date | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_blb_bag_id | blb_bag_id | no | 1 |
| ix_blb_pay_id | blb_pay_id | no | 1 |
| ix_blb_pay_status_id | blb_pay_status_id | no | 1 |
| PRIMARY | blb_pay_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
