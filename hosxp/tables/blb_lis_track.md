# `blb_lis_track`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_lis_track_id | int(11) | NO | PRI | 0 |  |  |
| blb_lis_track_datetime | datetime | YES |  | NULL |  |  |
| blb_order_number | longtext | YES |  | NULL |  |  |
| blb_lis_track_type | longtext | YES |  | NULL |  |  |
| gateway_flag | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES |  | NULL |  |  |
| blb_lis_company_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | blb_lis_track_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
