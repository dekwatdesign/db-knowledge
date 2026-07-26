# `scan_type_user`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| scan_type_user_id | int(11) | NO | PRI | 0 |  |  |
| scan_type_id | int(11) | YES | MUL | NULL |  |  |
| officer_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_scan_type_id | scan_type_id | no | 1 |
| ix_unique | officer_id | yes | 1 |
| ix_unique | scan_type_id | yes | 2 |
| ix_unique_index | scan_type_id | yes | 1 |
| ix_unique_index | officer_id | yes | 2 |
| PRIMARY | scan_type_user_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
