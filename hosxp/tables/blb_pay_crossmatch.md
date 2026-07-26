# `blb_pay_crossmatch`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_pay_crossmatch_id | int(11) | NO | PRI | 0 |  |  |
| blb_pay_id | int(11) | YES | MUL | NULL |  |  |
| blb_bag_id | int(11) | YES | MUL | NULL |  |  |
| blb_pay_status_id | int(11) | YES | MUL | NULL |  |  |
| blb_pay_crossmatch_confirm | char(1) | YES |  | NULL |  |  |
| blb_pay_crossmatch_is | varchar(250) | YES |  | NULL |  |  |
| blb_pay_crossmatch_37c | varchar(250) | YES |  | NULL |  |  |
| blb_pay_crossmatch_iat | varchar(250) | YES |  | NULL |  |  |
| blb_pay_crossmatch_ccc | varchar(250) | YES |  | NULL |  |  |
| blb_pay_crossmatch_result | varchar(250) | YES |  | NULL |  |  |
| blb_pay_crossmatch_date | date | YES |  | NULL |  |  |
| blb_pay_crossmatch_time | time | YES |  | NULL |  |  |
| blb_pay_crossmatch_doctor | varchar(6) | YES |  | NULL |  |  |
| staff | varchar(100) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| blb_request_id | int(11) | YES | MUL | NULL |  |  |
| blb_pay_crossmatch_rt | varchar(250) | YES |  | NULL |  |  |
| blb_pay_crossmatch_slide | varchar(250) | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |
| blb_pay_crossmatch_jel | varchar(250) | YES |  | NULL |  |  |
| blb_pay_crossmatch_g | varchar(250) | YES |  | NULL |  |  |
| blb_pay_crossmatch_tube | varchar(250) | YES |  | NULL |  |  |
| blb_pay_baby | char(1) | YES |  | NULL |  |  |
| blb_crossmatch_approve | varchar(6) | YES |  | NULL |  |  |
| blb_pay_compatibility_type | varchar(250) | YES |  | NULL |  |  |
| blb_pay_compatible | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_blb_bag_id | blb_bag_id | no | 1 |
| ix_blb_pay_id | blb_pay_id | no | 1 |
| ix_blb_pay_status_id | blb_pay_status_id | no | 1 |
| ix_blb_request_id | blb_request_id | no | 1 |
| PRIMARY | blb_pay_crossmatch_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
