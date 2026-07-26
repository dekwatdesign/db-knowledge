# `lab_items_form`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_items_form_id | int(11) | NO | PRI | 0 |  |  |
| lab_items_code | int(11) | YES | MUL | NULL |  |  |
| form_name | varchar(200) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_code | lab_items_code | no | 1 |
| ix_unique | lab_items_code | yes | 1 |
| ix_unique | form_name | yes | 2 |
| ix_unique_index | form_name | yes | 1 |
| ix_unique_index | lab_items_code | yes | 2 |
| PRIMARY | lab_items_form_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
