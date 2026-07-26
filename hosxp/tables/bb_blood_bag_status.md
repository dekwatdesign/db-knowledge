# `bb_blood_bag_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bb_blood_bag_status_id | int(11) | NO | PRI | 0 |  |  |
| bb_status_name | varchar(50) | YES |  | NULL |  |  |
| bb_status_code | char(1) | YES | UNI | NULL |  |  |
| bb_status_eng | varchar(50) | YES |  | NULL |  |  |
| bb_status_bmp | blob | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_bb_status_code | bb_status_code | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | bb_blood_bag_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
