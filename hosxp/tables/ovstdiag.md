# `ovstdiag`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_diag_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| icd10 | varchar(9) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| vstdate | date | YES | MUL | NULL |  |  |
| vsttime | time | YES |  | NULL |  |  |
| diagtype | char(2) | YES |  | NULL |  |  |
| icd103 | char(3) | YES |  | NULL |  |  |
| hcode | varchar(5) | YES |  | NULL |  |  |
| doctor | varchar(6) | YES | MUL | NULL |  |  |
| episode | tinyint(4) | YES |  | NULL |  |  |
| ext_code | char(2) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| dep_flag | char(2) | YES |  | NULL |  |  |
| ovst_oper_type | int(11) | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| dx_guid | varchar(38) | YES |  | NULL |  |  |
| lock_dx | char(1) | YES |  | NULL |  |  |
| dx_code_note | varchar(100) | YES |  | NULL |  |  |
| ovstdiag_severe_type_id | int(11) | YES | MUL | NULL |  |  |
| diag_no | int(11) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| confirm | char(1) | YES |  | NULL |  |  |
| confirm_staff | varchar(25) | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |
| sct_id | varchar(18) | YES |  | NULL |  |  |
| icd11 | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| doctor | doctor | no | 1 |
| hn | hn | no | 1 |
| icd10 | icd10 | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_sti | ovstdiag_severe_type_id | no | 1 |
| ix_vn_icd_unique | vn | yes | 1 |
| ix_vn_icd_unique | icd10 | yes | 2 |
| ix_vn_icd_unique_index | icd10 | yes | 1 |
| ix_vn_icd_unique_index | vn | yes | 2 |
| PRIMARY | ovst_diag_id | yes | 1 |
| vn | vn | no | 1 |
| vstdate | vstdate | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ovst_diag_id": 1,
    "vn": "1xxxxxxxxxxxx",
    "icd10": "G40",
    "hn": "530031742",
    "vstdate": "2000-01-25",
    "vsttime": "7:00:00",
    "diagtype": "1",
    "icd103": null,
    "hcode": null,
    "doctor": "001",
    "episode": null,
    "ext_code": null,
    "hos_guid": null,
    "dep_flag": null,
    "ovst_oper_type": null,
    "staff": null,
    "dx_guid": null,
    "lock_dx": null,
    "dx_code_note": null,
    "ovstdiag_severe_type_id": null,
    "diag_no": null,
    "update_datetime": null,
    "confirm": null,
    "confirm_staff": null,
    "opi_guid": null,
    "sct_id": null,
    "icd11": null
  },
  {
    "ovst_diag_id": 3,
    "vn": "1xxxxxxxxxxxx",
    "icd10": "F840",
    "hn": "530092642",
    "vstdate": "2000-08-07",
    "vsttime": "7:00:00",
    "diagtype": "1",
    "icd103": "",
    "hcode": "",
    "doctor": "006",
    "episode": null,
    "ext_code": null,
    "hos_guid": null,
    "dep_flag": null,
    "ovst_oper_type": null,
    "staff": null,
    "dx_guid": null,
    "lock_dx": null,
    "dx_code_note": null,
    "ovstdiag_severe_type_id": null,
    "diag_no": null,
    "update_datetime": null,
    "confirm": null,
    "confirm_staff": null,
    "opi_guid": null,
    "sct_id": null,
    "icd11": null
  },
  {
    "ovst_diag_id": 4,
    "vn": "1xxxxxxxxxxxx",
    "icd10": "F840",
    "hn": "570001203",
    "vstdate": "2000-08-07",
    "vsttime": "7:00:00",
    "diagtype": "1",
    "icd103": "",
    "hcode": "",
    "doctor": "006",
    "episode": null,
    "ext_code": null,
    "hos_guid": null,
    "dep_flag": null,
    "ovst_oper_type": null,
    "staff": null,
    "dx_guid": null,
    "lock_dx": null,
    "dx_code_note": null,
    "ovstdiag_severe_type_id": null,
    "diag_no": null,
    "update_datetime": null,
    "confirm": null,
    "confirm_staff": null,
    "opi_guid": null,
    "sct_id": null,
    "icd11": null
  },
  {
    "ovst_diag_id": 5,
    "vn": "1xxxxxxxxxxxx",
    "icd10": "F909",
    "hn": "530025342",
    "vstdate": "2000-08-07",
    "vsttime": "7:00:00",
    "diagtype": "1",
    "icd103": "",
    "hcode": "",
    "doctor": "006",
    "episode": null,
    "ext_code": null,
    "hos_guid": null,
    "dep_flag": null,
    "ovst_oper_type": null,
    "staff": null,
    "dx_guid": null,
    "lock_dx": null,
    "dx_code_note": null,
    "ovstdiag_severe_type_id": null,
    "diag_no": null,
    "update_datetime": null,
    "confirm": null,
    "confirm_staff": null,
    "opi_guid": null,
    "sct_id": null,
    "icd11": null
  },
  {
    "ovst_diag_id": 6,
    "vn": "1xxxxxxxxxxxx",
    "icd10": "G40",
    "hn": "530021742",
    "vstdate": "2000-08-07",
    "vsttime": "7:00:00",
    "diagtype": "1",
    "icd103": "",
    "hcode": "",
    "doctor": "006",
    "episode": null,
    "ext_code": null,
    "hos_guid": null,
    "dep_flag": null,
    "ovst_oper_type": null,
    "staff": null,
    "dx_guid": null,
    "lock_dx": null,
    "dx_code_note": null,
    "ovstdiag_severe_type_id": null,
    "diag_no": null,
    "update_datetime": null,
    "confirm": null,
    "confirm_staff": null,
    "opi_guid": null,
    "sct_id": null,
    "icd11": null
  },
  {
    "ovst_diag_id": 7,
    "vn": "1xxxxxxxxxxxx",
    "icd10": "F840",
    "hn": "530021642",
    "vstdate": "2000-08-07",
    "vsttime": "7:00:00",
    "diagtype": "1",
    "icd103": "",
    "hcode": "",
    "doctor": "006",
    "episode": null,
    "ext_code": null,
    "hos_guid": null,
    "dep_flag": null,
    "ovst_oper_type": null,
    "staff": null,
    "dx_guid": null,
    "lock_dx": null,
    "dx_code_note": null,
    "ovstdiag_severe_type_id": null,
    "diag_no": null,
    "update_datetime": null,
    "confirm": null,
    "confirm_staff": null,
    "opi_guid": null,
    "sct_id": null,
    "icd11": null
  },
  {
    "ovst_diag_id": 8,
    "vn": "1xxxxxxxxxxxx",
    "icd10": "F318",
    "hn": "530285842",
    "vstdate": "2000-08-07",
    "vsttime": "7:00:00",
    "diagtype": "1",
    "icd103": "",
    "hcode": "",
    "doctor": "006",
    "episode": null,
    "ext_code": null,
    "hos_guid": null,
    "dep_flag": null,
    "ovst_oper_type": null,
    "staff": null,
    "dx_guid": null,
    "lock_dx": null,
    "dx_code_note": null,
    "ovstdiag_severe_type_id": null,
    "diag_no": null,
    "update_datetime": null,
    "confirm": null,
    "confirm_staff": null,
    "opi_guid": null,
    "sct_id": null,
    "icd11": null
  },
  {
    "ovst_diag_id": 9,
    "vn": "1xxxxxxxxxxxx",
    "icd10": "G40",
    "hn": "530084442",
    "vstdate": "2000-08-07",
    "vsttime": "7:00:00",
    "diagtype": "1",
    "icd103": "",
    "hcode": "",
    "doctor": "006",
    "episode": null,
    "ext_code": null,
    "hos_guid": null,
    "dep_flag": null,
    "ovst_oper_type": null,
    "staff": null,
    "dx_guid": null,
    "lock_dx": null,
    "dx_code_note": null,
    "ovstdiag_severe_type_id": null,
    "diag_no": null,
    "update_datetime": null,
    "confirm": null,
    "confirm_staff": null,
    "opi_guid": null,
    "sct_id": null,
    "icd11": null
  }
]
```
