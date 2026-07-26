# `health_med_product`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| health_med_product_id | int(11) | NO | PRI | 0 |  |  |
| health_med_product_name | varchar(150) | YES | UNI | NULL |  |  |
| health_med_product_type_id | int(11) | YES |  | NULL |  |  |
| strength | varchar(150) | YES |  | NULL |  |  |
| units | varchar(150) | YES |  | NULL |  |  |
| dosage_form | varchar(150) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_health_med_product_name | health_med_product_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | health_med_product_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
