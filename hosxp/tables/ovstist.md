# `ovstist`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| name | varchar(50) | NO | PRI |  |  |  |
| ovstist | char(2) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| export_code | varchar(5) | YES |  | NULL |  |  |
| opbkk_code | char(1) | YES |  | NULL |  |  |
| csmbs_code | varchar(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ovstist_unique | ovstist | yes | 1 |
| PRIMARY | name | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "name": "Telehealth/Telemedicine",
    "ovstist": "03",
    "hos_guid": null,
    "export_code": "5",
    "opbkk_code": null,
    "csmbs_code": null
  },
  {
    "name": "จิตเวชฉุกเฉิน",
    "ovstist": "05",
    "hos_guid": null,
    "export_code": "4",
    "opbkk_code": null,
    "csmbs_code": null
  },
  {
    "name": "ได้รับการส่งต่อจากสถานพยาบาลอื่น",
    "ovstist": "04",
    "hos_guid": null,
    "export_code": "3",
    "opbkk_code": null,
    "csmbs_code": null
  },
  {
    "name": "นัดมาทำแผล",
    "ovstist": "07",
    "hos_guid": null,
    "export_code": "2",
    "opbkk_code": null,
    "csmbs_code": null
  },
  {
    "name": "มารับบริการตามนัดหมาย",
    "ovstist": "02",
    "hos_guid": null,
    "export_code": "2",
    "opbkk_code": null,
    "csmbs_code": null
  },
  {
    "name": "มารับบริการเอง",
    "ovstist": "01",
    "hos_guid": null,
    "export_code": "1",
    "opbkk_code": null,
    "csmbs_code": null
  },
  {
    "name": "รับต่อจาก ห้องคลอด",
    "ovstist": "06",
    "hos_guid": null,
    "export_code": "3",
    "opbkk_code": null,
    "csmbs_code": null
  }
]
```
