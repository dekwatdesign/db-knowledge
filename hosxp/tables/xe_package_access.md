# `xe_package_access`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xe_package_access_id | int(11) | NO | PRI | 0 |  |  |
| xe_package_id | int(11) | YES | MUL | NULL |  |  |
| officer_group_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_package_group_id | xe_package_id | no | 1 |
| ix_package_group_id | officer_group_id | no | 2 |
| ix_package_group_id_index | officer_group_id | no | 1 |
| ix_package_group_id_index | xe_package_id | no | 2 |
| ix_package_id | xe_package_id | no | 1 |
| PRIMARY | xe_package_access_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
