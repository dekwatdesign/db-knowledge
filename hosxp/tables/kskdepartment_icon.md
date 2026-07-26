# `kskdepartment_icon`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| kskdepartment_icon_id | int(11) | NO | PRI | 0 |  |  |
| depcode | char(3) | YES | UNI | NULL |  |  |
| icon_png_data | longblob | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_depcode | depcode | yes | 1 |
| PRIMARY | kskdepartment_icon_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
