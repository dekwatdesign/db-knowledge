# `doctor_desk_tx`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_desk_tx_id | int(11) | NO | PRI | 0 |  |  |
| doctor_code | varchar(10) | YES |  | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| tx_type_id | int(11) | YES | MUL | NULL |  |  |
| tx_datetime | datetime | YES |  | NULL |  |  |
| tx_datetime_int | int(11) | YES | MUL | NULL |  |  |
| depcode | varchar(3) | YES |  | NULL |  |  |
| computer_name | varchar(100) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| department | char(3) | YES |  | NULL |  |  |
| tx_time_refresh_sec | int(11) | YES |  | NULL |  |  |
| tx_class_name | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_tx_datetime_int | tx_datetime_int | no | 1 |
| ix_vn | vn | no | 1 |
| ix_vn_tx_type | vn | no | 1 |
| ix_vn_tx_type | tx_type_id | no | 2 |
| ix_vn_tx_type_index | tx_type_id | no | 1 |
| ix_vn_tx_type_index | vn | no | 2 |
| PRIMARY | doctor_desk_tx_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "doctor_desk_tx_id": 550,
    "doctor_code": "361",
    "vn": "681016091133",
    "tx_type_id": 7,
    "tx_datetime": "2025-10-16 09:31:47",
    "tx_datetime_int": 1760607107,
    "depcode": "",
    "computer_name": "A54-0082",
    "hn": "570000422",
    "department": "OPD",
    "tx_time_refresh_sec": null,
    "tx_class_name": "THOSxPDiepensingDispenseEntryFrame"
  },
  {
    "doctor_desk_tx_id": 551,
    "doctor_code": "361",
    "vn": "681016091434",
    "tx_type_id": 7,
    "tx_datetime": "2025-10-16 09:34:39",
    "tx_datetime_int": 1760607279,
    "depcode": "",
    "computer_name": "A54-0082",
    "hn": "650005736",
    "department": "OPD",
    "tx_time_refresh_sec": 1224,
    "tx_class_name": "THOSxPDiepensingDispenseEntryFrame"
  },
  {
    "doctor_desk_tx_id": 552,
    "doctor_code": "361",
    "vn": "681016093105",
    "tx_type_id": 7,
    "tx_datetime": "2025-10-16 09:44:09",
    "tx_datetime_int": 1760607849,
    "depcode": "",
    "computer_name": "A54-0082",
    "hn": "580000502",
    "department": "OPD",
    "tx_time_refresh_sec": 1280,
    "tx_class_name": "THOSxPDiepensingDispenseEntryFrame"
  },
  {
    "doctor_desk_tx_id": 554,
    "doctor_code": "361",
    "vn": "681016092008",
    "tx_type_id": 7,
    "tx_datetime": "2025-10-16 09:53:47",
    "tx_datetime_int": 1760608427,
    "depcode": "",
    "computer_name": "A54-0082",
    "hn": "640009065",
    "department": "OPD",
    "tx_time_refresh_sec": 1089,
    "tx_class_name": "THOSxPDiepensingDispenseEntryFrame"
  },
  {
    "doctor_desk_tx_id": 555,
    "doctor_code": "361",
    "vn": "681016093846",
    "tx_type_id": 7,
    "tx_datetime": "2025-10-16 10:01:32",
    "tx_datetime_int": 1760608892,
    "depcode": "",
    "computer_name": "A54-0082",
    "hn": "640009143",
    "department": "OPD",
    "tx_time_refresh_sec": 1087,
    "tx_class_name": "THOSxPDiepensingDispenseEntryFrame"
  },
  {
    "doctor_desk_tx_id": 556,
    "doctor_code": "361",
    "vn": "681016102708",
    "tx_type_id": 7,
    "tx_datetime": "2025-10-16 10:52:05",
    "tx_datetime_int": 1760611925,
    "depcode": "",
    "computer_name": "A54-0082",
    "hn": "550000718",
    "department": "OPD",
    "tx_time_refresh_sec": 2053,
    "tx_class_name": "THOSxPDiepensingDispenseEntryFrame"
  },
  {
    "doctor_desk_tx_id": 557,
    "doctor_code": "361",
    "vn": "681017072805",
    "tx_type_id": 7,
    "tx_datetime": "2025-10-17 08:19:43",
    "tx_datetime_int": 1760689183,
    "depcode": "",
    "computer_name": "A54-0082",
    "hn": "530171948",
    "department": "OPD",
    "tx_time_refresh_sec": null,
    "tx_class_name": "THOSxPDiepensingDispenseEntryFrame"
  },
  {
    "doctor_desk_tx_id": 558,
    "doctor_code": "361",
    "vn": "681017073233",
    "tx_type_id": 7,
    "tx_datetime": "2025-10-17 08:25:38",
    "tx_datetime_int": 1760689538,
    "depcode": "",
    "computer_name": "A54-0082",
    "hn": "530150549",
    "department": "OPD",
    "tx_time_refresh_sec": 1532,
    "tx_class_name": "THOSxPDiepensingDispenseEntryFrame"
  }
]
```
