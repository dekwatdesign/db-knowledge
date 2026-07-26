# `lab_items_validate`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_items_validate_id | int(11) | NO | PRI | 0 |  |  |
| lab_items_code | int(11) | YES | MUL | NULL |  |  |
| lab_items_validate_type_id | int(11) | YES |  | NULL |  |  |
| validate_rtf_text | longtext | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| allow_order | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lab_items_code | lab_items_code | no | 1 |
| PRIMARY | lab_items_validate_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
