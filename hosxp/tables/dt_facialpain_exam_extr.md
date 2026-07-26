# `dt_facialpain_exam_extr`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_facialpain_exam_extr_id | int(11) | NO | PRI | 0 |  |  |
| dt_facialpain_exam_extr_app | varchar(20) | NO | PRI |  |  |  |
| dt_facialpain_exam_extr_chk1 | varchar(20) | YES |  | NULL |  |  |
| dt_facialpain_exam_extr_chk3 | varchar(20) | YES |  | NULL |  |  |
| dt_facialpain_exam_extr_chk4 | varchar(20) | YES |  | NULL |  |  |
| dt_facialpain_exam_extr_chk5 | varchar(20) | YES |  | NULL |  |  |
| dt_facialpain_exam_extr_chk6 | varchar(20) | YES |  | NULL |  |  |
| dt_facialpain_exam_extr_chk7 | varchar(20) | YES |  | NULL |  |  |
| dt_facialpain_exam_extr_chk8 | varchar(20) | YES |  | NULL |  |  |
| dt_facialpain_exam_extr_txt1 | varchar(50) | YES |  | NULL |  |  |
| dt_facialpain_exam_extr_txt2 | varchar(50) | YES |  | NULL |  |  |
| dt_facialpain_exam_extr_txt3 | varchar(50) | YES |  | NULL |  |  |
| dt_facialpain_exam_extr_txt4 | varchar(50) | YES |  | NULL |  |  |
| dt_facialpain_exam_extr_txt5 | varchar(50) | YES |  | NULL |  |  |
| dt_facialpain_exam_extr_txt6 | varchar(50) | YES |  | NULL |  |  |
| dt_facialpain_exam_extr_txt7 | varchar(50) | YES |  | NULL |  |  |
| dt_facialpain_exam_extr_txt8 | varchar(50) | YES |  | NULL |  |  |
| dt_facialpain_exam_extr_chk2 | varchar(20) | YES |  | NULL |  |  |
| dt_facialpain_main_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_facialpain_main16 | dt_facialpain_main_id | no | 1 |
| PRIMARY | dt_facialpain_exam_extr_app | yes | 1 |
| PRIMARY | dt_facialpain_exam_extr_id | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
