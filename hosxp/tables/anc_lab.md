# `anc_lab`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| anc_lab_id | int(11) | NO | PRI | 0 |  |  |
| anc_lab_name | varchar(100) | YES |  | NULL |  |  |
| anc_lab_code | varchar(10) | YES |  | NULL |  |  |
| temp_value | varchar(100) | YES |  | NULL |  |  |
| lab_items_code | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | anc_lab_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "anc_lab_id": 1,
    "anc_lab_name": "ตรวจ VDRL ครั้งที่ 1",
    "anc_lab_code": "VDRL1",
    "temp_value": null,
    "lab_items_code": 178,
    "hos_guid": null
  },
  {
    "anc_lab_id": 2,
    "anc_lab_name": "ตรวจ VDRL ครั้งที่ 2",
    "anc_lab_code": "VDRL2",
    "temp_value": null,
    "lab_items_code": 178,
    "hos_guid": null
  },
  {
    "anc_lab_id": 3,
    "anc_lab_name": "ตรวจ HIV  ครั้งที่ 1",
    "anc_lab_code": "HIV1",
    "temp_value": null,
    "lab_items_code": 142,
    "hos_guid": null
  },
  {
    "anc_lab_id": 4,
    "anc_lab_name": "ตรวจ HIV ครั้งที่ 2",
    "anc_lab_code": "HIV2",
    "temp_value": null,
    "lab_items_code": 142,
    "hos_guid": null
  },
  {
    "anc_lab_id": 5,
    "anc_lab_name": "ตรวจ OF",
    "anc_lab_code": "OF",
    "temp_value": null,
    "lab_items_code": 239,
    "hos_guid": null
  },
  {
    "anc_lab_id": 6,
    "anc_lab_name": "ตรวจ HCT (ผล)",
    "anc_lab_code": "HCT1",
    "temp_value": null,
    "lab_items_code": 61,
    "hos_guid": null
  },
  {
    "anc_lab_id": 7,
    "anc_lab_name": "ตรวจ HCT (grade)",
    "anc_lab_code": "HCT2",
    "temp_value": null,
    "lab_items_code": 61,
    "hos_guid": null
  }
]
```
