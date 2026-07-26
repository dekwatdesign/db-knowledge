# `dt_lab_order_img`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_lab_order_img_id | int(11) | NO | PRI | 0 |  |  |
| dt_lab_order_img_data | longblob | YES |  | NULL |  |  |
| dt_lab_order_img_doc | longblob | YES |  | NULL |  |  |
| dt_lab_order_thmb_img_data | longblob | YES |  | NULL |  |  |
| dt_lab_order_id | int(11) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff | varchar(250) | YES |  | NULL |  |  |
| dt_lab_order_img_note | text | YES |  | NULL |  |  |
| dt_lab_order_img_type | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_lab_order_img_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
