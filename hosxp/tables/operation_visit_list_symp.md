# `operation_visit_list_symp`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_visit_list_symp_id | int(11) | NO | PRI | 0 |  |  |
| operation_visit_list_id | int(11) | YES | MUL | NULL |  |  |
| operation_visit_symp_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_operation_visit_list_id | operation_visit_list_id | no | 1 |
| PRIMARY | operation_visit_list_symp_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
