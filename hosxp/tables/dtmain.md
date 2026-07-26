# `dtmain`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dtmain_id | int(11) | NO | PRI | 0 |  |  |
| dn | varchar(7) | YES | MUL | NULL |  |  |
| doctor | varchar(15) | YES |  | NULL |  |  |
| fee | double(15,3) | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| icd | varchar(250) | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| scount | int(11) | YES |  | NULL |  |  |
| tcount | int(11) | YES |  | NULL |  |  |
| tmcode | varchar(10) | YES | MUL | NULL |  |  |
| ttcode | varchar(250) | YES |  | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| vstage | int(11) | YES |  | NULL |  |  |
| vstdate | date | YES | MUL | NULL |  |  |
| vsttime | time | YES |  | NULL |  |  |
| tm_no | int(11) | YES |  | NULL |  |  |
| doctor_helper | varchar(15) | YES |  | NULL |  |  |
| rcount | int(11) | YES |  | NULL |  |  |
| icd9 | varchar(9) | YES |  | NULL |  |  |
| qty_count | int(11) | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES | MUL | NULL |  |  |
| begin_time | datetime | YES |  | NULL |  |  |
| end_time | datetime | YES |  | NULL |  |  |
| dtmain_guid | varchar(38) | YES | MUL | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| pregnancy | char(1) | YES |  | NULL |  |  |
| post_labour | char(1) | YES |  | NULL |  |  |
| report_update | char(1) | YES |  | NULL |  |  |
| pregnancy_caries_count | int(11) | YES |  | NULL |  |  |
| pregnancy_gingivitis | char(1) | YES |  | NULL |  |  |
| pregnancy_calculus | char(1) | YES |  | NULL |  |  |
| pregnancy_checkup | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| dx_guid | varchar(38) | YES |  | NULL |  |  |
| dental_plan_detail_id | int(11) | YES | MUL | NULL |  |  |
| department | char(3) | YES |  | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| depcode | char(3) | YES |  | NULL |  |  |
| rc_count | int(11) | YES |  | NULL |  |  |
| dt_treatment_type_id | int(11) | YES |  | NULL |  |  |
| dt_problem_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_dental_plan_detail_id | dental_plan_detail_id | no | 1 |
| ix_dn | dn | no | 1 |
| ix_dtmain_guid | dtmain_guid | no | 1 |
| ix_hn | hn | no | 1 |
| ix_opi_guid | opi_guid | no | 1 |
| ix_tmcode | tmcode | no | 1 |
| ix_vn | vn | no | 1 |
| ix_vstdate | vstdate | no | 1 |
| PRIMARY | dtmain_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "dtmain_id": 2,
    "dn": "5400001",
    "doctor": "082",
    "fee": 350.0,
    "hn": "530175548",
    "icd": "",
    "note": null,
    "scount": 0,
    "tcount": 0,
    "tmcode": "036",
    "ttcode": "#55",
    "vn": "541010115330",
    "vstage": 49,
    "vstdate": "2011-10-10",
    "vsttime": "11:53:30",
    "tm_no": 1,
    "doctor_helper": "193",
    "rcount": 0,
    "icd9": "2311",
    "qty_count": 0,
    "opi_guid": "{E69543AA-DA83-4536-8DFE-3E99E30AA3AA}",
    "begin_time": "1899-12-30 00:00:00",
    "end_time": "1899-12-30 00:00:00",
    "dtmain_guid": null,
    "staff": "[MASKED_FULLNAME]",
    "pregnancy": null,
    "post_labour": null,
    "report_update": null,
    "pregnancy_caries_count": null,
    "pregnancy_gingivitis": null,
    "pregnancy_calculus": null,
    "pregnancy_checkup": null,
    "hos_guid": null,
    "update_datetime": null,
    "dx_guid": null,
    "dental_plan_detail_id": null,
    "department": null,
    "an": null,
    "depcode": null,
    "rc_count": null,
    "dt_treatment_type_id": null,
    "dt_problem_type_id": null
  },
  {
    "dtmain_id": 3,
    "dn": "5400001",
    "doctor": "082",
    "fee": 100.0,
    "hn": "530175548",
    "icd": "",
    "note": null,
    "scount": 0,
    "tcount": 0,
    "tmcode": "001",
    "ttcode": "",
    "vn": "541010115330",
    "vstage": 49,
    "vstdate": "2011-10-10",
    "vsttime": "11:53:30",
    "tm_no": 2,
    "doctor_helper": "193",
    "rcount": 0,
    "icd9": "8712",
    "qty_count": 0,
    "opi_guid": "{B5E29553-DB9F-4027-875A-1F6613204E44}",
    "begin_time": "1899-12-30 00:00:00",
    "end_time": "1899-12-30 00:00:00",
    "dtmain_guid": null,
    "staff": "[MASKED_FULLNAME]",
    "pregnancy": null,
    "post_labour": null,
    "report_update": null,
    "pregnancy_caries_count": null,
    "pregnancy_gingivitis": null,
    "pregnancy_calculus": null,
    "pregnancy_checkup": null,
    "hos_guid": null,
    "update_datetime": null,
    "dx_guid": null,
    "dental_plan_detail_id": null,
    "department": null,
    "an": null,
    "depcode": null,
    "rc_count": null,
    "dt_treatment_type_id": null,
    "dt_problem_type_id": null
  },
  {
    "dtmain_id": 5,
    "dn": "5400002",
    "doctor": "082",
    "fee": 100.0,
    "hn": "530085351",
    "icd": "",
    "note": null,
    "scount": 0,
    "tcount": 0,
    "tmcode": "001",
    "ttcode": "",
    "vn": "541010153958",
    "vstage": 7,
    "vstdate": "2011-10-10",
    "vsttime": "15:39:58",
    "tm_no": 1,
    "doctor_helper": "083",
    "rcount": 0,
    "icd9": "8712",
    "qty_count": 0,
    "opi_guid": "{F8C3FEB0-F563-4C71-95F2-6FDD125BBC43}",
    "begin_time": "1899-12-30 15:59:00",
    "end_time": "1899-12-30 16:00:00",
    "dtmain_guid": null,
    "staff": "[MASKED_FULLNAME]",
    "pregnancy": null,
    "post_labour": null,
    "report_update": null,
    "pregnancy_caries_count": null,
    "pregnancy_gingivitis": null,
    "pregnancy_calculus": null,
    "pregnancy_checkup": null,
    "hos_guid": null,
    "update_datetime": null,
    "dx_guid": null,
    "dental_plan_detail_id": null,
    "department": null,
    "an": null,
    "depcode": null,
    "rc_count": null,
    "dt_treatment_type_id": null,
    "dt_problem_type_id": null
  },
  {
    "dtmain_id": 6,
    "dn": "5400002",
    "doctor": "082",
    "fee": 100.0,
    "hn": "530085351",
    "icd": "",
    "note": null,
    "scount": 0,
    "tcount": 0,
    "tmcode": "001",
    "ttcode": "#46",
    "vn": "541010153958",
    "vstage": 7,
    "vstdate": "2011-10-10",
    "vsttime": "15:39:58",
    "tm_no": 2,
    "doctor_helper": "083",
    "rcount": 0,
    "icd9": "8712",
    "qty_count": 0,
    "opi_guid": "{ACCB9156-A73D-496F-B373-4A9400163B06}",
    "begin_time": "1899-12-30 15:59:00",
    "end_time": "1899-12-30 16:30:00",
    "dtmain_guid": null,
    "staff": "[MASKED_FULLNAME]",
    "pregnancy": null,
    "post_labour": null,
    "report_update": null,
    "pregnancy_caries_count": null,
    "pregnancy_gingivitis": null,
    "pregnancy_calculus": null,
    "pregnancy_checkup": null,
    "hos_guid": null,
    "update_datetime": null,
    "dx_guid": null,
    "dental_plan_detail_id": null,
    "department": null,
    "an": null,
    "depcode": null,
    "rc_count": null,
    "dt_treatment_type_id": null,
    "dt_problem_type_id": null
  },
  {
    "dtmain_id": 7,
    "dn": "5400002",
    "doctor": "082",
    "fee": 100.0,
    "hn": "530085351",
    "icd": "",
    "note": null,
    "scount": 0,
    "tcount": 0,
    "tmcode": "001",
    "ttcode": "#17",
    "vn": "541010153958",
    "vstage": 7,
    "vstdate": "2011-10-10",
    "vsttime": "15:39:58",
    "tm_no": 3,
    "doctor_helper": "083",
    "rcount": 0,
    "icd9": "8712",
    "qty_count": 0,
    "opi_guid": "{C5CF2A54-2E5D-4DA8-8828-1CC462EDC5C1}",
    "begin_time": "1899-12-30 15:59:00",
    "end_time": "1899-12-30 16:30:00",
    "dtmain_guid": null,
    "staff": "[MASKED_FULLNAME]",
    "pregnancy": null,
    "post_labour": null,
    "report_update": null,
    "pregnancy_caries_count": null,
    "pregnancy_gingivitis": null,
    "pregnancy_calculus": null,
    "pregnancy_checkup": null,
    "hos_guid": null,
    "update_datetime": null,
    "dx_guid": null,
    "dental_plan_detail_id": null,
    "department": null,
    "an": null,
    "depcode": null,
    "rc_count": null,
    "dt_treatment_type_id": null,
    "dt_problem_type_id": null
  },
  {
    "dtmain_id": 8,
    "dn": "5400002",
    "doctor": "082",
    "fee": 100.0,
    "hn": "530085351",
    "icd": "",
    "note": null,
    "scount": 0,
    "tcount": 0,
    "tmcode": "001",
    "ttcode": "#11",
    "vn": "541010153958",
    "vstage": 7,
    "vstdate": "2011-10-10",
    "vsttime": "15:39:58",
    "tm_no": 4,
    "doctor_helper": "083",
    "rcount": 0,
    "icd9": "8712",
    "qty_count": 0,
    "opi_guid": "{30778D33-CE1D-4995-99E8-17B1C75B85B6}",
    "begin_time": "1899-12-30 15:59:00",
    "end_time": "1899-12-30 16:30:00",
    "dtmain_guid": null,
    "staff": "[MASKED_FULLNAME]",
    "pregnancy": null,
    "post_labour": null,
    "report_update": null,
    "pregnancy_caries_count": null,
    "pregnancy_gingivitis": null,
    "pregnancy_calculus": null,
    "pregnancy_checkup": null,
    "hos_guid": null,
    "update_datetime": null,
    "dx_guid": null,
    "dental_plan_detail_id": null,
    "department": null,
    "an": null,
    "depcode": null,
    "rc_count": null,
    "dt_treatment_type_id": null,
    "dt_problem_type_id": null
  },
  {
    "dtmain_id": 9,
    "dn": "5400002",
    "doctor": "082",
    "fee": 100.0,
    "hn": "530085351",
    "icd": "",
    "note": null,
    "scount": 0,
    "tcount": 0,
    "tmcode": "001",
    "ttcode": "#26",
    "vn": "541010153958",
    "vstage": 7,
    "vstdate": "2011-10-10",
    "vsttime": "15:39:58",
    "tm_no": 5,
    "doctor_helper": "083",
    "rcount": 0,
    "icd9": "8712",
    "qty_count": 0,
    "opi_guid": "{2B241A88-8F0D-4009-BACA-84430E52EADA}",
    "begin_time": "1899-12-30 15:59:00",
    "end_time": "1899-12-30 16:30:00",
    "dtmain_guid": null,
    "staff": "[MASKED_FULLNAME]",
    "pregnancy": null,
    "post_labour": null,
    "report_update": null,
    "pregnancy_caries_count": null,
    "pregnancy_gingivitis": null,
    "pregnancy_calculus": null,
    "pregnancy_checkup": null,
    "hos_guid": null,
    "update_datetime": null,
    "dx_guid": null,
    "dental_plan_detail_id": null,
    "department": null,
    "an": null,
    "depcode": null,
    "rc_count": null,
    "dt_treatment_type_id": null,
    "dt_problem_type_id": null
  },
  {
    "dtmain_id": 10,
    "dn": "5400002",
    "doctor": "082",
    "fee": 270.0,
    "hn": "530085351",
    "icd": "K021",
    "note": null,
    "scount": 0,
    "tcount": 0,
    "tmcode": "003",
    "ttcode": "#34",
    "vn": "541010153958",
    "vstage": 7,
    "vstdate": "2011-10-10",
    "vsttime": "15:39:58",
    "tm_no": 6,
    "doctor_helper": "083",
    "rcount": 0,
    "icd9": "232",
    "qty_count": 0,
    "opi_guid": "{74231D78-A9CB-4DBF-A930-DBED1BA9F7F2}",
    "begin_time": "1899-12-30 15:59:00",
    "end_time": "1899-12-30 16:30:00",
    "dtmain_guid": null,
    "staff": "[MASKED_FULLNAME]",
    "pregnancy": null,
    "post_labour": null,
    "report_update": null,
    "pregnancy_caries_count": null,
    "pregnancy_gingivitis": null,
    "pregnancy_calculus": null,
    "pregnancy_checkup": null,
    "hos_guid": null,
    "update_datetime": null,
    "dx_guid": null,
    "dental_plan_detail_id": null,
    "department": null,
    "an": null,
    "depcode": null,
    "rc_count": null,
    "dt_treatment_type_id": null,
    "dt_problem_type_id": null
  }
]
```
