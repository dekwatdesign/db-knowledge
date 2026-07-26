# `pt_medication_history`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pt_medication_history_id | int(11) | NO | PRI | 0 |  |  |
| medication_name | varchar(250) | YES | MUL | NULL |  |  |
| taken_from | varchar(150) | YES |  | NULL |  |  |
| taken_date | date | YES |  | NULL |  |  |
| staff | varchar(100) | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_medication_name | medication_name | no | 1 |
| PRIMARY | pt_medication_history_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "pt_medication_history_id": 6,
    "medication_name": "omeprazole 20 mg 1x1 ac",
    "taken_from": "รพ.สมุทรปราการ",
    "taken_date": "2023-11-28",
    "staff": "[MASKED_FULLNAME]",
    "hn": "530054147",
    "update_datetime": null,
    "hos_guid": null
  },
  {
    "pt_medication_history_id": 7,
    "medication_name": "Bepantan apply lession prn",
    "taken_from": "ซื้อเอง",
    "taken_date": "2023-11-28",
    "staff": "[MASKED_FULLNAME]",
    "hn": "530054147",
    "update_datetime": null,
    "hos_guid": null
  },
  {
    "pt_medication_history_id": 8,
    "medication_name": "Doxazosin 2 mg 1x1 hs",
    "taken_from": "รพ.สมุทรปราการ",
    "taken_date": "2023-11-28",
    "staff": "[MASKED_FULLNAME]",
    "hn": "530054147",
    "update_datetime": null,
    "hos_guid": null
  },
  {
    "pt_medication_history_id": 9,
    "medication_name": "NaCl 600 mg 1x1pc",
    "taken_from": "รพ.สมุทรปราการ",
    "taken_date": "2023-11-28",
    "staff": "[MASKED_FULLNAME]",
    "hn": "530054147",
    "update_datetime": null,
    "hos_guid": null
  },
  {
    "pt_medication_history_id": 11,
    "medication_name": "keppra ทาน 12.5 ml q 12 ชั่วโมง",
    "taken_from": "รพ.รามาจักรีนฤบดินทร์",
    "taken_date": "2023-02-24",
    "staff": "[MASKED_FULLNAME]",
    "hn": "530002250",
    "update_datetime": "2023-04-03 11:29:52",
    "hos_guid": null
  },
  {
    "pt_medication_history_id": 12,
    "medication_name": "Lurasidone 20 mg",
    "taken_from": "ยาเดิมผู้ป่วย",
    "taken_date": "2023-09-16",
    "staff": "[MASKED_FULLNAME]",
    "hn": "660001025",
    "update_datetime": null,
    "hos_guid": null
  },
  {
    "pt_medication_history_id": 13,
    "medication_name": "",
    "taken_from": null,
    "taken_date": null,
    "staff": "[MASKED_FULLNAME]",
    "hn": "660001025",
    "update_datetime": null,
    "hos_guid": null
  },
  {
    "pt_medication_history_id": 14,
    "medication_name": "Gaviscon dual/ทาน 1 เม็ด วันละ 4 ครั้ง หลังอาหาร เช้า กลางวัน เย็น  ก่อนนอน (x7วัน)",
    "taken_from": null,
    "taken_date": null,
    "staff": "[MASKED_FULLNAME]",
    "hn": "590000101",
    "update_datetime": null,
    "hos_guid": null
  }
]
```
