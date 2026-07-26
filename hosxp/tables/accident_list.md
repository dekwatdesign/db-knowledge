# `accident_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| accident_list_id | int(11) | NO | PRI | 0 |  |  |
| accident_date | date | YES |  | NULL |  |  |
| accident_time | time | YES |  | NULL |  |  |
| accident_gis_lat | varchar(50) | YES |  | NULL |  |  |
| accident_gis_long | varchar(50) | YES |  | NULL |  |  |
| er_accident_type_id | int(11) | YES |  | NULL |  |  |
| accident_freq_location_list_id | int(11) | YES |  | NULL |  |  |
| nearby_point_count | int(11) | YES |  | NULL |  |  |
| nearby_point_metre | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | accident_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
