# `sepsis`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| refer_no | varchar(50) | YES |  | NULL |  |  |
| ccpi | varchar(3500) | YES |  | NULL |  |  |
| syndrome | varchar(150) | YES |  | NULL |  |  |
| diagnosis | varchar(500) | YES |  | NULL |  |  |
| diagnosis_date | datetime | YES |  | NULL |  |  |
| diagnosis_time | varchar(10) | YES |  | NULL |  |  |
| nacl | varchar(20) | YES |  | NULL |  |  |
| nacl_then | varchar(20) | YES |  | NULL |  |  |
| anti1 | varchar(200) | YES |  | NULL |  |  |
| anti1_date | datetime | YES |  | NULL |  |  |
| anti1_time | varchar(10) | YES |  | NULL |  |  |
| anti2 | varchar(200) | YES |  | NULL |  |  |
| anti2_date | datetime | YES |  | NULL |  |  |
| anti2_time | varchar(10) | YES |  | NULL |  |  |
| doctor_id | varchar(50) | YES |  | NULL |  |  |
| doctor_name | varchar(500) | YES |  | NULL |  |  |
| chk_ett | varchar(10) | YES |  | NULL |  |  |
| ett_no | varchar(5) | YES |  | NULL |  |  |
| ett_mark | varchar(5) | YES |  | NULL |  |  |
| management | varchar(3500) | YES |  | NULL |  |  |
| central | varchar(50) | YES |  | NULL |  |  |
| central_date | datetime | YES |  | NULL |  |  |
| central_time | varchar(10) | YES |  | NULL |  |  |
| wheelup_date | datetime | YES |  | NULL |  |  |
| wheelup_time | varchar(10) | YES |  | NULL |  |  |
| sirs1 | varchar(10) | YES |  | NULL |  |  |
| sirs2 | varchar(10) | YES |  | NULL |  |  |
| sirs3 | varchar(10) | YES |  | NULL |  |  |
| sirs4 | varchar(10) | YES |  | NULL |  |  |
| cvp_date | datetime | YES |  | NULL |  |  |
| cvp_time | varchar(10) | YES |  | NULL |  |  |
| map_date | datetime | YES |  | NULL |  |  |
| map_time | varchar(10) | YES |  | NULL |  |  |
| scvo_date | datetime | YES |  | NULL |  |  |
| scvo_time | varchar(10) | YES |  | NULL |  |  |
| urine_date | datetime | YES |  | NULL |  |  |
| urine_time | varchar(10) | YES |  | NULL |  |  |
| source_infect | varchar(500) | YES |  | NULL |  |  |
| apache | varchar(50) | YES |  | NULL |  |  |
| out_come | varchar(50) | YES |  | NULL |  |  |
| nurse_save | varchar(250) | YES |  | NULL |  |  |
| take_hemo | varchar(50) | YES |  | NULL |  |  |
| load_crystal | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
