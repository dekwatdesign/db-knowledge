# `dt_ipd_list_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_detail_id | int(11) | NO | PRI | 0 |  |  |
| dt_id | int(11) | YES | MUL | NULL |  |  |
| tmcode | varchar(10) | YES | MUL | NULL |  |  |
| icd10 | varchar(7) | YES |  | NULL |  |  |
| scount | int(11) | YES |  | NULL |  |  |
| tcount | int(11) | YES |  | NULL |  |  |
| ttcode | varchar(200) | YES |  | NULL |  |  |
| rcount | int(11) | YES |  | NULL |  |  |
| doctor | varchar(7) | YES |  | NULL |  |  |
| doctor_helper | varchar(7) | YES |  | NULL |  |  |
| fee | double(15,3) | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |
| ocount | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| dt_id | dt_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dt_detail_id | yes | 1 |
| tmcode | tmcode | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "dt_detail_id": 1,
    "dt_id": 3,
    "tmcode": "007",
    "icd10": "k021",
    "scount": 1,
    "tcount": 1,
    "ttcode": null,
    "rcount": 0,
    "doctor": "082",
    "doctor_helper": "083",
    "fee": 300.0,
    "opi_guid": "{66AD1C05-4BC5-4A1A-8D03-AC5E18738EA3}",
    "ocount": 0,
    "hos_guid": null
  },
  {
    "dt_detail_id": 2,
    "dt_id": 3,
    "tmcode": "007",
    "icd10": "k021",
    "scount": 1,
    "tcount": 1,
    "ttcode": null,
    "rcount": 0,
    "doctor": "082",
    "doctor_helper": "083",
    "fee": 300.0,
    "opi_guid": "{2DFF8A23-F749-491F-924A-D88F7A0D5461}",
    "ocount": 0,
    "hos_guid": null
  },
  {
    "dt_detail_id": 3,
    "dt_id": 3,
    "tmcode": "007",
    "icd10": "k021",
    "scount": 1,
    "tcount": 1,
    "ttcode": null,
    "rcount": 0,
    "doctor": "082",
    "doctor_helper": "083",
    "fee": 300.0,
    "opi_guid": "{D87A150B-CBAC-422A-8080-9037CCB9C45D}",
    "ocount": 0,
    "hos_guid": null
  },
  {
    "dt_detail_id": 4,
    "dt_id": 3,
    "tmcode": "007",
    "icd10": "k021",
    "scount": 1,
    "tcount": 1,
    "ttcode": null,
    "rcount": 0,
    "doctor": "082",
    "doctor_helper": "083",
    "fee": 300.0,
    "opi_guid": "{CAFA8E89-27D8-4469-9647-1A3818787CE2}",
    "ocount": 0,
    "hos_guid": null
  },
  {
    "dt_detail_id": 5,
    "dt_id": 3,
    "tmcode": "018",
    "icd10": "",
    "scount": 0,
    "tcount": 0,
    "ttcode": null,
    "rcount": 0,
    "doctor": "082",
    "doctor_helper": "083",
    "fee": 0.0,
    "opi_guid": "{543E4D47-AC7C-400F-8FB9-FA94085A50F4}",
    "ocount": 0,
    "hos_guid": null
  },
  {
    "dt_detail_id": 6,
    "dt_id": 3,
    "tmcode": "008",
    "icd10": "k021",
    "scount": 1,
    "tcount": 1,
    "ttcode": null,
    "rcount": 0,
    "doctor": "082",
    "doctor_helper": "083",
    "fee": 400.0,
    "opi_guid": "{35C7A4F8-6658-45B3-80E0-83F6C825801D}",
    "ocount": 0,
    "hos_guid": null
  },
  {
    "dt_detail_id": 7,
    "dt_id": 9,
    "tmcode": "022",
    "icd10": "k020",
    "scount": 0,
    "tcount": 0,
    "ttcode": null,
    "rcount": 0,
    "doctor": "082",
    "doctor_helper": "193",
    "fee": 150.0,
    "opi_guid": "{C7ED5D60-90D1-4A80-AEF8-60BF944ADE3C}",
    "ocount": 0,
    "hos_guid": null
  },
  {
    "dt_detail_id": 8,
    "dt_id": 9,
    "tmcode": "018",
    "icd10": "",
    "scount": 0,
    "tcount": 0,
    "ttcode": null,
    "rcount": 0,
    "doctor": "082",
    "doctor_helper": "193",
    "fee": 0.0,
    "opi_guid": "{102B2541-EC8C-4B41-BF34-10ACC2C5B115}",
    "ocount": 0,
    "hos_guid": null
  }
]
```
