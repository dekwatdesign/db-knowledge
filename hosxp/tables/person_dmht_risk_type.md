# `person_dmht_risk_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_dmht_risk_type_id | int(11) | NO | PRI | 0 |  |  |
| person_dmht_risk_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_dmht_risk_type_name | person_dmht_risk_type_name | yes | 1 |
| PRIMARY | person_dmht_risk_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "person_dmht_risk_type_id": 1,
    "person_dmht_risk_type_name": "อาหาร",
    "hos_guid": null
  },
  {
    "person_dmht_risk_type_id": 2,
    "person_dmht_risk_type_name": "ออกกำลังกาย",
    "hos_guid": null
  },
  {
    "person_dmht_risk_type_id": 3,
    "person_dmht_risk_type_name": "อารมณ์",
    "hos_guid": null
  },
  {
    "person_dmht_risk_type_id": 4,
    "person_dmht_risk_type_name": "สิ่งแวดล้อม",
    "hos_guid": null
  },
  {
    "person_dmht_risk_type_id": 5,
    "person_dmht_risk_type_name": "บุหรี่",
    "hos_guid": null
  },
  {
    "person_dmht_risk_type_id": 6,
    "person_dmht_risk_type_name": "สุรา",
    "hos_guid": null
  },
  {
    "person_dmht_risk_type_id": 7,
    "person_dmht_risk_type_name": "อื่นๆ",
    "hos_guid": null
  }
]
```
