# `lndy_cloth_return_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lndy_cloth_return_list_id | decimal(10,0) | NO | PRI | 0 |  |  |
| lndy_cloth_return_id | decimal(10,0) | YES | MUL | NULL |  |  |
| lndy_cloth_return_amount | decimal(10,0) | YES |  | NULL |  |  |
| lndy_cloth_return_list_date | datetime | YES |  | NULL |  |  |
| lndy_cloth_id | decimal(10,0) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lndy_cloth_id | lndy_cloth_id | no | 1 |
| ix_lndy_cloth_return_id | lndy_cloth_return_id | no | 1 |
| PRIMARY | lndy_cloth_return_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
