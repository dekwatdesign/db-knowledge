# `ipt_nurse_oper`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nurse_oper_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| ipt_oper_code | int(11) | YES |  | NULL |  |  |
| doctor | varchar(7) | YES |  | NULL |  |  |
| begin_date_time | datetime | YES |  | NULL |  |  |
| end_date_time | datetime | YES |  | NULL |  |  |
| oper_qty | int(11) | YES |  | NULL |  |  |
| oper_price | double(15,3) | YES |  | NULL |  |  |
| ref_date | date | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |
| charge_opitemrece | char(1) | YES |  | NULL |  |  |
| entry_datetime | datetime | YES |  | NULL |  |  |
| modify_datetime | datetime | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| ref_date_int | int(11) | YES |  | NULL |  |  |
| total_price | double(15,3) | YES |  | NULL |  |  |
| oper_note | text | YES |  | NULL |  |  |
| doctor_investigation_report_id | int(11) | YES |  | NULL |  |  |
| icd9_priority | int(11) | YES |  | NULL |  |  |
| ipd_nurse_shift_id | int(11) | YES |  | NULL |  |  |
| oper_date | date | YES |  | NULL |  |  |
| ipd_nurse_note_time_id | int(11) | YES |  | NULL |  |  |
| oper_date_unix | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| hos_guid | hos_guid | no | 1 |
| ix_an_oper_code | an | no | 1 |
| ix_an_oper_code | ipt_oper_code | no | 2 |
| ix_an_oper_code_date | an | no | 1 |
| ix_an_oper_code_date | ipt_oper_code | no | 2 |
| ix_an_oper_code_date | oper_date | no | 3 |
| PRIMARY | nurse_oper_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "nurse_oper_id": 4,
    "an": "540000786",
    "ipt_oper_code": 40,
    "doctor": "095",
    "begin_date_time": "2011-10-10 13:00:00",
    "end_date_time": "2011-10-10 14:00:00",
    "oper_qty": 1,
    "oper_price": 150.0,
    "ref_date": "2011-10-10",
    "hos_guid": "{E3385B89-6A81-464F-8FF5-FFFBB06E21F0}",
    "opi_guid": null,
    "charge_opitemrece": null,
    "entry_datetime": null,
    "modify_datetime": null,
    "staff": null,
    "ref_date_int": null,
    "total_price": null,
    "oper_note": null,
    "doctor_investigation_report_id": null,
    "icd9_priority": null,
    "ipd_nurse_shift_id": null,
    "oper_date": null,
    "ipd_nurse_note_time_id": null,
    "oper_date_unix": null
  },
  {
    "nurse_oper_id": 6,
    "an": "540000787",
    "ipt_oper_code": 18,
    "doctor": "093",
    "begin_date_time": "2011-10-10 13:00:00",
    "end_date_time": "2011-10-10 13:30:00",
    "oper_qty": 1,
    "oper_price": 150.0,
    "ref_date": "2011-10-10",
    "hos_guid": "{083F37F9-0177-4D7F-B600-B8C79C42D38D}",
    "opi_guid": null,
    "charge_opitemrece": null,
    "entry_datetime": null,
    "modify_datetime": null,
    "staff": null,
    "ref_date_int": null,
    "total_price": null,
    "oper_note": null,
    "doctor_investigation_report_id": null,
    "icd9_priority": null,
    "ipd_nurse_shift_id": null,
    "oper_date": null,
    "ipd_nurse_note_time_id": null,
    "oper_date_unix": null
  },
  {
    "nurse_oper_id": 9,
    "an": "540000788",
    "ipt_oper_code": 40,
    "doctor": "094",
    "begin_date_time": "2011-10-11 13:00:00",
    "end_date_time": "2011-10-11 14:00:00",
    "oper_qty": 1,
    "oper_price": 150.0,
    "ref_date": "2011-10-11",
    "hos_guid": "{0BFFA349-54E5-43B8-9BF9-1A24595A3E0E}",
    "opi_guid": null,
    "charge_opitemrece": null,
    "entry_datetime": null,
    "modify_datetime": null,
    "staff": null,
    "ref_date_int": null,
    "total_price": null,
    "oper_note": null,
    "doctor_investigation_report_id": null,
    "icd9_priority": null,
    "ipd_nurse_shift_id": null,
    "oper_date": null,
    "ipd_nurse_note_time_id": null,
    "oper_date_unix": null
  },
  {
    "nurse_oper_id": 11,
    "an": "540000786",
    "ipt_oper_code": 18,
    "doctor": "093",
    "begin_date_time": "2011-10-12 10:30:00",
    "end_date_time": "2011-10-01 11:00:00",
    "oper_qty": 1,
    "oper_price": 150.0,
    "ref_date": "2011-10-12",
    "hos_guid": "{78CE3112-1F9D-45DC-BAD8-45D3DEF36855}",
    "opi_guid": null,
    "charge_opitemrece": null,
    "entry_datetime": null,
    "modify_datetime": null,
    "staff": null,
    "ref_date_int": null,
    "total_price": null,
    "oper_note": null,
    "doctor_investigation_report_id": null,
    "icd9_priority": null,
    "ipd_nurse_shift_id": null,
    "oper_date": null,
    "ipd_nurse_note_time_id": null,
    "oper_date_unix": null
  },
  {
    "nurse_oper_id": 17,
    "an": "540000791",
    "ipt_oper_code": 25,
    "doctor": "097",
    "begin_date_time": "2011-10-14 09:30:00",
    "end_date_time": "2011-10-14 10:30:00",
    "oper_qty": 1,
    "oper_price": 150.0,
    "ref_date": "2011-10-14",
    "hos_guid": "{633BCF98-9706-40A4-B843-DBDE697A2E90}",
    "opi_guid": null,
    "charge_opitemrece": null,
    "entry_datetime": null,
    "modify_datetime": null,
    "staff": null,
    "ref_date_int": null,
    "total_price": null,
    "oper_note": null,
    "doctor_investigation_report_id": null,
    "icd9_priority": null,
    "ipd_nurse_shift_id": null,
    "oper_date": null,
    "ipd_nurse_note_time_id": null,
    "oper_date_unix": null
  },
  {
    "nurse_oper_id": 22,
    "an": "540000788",
    "ipt_oper_code": 25,
    "doctor": "097",
    "begin_date_time": "2011-10-18 09:00:00",
    "end_date_time": "2011-10-18 10:30:00",
    "oper_qty": 1,
    "oper_price": 150.0,
    "ref_date": "2011-10-18",
    "hos_guid": "{22D393DE-141E-4D09-9F41-F0F8A4244396}",
    "opi_guid": null,
    "charge_opitemrece": null,
    "entry_datetime": null,
    "modify_datetime": null,
    "staff": null,
    "ref_date_int": null,
    "total_price": null,
    "oper_note": null,
    "doctor_investigation_report_id": null,
    "icd9_priority": null,
    "ipd_nurse_shift_id": null,
    "oper_date": null,
    "ipd_nurse_note_time_id": null,
    "oper_date_unix": null
  },
  {
    "nurse_oper_id": 23,
    "an": "540000788",
    "ipt_oper_code": 24,
    "doctor": "094",
    "begin_date_time": "2011-10-25 13:00:00",
    "end_date_time": "2011-10-25 14:00:00",
    "oper_qty": 1,
    "oper_price": 150.0,
    "ref_date": "2011-10-25",
    "hos_guid": "{EAD588E2-AF11-4C6B-BF5D-C815586A8F87}",
    "opi_guid": null,
    "charge_opitemrece": null,
    "entry_datetime": null,
    "modify_datetime": null,
    "staff": null,
    "ref_date_int": null,
    "total_price": null,
    "oper_note": null,
    "doctor_investigation_report_id": null,
    "icd9_priority": null,
    "ipd_nurse_shift_id": null,
    "oper_date": null,
    "ipd_nurse_note_time_id": null,
    "oper_date_unix": null
  },
  {
    "nurse_oper_id": 28,
    "an": "540000786",
    "ipt_oper_code": 24,
    "doctor": "095",
    "begin_date_time": "2011-10-11 13:00:00",
    "end_date_time": "2011-10-11 14:00:00",
    "oper_qty": 1,
    "oper_price": 150.0,
    "ref_date": "2011-10-11",
    "hos_guid": "{1608BA61-5EFE-4EE0-8A45-E6082AE8B461}",
    "opi_guid": null,
    "charge_opitemrece": null,
    "entry_datetime": null,
    "modify_datetime": null,
    "staff": null,
    "ref_date_int": null,
    "total_price": null,
    "oper_note": null,
    "doctor_investigation_report_id": null,
    "icd9_priority": null,
    "ipd_nurse_shift_id": null,
    "oper_date": null,
    "ipd_nurse_note_time_id": null,
    "oper_date_unix": null
  }
]
```
