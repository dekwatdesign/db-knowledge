# `ckup_service_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckup_service_detail_id | int(11) | NO | PRI | 0 |  |  |
| nondrug_icode | varchar(7) | YES |  | NULL |  |  |
| ckup_service_id | int(11) | YES | MUL | NULL |  |  |
| ckup_prog_detail_type_id | int(11) | YES | MUL | NULL |  |  |
| ckup_service_items_code | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ckup_prog_detail_type_id | ckup_prog_detail_type_id | no | 1 |
| ix_ckup_service_id | ckup_service_id | no | 1 |
| PRIMARY | ckup_service_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
