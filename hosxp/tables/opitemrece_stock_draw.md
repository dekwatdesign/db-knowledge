# `opitemrece_stock_draw`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opitemrece_stock_draw_id | int(11) | NO | PRI | 0 |  |  |
| opi_guid | varchar(38) | YES | MUL | NULL |  |  |
| vn | varchar(20) | YES | MUL | NULL |  |  |
| stock_draw_list_id | int(11) | YES | MUL | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_opi_guid | opi_guid | no | 1 |
| ix_opi_guid_draw_id | opi_guid | yes | 1 |
| ix_opi_guid_draw_id | stock_draw_list_id | yes | 2 |
| ix_stock_draw_list_id | stock_draw_list_id | no | 1 |
| ix_vn | vn | no | 1 |
| ix_vn_guid | vn | no | 1 |
| ix_vn_guid | opi_guid | no | 2 |
| ix_vn_guid_index | opi_guid | no | 1 |
| ix_vn_guid_index | vn | no | 2 |
| PRIMARY | opitemrece_stock_draw_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
