# `ckup_proj`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckup_proj_id | int(11) | NO | PRI | 0 |  |  |
| ckup_proj_name | varchar(250) | YES |  | NULL |  |  |
| ckup_proj_year | int(11) | YES |  | NULL |  |  |
| ckup_proj_start_date | date | YES |  | NULL |  |  |
| ckup_proj_end_date | date | YES |  | NULL |  |  |
| ckup_proj_individually_price | double(13,3) | YES |  | NULL |  |  |
| ckup_proj_active | char(1) | YES |  | NULL |  |  |
| staff | varchar(100) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ckup_proj_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
