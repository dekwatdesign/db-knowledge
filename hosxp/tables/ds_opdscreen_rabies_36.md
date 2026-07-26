# `ds_opdscreen_rabies_36`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ds_opdscreen_rabies_36_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| screen_date | date | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| choice2_1 | varchar(2) | YES |  | NULL |  |  |
| choice2_2 | varchar(2) | YES |  | NULL |  |  |
| choice3_1 | int(11) | YES |  | NULL |  |  |
| choice3_1_specify | varchar(150) | YES |  | NULL |  |  |
| choice3_1_1 | int(11) | YES |  | NULL |  |  |
| choice3_2 | int(11) | YES |  | NULL |  |  |
| choice3_3 | int(11) | YES |  | NULL |  |  |
| choice3_4 | int(11) | YES |  | NULL |  |  |
| choice3_5 | int(11) | YES |  | NULL |  |  |
| choice3_5_1 | int(11) | YES |  | NULL |  |  |
| choice3_5_specify | varchar(150) | YES |  | NULL |  |  |
| choice3_6 | int(11) | YES |  | NULL |  |  |
| choice3_6_specify | varchar(150) | YES |  | NULL |  |  |
| choice4_1 | int(11) | YES |  | NULL |  |  |
| choice4_1_1 | int(11) | YES |  | NULL |  |  |
| choice4_1_specify | varchar(150) | YES |  | NULL |  |  |
| choice4_2 | int(11) | YES |  | NULL |  |  |
| choice4_2_1 | int(11) | YES |  | NULL |  |  |
| choice4_2_specify | varchar(150) | YES |  | NULL |  |  |
| choice4_3 | int(11) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ds_opdscreen_rabies_36_id | yes | 1 |
| x_hn | hn | no | 1 |
| x_vn | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
