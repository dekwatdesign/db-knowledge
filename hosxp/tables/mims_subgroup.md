# `mims_subgroup`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| mims_subgroup_id | int(11) | NO | PRI | 0 |  |  |
| mims_group_id | int(11) | YES | MUL | NULL |  |  |
| mims_subgroup_name | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_mimis_group_id | mims_group_id | no | 1 |
| PRIMARY | mims_subgroup_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
