# `doctor_position`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(100) | YES | MUL | NULL |  |  |
| er_doctor | char(1) | YES |  | NULL |  |  |
| common_doctor | char(1) | YES |  | NULL |  |  |
| anes_doctor | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| require_ipd_doctor_approve | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_name | name | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "id": 1,
    "name": "แพทย์",
    "er_doctor": null,
    "common_doctor": null,
    "anes_doctor": null,
    "hos_guid": null,
    "require_ipd_doctor_approve": null
  },
  {
    "id": 2,
    "name": "ทันตแพทย์",
    "er_doctor": null,
    "common_doctor": null,
    "anes_doctor": null,
    "hos_guid": null,
    "require_ipd_doctor_approve": null
  },
  {
    "id": 3,
    "name": "เภสัชกร",
    "er_doctor": null,
    "common_doctor": null,
    "anes_doctor": null,
    "hos_guid": null,
    "require_ipd_doctor_approve": null
  },
  {
    "id": 4,
    "name": "พยาบาลเทคนิค",
    "er_doctor": null,
    "common_doctor": null,
    "anes_doctor": null,
    "hos_guid": null,
    "require_ipd_doctor_approve": null
  },
  {
    "id": 5,
    "name": "พยาบาลวิชาชีพ",
    "er_doctor": null,
    "common_doctor": null,
    "anes_doctor": null,
    "hos_guid": null,
    "require_ipd_doctor_approve": null
  },
  {
    "id": 6,
    "name": "ผู้ช่วยทันตแพทย์",
    "er_doctor": null,
    "common_doctor": null,
    "anes_doctor": null,
    "hos_guid": null,
    "require_ipd_doctor_approve": null
  },
  {
    "id": 7,
    "name": "ผู้ช่วยเภสัชกร",
    "er_doctor": null,
    "common_doctor": null,
    "anes_doctor": null,
    "hos_guid": null,
    "require_ipd_doctor_approve": null
  },
  {
    "id": 8,
    "name": "เทคนิคการแพทย์",
    "er_doctor": null,
    "common_doctor": null,
    "anes_doctor": null,
    "hos_guid": null,
    "require_ipd_doctor_approve": null
  }
]
```
