# `physic_plan_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_plan_detail_id | int(11) | NO | PRI | 0 |  |  |
| physic_plan_id | int(11) | YES | MUL | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| physic_items_id | int(11) | YES | MUL | NULL |  |  |
| physic_plan_detail_qty | int(11) | YES | MUL | NULL |  |  |
| physic_plan_detail_day | int(11) | YES | MUL | NULL |  |  |
| physic_plan_detail_ser_date | date | YES | MUL | NULL |  |  |
| physic_plan_detail_begin_time | time | YES |  | NULL |  |  |
| physic_plan_detail_end_time | time | YES |  | NULL |  |  |
| physic_plan_detail_staff | varchar(255) | YES |  | NULL |  |  |
| physic_plan_detail_lastupdate | datetime | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |
| physic_plan_detail_price | double(15,3) | YES | MUL | NULL |  |  |
| icd9 | varchar(9) | YES |  | NULL |  |  |
| icd10 | varchar(9) | YES |  | NULL |  |  |
| physic_plan_detail_chk_pmt | char(1) | YES |  | NULL |  |  |
| physic_plan_detail_chk_ptt | char(1) | YES |  | NULL |  |  |
| physic_plan_detail_chk_tm | char(1) | YES |  | NULL |  |  |
| physic_stamp_order_ipd_id | int(11) | YES | MUL | NULL |  |  |
| dx_guid | varchar(38) | YES |  | NULL |  |  |
| physic_plan_detail_chk_rec | char(1) | YES |  | NULL |  |  |
| physic_diagnosis_type_id | int(11) | YES | MUL | NULL |  |  |
| doctor | varchar(15) | YES |  | NULL |  |  |
| tool_start_date | date | YES |  | NULL |  |  |
| tool_end_date | date | YES |  | NULL |  |  |
| tool_count | int(11) | YES |  | NULL |  |  |
| tool_doctor | char(6) | YES |  | NULL |  |  |
| spclty | varchar(150) | YES |  | NULL |  |  |
| physic_plan_detail_begin_date | date | YES |  | NULL |  |  |
| physic_plan_detail_end_date | date | YES |  | NULL |  |  |
| physic_plan_detail_num | int(11) | YES |  | NULL |  |  |
| physic_plan_doctor_list_text | text | YES |  | NULL |  |  |
| physic_plan_detail_chk_price | char(1) | YES |  | NULL |  |  |
| physic_plan_detail_note | varchar(250) | YES |  | NULL |  |  |
| physic_disease_code | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_physic_diagnosis_type_id | physic_diagnosis_type_id | no | 1 |
| ix_physic_items_id | physic_items_id | no | 1 |
| ix_physic_plan_detail_day | physic_plan_detail_day | no | 1 |
| ix_physic_plan_detail_lastupdate | physic_plan_detail_lastupdate | no | 1 |
| ix_physic_plan_detail_price | physic_plan_detail_price | no | 1 |
| ix_physic_plan_detail_qty | physic_plan_detail_qty | no | 1 |
| ix_physic_plan_detail_ser_date | physic_plan_detail_ser_date | no | 1 |
| ix_physic_stamp_order_ipd_id | physic_stamp_order_ipd_id | no | 1 |
| ix_plan_id | physic_plan_id | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | physic_plan_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
