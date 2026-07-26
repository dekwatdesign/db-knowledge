# `tb_emr_charge_view_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emr_charge_view_datetime | datetime | NO | PRI | 0000-00-00 00:00:00 |  |  |
| emr_charge_view_user | varchar(100) | NO | PRI |  |  |  |
| emr_charge_view_vn_an | varchar(10) | NO | PRI |  |  |  |
| emr_charge_view_hn | varchar(10) | NO | PRI |  |  |  |
| emr_charge_view_delete | char(2) | YES |  | NULL |  |  |
| emr_charge_view_delete_datetime | datetime | YES |  | NULL |  |  |
| emr_charge_view_file_name | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emr_charge_view_datetime | yes | 1 |
| PRIMARY | emr_charge_view_vn_an | yes | 2 |
| PRIMARY | emr_charge_view_hn | yes | 3 |
| PRIMARY | emr_charge_view_user | yes | 4 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
