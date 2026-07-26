# `lndy_cloth_wash_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lndy_cloth_wash_list_id | int(11) | NO | PRI | 0 |  |  |
| lndy_cloth_wash_list_qty | int(11) | YES |  | NULL |  |  |
| lndy_cloth_wash_list_weight | char(10) | YES |  | NULL |  |  |
| lndy_cloth_wash_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_wash_list_price | int(11) | YES |  | NULL |  |  |
| lndy_cloth_wash_send_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_wash_list_total | int(11) | YES |  | NULL |  |  |
| lndy_cloth_wash_list_note | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lndy_cloth_id | lndy_cloth_id | no | 1 |
| ix_Reflndy_cloth_wash27 | lndy_cloth_wash_id | no | 1 |
| ix_Reflndy_cloth_wash_send29 | lndy_cloth_wash_send_id | no | 1 |
| PRIMARY | lndy_cloth_wash_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
