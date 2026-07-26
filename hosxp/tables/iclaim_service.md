# `iclaim_service`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| iclaim_service_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| ref_id | varchar(100) | YES |  | NULL |  |  |
| insure_code | varchar(50) | YES |  | NULL |  |  |
| pol_no | varchar(100) | YES | MUL | NULL |  |  |
| plan_code | varchar(100) | YES |  | NULL |  |  |
| plan_name | varchar(200) | YES |  | NULL |  |  |
| waiting_claim_status | varchar(200) | YES |  | NULL |  |  |
| waiting_claim_reason | varchar(200) | YES |  | NULL |  |  |
| effective_date | date | YES |  | NULL |  |  |
| effective_time | time | YES |  | NULL |  |  |
| expire_date | date | YES |  | NULL |  |  |
| expire_time | time | YES |  | NULL |  |  |
| benefit_ipd_room | double(15,3) | YES |  | NULL |  |  |
| benefit_ipd_icu_room | double(15,3) | YES |  | NULL |  |  |
| benefit_surgical_benefit_ipd | double(15,3) | YES |  | NULL |  |  |
| benefit_surgical_benefit_opd | double(15,3) | YES |  | NULL |  |  |
| benefit_operating_room | double(15,3) | YES |  | NULL |  |  |
| benefit_anesthesia_fee | double(15,3) | YES |  | NULL |  |  |
| benefit_laboratory_xray | double(15,3) | YES |  | NULL |  |  |
| benefit_specialist_consultation | double(15,3) | YES |  | NULL |  |  |
| benefit_general_expense | double(15,3) | YES |  | NULL |  |  |
| benefit_opd_times_per_year | double(15,3) | YES |  | NULL |  |  |
| benefit_opd_amount_per_times | double(15,3) | YES |  | NULL |  |  |
| benefit_opd_amount_per_year | double(15,3) | YES |  | NULL |  |  |
| benefit_emergency | double(15,3) | YES |  | NULL |  |  |
| benefit_er_within_hrs | double(15,3) | YES |  | NULL |  |  |
| benefit_medical_expense | double(15,3) | YES |  | NULL |  |  |
| benefit_for_motorcycle | varchar(150) | YES |  | NULL |  |  |
| remaining_ipd | double(15,3) | YES |  | NULL |  |  |
| remaining_ipd_icu_room | double(15,3) | YES |  | NULL |  |  |
| remaining_opd_times_per_year | double(15,3) | YES |  | NULL |  |  |
| remaining_opd_amount_per_year | double(15,3) | YES |  | NULL |  |  |
| remaining_emergency | double(15,3) | YES |  | NULL |  |  |
| remaining_medical_expense | double(15,3) | YES |  | NULL |  |  |
| exclusion_product | text | YES |  | NULL |  |  |
| exclusion_policy | text | YES |  | NULL |  |  |
| exclusion_personal | text | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| coverage_claim_status | varchar(250) | YES |  | NULL |  |  |
| remaining_opd_amount | double(22,2) | YES |  | NULL |  |  |
| group_order | int(11) | YES |  | NULL |  |  |
| remaining_opd_times_per_day | int(11) | YES |  | NULL |  |  |
| remaining_opd_day_per_day | int(11) | YES |  | NULL |  |  |
| coverage_claim_reason | varchar(250) | YES |  | NULL |  |  |
| policy_order | int(11) | YES |  | NULL |  |  |
| coverage_claim_remark | varchar(250) | YES |  | NULL |  |  |
| benefit_opd_times_per_day | int(11) | YES |  | NULL |  |  |
| benefit_opd_day_per_year | int(11) | YES |  | NULL |  |  |
| benefit_opd_amount_per_day | double(15,3) | YES |  | NULL |  |  |
| remaining_opd_day_per_year | int(11) | YES |  | NULL |  |  |
| benefit_amount_per_day | double(22,2) | YES |  | NULL |  |  |
| status_code | int(11) | YES |  | NULL |  |  |
| title_name | varchar(50) | YES |  | NULL |  |  |
| first_name | varchar(50) | YES |  | NULL |  |  |
| mid_name | varchar(50) | YES |  | NULL |  |  |
| last_name | varchar(50) | YES |  | NULL |  |  |
| date_of_birth | date | YES |  | NULL |  |  |
| cid | varchar(25) | YES |  | NULL |  |  |
| service_type | varchar(25) | YES |  | NULL |  |  |
| pol_no_order | int(11) | YES |  | NULL |  |  |
| iclaim_transaction_no | varchar(250) | YES |  | NULL |  |  |
| iclaim_transaction_uid | varchar(250) | YES |  | NULL |  |  |
| claim_from_motorcycle | char(1) | YES |  | NULL |  |  |
| illness_type | char(10) | YES |  | NULL |  |  |
| policy_type | varchar(25) | YES |  | NULL |  |  |
| remaining_opd_amount_per_times | double(15,3) | YES |  | NULL |  |  |
| remaining_amount_per_day | double(15,3) | YES |  | NULL |  |  |
| response_message | text | YES |  | NULL |  |  |
| episode_type | varchar(25) | YES |  | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| transaction_confirm | char(1) | YES |  | NULL |  |  |
| claim_state | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_hn | hn | no | 1 |
| ix_hn_polno | hn | no | 1 |
| ix_hn_polno | pol_no | no | 2 |
| ix_hn_polno_index_index | pol_no | no | 1 |
| ix_hn_polno_index_index | hn | no | 2 |
| ix_vn | vn | no | 1 |
| PRIMARY | iclaim_service_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "iclaim_service_id": 142,
    "hn": "000011859",
    "ref_id": "15",
    "insure_code": "SCBLIFE",
    "pol_no": "40349459",
    "plan_code": "LH01",
    "plan_name": "ประกันสุขภาพรายบุคคล",
    "waiting_claim_status": "มีผลบังคับ",
    "waiting_claim_reason": "",
    "effective_date": "2017-08-18",
    "effective_time": "0:01:00",
    "expire_date": "2097-08-17",
    "expire_time": "23:59:00",
    "benefit_ipd_room": 2000.0,
    "benefit_ipd_icu_room": 1000000.0,
    "benefit_surgical_benefit_ipd": 1000000.0,
    "benefit_surgical_benefit_opd": 1000000.0,
    "benefit_operating_room": 0.0,
    "benefit_anesthesia_fee": 0.0,
    "benefit_laboratory_xray": 1000000.0,
    "benefit_specialist_consultation": 2000.0,
    "benefit_general_expense": 1000000.0,
    "benefit_opd_times_per_year": 0.0,
    "benefit_opd_amount_per_times": 0.0,
    "benefit_opd_amount_per_year": 0.0,
    "benefit_emergency": 10000.0,
    "benefit_er_within_hrs": 0.0,
    "benefit_medical_expense": 0.0,
    "benefit_for_motorcycle": "ไม่คุ้มครอง",
    "remaining_ipd": null,
    "remaining_ipd_icu_room": null,
    "remaining_opd_times_per_year": null,
    "remaining_opd_amount_per_year": null,
    "remaining_emergency": null,
    "remaining_medical_expense": null,
    "exclusion_product": null,
    "exclusion_policy": null,
    "exclusion_personal": null,
    "update_datetime": "2019-02-18 15:24:17",
    "pttype": null,
    "coverage_claim_status": null,
    "remaining_opd_amount": null,
    "group_order": null,
    "remaining_opd_times_per_day": null,
    "remaining_opd_day_per_day": null,
    "coverage_claim_reason": null,
    "policy_order": null,
    "coverage_claim_remark": null,
    "benefit_opd_times_per_day": null,
    "benefit_opd_day_per_year": null,
    "benefit_opd_amount_per_day": null,
    "remaining_opd_day_per_year": null,
    "benefit_amount_per_day": null,
    "status_code": null,
    "title_name": null,
    "first_name": null,
    "mid_name": null,
    "last_name": null,
    "date_of_birth": null,
    "cid": null,
    "service_type": null,
    "pol_no_order": null,
    "iclaim_transaction_no": null,
    "iclaim_transaction_uid": null,
    "claim_from_motorcycle": null,
    "illness_type": null,
    "policy_type": null,
    "remaining_opd_amount_per_times": null,
    "remaining_amount_per_day": null,
    "response_message": null,
    "episode_type": null,
    "an": null,
    "vn": null,
    "transaction_confirm": null,
    "claim_state": null
  }
]
```
