# `ovst_rehab_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_rehab_detail_id | int(11) | NO | PRI | 0 |  |  |
| ovst_rehab_id | int(11) | YES | MUL | NULL |  |  |
| ovst_rehab_type_id | int(11) | YES |  | NULL |  |  |
| ovst_rehab_device_type_id | int(11) | YES |  | NULL |  |  |
| ovst_rehab_device_qty | int(11) | YES |  | NULL |  |  |
| doctor | varchar(20) | YES |  | NULL |  |  |
| entry_datetime | datetime | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_ovst_rehab_id | ovst_rehab_id | no | 1 |
| PRIMARY | ovst_rehab_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
