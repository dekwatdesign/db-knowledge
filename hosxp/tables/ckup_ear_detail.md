# `ckup_ear_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckup_ear_detail_id | int(11) | NO | PRI | 0 |  |  |
| ckup_ear_head_id | int(11) | YES | MUL | NULL |  |  |
| ckup_ear_hertz | double(10,3) | YES |  | NULL |  |  |
| ckup_ear_right_db | double(10,3) | YES |  | NULL |  |  |
| ckup_ear_left_db | double(10,3) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff | varchar(150) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ckup_ear_head_id | ckup_ear_head_id | no | 1 |
| PRIMARY | ckup_ear_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
