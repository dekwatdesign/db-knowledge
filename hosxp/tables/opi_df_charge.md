# `opi_df_charge`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opi_df_charge_id | int(11) | NO | PRI | 0 |  |  |
| opi_guid | varchar(38) | YES | UNI | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| charge_price | double(15,3) | YES |  | NULL |  |  |
| is_origin | char(1) | YES |  | NULL |  |  |
| order_number | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_opi_guid | opi_guid | yes | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | opi_df_charge_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
