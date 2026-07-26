# `lndy_cloth_expose_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lndy_cloth_expose_log_id | varchar(100) | NO | PRI |  |  |  |
| lndy_cloth_expose_list_id | varchar(100) | YES | MUL | NULL |  |  |
| lndy_cloth_list_id | varchar(100) | YES | MUL | NULL |  |  |
| lndy_cloth_expose_log_qty | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lndy_cloth_expose_list_id | lndy_cloth_expose_list_id | no | 1 |
| ix_lndy_cloth_list_id | lndy_cloth_list_id | no | 1 |
| PRIMARY | lndy_cloth_expose_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
