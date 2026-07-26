# `dbchronic`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| idchronic | int(11) | YES |  | NULL |  |  |
| Dchronic | varchar(10) | YES |  | NULL |  |  |
| Th_chronic | varchar(50) | YES |  | NULL |  |  |
| En_chronic | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "idchronic": 1,
    "Dchronic": "DM",
    "Th_chronic": "โรคเบาหวาน",
    "En_chronic": "Diabetes Mellitus",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idchronic": 2,
    "Dchronic": "HT",
    "Th_chronic": "โรคความดันโลหิตสูง",
    "En_chronic": "Hypertension",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idchronic": 3,
    "Dchronic": "IHD",
    "Th_chronic": "โรคหัวใจขาดเลือด",
    "En_chronic": "Ischaemic Heart Disease",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idchronic": 4,
    "Dchronic": "CVD",
    "Th_chronic": "โรคหลอดเลือดสมอง",
    "En_chronic": "Cerebrovascular Disease",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idchronic": 5,
    "Dchronic": "COPD",
    "Th_chronic": "โรคเรื้อรังระบบทางเดินหายใจ",
    "En_chronic": "Chronic Obstructive Pulmonary Disease",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
