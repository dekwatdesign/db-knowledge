# `kskdepartment_advice_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| kskdepartment_advice_item_id | int(11) | NO | PRI | 0 |  |  |
| depcode | char(3) | YES | MUL | NULL |  |  |
| opdscreen_advice_item_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_depcode | depcode | no | 1 |
| ix_depcode_item_id | depcode | yes | 1 |
| ix_depcode_item_id | opdscreen_advice_item_id | yes | 2 |
| PRIMARY | kskdepartment_advice_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
