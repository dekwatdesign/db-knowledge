# `dt_odiag_summary_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_odiag_sumary_detail_id | int(11) | NO | PRI | 0 |  |  |
| dt_odiag_sumary_detail_seq | int(11) | YES |  | NULL |  |  |
| dtarea_code | varchar(15) | YES |  | NULL |  |  |
| icd101 | varchar(255) | YES |  | NULL |  |  |
| dt_odiag_sumary_detail_propost | text | YES |  | NULL |  |  |
| dt_odiag_typework_type_id | int(11) | YES |  | NULL |  |  |
| clinic | char(3) | YES |  | NULL |  |  |
| dt_odiag_sumary_detail_adjplan | text | YES |  | NULL |  |  |
| dt_odiag_sumary_detail_com_chk | char(1) | YES |  | NULL |  |  |
| dt_odiag_sumary_detail_ccl_chk | char(1) | YES |  | NULL |  |  |
| dt_odiag_sumary_detail_ccl_date | datetime | YES |  | NULL |  |  |
| dt_odiag_sumary_detail_ccl_note | text | YES |  | NULL |  |  |
| doctor_code_cancel | varchar(5) | YES |  | NULL |  |  |
| dt_odiag_sumary_detail_note | text | YES |  | NULL |  |  |
| dt_odiag_sumary_detail_cc_chk | char(1) | YES |  | NULL |  |  |
| dt_odiag_sumary_detail_phase | varchar(100) | YES |  | NULL |  |  |
| doctor_code_approve | varchar(5) | YES |  | NULL |  |  |
| dt_odiag_text | text | YES |  | NULL |  |  |
| dt_odiag_summary_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_odiag7 | dt_odiag_summary_id | no | 1 |
| PRIMARY | dt_odiag_sumary_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
