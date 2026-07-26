# `lndy_cloth_register_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lndy_cloth_register_list_id | int(11) | NO | PRI | 0 |  |  |
| lndy_cloth_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_register_amount | int(11) | YES |  | NULL |  |  |
| lndy_cloth_register_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lndy_cloth_id | lndy_cloth_id | no | 1 |
| ix_lndy_cloth_register_id | lndy_cloth_register_id | no | 1 |
| PRIMARY | lndy_cloth_register_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
