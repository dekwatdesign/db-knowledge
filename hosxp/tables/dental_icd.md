# `dental_icd`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| tmcode | varchar(7) | NO | PRI |  |  |  |
| icd | varchar(9) | NO | PRI |  |  |  |
| dxtype | char(1) | YES |  | NULL |  |  |
| doctor | varchar(10) | YES |  | NULL |  |  |
| ovst_diag_id | int(11) | YES |  | NULL |  |  |
| dtmain_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | vn | yes | 1 |
| PRIMARY | tmcode | yes | 2 |
| PRIMARY | icd | yes | 3 |
| vn | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vn": "541010115330",
    "tmcode": "001",
    "icd": "8712",
    "dxtype": "2",
    "doctor": "082",
    "ovst_diag_id": 264446,
    "dtmain_id": 0,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "vn": "541010115330",
    "tmcode": "036",
    "icd": "2311",
    "dxtype": "2",
    "doctor": "082",
    "ovst_diag_id": 264447,
    "dtmain_id": 0,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "vn": "541010152847",
    "tmcode": "019",
    "icd": "9654",
    "dxtype": "2",
    "doctor": "082",
    "ovst_diag_id": 264451,
    "dtmain_id": 13,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "vn": "541010152847",
    "tmcode": "019",
    "icd": "K051",
    "dxtype": "2",
    "doctor": "082",
    "ovst_diag_id": 264452,
    "dtmain_id": 13,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "vn": "541010153958",
    "tmcode": "001",
    "icd": "8712",
    "dxtype": "2",
    "doctor": "082",
    "ovst_diag_id": 264448,
    "dtmain_id": 0,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "vn": "541010153958",
    "tmcode": "003",
    "icd": "232",
    "dxtype": "2",
    "doctor": "082",
    "ovst_diag_id": 264449,
    "dtmain_id": 10,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "vn": "541010153958",
    "tmcode": "003",
    "icd": "K021",
    "dxtype": "1",
    "doctor": "082",
    "ovst_diag_id": 264450,
    "dtmain_id": 10,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "vn": "541010182042",
    "tmcode": "019",
    "icd": "9654",
    "dxtype": "2",
    "doctor": "082",
    "ovst_diag_id": 264453,
    "dtmain_id": 0,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
