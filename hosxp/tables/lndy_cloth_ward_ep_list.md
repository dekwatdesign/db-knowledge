# `lndy_cloth_ward_ep_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lndy_cloth_ward_ep_list_id | int(11) | NO | PRI | 0 |  |  |
| lndy_cloth_ward_ep_list_qty | varchar(100) | YES |  | NULL |  |  |
| lndy_cloth_ward_expose_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_wd_ep_send_note | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lndy_cloth_id | lndy_cloth_id | no | 1 |
| ix_Reflndy_cloth_ward_expose59 | lndy_cloth_ward_expose_id | no | 1 |
| PRIMARY | lndy_cloth_ward_ep_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
