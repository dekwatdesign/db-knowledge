# `stretcher_department`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| depcode | char(3) | NO | PRI |  |  |  |
| stretcher_service_id | int(11) | YES | MUL | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |
| latitude | varchar(15) | YES |  | NULL |  |  |
| longitude | varchar(15) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_department_stretcher_service | stretcher_service_id | no | 1 |
| PRIMARY | depcode | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
