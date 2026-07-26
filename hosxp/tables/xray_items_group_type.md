# `xray_items_group_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xray_items_group_type_id | int(11) | NO | PRI | 0 |  |  |
| xray_items_group | int(11) | YES | MUL | NULL |  |  |
| xray_items_group_type_name | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_xray_items_group | xray_items_group | no | 1 |
| PRIMARY | xray_items_group_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
