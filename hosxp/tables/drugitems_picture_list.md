# `drugitems_picture_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drugitems_picture_list_id | int(11) | NO | PRI | 0 |  |  |
| icode | char(7) | YES | MUL | NULL |  |  |
| drugitems_picture_name | varchar(200) | YES |  | NULL |  |  |
| drugitems_picture_blob | longblob | YES |  | NULL |  |  |
| drugitems_picture_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_icode | icode | no | 1 |
| PRIMARY | drugitems_picture_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
