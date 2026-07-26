# `ipd_do_review`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_do_review_id | int(11) | NO | PRI | 0 |  |  |
| ipd_doctor_order_detail_id | int(11) | YES | UNI | NULL |  |  |
| review_datetime | datetime | YES |  | NULL |  |  |
| review_doctor_code | varchar(20) | YES |  | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_ipd_doctor_order_detail_id | ipd_doctor_order_detail_id | yes | 1 |
| PRIMARY | ipd_do_review_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ipd_do_review_id": 11,
    "ipd_doctor_order_detail_id": 149,
    "review_datetime": "2025-12-19 08:57:02",
    "review_doctor_code": "335",
    "an": "680001949"
  },
  {
    "ipd_do_review_id": 14,
    "ipd_doctor_order_detail_id": 182,
    "review_datetime": "2025-12-19 10:04:33",
    "review_doctor_code": "0043",
    "an": "680001962"
  },
  {
    "ipd_do_review_id": 13,
    "ipd_doctor_order_detail_id": 181,
    "review_datetime": "2025-12-19 10:04:32",
    "review_doctor_code": "0043",
    "an": "680001962"
  },
  {
    "ipd_do_review_id": 12,
    "ipd_doctor_order_detail_id": 180,
    "review_datetime": "2025-12-19 10:04:31",
    "review_doctor_code": "0043",
    "an": "680001962"
  },
  {
    "ipd_do_review_id": 15,
    "ipd_doctor_order_detail_id": 183,
    "review_datetime": "2025-12-19 10:04:37",
    "review_doctor_code": "0043",
    "an": "680001962"
  },
  {
    "ipd_do_review_id": 16,
    "ipd_doctor_order_detail_id": 179,
    "review_datetime": "2025-12-19 10:04:43",
    "review_doctor_code": "0043",
    "an": "680001962"
  },
  {
    "ipd_do_review_id": 18,
    "ipd_doctor_order_detail_id": 142,
    "review_datetime": "2025-12-19 10:10:54",
    "review_doctor_code": "0043",
    "an": "680001949"
  },
  {
    "ipd_do_review_id": 19,
    "ipd_doctor_order_detail_id": 145,
    "review_datetime": "2025-12-19 10:10:56",
    "review_doctor_code": "0043",
    "an": "680001949"
  }
]
```
