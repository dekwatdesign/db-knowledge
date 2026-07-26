# `physic_template_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_template_detail_id | int(11) | NO | PRI | 0 |  |  |
| physic_template_id | int(11) | YES | MUL | NULL |  |  |
| physic_items_id | int(11) | YES | MUL | NULL |  |  |
| physic_template_detail_qty | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_physic_items_id | physic_items_id | no | 1 |
| ix_physic_template_id | physic_template_id | no | 1 |
| PRIMARY | physic_template_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
