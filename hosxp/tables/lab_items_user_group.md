# `lab_items_user_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_items_user_group_id | int(11) | NO | PRI | 0 |  |  |
| lab_items_code | int(11) | YES | MUL | NULL |  |  |
| officer_group_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lab_items_code | lab_items_code | no | 1 |
| ix_s | lab_items_code | no | 1 |
| ix_s | officer_group_id | no | 2 |
| PRIMARY | lab_items_user_group_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
