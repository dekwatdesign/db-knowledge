# `lndy_cloth_deliver_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lndy_cloth_deliver_detail_id | int(11) | NO | PRI | 0 |  |  |
| lndy_cloth_deliver_qty | varchar(100) | YES |  | NULL |  |  |
| lndy_cloth_deliver_weight | int(11) | YES |  | NULL |  |  |
| lndy_cloth_deliver_note | char(40) | YES |  | NULL |  |  |
| lndy_cloth_deliver_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Reflndy_cloth6 | lndy_cloth_id | no | 1 |
| ix_Reflndy_cloth_deliver5 | lndy_cloth_deliver_id | no | 1 |
| PRIMARY | lndy_cloth_deliver_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
