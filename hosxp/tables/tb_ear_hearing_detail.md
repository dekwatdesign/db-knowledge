# `tb_ear_hearing_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ear_hearing_detail_id | varchar(20) | NO | PRI |  |  |  |
| ear_hearing_head_id | varchar(20) | YES |  | NULL |  |  |
| vn | varchar(15) | YES |  | NULL |  |  |
| hn | varchar(10) | YES |  | NULL |  |  |
| pt_type | char(2) | YES |  | NULL |  |  |
| vstdate | date | YES |  | NULL |  |  |
| vsttime | time | YES |  | NULL |  |  |
| user_save | varchar(255) | YES |  | NULL |  |  |
| user_save_datetime | datetime | YES |  | NULL |  |  |
| user_edit | varchar(255) | YES |  | NULL |  |  |
| user_edit_datetime | datetime | YES |  | NULL |  |  |
| ear_hearing_detail_status | char(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ear_hearing_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
