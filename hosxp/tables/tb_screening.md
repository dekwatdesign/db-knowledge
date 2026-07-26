# `tb_screening`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(15) | NO | PRI |  |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| vstdate | date | YES | MUL | NULL |  |  |
| screen_datetime | datetime | YES | MUL | NULL |  |  |
| screen_no | varchar(20) | YES |  | NULL |  |  |
| hospcode | varchar(5) | YES |  | NULL |  |  |
| age_year | smallint(6) | YES |  | NULL |  |  |
| age_month | smallint(6) | YES |  | NULL |  |  |
| sex | char(1) | YES |  | NULL |  |  |
| citizenship_code | varchar(3) | YES |  | NULL |  |  |
| citizenship_name | varchar(50) | YES |  | NULL |  |  |
| hiv_status | char(1) | YES |  | NULL |  |  |
| hiv_status_source | char(1) | YES |  | NULL |  |  |
| form_mode | char(4) | YES | MUL | NULL |  |  |
| form_mode_source | char(1) | YES |  | NULL |  |  |
| hist_prior_tb_treatment | char(1) | YES |  | NULL |  |  |
| hist_prior_tb_source | char(1) | YES |  | NULL |  |  |
| hist_tb_contact | char(1) | YES |  | NULL |  |  |
| hist_tb_contact_source | char(1) | YES |  | NULL |  |  |
| sym_cough_daily_2wk | char(1) | YES |  | NULL |  |  |
| sym_hemoptysis_1mo | char(1) | YES |  | NULL |  |  |
| sym_cough_lt_2wk | char(1) | YES |  | NULL |  |  |
| sym_weight_loss_unexp | char(1) | YES |  | NULL |  |  |
| sym_fever_daily_1wk | char(1) | YES |  | NULL |  |  |
| sym_night_sweat_1mo | char(1) | YES |  | NULL |  |  |
| sym_cough_unexplained | char(1) | YES |  | NULL |  |  |
| sym_fever_1mo | char(1) | YES |  | NULL |  |  |
| sym_weight_loss_5pct | char(1) | YES |  | NULL |  |  |
| sym_night_sweat_3wk | char(1) | YES |  | NULL |  |  |
| sym_fever_unexp_1wk | char(1) | YES |  | NULL |  |  |
| sym_failure_to_thrive | char(1) | YES |  | NULL |  |  |
| score_general | tinyint(4) | YES |  | NULL |  |  |
| count_hiv | tinyint(4) | YES |  | NULL |  |  |
| hiv_adult_trigger | char(1) | YES |  | NULL |  |  |
| suspect_status | char(1) | YES |  | NULL |  |  |
| suspect_reason | varchar(40) | YES |  | NULL |  |  |
| cxr_result | char(1) | YES |  | NULL |  |  |
| cxr_reason_not_done | varchar(120) | YES |  | NULL |  |  |
| cxr_date | date | YES |  | NULL |  |  |
| cxr_source | char(1) | YES |  | NULL |  |  |
| cxr_xray_report_id | int(11) | YES |  | NULL |  |  |
| afb1_date | date | YES |  | NULL |  |  |
| afb1_collect_type | char(1) | YES |  | NULL |  |  |
| afb1_result | char(1) | YES |  | NULL |  |  |
| afb1_lab_order_id | int(11) | YES |  | NULL |  |  |
| afb2_date | date | YES |  | NULL |  |  |
| afb2_collect_type | char(1) | YES |  | NULL |  |  |
| afb2_result | char(1) | YES |  | NULL |  |  |
| afb2_lab_order_id | int(11) | YES |  | NULL |  |  |
| afb_reason_not_done | varchar(120) | YES |  | NULL |  |  |
| xpert_date | date | YES |  | NULL |  |  |
| xpert_mtb | char(1) | YES |  | NULL |  |  |
| xpert_rr | char(1) | YES |  | NULL |  |  |
| xpert_other_result | varchar(120) | YES |  | NULL |  |  |
| xpert_lab_order_id | int(11) | YES |  | NULL |  |  |
| xpert_reason_not_done | varchar(120) | YES |  | NULL |  |  |
| test_facility | varchar(120) | YES |  | NULL |  |  |
| section2_status | char(1) | YES |  | NULL |  |  |
| dx_summary | char(1) | YES | MUL | NULL |  |  |
| dx_treatment_site | varchar(120) | YES |  | NULL |  |  |
| dx_mdr_flag | char(1) | YES |  | NULL |  |  |
| mirror_status | char(1) | YES |  | NULL |  |  |
| mirror_attempts | tinyint(4) | YES | MUL | NULL |  |  |
| mirror_last_at | datetime | YES |  | NULL |  |  |
| mirror_last_error | varchar(250) | YES |  | NULL |  |  |
| review_status | char(1) | YES | MUL | NULL |  |  |
| reviewed_by | varchar(20) | YES |  | NULL |  |  |
| reviewed_at | datetime | YES |  | NULL |  |  |
| staff | varchar(20) | YES |  | NULL |  |  |
| staff_position | varchar(60) | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_tbscr_form_mode | form_mode | no | 1 |
| ix_idx_tbscr_form_mode | screen_datetime | no | 2 |
| ix_idx_tbscr_hn | hn | no | 1 |
| ix_idx_tbscr_mirror | mirror_attempts | no | 1 |
| ix_idx_tbscr_mirror | mirror_status | no | 2 |
| ix_idx_tbscr_review | review_status | no | 1 |
| ix_idx_tbscr_screen_dt | screen_datetime | no | 1 |
| ix_idx_tbscr_section2 | screen_datetime | no | 1 |
| ix_idx_tbscr_section2 | section2_status | no | 2 |
| ix_idx_tbscr_suspect | dx_summary | no | 1 |
| ix_idx_tbscr_suspect | suspect_status | no | 2 |
| ix_idx_tbscr_vstdate | vstdate | no | 1 |
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
