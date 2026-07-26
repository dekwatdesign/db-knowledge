# `stock_snapshot_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_snapshot_id | int(11) | NO | PRI | 0 |  |  |
| snapshot_date | date | YES |  | NULL |  |  |
| snapshot_datetime | datetime | YES |  | NULL |  |  |
| snapshot_user | varchar(25) | YES |  | NULL |  |  |
| snapshot_period | int(11) | YES |  | NULL |  |  |
| stock_type | char(1) | YES |  | NULL |  |  |
| location_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | stock_snapshot_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
