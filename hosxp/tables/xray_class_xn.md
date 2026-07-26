# `xray_class_xn`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xray_class_xn_id | int(11) | NO | PRI | 0 |  |  |
| pt_xn | int(11) | YES |  | NULL |  |  |
| pt_class_xn | int(11) | YES |  | NULL |  |  |
| xray_rent_status_id | int(11) | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| xray_items_group | int(11) | YES |  | NULL |  |  |
| xray_xn | int(11) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_xray_xn | xray_xn | no | 1 |
| PRIMARY | xray_class_xn_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
