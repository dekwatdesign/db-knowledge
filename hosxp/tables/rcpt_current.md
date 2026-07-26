# `rcpt_current`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rcpt_current_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| current_date | date | YES |  | NULL |  |  |
| current_time | time | YES |  | NULL |  |  |
| staff | varchar(15) | YES |  | NULL |  |  |
| amount | double(15,3) | YES |  | NULL |  |  |
| pt_type | char(3) | YES |  | NULL |  |  |
| computer | varchar(25) | YES |  | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| discount_amount | double(15,3) | YES |  | NULL |  |  |
| total_amount | double(15,3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | rcpt_current_id | yes | 1 |
| vn | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
