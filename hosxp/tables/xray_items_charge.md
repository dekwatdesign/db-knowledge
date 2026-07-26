# `xray_items_charge`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xray_items_charge_id | int(11) | NO | PRI | 0 |  |  |
| xray_items_code | int(11) | YES | MUL | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_xray_items_code | xray_items_code | no | 1 |
| PRIMARY | xray_items_charge_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
