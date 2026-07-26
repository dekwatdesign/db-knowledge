# `lndy_cloth_draw_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lndy_cloth_draw_list_id | int(11) | NO | PRI | 0 |  |  |
| lndy_cloth_draw_list_qty | int(11) | YES |  | NULL |  |  |
| lndy_cloth_draw_list_left_qty | int(11) | YES |  | NULL |  |  |
| lndy_cloth_draw_list_cancel | char(2) | YES |  | NULL |  |  |
| transaction_datetime | datetime | YES |  | NULL |  |  |
| lndy_cloth_draw_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_subdraw_list_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_draw_list_ward_qty | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lndy_cloth_id | lndy_cloth_id | no | 1 |
| ix_Reflndy_cloth_draw14 | lndy_cloth_draw_id | no | 1 |
| ix_Reflndy_cloth_subdraw_list15 | lndy_cloth_subdraw_list_id | no | 1 |
| PRIMARY | lndy_cloth_draw_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
