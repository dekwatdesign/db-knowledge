# `dt_facialpain_phis_part1`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_facialpain_phis_p1_id | int(11) | NO | PRI | 0 |  |  |
| dt_facialpain_phis_no31 | text | YES |  | NULL |  |  |
| dt_facialpain_phis_no31_txt1 | varchar(50) | YES |  | NULL |  |  |
| dt_facialpain_phis_no31_txt2 | varchar(50) | YES |  | NULL |  |  |
| dt_facialpain_phis_no32 | varchar(255) | YES |  | NULL |  |  |
| dt_facialpain_phis_no32_txt1 | varchar(200) | YES |  | NULL |  |  |
| dt_facialpain_phis_no33 | varchar(10) | YES |  | NULL |  |  |
| dt_facialpain_phis_no33_txt1 | varchar(50) | YES |  | NULL |  |  |
| dt_facialpain_phis_no34 | varchar(200) | YES |  | NULL |  |  |
| dt_facialpain_phis_no34_txt1 | varchar(50) | YES |  | NULL |  |  |
| dt_facialpain_phis_no35 | varchar(10) | YES |  | NULL |  |  |
| dt_facialpain_phis_no35_txt1 | varchar(50) | YES |  | NULL |  |  |
| dt_facialpain_phis_no36 | varchar(10) | YES |  | NULL |  |  |
| dt_facialpain_phis_no36_txt1 | varchar(50) | YES |  | NULL |  |  |
| dt_facialpain_main_id | int(11) | YES | MUL | NULL |  |  |
| dt_facialpain_phis_no30 | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_facialpain_main12 | dt_facialpain_main_id | no | 1 |
| PRIMARY | dt_facialpain_phis_p1_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
