# `dw_emr_cache`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dw_emr_cache_id | int(11) | NO | PRI | 0 |  |  |
| dw_emr_key | varchar(150) | YES | MUL | NULL |  |  |
| dw_emr_datetime | datetime | YES |  | NULL |  |  |
| dw_emr_data | longtext | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dw_emr_key_unique_unique_unique | dw_emr_key | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dw_emr_cache_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
