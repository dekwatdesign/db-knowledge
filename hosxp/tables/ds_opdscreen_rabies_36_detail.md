# `ds_opdscreen_rabies_36_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ds_opdscreen_rabies_36_detail_id | int(11) | NO | PRI | 0 |  |  |
| ds_opdscreen_rabies_36_id | int(11) | YES | MUL | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| number | varchar(2) | YES |  | NULL |  |  |
| bitten_bleeding | varchar(2) | YES |  | NULL |  |  |
| bitten_no_bleeding | varchar(2) | YES |  | NULL |  |  |
| scratched_bleeding | varchar(2) | YES |  | NULL |  |  |
| scratched_no_bleeding | varchar(2) | YES |  | NULL |  |  |
| licked_bleeding | varchar(2) | YES |  | NULL |  |  |
| licked_no_bleeding | varchar(2) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ds_opdscreen_rabies_36_detail_id | yes | 1 |
| x_ds_opdscreen_rabies_36_id | ds_opdscreen_rabies_36_id | no | 1 |
| x_vn | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
