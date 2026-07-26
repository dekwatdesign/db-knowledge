# `xray_class_rent`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xray_class_rent_id | int(11) | NO | PRI | 0 |  |  |
| pt_class_xn | int(11) | YES | MUL | NULL |  |  |
| rent_date | date | YES | MUL | NULL |  |  |
| rent_time | time | YES |  | NULL |  |  |
| rent_staff_name | varchar(50) | YES |  | NULL |  |  |
| authrize_staff | varchar(50) | YES |  | NULL |  |  |
| rent_reason_id | int(11) | YES |  | NULL |  |  |
| xray_rent_department_id | int(11) | YES |  | NULL |  |  |
| xray_rent_type_id | int(11) | YES |  | NULL |  |  |
| return_date | date | YES |  | NULL |  |  |
| return_time | time | YES |  | NULL |  |  |
| return_staff | varchar(25) | YES |  | NULL |  |  |
| return_complete | char(1) | YES | MUL | NULL |  |  |
| spclty | varchar(2) | YES |  | NULL |  |  |
| ward | varchar(3) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| xray_items_group | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_pt_class_xn | pt_class_xn | no | 1 |
| ix_rent_date | rent_date | no | 1 |
| ix_return_complete | return_complete | no | 1 |
| PRIMARY | xray_class_rent_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
