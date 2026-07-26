# `stock_committee_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_committee_detail_id | int(11) | NO | PRI | 0 |  |  |
| stock_committee_id | varchar(10) | YES |  | NULL |  |  |
| stock_committee_group_id | int(11) | YES |  | NULL |  |  |
| stock_committee_Position_id | int(11) | YES |  | NULL |  |  |
| stock_mastercommitteeposition_id | int(11) | YES |  | NULL |  |  |
| stock_position_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | stock_committee_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
