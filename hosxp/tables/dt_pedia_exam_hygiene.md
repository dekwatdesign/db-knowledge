# `dt_pedia_exam_hygiene`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_pedia_exam_hygiene_id | int(11) | NO | PRI | 0 |  |  |
| dt_pedia_exam_hygiene_no | int(11) | YES |  | NULL |  |  |
| dt_pedia_exam_hygiene_date | date | YES |  | NULL |  |  |
| dt_pedia_exam_hygiene_sum | double(15,2) | YES |  | NULL |  |  |
| dt_pedia_exam_hygiene_b1 | varchar(5) | YES | MUL | NULL |  |  |
| dt_pedia_exam_hygiene_b1rchk | varchar(2) | YES |  | NULL |  |  |
| dt_pedia_exam_hygiene_b2 | varchar(5) | YES | MUL | NULL |  |  |
| dt_pedia_exam_hygiene_b2rchk | varchar(2) | YES |  | NULL |  |  |
| dt_pedia_exam_hygiene_la1 | varchar(5) | YES | MUL | NULL |  |  |
| dt_pedia_exam_hygiene_la1rchk | varchar(2) | YES |  | NULL |  |  |
| dt_pedia_exam_hygiene_la2 | varchar(5) | YES |  | NULL |  |  |
| dt_pedia_exam_hygiene_la2rchk | varchar(2) | YES |  | NULL |  |  |
| dt_pedia_exam_hygiene_li1 | varchar(5) | YES |  | NULL |  |  |
| dt_pedia_exam_hygiene_li1rchk | varchar(2) | YES |  | NULL |  |  |
| dt_pedia_exam_hygiene_li2 | varchar(5) | YES | MUL | NULL |  |  |
| dt_pedia_exam_hygiene_li2rchk | varchar(2) | YES |  | NULL |  |  |
| doctorcode | varchar(5) | YES |  | NULL |  |  |
| dt_pedia_main_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_pedia_exam_si_b193 | dt_pedia_exam_hygiene_la1 | no | 1 |
| ix_Refdt_pedia_exam_si_la197 | dt_pedia_exam_hygiene_b2 | no | 1 |
| ix_Refdt_pedia_exam_si_la292 | dt_pedia_exam_hygiene_b1 | no | 1 |
| ix_Refdt_pedia_exam_si_scr_ps98 | dt_pedia_exam_hygiene_li2 | no | 1 |
| ix_Refdt_pedia_main104 | dt_pedia_main_id | no | 1 |
| PRIMARY | dt_pedia_exam_hygiene_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
