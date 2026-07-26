# `clinic_hd_dmis_claim`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinic_hd_dmis_claim_id | int(11) | NO | PRI | NULL |  |  |
| clinic_hd_service_id | int(11) | YES | MUL | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| clinic_hd_onset | date | YES | MUL | NULL |  |  |
| clinic_hd_onset_time | time | YES |  | NULL |  |  |
| clinic_hd_off_time | time | YES |  | NULL |  |  |
| clinic_hd_pre_weight | double(15,3) | YES |  | NULL |  |  |
| clinic_hd_pre_bps | int(11) | YES |  | NULL |  |  |
| clinic_hd_pre_bpd | int(11) | YES |  | NULL |  |  |
| clinic_hd_post_weight | double(15,3) | YES |  | NULL |  |  |
| clinic_hd_post_bps | int(11) | YES |  | NULL |  |  |
| clinic_hd_post_bpd | int(11) | YES |  | NULL |  |  |
| clinic_hd_height | double(15,3) | YES |  | NULL |  |  |
| clinic_hd_creatinine | double(15,3) | YES |  | NULL |  |  |
| clinic_hd_albumin | double(15,3) | YES |  | NULL |  |  |
| clinic_hd_ultrafiltration | double(15,3) | YES |  | NULL |  |  |
| clinic_hd_urr | double(15,3) | YES |  | NULL |  |  |
| clinic_hd_ktv | double(15,3) | YES |  | NULL |  |  |
| clinic_hd_hb | double(15,3) | YES |  | NULL |  |  |
| clinic_hd_hct | double(15,3) | YES |  | NULL |  |  |
| clinic_hd_pre_dialysis_bun | double(15,3) | YES |  | NULL |  |  |
| clinic_hd_post_dialysis_bun | double(15,3) | YES |  | NULL |  |  |
| clinic_hd_blood_flow | double(15,3) | YES |  | NULL |  |  |
| clinic_hd_blood_flow_rate | double(15,3) | YES |  | NULL |  |  |
| clinic_hd_membrane | varchar(100) | YES |  | NULL |  |  |
| clinic_hd_dialyzer | varchar(100) | YES |  | NULL |  |  |
| clinic_hd_vascular_access | varchar(50) | YES |  | NULL |  |  |
| clinic_hd_cath | varchar(100) | YES |  | NULL |  |  |
| clinic_hd_spec_cond | varchar(50) | YES |  | NULL |  |  |
| clinic_hd_new_dialyze | char(1) | YES |  | NULL |  |  |
| clinic_hd_mode | varchar(20) | YES |  | NULL |  |  |
| clinic_hd_esa_epo | text | YES |  | NULL |  |  |
| clinic_hd_qty | text | YES |  | NULL |  |  |
| clinic_hd_route | text | YES |  | NULL |  |  |
| clinic_hd_claim_amount | double(15,3) | YES |  | NULL |  |  |
| clinic_hd_iv_iron | double(15,3) | YES |  | NULL |  |  |
| clinic_hd_lowmolheparin | double(15,3) | YES |  | NULL |  |  |
| clinic_hd_dbllumen | double(15,3) | YES |  | NULL |  |  |
| clinic_hd_parnutr | double(15,3) | YES |  | NULL |  |  |
| clinic_hd_lab_xray | double(15,3) | YES |  | NULL |  |  |
| clinic_hd_humanalb | double(15,3) | YES |  | NULL |  |  |
| clinic_hd_claim_sent | char(1) | YES | MUL | NULL |  |  |
| clinic_hd_claim_sent_at | datetime | YES | MUL | NULL |  |  |
| clinic_hd_claim_sent_by | varchar(15) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| clinic_hd_confirm_status | varchar(20) | YES |  | NULL |  |  |
| clinic_hd_confirm_remark | varchar(500) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_clinic_hd_dmis_claim_claim_sent | clinic_hd_claim_sent | no | 1 |
| ix_idx_clinic_hd_dmis_claim_clinic_hd_onset | clinic_hd_onset | no | 1 |
| ix_idx_clinic_hd_dmis_claim_clinic_hd_service_id | clinic_hd_service_id | no | 1 |
| ix_idx_clinic_hd_dmis_claim_hn | hn | no | 1 |
| ix_idx_clinic_hd_dmis_claim_sent_at | clinic_hd_claim_sent_at | no | 1 |
| ix_idx_clinic_hd_dmis_claim_vn | vn | no | 1 |
| PRIMARY | clinic_hd_dmis_claim_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
