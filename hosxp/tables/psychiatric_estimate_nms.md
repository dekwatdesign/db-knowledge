# `psychiatric_estimate_nms`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_estimate_nms_id | int(11) | NO | PRI | 0 |  |  |
| psychiatric_estimate_nms_date | date | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| mg1 | char(1) | YES |  | NULL |  |  |
| mg2 | char(1) | YES |  | NULL |  |  |
| mg3 | char(1) | YES |  | NULL |  |  |
| sg1 | char(1) | YES |  | NULL |  |  |
| sg2 | char(1) | YES |  | NULL |  |  |
| sg3 | char(1) | YES |  | NULL |  |  |
| sg4 | char(1) | YES |  | NULL |  |  |
| sg5 | char(1) | YES |  | NULL |  |  |
| sg6 | char(1) | YES |  | NULL |  |  |
| sg7 | char(1) | YES |  | NULL |  |  |
| sg8 | char(1) | YES |  | NULL |  |  |
| sg9 | char(1) | YES |  | NULL |  |  |
| sg10 | char(1) | YES |  | NULL |  |  |
| sg11 | char(1) | YES |  | NULL |  |  |
| psychiatric_estimate_nms_result | varchar(250) | YES |  | NULL |  |  |
| psychiatric_estimate_nms_point | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_nms_staff | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| psychiatric_estimate_nms_time | time | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_estimate_nms_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
