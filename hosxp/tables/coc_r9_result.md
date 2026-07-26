# `coc_r9_result`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| coc_r9_result_id | int(11) | NO | PRI | 0 |  |  |
| vnan | varchar(13) | YES | MUL | NULL |  |  |
| visit_no | int(11) | YES |  | NULL |  |  |
| visit_date | date | YES |  | NULL |  |  |
| visit_hospcode | varchar(9) | YES |  | NULL |  |  |
| coc_r9_eval1_id | int(11) | YES |  | NULL |  |  |
| coc_r9_eval2_id | int(11) | YES |  | NULL |  |  |
| coc_r9_eval3_id | int(11) | YES |  | NULL |  |  |
| coc_r9_eval4_id | int(11) | YES |  | NULL |  |  |
| coc_r9_eval5_id | int(11) | YES |  | NULL |  |  |
| coc_r9_eval6_id | int(11) | YES |  | NULL |  |  |
| coc_r9_eval7_id | int(11) | YES |  | NULL |  |  |
| coc_r9_eval8_id | int(11) | YES |  | NULL |  |  |
| coc_r9_eval9_id | int(11) | YES |  | NULL |  |  |
| coc_r9_eval10_id | int(11) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| visit_officer_name | varchar(100) | YES |  | NULL |  |  |
| coc_r9_result_score | int(11) | YES |  | NULL |  |  |
| coc_r9_result_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vnan | vnan | no | 1 |
| PRIMARY | coc_r9_result_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
