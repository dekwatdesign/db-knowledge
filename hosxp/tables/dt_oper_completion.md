# `dt_oper_completion`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_oper_completion_id | int(11) | NO | PRI | 0 |  |  |
| dt_oper_completion_pol_chk | varchar(10) | YES |  | NULL |  |  |
| dt_oper_completion_pol_cp | varchar(10) | YES |  | NULL |  |  |
| dt_oper_completion_fu_chk | varchar(10) | YES |  | NULL |  |  |
| dt_oper_completion_fu_drt1 | varchar(10) | YES |  | NULL |  |  |
| dt_oper_completion_fu_drt2 | varchar(10) | YES |  | NULL |  |  |
| dt_oper_completion_post_chk | varchar(30) | YES |  | NULL |  |  |
| dt_oper_completion_nopain_chk | varchar(10) | YES |  | NULL |  |  |
| dt_oper_completion_sen_chk | varchar(20) | YES |  | NULL |  |  |
| dt_oper_completion_sen_note | varchar(100) | YES |  | NULL |  |  |
| dt_oper_completion_sen_drt1 | varchar(10) | YES |  | NULL |  |  |
| dt_oper_completion_sen_drt2 | varchar(10) | YES |  | NULL |  |  |
| dt_oper_completion_spon_chk | varchar(30) | YES |  | NULL |  |  |
| dt_oper_completion_spon_drt1 | varchar(10) | YES |  | NULL |  |  |
| dt_oper_completion_spon_drt2 | varchar(10) | YES |  | NULL |  |  |
| dt_oper_completion_spon_freq | varchar(50) | YES |  | NULL |  |  |
| dt_oper_completion_spon_top | varchar(50) | YES |  | NULL |  |  |
| dt_oper_completion_pre_chk | varchar(50) | YES |  | NULL |  |  |
| dt_oper_completion_painno_chk | varchar(50) | YES |  | NULL |  |  |
| dt_oper_completion_ept_chk | varchar(10) | YES |  | NULL |  |  |
| dt_oper_completion_ept_test | varchar(10) | YES |  | NULL |  |  |
| dt_oper_completion_ept_con | varchar(10) | YES |  | NULL |  |  |
| dt_oper_completion_percu_chk | varchar(20) | YES |  | NULL |  |  |
| dt_oper_completion_ppositive | varchar(20) | YES |  | NULL |  |  |
| dt_oper_completion_xray_chk | varchar(20) | YES |  | NULL |  |  |
| dt_oper_completion_xray_note | text | YES |  | NULL |  |  |
| dt_oper_completion_quan_chk | varchar(50) | YES |  | NULL |  |  |
| dt_oper_completion_qcom_chk | varchar(100) | YES |  | NULL |  |  |
| dt_oper_completion_qcom_note | varchar(100) | YES |  | NULL |  |  |
| dt_oper_completion_qcom_ortnote | text | YES |  | NULL |  |  |
| dt_oper_completion_with_id | int(11) | YES | MUL | NULL |  |  |
| dt_oper_main_id | int(11) | YES | MUL | NULL |  |  |
| dt_oper_pain_type_id | int(11) | YES |  | NULL |  |  |
| dtarea_code | varchar(15) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_oper_main21 | dt_oper_main_id | no | 1 |
| ix_Refdt_oper_pain_type22 | dt_oper_completion_with_id | no | 1 |
| PRIMARY | dt_oper_completion_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
