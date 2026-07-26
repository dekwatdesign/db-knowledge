# `rep_eclaim_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rep_eclaim_detail_id | int(11) | NO | PRI | 0 |  |  |
| rep_eclaim_detail_rep_no | varchar(20) | YES |  | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| rep_eclaim_detail_tran_id | varchar(20) | YES |  | NULL |  |  |
| rep_eclaim_detail_patient_type | varchar(10) | YES |  | NULL |  |  |
| rep_eclaim_detail_entry_date | datetime | YES |  | NULL |  |  |
| rep_eclaim_detail_nhso | double(18,2) | YES |  | NULL |  |  |
| rep_eclaim_detail_agency | double(18,2) | YES |  | NULL |  |  |
| rep_eclaim_detail_com_from | varchar(10) | YES |  | NULL |  |  |
| rep_eclaim_detail_error_code | varchar(255) | YES |  | NULL |  |  |
| rep_eclaim_id | int(11) | YES | MUL | NULL |  |  |
| rep_eclaim_req_withdraw | varchar(255) | YES |  | NULL |  |  |
| rep_eclaim_status | varchar(20) | YES |  | NULL |  |  |
| rep_eclaim_another_note | varchar(255) | YES |  | NULL |  |  |
| rep_eclaim_import_datetime | datetime | YES |  | NULL |  |  |
| nhso_id | int(11) | YES |  | NULL |  |  |
| format_pay | varchar(255) | YES |  | NULL |  |  |
| charge1 | double(18,2) | YES |  | NULL |  |  |
| charge2 | double(18,2) | YES |  | NULL |  |  |
| charge3 | double(18,2) | YES |  | NULL |  |  |
| row_no | int(11) | YES |  | NULL |  |  |
| tran_id | int(11) | YES |  | NULL |  |  |
| pid | varchar(13) | YES |  | NULL |  |  |
| person_name | varchar(100) | YES |  | NULL |  |  |
| person_type | varchar(5) | YES |  | NULL |  |  |
| service_datetime | datetime | YES |  | NULL |  |  |
| discharge_datetime | datetime | YES |  | NULL |  |  |
| nhso_reimb_amount | double(22,2) | YES |  | NULL |  |  |
| affiliation_reimb_amount | double(22,2) | YES |  | NULL |  |  |
| reimb_source | varchar(100) | YES |  | NULL |  |  |
| error_code | varchar(20) | YES |  | NULL |  |  |
| main_funds_name | varchar(30) | YES |  | NULL |  |  |
| sub_funds_name | varchar(30) | YES |  | NULL |  |  |
| is_service | char(1) | YES |  | NULL |  |  |
| transfer_status | int(11) | YES |  | NULL |  |  |
| right_status | int(11) | YES |  | NULL |  |  |
| use_right_status | int(11) | YES |  | NULL |  |  |
| is_chk | char(1) | YES |  | NULL |  |  |
| main_inscl | varchar(6) | YES |  | NULL |  |  |
| sub_inscl | varchar(6) | YES |  | NULL |  |  |
| href | varchar(10) | YES |  | NULL |  |  |
| hcode | varchar(5) | YES |  | NULL |  |  |
| hmain | varchar(5) | YES |  | NULL |  |  |
| prov1 | varchar(6) | YES |  | NULL |  |  |
| rg1 | varchar(2) | YES |  | NULL |  |  |
| hmain2 | varchar(5) | YES |  | NULL |  |  |
| prov2 | varchar(6) | YES |  | NULL |  |  |
| rg2 | varchar(2) | YES |  | NULL |  |  |
| hmain3 | varchar(5) | YES |  | NULL |  |  |
| da | varchar(6) | YES |  | NULL |  |  |
| proj | varchar(15) | YES |  | NULL |  |  |
| pa | varchar(10) | YES |  | NULL |  |  |
| drg | varchar(10) | YES |  | NULL |  |  |
| rw | double(15,3) | YES |  | NULL |  |  |
| ca_type | varchar(10) | YES |  | NULL |  |  |
| reimb_1_1 | double(22,2) | YES |  | NULL |  |  |
| reimb_1_2 | double(22,2) | YES |  | NULL |  |  |
| reimb_1_3 | double(22,2) | YES |  | NULL |  |  |
| cental_reimb_amount | double(22,2) | YES |  | NULL |  |  |
| paid_amount | double(22,2) | YES |  | NULL |  |  |
| point_ratio | double(22,2) | YES |  | NULL |  |  |
| ps_amount | double(22,2) | YES |  | NULL |  |  |
| ps_percent | double(22,2) | YES |  | NULL |  |  |
| ccuf | double(22,2) | YES |  | NULL |  |  |
| adjrw_n | double(22,2) | YES |  | NULL |  |  |
| adjrw2 | double(22,2) | YES |  | NULL |  |  |
| reimb_9 | double(22,2) | YES |  | NULL |  |  |
| reimb_10 | double(22,2) | YES |  | NULL |  |  |
| hc_iphc | double(22,2) | YES |  | NULL |  |  |
| hc_ophc | double(22,2) | YES |  | NULL |  |  |
| ae_opae | double(22,2) | YES |  | NULL |  |  |
| ae_ipnb | double(22,2) | YES |  | NULL |  |  |
| ae_ipuc | double(22,2) | YES |  | NULL |  |  |
| ae_ip3sss | double(22,2) | YES |  | NULL |  |  |
| ae_ip7sss | double(22,2) | YES |  | NULL |  |  |
| ae_carae | double(22,2) | YES |  | NULL |  |  |
| ae_carefpuc | double(22,2) | YES |  | NULL |  |  |
| opinst | double(22,2) | YES |  | NULL |  |  |
| inst | double(22,2) | YES |  | NULL |  |  |
| ip_ipaec | double(22,2) | YES |  | NULL |  |  |
| ip_ipaer | double(22,2) | YES |  | NULL |  |  |
| ip_ipinrgc | double(22,2) | YES |  | NULL |  |  |
| ip_ipinrgr | double(22,2) | YES |  | NULL |  |  |
| ip_ipinspsn | double(22,2) | YES |  | NULL |  |  |
| ip_ipprcc | double(22,2) | YES |  | NULL |  |  |
| ip_ipprccpuc | double(22,2) | YES |  | NULL |  |  |
| ip_ipbkkinst | double(22,2) | YES |  | NULL |  |  |
| ip_ipontop | double(22,2) | YES |  | NULL |  |  |
| dmis_dmisrc_amount | double(22,2) | YES |  | NULL |  |  |
| dmis_llop | double(22,2) | YES |  | NULL |  |  |
| dmis_llrgc | double(22,2) | YES |  | NULL |  |  |
| dmis_llrgr | double(22,2) | YES |  | NULL |  |  |
| dmis_stroke | double(22,2) | YES |  | NULL |  |  |
| dmis_dmidml | double(22,2) | YES |  | NULL |  |  |
| dmis_pp | double(22,2) | YES |  | NULL |  |  |
| dmis_dmishd | double(22,2) | YES |  | NULL |  |  |
| dmis_dmicnt | double(22,2) | YES |  | NULL |  |  |
| dmis_palliative_care | double(22,2) | YES |  | NULL |  |  |
| dmis_dm | double(22,2) | YES |  | NULL |  |  |
| drug_amount | double(22,2) | YES |  | NULL |  |  |
| opbkk_hc | double(22,2) | YES |  | NULL |  |  |
| opbkk_dent | double(22,2) | YES |  | NULL |  |  |
| opbkk_drug | double(22,2) | YES |  | NULL |  |  |
| opbkk_fs | double(22,2) | YES |  | NULL |  |  |
| opbkk_others | double(22,2) | YES |  | NULL |  |  |
| deny_hc | varchar(10) | YES |  | NULL |  |  |
| deny_ae | varchar(10) | YES |  | NULL |  |  |
| deny_inst | varchar(10) | YES |  | NULL |  |  |
| deny_ip | varchar(10) | YES |  | NULL |  |  |
| deny_dmis | varchar(10) | YES |  | NULL |  |  |
| fs | double(22,2) | YES |  | NULL |  |  |
| va | varchar(10) | YES |  | NULL |  |  |
| remark | varchar(10) | YES |  | NULL |  |  |
| ae_caref | double(22,2) | YES |  | NULL |  |  |
| dmis_lp | double(22,2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_Refrep_eclaim12 | rep_eclaim_id | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | rep_eclaim_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
