# `risk_pmh_choice`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| risk_pmh_choice_id | int(11) | NO | PRI | 0 |  |  |
| risk_pmh_id | int(11) | YES |  | NULL |  |  |
| risk_pmh_choice_no | int(11) | YES |  | NULL |  |  |
| risk_pmh_choice_name | varchar(20) | YES |  | NULL |  |  |
| risk_pmh_choice_code | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | risk_pmh_choice_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "risk_pmh_choice_id": 1,
    "risk_pmh_id": 10,
    "risk_pmh_choice_no": 0,
    "risk_pmh_choice_name": "มี",
    "risk_pmh_choice_code": "1",
    "hos_guid": null
  },
  {
    "risk_pmh_choice_id": 2,
    "risk_pmh_id": 10,
    "risk_pmh_choice_no": 10,
    "risk_pmh_choice_name": "ไม่มี",
    "risk_pmh_choice_code": "0",
    "hos_guid": null
  },
  {
    "risk_pmh_choice_id": 3,
    "risk_pmh_id": 10,
    "risk_pmh_choice_no": 20,
    "risk_pmh_choice_name": "ไม่เคยตรวจ",
    "risk_pmh_choice_code": "9",
    "hos_guid": null
  },
  {
    "risk_pmh_choice_id": 4,
    "risk_pmh_id": 20,
    "risk_pmh_choice_no": 0,
    "risk_pmh_choice_name": "ใช่",
    "risk_pmh_choice_code": "1",
    "hos_guid": null
  },
  {
    "risk_pmh_choice_id": 5,
    "risk_pmh_id": 20,
    "risk_pmh_choice_no": 10,
    "risk_pmh_choice_name": "ไม่ใช่",
    "risk_pmh_choice_code": "0",
    "hos_guid": null
  },
  {
    "risk_pmh_choice_id": 6,
    "risk_pmh_id": 20,
    "risk_pmh_choice_no": 20,
    "risk_pmh_choice_name": "จำไม่ได้",
    "risk_pmh_choice_code": "9",
    "hos_guid": null
  },
  {
    "risk_pmh_choice_id": 7,
    "risk_pmh_id": 30,
    "risk_pmh_choice_no": 0,
    "risk_pmh_choice_name": "มี",
    "risk_pmh_choice_code": "1",
    "hos_guid": null
  },
  {
    "risk_pmh_choice_id": 8,
    "risk_pmh_id": 30,
    "risk_pmh_choice_no": 10,
    "risk_pmh_choice_name": "ไม่มี",
    "risk_pmh_choice_code": "0",
    "hos_guid": null
  }
]
```
