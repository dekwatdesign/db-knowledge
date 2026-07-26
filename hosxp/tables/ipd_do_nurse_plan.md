# `ipd_do_nurse_plan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_do_nurse_plan_id | int(11) | NO | PRI | 0 |  |  |
| ipd_doctor_order_detail_id | int(11) | YES | MUL | NULL |  |  |
| plan_date | date | YES |  | NULL |  |  |
| plan_time | time | YES |  | NULL |  |  |
| plan_duration_minute | int(11) | YES |  | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| process_datetime | datetime | YES |  | NULL |  |  |
| process_note | text | YES |  | NULL |  |  |
| flag | int(11) | YES |  | NULL |  |  |
| process_ok | char(1) | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES |  | NULL |  |  |
| ref_job_id | int(11) | YES |  | NULL |  |  |
| is_skip | char(1) | YES |  | NULL |  |  |
| doctor_code_2nd | varchar(15) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_id | ipd_doctor_order_detail_id | no | 1 |
| ix_id1_date_time | ipd_doctor_order_detail_id | no | 1 |
| ix_id1_date_time | plan_date | no | 2 |
| ix_id1_date_time | plan_time | no | 3 |
| PRIMARY | ipd_do_nurse_plan_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "ipd_do_nurse_plan_id": 2,
    "ipd_doctor_order_detail_id": 166,
    "plan_date": null,
    "plan_time": null,
    "plan_duration_minute": null,
    "an": null,
    "process_datetime": "2025-12-19 10:26:16",
    "process_note": "รับแล้ว",
    "flag": null,
    "process_ok": "Y",
    "doctor_code": "291",
    "ref_job_id": null,
    "is_skip": "N",
    "doctor_code_2nd": null
  },
  {
    "ipd_do_nurse_plan_id": 3,
    "ipd_doctor_order_detail_id": 186,
    "plan_date": null,
    "plan_time": null,
    "plan_duration_minute": null,
    "an": null,
    "process_datetime": "2025-12-19 10:26:46",
    "process_note": null,
    "flag": null,
    "process_ok": "Y",
    "doctor_code": "291",
    "ref_job_id": null,
    "is_skip": null,
    "doctor_code_2nd": null
  },
  {
    "ipd_do_nurse_plan_id": 4,
    "ipd_doctor_order_detail_id": 192,
    "plan_date": null,
    "plan_time": null,
    "plan_duration_minute": null,
    "an": null,
    "process_datetime": "2025-12-19 10:32:05",
    "process_note": "รับแล้ว",
    "flag": null,
    "process_ok": "Y",
    "doctor_code": "291",
    "ref_job_id": null,
    "is_skip": null,
    "doctor_code_2nd": null
  }
]
```
