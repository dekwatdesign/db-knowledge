# `iptdiag`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_diag_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| diagtype | char(2) | YES |  | NULL |  |  |
| doctor | varchar(7) | YES | MUL | NULL |  |  |
| icd10 | varchar(9) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| entry_datetime | datetime | YES |  | NULL |  |  |
| modify_datetime | datetime | YES |  | NULL |  |  |
| diagnosis_note | varchar(250) | YES |  | NULL |  |  |
| dx_guid | varchar(38) | YES | MUL | NULL |  |  |
| diag_no | int(11) | YES |  | NULL |  |  |
| icd11 | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_an_dxtype | an | no | 1 |
| ix_an_dxtype | diagtype | no | 2 |
| ix_doctor | doctor | no | 1 |
| ix_dx_guid | dx_guid | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_unique | an | yes | 1 |
| ix_unique | icd10 | yes | 2 |
| PRIMARY | ipt_diag_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ipt_diag_id": 2,
    "an": "540000788",
    "diagtype": "1",
    "doctor": "064",
    "icd10": "F840",
    "hos_guid": null,
    "staff": "[MASKED_FULLNAME]",
    "hn": null,
    "entry_datetime": "2011-10-13 11:02:48",
    "modify_datetime": "2011-10-13 11:02:48",
    "diagnosis_note": null,
    "dx_guid": null,
    "diag_no": null,
    "icd11": null
  },
  {
    "ipt_diag_id": 3,
    "an": "540000788",
    "diagtype": "2",
    "doctor": "064",
    "icd10": "G403",
    "hos_guid": null,
    "staff": "[MASKED_FULLNAME]",
    "hn": null,
    "entry_datetime": "2011-10-13 11:03:14",
    "modify_datetime": "2011-10-13 11:03:14",
    "diagnosis_note": null,
    "dx_guid": null,
    "diag_no": null,
    "icd11": null
  },
  {
    "ipt_diag_id": 4,
    "an": "540000794",
    "diagtype": "1",
    "doctor": "065",
    "icd10": "F840",
    "hos_guid": null,
    "staff": "[MASKED_FULLNAME]",
    "hn": null,
    "entry_datetime": "2011-10-13 11:34:19",
    "modify_datetime": "2011-10-13 11:34:19",
    "diagnosis_note": null,
    "dx_guid": null,
    "diag_no": null,
    "icd11": null
  },
  {
    "ipt_diag_id": 5,
    "an": "540000786",
    "diagtype": "1",
    "doctor": "066",
    "icd10": "F840",
    "hos_guid": null,
    "staff": "[MASKED_FULLNAME]",
    "hn": null,
    "entry_datetime": "2011-10-13 12:59:24",
    "modify_datetime": "2011-10-13 12:59:24",
    "diagnosis_note": null,
    "dx_guid": null,
    "diag_no": null,
    "icd11": null
  },
  {
    "ipt_diag_id": 6,
    "an": "540000787",
    "diagtype": "1",
    "doctor": "063",
    "icd10": "F840",
    "hos_guid": null,
    "staff": "[MASKED_FULLNAME]",
    "hn": null,
    "entry_datetime": "2011-10-13 13:01:57",
    "modify_datetime": "2011-10-13 13:01:57",
    "diagnosis_note": null,
    "dx_guid": null,
    "diag_no": null,
    "icd11": null
  },
  {
    "ipt_diag_id": 7,
    "an": "540000789",
    "diagtype": "1",
    "doctor": "065",
    "icd10": "F840",
    "hos_guid": null,
    "staff": "[MASKED_FULLNAME]",
    "hn": null,
    "entry_datetime": "2011-10-13 13:03:42",
    "modify_datetime": "2011-10-13 13:03:42",
    "diagnosis_note": null,
    "dx_guid": null,
    "diag_no": null,
    "icd11": null
  },
  {
    "ipt_diag_id": 8,
    "an": "540000791",
    "diagtype": "1",
    "doctor": "064",
    "icd10": "F840",
    "hos_guid": null,
    "staff": "[MASKED_FULLNAME]",
    "hn": null,
    "entry_datetime": "2011-10-13 13:05:07",
    "modify_datetime": "2011-10-13 13:05:07",
    "diagnosis_note": null,
    "dx_guid": null,
    "diag_no": null,
    "icd11": null
  },
  {
    "ipt_diag_id": 9,
    "an": "540000792",
    "diagtype": "1",
    "doctor": "063",
    "icd10": "F840",
    "hos_guid": null,
    "staff": "[MASKED_FULLNAME]",
    "hn": null,
    "entry_datetime": "2011-10-13 13:06:01",
    "modify_datetime": "2011-10-13 13:06:01",
    "diagnosis_note": null,
    "dx_guid": null,
    "diag_no": null,
    "icd11": null
  }
]
```
