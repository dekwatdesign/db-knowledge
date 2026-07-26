# `stock_item_picture`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_item_picture_id | int(11) | NO | PRI | 0 |  |  |
| item_id | int(11) | YES | MUL | NULL |  |  |
| item_picture | longblob | YES |  | NULL |  |  |
| item_picture_datetime | datetime | YES |  | NULL |  |  |
| item_picture_description | text | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| item_no | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_item_id | item_id | no | 1 |
| PRIMARY | stock_item_picture_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
