# `bb_blood_bag_regist`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bb_blood_bag_regist_id | int(11) | NO | PRI | 0 |  |  |
| bb_blood_bag_regist_date | date | YES |  | NULL |  |  |
| bb_blood_bag_regist_time | time | YES |  | NULL |  |  |
| bb_blood_bag_regist_staff | varchar(100) | YES |  | NULL |  |  |
| bb_hospital_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | bb_blood_bag_regist_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
