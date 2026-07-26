# `tb_emr_opd_pt_dx`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pt_dx_id | varchar(20) | NO | PRI |  |  |  |
| vn | varchar(15) | NO | PRI |  |  |  |
| pt_dx | char(3) | NO | PRI |  |  |  |
| loginname | varchar(50) | YES |  | NULL |  |  |
| hn | varchar(10) | YES |  | NULL |  |  |
| datetime_log | datetime | NO | PRI | 0000-00-00 00:00:00 |  |  |
| delete_status | char(2) | YES |  | NULL |  |  |
| delete_user | varchar(50) | YES |  | NULL |  |  |
| delete_datetime | datetime | YES |  | NULL |  |  |
| pt_dx_status | char(2) | NO | PRI |  |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | pt_dx_id | yes | 1 |
| PRIMARY | vn | yes | 2 |
| PRIMARY | pt_dx | yes | 3 |
| PRIMARY | datetime_log | yes | 4 |
| PRIMARY | pt_dx_status | yes | 5 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
