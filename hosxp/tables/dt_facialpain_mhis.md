# `dt_facialpain_mhis`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_facialpain_mhis_id | int(11) | NO | PRI | 0 |  |  |
| dt_facialpain_mhis_no23 | text | YES |  | NULL |  |  |
| dt_facialpain_mhis_no24 | varchar(10) | YES |  | NULL |  |  |
| dt_facialpain_mhis_no24_txt | text | YES |  | NULL |  |  |
| dt_facialpain_mhis_no25 | varchar(10) | YES |  | NULL |  |  |
| dt_facialpain_mhis_no25_txt | text | YES |  | NULL |  |  |
| dt_facialpain_mhis_no26 | varchar(10) | YES |  | NULL |  |  |
| dt_facialpain_mhis_no26_txt | varchar(50) | YES |  | NULL |  |  |
| dt_facialpain_mhis_no27 | varchar(10) | YES |  | NULL |  |  |
| dt_facialpain_mhis_no27_txt | text | YES |  | NULL |  |  |
| dt_facialpain_mhis_no28 | varchar(10) | YES |  | NULL |  |  |
| dt_facialpain_mhis_no28_txt | varchar(50) | YES |  | NULL |  |  |
| dt_facialpain_mhis_no29 | varchar(10) | YES |  | NULL |  |  |
| dt_facialpain_mhis_no29_txt | varchar(50) | YES |  | NULL |  |  |
| dt_facialpain_main_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_facialpain_main10 | dt_facialpain_main_id | no | 1 |
| PRIMARY | dt_facialpain_mhis_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
