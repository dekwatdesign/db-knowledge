# `officer_department`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| officer_department_id | int(11) | NO | PRI | 0 |  |  |
| officer_id | int(11) | YES | MUL | NULL |  |  |
| depcode | char(3) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_officer_id | officer_id | no | 1 |
| ix_officer_uni | officer_id | yes | 1 |
| ix_officer_uni | depcode | yes | 2 |
| ix_officer_uni_index | depcode | yes | 1 |
| ix_officer_uni_index | officer_id | yes | 2 |
| PRIMARY | officer_department_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
