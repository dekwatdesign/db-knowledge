# `tb_btr_lab`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| btr_id | varchar(20) | NO | PRI |  |  |  |
| btr_lab_time | int(2) | NO | PRI | 0 |  |  |
| hn | varchar(10) | YES |  | NULL |  |  |
| vn | varchar(15) | YES |  | NULL |  |  |
| an | varchar(10) | YES |  | NULL |  |  |
| btr_lab_bi_gr | varchar(5) | YES |  | NULL |  |  |
| btr_lab_rh | varchar(5) | YES |  | NULL |  |  |
| btr_lab_dat | varchar(5) | YES |  | NULL |  |  |
| btr_lab_iat | varchar(5) | YES |  | NULL |  |  |
| btr_lab_cross_matching | varchar(5) | YES |  | NULL |  |  |
| btr_lab_note | varchar(255) | YES |  | NULL |  |  |
| btr_lab_confirm | char(2) | YES |  | NULL |  |  |
| btr_lab_user_log | varchar(50) | YES |  | NULL |  |  |
| btr_lab_user_datetime | datetime | YES |  | NULL |  |  |
| btr_lab_edit_user_log | varchar(50) | YES |  | NULL |  |  |
| btr_lab_edit_user_datetime | datetime | YES |  | NULL |  |  |
| btr_lab_status | char(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| btr_id | btr_id | no | 1 |
| PRIMARY | btr_id | yes | 1 |
| PRIMARY | btr_lab_time | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
