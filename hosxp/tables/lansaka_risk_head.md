# `lansaka_risk_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| risk_id | varchar(7) | NO | PRI |  |  |  |
| risk_date | date | YES |  | NULL |  |  |
| risk_time | varchar(5) | YES |  | NULL |  |  |
| risk_department | int(2) | YES |  | NULL |  |  |
| risk_miss | char(1) | YES |  | NULL |  |  |
| risk_event | blob | YES |  | NULL |  |  |
| risk_safety | blob | YES |  | NULL |  |  |
| risk_outcome_pt | varchar(200) | YES |  | NULL |  |  |
| risk_outcome_guest | varchar(200) | YES |  | NULL |  |  |
| risk_outcome_staff | varchar(200) | YES |  | NULL |  |  |
| risk_outcome_price | double(7,2) | YES |  | NULL |  |  |
| risk_solve_begin | blob | YES |  | NULL |  |  |
| risk_sum_solve | blob | YES |  | NULL |  |  |
| risk_level | char(1) | YES |  | NULL |  |  |
| risk_head_department | varchar(2) | YES |  | NULL |  |  |
| risk_status | char(1) | YES |  | NULL |  |  |
| risk_program_head | int(2) | YES |  | NULL |  |  |
| risk_program_detail | int(2) | YES |  | NULL |  |  |
| risk_program_text | varchar(200) | YES |  | NULL |  |  |
| login_name | varchar(100) | YES |  | NULL |  |  |
| risk_sum_dep | blob | YES |  | NULL |  |  |
| risk_simple | int(2) | YES |  | NULL |  |  |
| date_input | date | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| last_staff | varchar(100) | YES |  | NULL |  |  |
| print_url | varchar(200) | YES |  | NULL |  |  |
| act_st | char(1) | YES |  | NULL |  |  |
| pic | longblob | YES |  | NULL |  |  |
| clinictype | int(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | risk_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "risk_id": "000001",
    "risk_date": "2013-08-23",
    "risk_time": "12.05",
    "risk_department": null,
    "risk_miss": "N",
    "risk_event": "b'\\xe4\\xb4\\xe9\\xc3\\xd1\\xba\\xe1\\xa8\\xe9\\xa7\\xa8\\xd2\\xa1 \\xa4\\xd8\\xb3\\xbb\\xd1\\xb7\\xc1\\xd2\\xc0\\xc3\\xb3\\xec \\xa8\\xd2\\xa1 \\xa1\\xc5\\xd8\\xe8\\xc1\\xa1\\xd2\\xc3\\xc8\\xd6\\xa1\\xc9\\xd2\\xbe\\xe0\\xc8\\xc9\\xcf \\xc7\\xe8\\xd2\\xcb\\xb9\\xe9\\xd2\\xa8\\xcd HOSxP \\xa4\\xe9\\xd2\\xa7 \\xe0\\xaa\\xe7\\xa4\\xb7\\xd5\\xe8\\xe0\\xa4\\xc3\\xd7\\xe8\\xcd\\xa7 com01 \\xe3\\xb9\\xcb\\xe9\\xcd\\xa7\\xc8\\xd9\\xb9\\xc2\\xec\\xa4\\xcd\\xc1\\xcf \\xe0\\xa8\\xcd\\xc7\\xe8\\xd2\\xc3\\xd0\\xba\\xba \\xe4\\xc1\\xe8\\xb7\\xd3\\xa1\\xd2\\xc3 replication \\xa2\\xe9\\xcd\\xc1\\xd9\\xc5\\xe1\\xc5\\xd0\\xa2\\xd6\\xe9\\xb9 error\\r\\n'",
    "risk_safety": null,
    "risk_outcome_pt": "เสียเวลารอ",
    "risk_outcome_guest": "เสียเวลารอ",
    "risk_outcome_staff": "เสียเวลารอ",
    "risk_outcome_price": null,
    "risk_solve_begin": "b'\\xb5\\xc3\\xc7\\xa8\\xca\\xcd\\xba\\xb7\\xd5\\xe8\\xe0\\xa4\\xc3\\xd7\\xe8\\xcd\\xa7 server \\xc7\\xe8\\xd2\\xc1\\xd5\\xbb\\xd1\\xad\\xcb\\xd2\\xcb\\xc3\\xd7\\xcd\\xe4\\xc1\\xe8\\r\\n'",
    "risk_sum_solve": null,
    "risk_level": "A",
    "risk_head_department": "1",
    "risk_status": "4",
    "risk_program_head": 4,
    "risk_program_detail": 25,
    "risk_program_text": null,
    "login_name": "??? IM",
    "risk_sum_dep": "b'1. \\xb5\\xc3\\xc7\\xa8\\xca\\xcd\\xba\\xa1\\xd2\\xc3\\xb7\\xd3\\xa7\\xd2\\xb9\\xa2\\xcd\\xa7 server \\xc7\\xe8\\xd2\\xc1\\xd5\\xbb\\xd1\\xad\\xcb\\xd2\\xb7\\xd5\\xe8 H/W \\xcb\\xc3\\xd7\\xcd\\xe0\\xbb\\xe7\\xb9\\xb7\\xd5\\xe8 S/W\\r\\n2. \\xb5\\xc3\\xc7\\xa8\\xca\\xcd\\xba\\xc3\\xd0\\xba\\xba network \\xc7\\xe8\\xd2\\xc1\\xd5\\xbb\\xd1\\xad\\xcb\\xd2\\xcb\\xc3\\xd7\\xcd\\xe4\\xc1\\xe8\\r\\n3. \\xb7\\xd3\\xa4\\xd9\\xe8\\xc1\\xd7\\xcd\\xa1\\xd2\\xc3\\xe1\\xa1\\xe9\\xe4\\xa2\\xa1\\xc3\\xb3\\xd5\\xbe\\xba\\xbb\\xd1\\xad\\xcb\\xd2\\r\\n'",
    "risk_simple": 1,
    "date_input": "2013-08-23",
    "last_update": "2013-10-09 19:49:10",
    "last_staff": "admin",
    "print_url": "/Files/report/c4ca4238a0b923820dcc509a6f75849b.pdf",
    "act_st": "1",
    "pic": "[MASKED_AVATAR]",
    "clinictype": 3
  }
]
```
