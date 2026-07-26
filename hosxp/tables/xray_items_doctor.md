# `xray_items_doctor`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xray_items_doctor_id | int(11) | NO | PRI | 0 |  |  |
| xray_items_code | int(11) | YES | MUL | NULL |  |  |
| doctor | varchar(9) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_unique | xray_items_code | yes | 1 |
| ix_unique | doctor | yes | 2 |
| ix_unique_index | doctor | yes | 1 |
| ix_unique_index | xray_items_code | yes | 2 |
| ix_xray_items_code | xray_items_code | no | 1 |
| PRIMARY | xray_items_doctor_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
