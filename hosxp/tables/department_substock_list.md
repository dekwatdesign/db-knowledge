# `department_substock_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| department_substock_list_id | int(11) | NO | PRI | 0 |  |  |
| depcode | char(3) | YES | MUL | NULL |  |  |
| department_id | int(11) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_depcode | depcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_unique | depcode | yes | 1 |
| ix_unique | department_id | yes | 2 |
| ix_unique_index | department_id | yes | 1 |
| ix_unique_index | depcode | yes | 2 |
| PRIMARY | department_substock_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
