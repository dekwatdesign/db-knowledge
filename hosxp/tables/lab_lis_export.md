# `lab_lis_export`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_order_number | int(11) | NO | PRI | 0 |  |  |
| export_date_time | datetime | YES | MUL | NULL |  |  |
| text_data | longtext | YES |  | NULL |  |  |
| export_count | int(11) | YES |  | NULL |  |  |
| export_ok | char(1) | YES | MUL | NULL |  |  |
| export_ok_date_time | datetime | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| export_date_time | export_date_time | no | 1 |
| ix_export_ok | export_ok | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | lab_order_number | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
